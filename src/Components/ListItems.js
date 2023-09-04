
import './ListItems.css';

const ListItems = (props) => {

//const [clicked,setClicekd] =useState(false)

//const UpdateClick = () =>{
    //Instead of using setClicked(true) we use a negation(!) property of ES6 so that it can be set back to false then true
    //then false then true and --------
    //Now when you click the Added stuff it gets and linethrough the clicking it again inatoa
  //  setClicekd(prevVlue => {
//return !prevVlue
  //  }
  //  )}
  //this goes inside the return method
 // <li style={{textDecoration:clicked?"line-through":"none"}} key={props.listtext}>{props.listtext}</li>



return (
<div onClick={(index)=>{
  props.onDeleted(props.id)}}>
    <li key={props.listtext}>{props.listtext}</li>

</div>
);

}
export default ListItems;