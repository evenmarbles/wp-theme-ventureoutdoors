<?php
    require_once __DIR__.'/../vendor/autoload.php';

    function loadEncryptionKeyFromConfig()
    {
        $secretKey = file_get_contents('../.encryption/secret-key');
        return Defuse\Crypto\Key::loadFromAsciiSafeString($secretKey);
    }
    $key = loadEncryptionKeyFromConfig();

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__, 'api-keys');
    $dotenv->load();
    $secretData = $_ENV['SENDINBLUE'];
    echo $secretData;
    echo "\r\n\r\n";

    $ciphertext = Defuse\Crypto\Crypto::encrypt($secretData, $key);
    echo $ciphertext;
?>