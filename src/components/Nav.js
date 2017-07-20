import React, {Component} from "react";
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav, collapseOnSelect} from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router";

class NavBarHeader extends Component {
	renderLinks() {
		if(this.props.authenticated) {
			return [
				<NavItem key={3} href="/signout">Sign Out</NavItem>,
				<NavDropdown key={4} title="myList" id="basic-nav-dropdown">
			        <MenuItem key={4.1} href="/newitem">Add New Task</MenuItem>
			        <MenuItem key={4.2} href="/items">My Bucket List</MenuItem>
	
			        <MenuItem key={4.4}>Separated link</MenuItem>
		        </NavDropdown>
			];
		} else {
			return [

				<NavItem key={1} href="/signin">Sign In</NavItem>,
				<NavItem key={2} href="/signup">Sign Up</NavItem>,
		];
		}
	}

	render() {
		return(

			<Navbar inverse>
			    <Navbar.Header>
			        <Navbar.Brand>
			            <a href="/">THE BUCKET LIST</a>
			        </Navbar.Brand>
			        <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			    <Nav>
			    	{this.renderLinks()}
			    </Nav>
			    </Navbar.Collapse>
			</Navbar>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps)(NavBarHeader);