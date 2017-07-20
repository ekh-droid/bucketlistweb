import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, browserHistory } from "react-router";
import { fetchPost, deletePost } from "../../actions/index";
import axios from "axios";

const ROOT_URL = "http://eh-bucketlist-server.herokuapp.com/";

const config = {
	headers: { authorization: localStorage.getItem("token") }
}

class ListShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: {}
		}
	}

	componentWillMount() {
		// TODO add the axios cal here
		// this.props.fetchPost(this.props.params.id)
		axios.get(ROOT_URL + "/items/" + this.props.params.id, config)
		.then( (response) => {
			console.log("Hello", response);
			this.setState({
				post: response.data
			})
		});
	}

	onDeleteClick() {
		this.props.deletePost(this.props.params.id);
	}

	render() {
		const post = this.state.post;
		if (!post) {
			return (
				<div>
					Create a New Post 
					<Link to="/newitem" className="btn btn-primary pull-right">New Post</Link>
				</div>
			);
		}
		return (
			<div>
				<h4>{post.title}</h4>
				<div id="space"></div>
				<h6>Category: {post.category}</h6>
				<div id="space"></div>
				<p>{post.content}</p>
				<Link to="/items" className="btn btn-primary">Back to myList</Link>

				<button className="btn btn-danger pull-right" onClick={this.onDeleteClick.bind(this)}>X</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ListShow);