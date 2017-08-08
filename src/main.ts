import format from './myFormat';
import errorTest from './consoleError';

function announceTime(){
  const time=new Date();
  const text=true?'Time is exactly '+format(time,'h:mm:ssa')
    :'Time is about '+format(time,'h:mm');
  if(typeof document==='undefined') console.log(text);
  else{
    document.getElementById('pageTitle').innerText=document.title;
    document.querySelector('#time-now').textContent=text;
    setTimeout(announceTime,1000);
  }
}

errorTest();
announceTime();

//target: esnext
//module: commonjs
//external: true
//format: iife
