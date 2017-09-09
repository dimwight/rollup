import dateFormat from 'date-fns/format';
export default function (time:Date,style:string){
  return dateFormat(time,style,null);
  return 'late afternoon';
}
