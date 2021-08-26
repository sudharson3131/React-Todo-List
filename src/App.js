import React, { Component } from "react";
import "./style.css";

export default class App extends Component{
  constructor(props){
      super(props);
      this.state={
         Items : [],
         Text : ''
      };
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
      console.log("Handle-Change call...")
          this.setState({
            Text : e.target.value
          });
    }
    handleSubmit(e){
      console.log("Handle-Submit Call...")
      e.preventDefault();
      if(this.state.Text.length === 0){
        return;
      }
      const NewItems = {
          value : this.state.Text,
          id : Date.now()
      };
      this.setState((prevState) =>(
        {
          Items : prevState.Items.concat(NewItems),
          Text : ''
        }
      ))
    }
    render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleChange} value={this.state.Text}/>
              <button>Add#{this.state.Items.length+1}</button>
          </form>
          <h1>Todo List</h1>
          <ol>
            {
              this.state.Items.map((item) => <li key={item.id}>{item.value}</li>)
            }

          </ol>
        </div>
      )
    }
}