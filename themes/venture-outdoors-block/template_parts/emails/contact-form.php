<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="https://www.w3.org/1999/xhtml">
  <head>
    <title><?php echo esc_html($email_subject); ?></title>
  </head>
  <body>
    <div id="email_container" style="font-family:Manuale,sans-serif;font-size:15px;line-height:1.5em;color:#333;">
      <h1><?php echo esc_html($email_subject); ?></h1>
      <p>
        Someone just submitted your Contact Form form on 
        <a href='https://www.ventureoutdoorsllc.com' style="text-decoration: none;">https://www.ventureoutdoorsllc.com</a>
      </p>
      <p>Here is what they had to say:</p>
      <p>
        <b>Name</b><br><?php echo $first_name . ' ' . $last_name; ?>
      </p>
      <hr style="border-top: 1px solid #bbb;">
      <p>
        <b>Phone</b><br><?php echo $visitor_phone; ?>
      </p>
      <hr style="border-top: 1px solid #bbb;">
      <p>
        <b>Email</b><br><?php echo $visitor_email; ?>
      </p>
      <hr style="border-top: 1px solid #bbb;">
      <p>
        <b>Message</b><br><?php echo $message; ?>
      </p>
      <hr style="border-top: 1px solid #bbb;">
      <p>
        <b>Opt In to Emails</b><br><?php echo $opt_in; ?>
      </p>
      <hr style="border-top: 1px solid #bbb;">
      <p style='text-align: center'>Submitted <?php echo date("D, M j Y g:i A", time()); ?></p>
    </div>
  </body>
</html>