import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CounterList extends React.Component
{
	
	state={
		counters:[]
	}
	addCounter=()=>{
		this.setState(
			{counters:[...this.state.counters, 0]}
			);
	}
	render(){
		return(
                 <div>
    				<button onClick={this.addCounter}>Add counter</button>
    				{this.state.counters.map((counter, i) => (
      					<SimpleCounter 
        					key={i}
        					value={counter}
        				
      					/>
    ))}
  </div>
			);
	}
}
class SimpleCounter extends React.Component
{
	
	state={
			value:0
		};
	
	handleClick=(incrementValue)=>{
       this.setState({
       	value: this.state.value+incrementValue
       });
	}
	render(){
		return(
			<div>
             <div className='simple-counter'>
             	<Button 
             		handleClick={this.handleClick}
             		buttonText="+5"
             		incrementValue={5}/>
             		<Button 
             		handleClick={this.handleClick}
             		buttonText="-5"
             		incrementValue={-5}/>
             	<label>{this.state.value}</label>

             </div>
<div><hr/></div>
</div>
			);
	}
}

class Button extends React.Component
{
	
	handleClick=()=>{
       this.props.handleClick(this.props.incrementValue);
	}
	render(){
		return (
                <div>
                   <button onClick={this.handleClick} >{this.props.buttonText}</button>
                </div>
			);
	}
}
ReactDOM.render(<CounterList/>,document.getElementById('root'));