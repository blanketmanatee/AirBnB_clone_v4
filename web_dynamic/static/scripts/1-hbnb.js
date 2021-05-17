const amens = {};
$(document).ready(function () {
  $("input[type='checkbox']").change(function () {
    if ($(this).is(':checked')) {
      amens[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amens[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amens).join(', '));
  });
});
