<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'm.sadovshikov@yandex.ru';
$mail->Password = '******';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('m.sadovshikov@yandex.ru');
$mail->addAddress('don4anin93@gmail.com');
$mail->isHTML(true);

$mail->Subject = 'Новое письмо';
$mail->Body    = '' .$name . ' прислал вам письмо, его телефон ' .$tel. '<br>Почта этого пользователя: ' .$email. '<br>Текст письма: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo ('Спасибо!');
}
?>
