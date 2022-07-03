
const date=new Date()
const currYear=date.getFullYear();
const fullDate=date.getDate()
const MonthName=date.getMonth();
/*const HeadingStyle={
  backgroundColor:"purple",

  color:"white",
  textAlign: "center",
  fontSize:"3rem",
  padding:"15px" 
}*/
function Card(props)
{
  const {tittleText,descText}=props;//dis structuring
  return  <div className="card">
  <h3 className="cardTittle" >{tittleText}</h3> 
  

  <p className="cardDesc">{descText}</p>
  <p className="cardFooter">{fullDate+"/"+MonthName+"/"+currYear}</p>
 </div>

}
export default Card;
//Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.
