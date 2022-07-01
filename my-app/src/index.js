import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const todoTitle="call Familly"

const todoDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia nemo, porro, voluptatibus consequuntur nihil veniam, nisi labore suscipit maiores obcaecati facere assumenda unde? Neque eaque soluta deleniti nostrum quas."
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

ReactDOM.render(//rander element rander one element at a time.
//we can use html in js.
//alwase use {} when we want to write some thing in js
/*style={HeadingStyle}*/
 <div>
   
   <h1 className="HeadingStyle largetext" >Todo app</h1>
   <div className="card">
   <h3 className="cardTittle" >{todoTitle}</h3> 
   

   <p className="cardDesc">{todoDesc}</p>
   <p className="cardFooter">{fullDate+"/"+MonthName+"/"+currYear}</p>
  </div>
 </div>

  ,document.getElementById('root')
);


