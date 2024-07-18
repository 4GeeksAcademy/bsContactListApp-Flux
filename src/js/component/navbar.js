import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end me-3">
			<div className="ml-auto">
				<Link to="/createcontact">
					<button className="btn btn-primary">Create New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
