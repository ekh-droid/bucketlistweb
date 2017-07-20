import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { createPost } from "../../actions/index";
import { Link } from "react-router";

class NewItem extends Component {
	handleFormSubmit(formProps) {
		this.props.createPost(formProps);
	}

	render() {
		const { handleSubmit, fields: { title, category, url, content }} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="col-md-4">
				
				<h3>I HAVE TO DO THIS</h3>
				<fieldset className="form-group">
					<label>Name the Task</label>
					<input {...title} type="text" className="form-control" />
				</fieldset>

				<fieldset className="form-group">
					<label>Category: </label>
					<input {...category} type="text" className="form-control" />
				</fieldset>

				<fieldset className="form-group">
					<label>URL: </label>
					<input {...url} type="text" className="form-control" />
				</fieldset>

				<fieldset className="form-group">
					<label>Details: </label>
					<textarea {...content} type="text" className="form-control text" rows="5" />
				</fieldset>
				<div>
					
					<Link to="/items" className="col-md-3 col-md-offset-1 btn btn-info text-center">Add Task</Link>
					<button action="submit" className="col-md-3 col-md-offset-1 btn btn-primary">Submit</button>
					<Link to="/" className="col-md-3 btn btn-danger">X</Link>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form: "ListNewItem",
	fields: ["title", "category", "url", "content"]
}, null, { createPost })(NewItem);
// null is for mapStateToProps, the second (in his case { createPost }) is for dispatchStateToProps