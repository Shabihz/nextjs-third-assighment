import Link from 'next/link';
export default function Card (props:any){
  return(
    <div>
    <h1>{props.Name}</h1>
    <h1>{props.RollNo}</h1>
    </div>
  )
}