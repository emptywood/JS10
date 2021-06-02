$(function() {
	let num1 = 0;
	let num2 = 0;
	let num3 = 0;
	let tid1;
	let tid2;
	let tid3;
	let stops = 0;// スロットを止めた回数
	let coins = 10;// コインの枚数
	
	function slotloop1() {
		num1++;
		num1 %= 10;
		$('#s1').text(num1);
	}
	function slotloop2() {
		num2++;
		num2 %= 10;
		$('#s2').text(num2);
	}
	function slotloop3() {
		num3++;
		num3 %= 10;
		$('#s3').text(num3);
	}
	
	function check() {
		if(stops == 3) {
			// 判定
			if($('#s1').text() == $('#s2').text() && $('#s1').text() == $('#s3').text()) {
				$('#msg').text('大当たり!');
				coins += 100;
			} else {
				$('#msg').text('スカ!');
				coins--;
			}
			$('#coins').text(coins);
			
			if(coins == 0) {
				$('#msg').text('Game Over!');
			} else {
				// 初期化
				$('#b1').prop('disabled', false);
				$('#b2').prop('disabled', false);
				$('#b3').prop('disabled', false);
				stops = 0;
			}
		}
	}
	
	$('#b1').on('click', function() {
		if($(this).text() == 'start') {
			tid1 = setInterval(slotloop1, 100);
			$(this).text('stop');
		} else {
			clearInterval(tid1)
			$(this).text('start').prop('disabled', true);
			stops++;
			check();
		}
	});
		$('#b2').on('click', function() {
		if($(this).text() == 'start') {
			tid2 = setInterval(slotloop2, 100);
			$(this).text('stop');
		} else {
			clearInterval(tid2)
			$(this).text('start').prop('disabled', true);
			stops++;
			check();
		}
	});
	$('#b3').on('click', function() {
		if($(this).text() == 'start') {
			tid3 = setInterval(slotloop3, 100);
			$(this).text('stop');
		} else {
			clearInterval(tid3)
			$(this).text('start').prop('disabled', true);
			stops++;
			check();
		}
	});
	
});
