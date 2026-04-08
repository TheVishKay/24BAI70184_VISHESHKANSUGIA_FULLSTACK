import { useState } from "react";

function NewJob() {
	const [job, setJob] = useState("");
	const [description, setDescription] = useState("");
	const [submittedJob, setSubmittedJob] = useState(null);

	function handleSubmit(event) {
		event.preventDefault();
		const jobData = { job, description };
		console.log("New job submitted:", jobData);
		setSubmittedJob(jobData);
	}

	return (
		<div>
			<h1>Create Job Input</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="job">Job Title:</label>
					<input
						type="text"
						id="job"
						value={job}
						onChange={(e) => setJob(e.target.value)}
						placeholder="Enter job title"
					/>
				</div>
				<div>
					<label htmlFor="description">Job Description:</label>
					<textarea
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="Enter job description"
					/>
				</div>
				<button type="submit">Submit</button>
			</form>

			{submittedJob && (
				<div>
					<h2>Submitted Job</h2>
					<p>
						<strong>Job:</strong> {submittedJob.job}
					</p>
					<p>
						<strong>Description:</strong> {submittedJob.description}
					</p>
				</div>
			)}
		</div>
	);
}

export default NewJob;
