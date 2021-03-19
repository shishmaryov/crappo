$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__right').toggleClass('header__right--active'); return false;
	});
});

$('select#cities').on('change', function() {
  $('input[name="city"]').val(this.value);
});

$(document).ready(function() {
  $('form').validate();
});
