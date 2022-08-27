<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $time = date("D, M j Y g:i A", time());

  $email_from = "info@ventureoutdoorsllc.com";
  $email_subject = "New form submission for Email Widget Form";
  $email_body = "
  <html><body>
    <style>
      body {
        font-family: Manuale, sans-serif;
        font-size: 15px;
        line-height: 1.5em;
        color: #333;
      }
      a {
        text-decoration: none;
      }
      hr.solid {
        border-top: 1px solid #bbb;
      }
    </style>

    <p>Someone just submitted your Email Widget form on <a href='https://www.ventureoutdoorsllc.com'>https://www.ventureoutdoorsllc.com</a></p>
    <p>Here is what they had to say:</p>
    <p>
      <b>Name</b><br>
      $name
    </p>
    <hr class='solid'>
    <p>
      <b>Email</b><br>
      $visitor_email
    </p>
    <hr class='solid'>
    <p>
      <b>Message</b><br>
      $message
    </p>
    <hr class='solid'>
    <p style='text-align: center'>Submitted $time</p>
  </body></html>";

  $to = "info@ventureoutdoorsllc.com";
  $headers = "From: Venture Outdoors Webmaster <$email_from> \r\n";
  $headers .= "Reply-To: $name <$visitor_email> \r\n";
  $headers .= "MIME-Version: 1.0 \r\n";
  $headers .= "Content-Type: text/html; charset=iso-8859-1 \r\n";

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
    if(preg_match($inject,$str)) {
      return true;
    }
    else {
      return false;
    }
  }
  if( isInjected($visitor_email) )
  {
      echo "Bad email value!";
      exit;
  }

  if( mail($to, $email_subject, $email_body, $headers) ) {
    echo "Contact Mail Sent.";
  } else {
    echo "Problem in Sending Mail.";
  }
?>