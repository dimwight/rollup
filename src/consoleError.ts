export default function(){
  let err=new Error('Hell!');
  console.log(`Created ${err}...`);
  if(true) throw err;
  else console.log(`..but didn't throw it.`);
}

