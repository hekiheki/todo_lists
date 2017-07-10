import React, { Component } from 'react'

class Title extends Component {
	constructor(props){
	    super(props);
	    this.state = {}
	}
	render(){
		const { children } = this.props;
		return (
			<div className="header">
				<div className="title">{children}</div>
			</div>
		);
	}
}

export default Title;