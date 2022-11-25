let m = 29;
let s = 60;
$(function timer(){

  setTimeout(timer,1000);
  if (s>0){
    s = s - 1;

    console.log(m,s)
    $('.min').html(m);
    $('.sec').html(s);
  }
  else{
    m = m - 1;
    s = s + 60;
    $('.sec').html(s);
  }
}
)
  
// 

