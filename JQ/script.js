var _Seconds = $('.seconds').text(),
  int;
int = setInterval(function() { 
  if (_Seconds > 0) {
    _Seconds--; 
    $('.seconds').text(_Seconds);
  } else {
    clearInterval(int);
  }
}, 1000);