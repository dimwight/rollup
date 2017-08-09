import date from 'date-fns/format';
export default function (time:Date,style:string){
  return date(time,style,null);
  return 'late afternoon';

}
