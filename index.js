$('input[type=radio]').on('change', function () {
  var _this = $(this);
  window.localStorage.setItem('zoom', _this.val());
});
var zoom = window.localStorage.getItem('zoom');
switch (zoom) {
  case '1': zoom = 'normal'; break;
  case '1.5': zoom = 'gross'; break;
  case '2': zoom = 'groesser'; break;
  case '2.5': zoom = 'hulk'; break;
  default: zoom = 'normal';
}
$('#' + zoom).prop('checked', true);