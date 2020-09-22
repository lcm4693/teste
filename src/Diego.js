import React, {Component} from 'react';

class Diego extends Component {
   constructor(props){
      super(props);
      this.state = {
         name: props.livia
      };
   }
   
   diego(){
      this.setState({ name: "Carlos" });
   }
   
   render(){
      return (
         <h1 onClick={this.diego.bind(this)}>Olá Mundo my name is {this.state.name}!</h1>
      );
   } 
   
};

export default Diego;