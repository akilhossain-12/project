let hr=document.querySelector('.hour i');
let mn=document.querySelector('.min i');
let sc=document.querySelector('.sec i');

function displayTime(){
  let date=new Date();
  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();

  let hRot = 30*hh+mm/2;
  let mRot = 6 * mm;
  let sRot = 6 * ss ;

  hr.style.transform=`rotate(${hRot}deg)`;
  mn.style.transform=`rotate(${mRot}deg)`;
  sc.style.transform=`rotate(${sRot}deg)`;
}

setInterval(displayTime,1000);