<?php
  require_once __DIR__.'/../vendor/autoload.php';

  function loadEncryptionKeyFromConfig()
  {
    $secretKey = file_get_contents(__DIR__.'/../.encryption/secret-key');
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