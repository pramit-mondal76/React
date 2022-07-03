import React from "react";
import Card from './componants/Card'

function App()
{
   return <div>
       <h1 className="HeadingStyle">Todo App</h1>
       <Card tittleText="Call Me" descText="This is description 1"/>
       <Card tittleText="Call Me" descText="This is description 2"/>
       <Card tittleText="Call Me" descText="This is description 3"/>

   </div>
}
export default App;