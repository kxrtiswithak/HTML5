/*
  1 - Get object
  2 - Set parameters/properties
  3 - Action - (make shape/line)
*/

function makeCanvas(){
  pi2 = Math.PI * 2;
  //  1
  var canvas1 = document.getElementById('canvas1'); var ctx1 = canvas1.getContext('2d');    //  Text
  var canvas2 = document.getElementById('canvas2'); var ctx2 = canvas2.getContext('2d');    //  Squares
  var canvas3 = document.getElementById('canvas3'); var ctx3 = canvas3.getContext('2d');    //  Lines
  var canvas4 = document.getElementById('canvas4'); var ctx4 = canvas4.getContext('2d');    //  Circles
  var canvas5 = document.getElementById('canvas5'); var ctx5 = canvas5.getContext('2d');    //  Animation
  
  //  2
  ctx1.font = '32pt Arial'; ctx1.fillStyle = '#00bfff'; ctx1.strokeStyle = '#000';   //  Text
  ctx2.lineWidth = 10; ctx2.fillStyle = '#f00'; ctx2.strokeStyle = '#000';           //  Squares
  ctx3.lineWidth = 5; ctx3.fillStyle = '#f00'; ctx3.strokeStyle = '#666';            //  Lines
  ctx4.fillStyle = '#00f';                                                           //  Circles

  //  3
  ctx1.fillText("I Love HTML5", 45, 150); ctx1.strokeText("I Love HTML5",45, 150);    //  Text
  
  ctx2.fillRect(45, 5, 135, 135); ctx2.strokeRect(45, 5, 135, 135);                                 //  Square 1
  ctx2.fillStyle = '#666'; ctx2.fillRect(200, 0, 135, 135);                                      //  Square 2
  ctx2.fillRect(45, 150, 135, 135); ctx2.strokeRect(45, 5, 135, 135);                               //  Square 3
  ctx2.fillStyle = '#f00'; ctx2.fillRect(200, 150, 135, 135); ctx2.strokeRect(45, 5, 135, 135);  //  Square 4

  ctx3.beginPath(); ctx3.moveTo(100, 100);    //  Lines
  ctx3.lineTo(150, 200); ctx3.lineTo(200, 200); ctx3.lineTo(200, 290); ctx3.lineTo(290, 290); ctx3.lineTo(290, 100); ctx3.lineTo(100, 100);
  ctx3.stroke(); ctx3.fill();

  ctx4.beginPath(); ctx4.arc(200, 30, 25, 0, pi2); ctx4.fill(); ctx4.closePath();                             //  Circle 1
  ctx4.fillStyle = '#f00'; ctx4.beginPath(); ctx4.arc(200, 100, 45, 0, pi2); ctx4.fill(); ctx4.closePath();   //  Circle 2
  ctx4.fillStyle = '#000'; ctx4.beginPath(); ctx4.arc(200, 220, 75, 0, pi2); ctx4.fill(); ctx4.closePath();   //  Circle 3

  var i = 0;
  setInterval(function(){                                                            //  Animation
    i++;
    ctx5.fillStyle = '#000'; ctx5.fillRect(0, 0, canvas5.width, canvas5.height);
    
    ctx5.fillStyle = '#fff';    //  White circle
    ctx5.beginPath(); ctx4.beginPath(); ctx5.arc(i, 120, 55, 0, pi2); ctx5.fill();

    ctx5.fillStyle = '#f00';    //  Red circle
    ctx5.beginPath(); ctx4.beginPath(); ctx5.arc(150, i, 55, 0, pi2); ctx5.fill();

    ctx5.fillStyle = '#00f';    //  Blue circle
    ctx5.beginPath(); ctx4.beginPath(); ctx5.arc(350, i, 55, 0, pi2); ctx5.fill();
  }, 30)
}