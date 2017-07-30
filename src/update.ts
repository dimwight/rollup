import {format} from 'date-fns';

let span = document.querySelector('#time-now');

export default function update() {
	span.textContent = true?'Time is exactly '+format(new Date(), 'h:mm:ssa')
	  :'Time is about '+format(new Date(), 'h:mm');
	setTimeout(update, 1000);
}