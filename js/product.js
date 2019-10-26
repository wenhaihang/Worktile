$(function(){
	$(window).scroll(function(event) {
		var h=$(window).scrollTop()
		console.log(h)
		if (h>0) {
			$('.box1').css({
				background: 'hsla(0,0%,100%,0.9)',
				height: '68px',
			}).css('box-shadow', '0 0 10px rgba(0,0,0,.1)');
		}else{
			$('.box1').css({
				background: 'hsla(0,0%,100%,0)',
				height: '88px',
			}).css('box-shadow', 'none');
		}
		if(h>1510){
			$('.span6-2').removeClass('no');
			$('.span6-3').removeClass('no');
		}
	});
	$('.yes-1').click(function(){
		$('.yes-1').addClass('yes').siblings().removeClass('yes')
		$('.span2').css('display','block')
		$('.span3').css('display','none')
		$('.span4').css('display','none')
		$('.span5').css('display','none')
	})
	$('.yes-2').click(function(){
		$('.yes-2').addClass('yes').siblings().removeClass('yes')
		$('.span3').css('display','block')
		$('.span2').css('display','none')
		$('.span4').css('display','none')
		$('.span5').css('display','none')
	})
	$('.yes-3').click(function(){
		$('.yes-3	').addClass('yes').siblings().removeClass('yes')
		$('.span4').css('display','block')
		$('.span2').css('display','none')
		$('.span3').css('display','none')
		$('.span5').css('display','none')
	})
	$('.yes-4').click(function(){
		$('.yes-4').addClass('yes').siblings().removeClass('yes')
		$('.span5').css('display','block')
		$('.span2').css('display','none')
		$('.span3').css('display','none')
		$('.span4').css('display','none')
	})
})