var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var pauseButton = document.getElementById('pause');
var contButton = document.getElementById('cont');



var timerId;



function hendler1(){
  startButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
  timerId = setInterval(timer, 10);
}



function hendler2(){
  clearInterval(timerId);
  contButton.style.display = 'inline-block';
  pauseButton.style.display = 'none';
}



function hendler3(){
  timerId = setInterval(timer, 10);
  contButton.style.display = 'none';
  pauseButton.style.display = 'inline-block';
}



function hendler4(){
  contButton.style.display = 'none';
  pauseButton.style.display = 'none';
  startButton.style.display = 'inline-block';
  document.getElementById('msec').innerHTML = '00';
  document.getElementById('sec').innerHTML = '00';
  document.getElementById('min').innerHTML = '00';
  document.getElementById('hr').innerHTML = '00';
  clearInterval(timerId);
  t = 0;
  x = 0;
  y = 0;
  z = 0;
}



startButton.addEventListener('click', hendler1);
pauseButton.addEventListener('click', hendler2);
contButton.addEventListener('click', hendler3);
stopButton.addEventListener('click', hendler4);



var x = 0;
var y = 0;
var z = 0;
var t = 0;
function timer(){
  if ( t < 10 ){
    document.getElementById('msec').innerHTML = '0' + t;
  }else{
	  document.getElementById('msec').innerHTML = t;  
  }
    t++;	
      if ( t == 100 ){
	      x++;
	      t = 0;
        document.getElementById('sec').innerHTML = '0' + x;	    
      }	
      if ( x > 9 ){
	      document.getElementById('sec').innerHTML = x;
      }	  
      if ( x == 60 ){
	      y++;
	      x = 0;
        document.getElementById('sec').innerHTML = '00';
        document.getElementById('min').innerHTML = '0' + y;	  
      }		
      if ( y > 9 ){
	      document.getElementById('min').innerHTML = y;
      }  
			if ( y == 60 ){
        z++;
        y = 0;
        document.getElementById('min').innerHTML = '00';
        document.getElementById('hr').innerHTML = '0' + z;	  
      }		
      if ( z > 9 ){
	      document.getElementById('hr').innerHTML = z;
      }  
}




































/*function timer(){
    document.getElementById('sec').innerHTML = '0'+ t;
	  if ( t > 9 ){
	    document.getElementById('sec').innerHTML = t;
	  }
	  if ( t == 10 ){
		t = 0;
		m.innerHTML ;
	  
	  
      }
    t++;
	  }
*/






















			