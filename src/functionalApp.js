import React, {useState} from 'react';

export default (props) => {
   const [myName, myNameUpdate] = useState(props.livia);
   
   const diego = newName => {
      myNameUpdate(newName);
   };
      
   return(<h1 onClick={() => diego("Carlos")}>Olá Mundo my name is {myName}!</h1>);    
      
};