import React, { Component } from 'react'

class List extends Component {
	listItem(text,i){
		const onClickItem = this.props.onClickItem;
		return (
			<div className="listItem" key={i} onClick={ ()=> onClickItem(i)}>
				{text}
			</div>
		);
	};

	render(){
		const list = this.props.list;

		return (
			<div className="list">
				{list.map(this.listItem.bind(this))}
			</div>
		);
	}
}
export default List;