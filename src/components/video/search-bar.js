import React, {Component } from "react";

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = { term: "search youtube" };
	}

	render() {
		return (
			<div className="serach-bar">
				<label className="vidSearchLbl">
				+ + // NEED INSPIRATION     
				</label>
				<input
					value = {this.state.term}
					onChange = { (event) => this.onInputChange(event.target.value) } />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
		// this line of code is what is telling the video to update
	}
};

export default SearchBar;