<?php

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];



$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);

$name = urldecode($name);
$email = urldecode($email);
$tel = urldecode($tel);

$name = trim($name);
$email = trim($email);
$tel = trim($tel);



if(mail("don4anin93@gmail.com",
"Новое письмо",
"Имя отправителя: ".$name."\n".
"Email: ".$email."\n",
"Телефон: ".$tel,
"От: no-reply@mydomain.ru \r\n")
) {
    echo ('Location: index.html');
}

else {
    echo ('Проверьте правильность введенных данных');
}

?>
