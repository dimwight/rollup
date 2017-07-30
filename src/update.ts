import {format} from 'date-fns';

let span = document.querySelector('#time-now');

export default function update() {

  const time=new Date();
  span.textContent = true?'Time is exactly '+format(time, 'h:mm:ssa')
	  :'Time is about '+format(time, 'h:mm');
	setTimeout(update, 1000);
}