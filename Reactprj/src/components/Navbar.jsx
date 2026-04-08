import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<h2>Job Portal</h2>
			<Link to="/">Home</Link>
			<Link to="/jobs">Jobs</Link>
			<Link to="/new-job">New Job</Link>
			<Link to="/about">About</Link>
			<Link to="/login">Login</Link>
		</nav>
	);
}

export default Navbar;
