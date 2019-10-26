$(function(){
	$(window).scroll(function(event) {
		var h=$(window).scrollTop()
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
		if(h>200) {
			$('.box3-span1').removeClass('no');
		}
		if(h>500) {
			$('.box3-span5').removeClass('no');
		}
		if (h>1100) {
			$('.box3-span7-1').removeClass('no');
			$('.box3-span7-2').removeClass('no');
			$('.box3-span7-3').removeClass('no');
		}
		if (h>1200) {
			$('.box3-span7-4').removeClass('no');
			$('.box3-span7-5').removeClass('no');
			$('.box3-span7-6').removeClass('no');
		}
		if (h>1700) {
			$('.box4-span1-box4').removeClass('no');
		}
		if (h>2000) {
			$('.box4-span4-1').removeClass('no');
		}
		if (h>2400) {
			$('.box4-span4-2').removeClass('no');
		}
		if (h>2900) {
			$('.box4-span4-3').removeClass('no');
		}
		if (h>3400) {
			$('.box4-span4-box5').removeClass('no');
		}
		if (h>3700) {
			$('.box5-span1').removeClass('no');
		}
		if (h>4200) {
			$('.box7-span1').removeClass('no');
		}
	});
})