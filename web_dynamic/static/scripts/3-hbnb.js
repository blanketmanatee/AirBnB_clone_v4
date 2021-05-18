window.addEventListener('load', function () {
$.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
if (data.status === 'OK') {
$('#api_status').addClass('available');
} else {
$('#api_status').removeClass('available');
}
});


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

$.ajax({
type: 'POST',
url: 'http://0.0.0.0:5001/api/v1/places_search/',
contentType: 'application/json',
data: JSON.stringify({})
