import { useState } from "react";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		validateForm();
		if (Object.keys(errors).length === 0) {
			try {
				const response = await fetch(
					"http://jsonplaceholder.typicode.com/posts",
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email, password }),
					},
				);

				const data = await response.json();
				console.log("Response from server:", data);
			} catch (error) {
				console.error("Error during login:", error);
			}
		}
	};
	const validateForm = () => {
		const errors = {};
		if (!email) {
			errors.email = "Email is required";
		}
		if (!email.includes("@")) {
			errors.email = "Email is invalid";
		}
		if (!password) {
			errors.password = "Password is required";
		}
		setErrors(errors);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Email:</label> <br />
				<input
					type="text"
					value={email}
					placeholder="Email"
					onChange={handleEmailChange}
				/>
				<p style={{ color: "red" }}> {errors.email}</p>
			</div>
			<div>
				<label>Password:</label> <br />
				<input
					type="password"
					value={password}
					placeholder="Password"
					onChange={handlePasswordChange}
				/>
				<p style={{ color: "red" }}> {errors.password}</p>
			</div>
			<button type="submit">Login</button>
		</form>
	);
}

export default Login;
