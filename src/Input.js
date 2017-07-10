import React, { Component } from 'react'

class Input extends Component {
	constructor(props){
	    super(props);
	    this.state = {value: ""}
	}
	handleChange(e){
		this.setState({value: e.target.value});
	}
	handleKeyPress(e){
		if(e.key != 'Enter' ) return;
		const onSubmitEditing = this.props.onSubmitEditing;
		const value = this.state.value;

		if(!value) return;

		onSubmitEditing(value);
		this.setState({ value: "" });
	}
	render(){

		return (
			<div className="input">
				<input type="text" value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} />
			</div>
		);
	}
}

export default Input;