$('select#cities').on('change', function() {
  $('input[name="city"]').val(this.value);
});
