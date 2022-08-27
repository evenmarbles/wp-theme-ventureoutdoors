<?php
  require_once( dirname( __DIR__, 2 ) . '/assets/vendor/autoload.php' );
  require_once( __DIR__ . '/decrypt.php' );

  $errors = array();

  $first_name = $_POST['firstName'];
  $last_name = $_POST['lastName'];
  $visitor_phone = $_POST['phone'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $found_us = $_POST['foundUs'];
  $opt_in = $_POST['optIn'];

  /*
  The following function checks for email injection.
  Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
  */
  function isInjected($str) {
    $injections = array('(\n+)',
    '(\r+)',
    '(\t+)',
    '(%0A+)',
    '(%0D+)',
    '(%08+)',
    '(%09+)'
    );
    $inject = join('|', $injections);
    $inject = "/$inject/i";

    if (preg_match($inject, $str)) {
      return true;
    }
    return false;
  }

  /* Send email notification to admin */
  function sendEmail() {
    global $first_name, $last_name, $visitor_phone, $visitor_email, $message, $found_us, $opt_in, $errors;

    if (isInjected($visitor_email)) {
      array_push($errors, array("status" => "error", "message" => 'Injection check failed: Bad email value'));
      return false;
    }

    $email_subject = "New form submission for Contact Form";
    ob_start();
    include '../template_parts/emails/contact-form.php';
    $content = ob_get_clean();

    $to = "info@ventureoutdoorsllc.com";
    $headers = array(
      "MIME-Version: 1.0",
      "Content-Type: text/html; charset=iso-8859-1",
      "From: Venture Outdoors Webmaster <$to>",
      "Reply-To: $first_name $last_name <$visitor_email>"
    );

    if (!mail($to, $email_subject, $content, implode("\r\n", $headers))) {
      array_push($errors, 'Error when sending mail: ' . error_get_last()['message']);
      return false;
    }

    return true;
  }



  /* Save contact information in Sendinblue CRM */
  try {
    $dotenv = Dotenv\Dotenv::createImmutable( dirname( __DIR__, 2 ) );
    $dotenv->load();
  } catch ( Exception $e ) {
    array_push( $errors, 'Exception when calling Dotenv->load: ' . $e->getMessage() );
  }

  $credentials = SendinBlue\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', decrypt($_ENV['SENDINBLUE']));

  $apiInstance = new SendinBlue\Client\Api\ContactsApi(
    new GuzzleHttp\Client(),
    $credentials
  );

  $attributes = [ 'FIRSTNAME' => $first_name, 'LASTNAME' => $last_name, 'SMS' => $visitor_phone, 'LEAD_SOURCE' => 'ventureoutdoorsllc.com', 'OPT_IN'=> $opt_in == 'on' ];
  $createContact = new \SendinBlue\Client\Model\CreateContact([
    'email' => $visitor_email,
    'updateEnabled' => true,
    'attributes' => (object)$attributes,
    'listIds' =>[1,2,4]
  ]);

  try {
    $result = $apiInstance->createContact($createContact);
  } catch (Exception $e) {
    array_push($errors, 'Exception when calling ContactsApi->createContact: ' . $e->getMessage());
  }

  $success = sendEmail();

  if (count($errors) > 0) {
    // notify webmaster of errors
    $errorMsgs = implode('\r\n', $errors);
    mail("info@ventureoutdoorsllc.com", "Errors in Contact Form", $errorMsgs);
  }

  if ($success) {
    echo json_encode(array("status" => "success"));
  } else {
    header('HTTP/1.1 503 Service Temporarily Unavailable');
  }

?>