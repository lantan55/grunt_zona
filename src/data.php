<?php

if(isset($_POST['submit'])){

	$mail = new PHPMailer();
	$mail->setFrom('artem@apprint.ru', 'Иван Иванов'); // от кого (email и имя)
	$mail->addAddress('artem@aprint.pro', 'Вася Петров');  // кому (email и имя)
	$mail->Subject = 'Тест';                         // тема письма
	// html текст письма
	$mail->msgHTML("<html><body>
									<h1>Здравствуйте!</h1>
									<p>Это тестовое письмо.</p>
									</html></body>");
	// Отправляем
	if ($mail->send()) {
		echo 'Письмо отправлено!';
	} else {
		echo 'Ошибка: ' . $mail->ErrorInfo;
	}

}





$offset = (int)$_POST['offset'];
$limit = (int)$_POST['limit'];

header('Access-Control-Allow-Origin: *');


  $images = json_decode(file_get_contents("base.json"), true);
  $images = $images['list'];
	$total = count($images);
	$result = '';
	if(($offset + $limit) >= $total) {
		$result = 'finish';
	}else {
		$result = 'success';
	}
	$newArr = array_slice($images, $offset, $limit);
    	$html = '';
    	foreach ($newArr as $item) {
    		$str = $item['path'].$item['filename'];
    		$html .= "<img class='item' src='". $str ."' />";
    	}
	echo json_encode(array(
              'result'    => $result,
              'html'      => $html
          ));
?>