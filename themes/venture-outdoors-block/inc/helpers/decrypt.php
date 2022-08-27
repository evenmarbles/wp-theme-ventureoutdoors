<?php
  require_once( dirname( __DIR__, 2 ) . '/assets/vendor/autoload.php' );

  function loadEncryptionKeyFromConfig()
  {
    $file = 'secret-key';
    if ( strstr( $_SERVER[ 'SERVER_NAME' ], 'venture-outdoors-classic.local' ) ) {
      $file = dirname( __DIR__, 2 ) . "/.encryption/{$file}";
    } else {
      $file = dirname( $_SERVER['DOCUMENT_ROOT'], 2 ) . "/etc/ventureoutdoorsllc.com/{$file}";
    }
    $secretKey = file_get_contents( $file );
      return Defuse\Crypto\Key::loadFromAsciiSafeString($secretKey);
  }

  function decrypt($ciphertext) {
    $key = loadEncryptionKeyFromConfig();

    try {
      return Defuse\Crypto\Crypto::decrypt($ciphertext, $key);
    } catch (\Defuse\Crypto\Exception\WrongKeyOrModifiedCiphertextException $e) {
        echo 'Exception when calling Crypto::decrypt: ', $e->getMessage(), PHP_EOL;
    }
  }
?>