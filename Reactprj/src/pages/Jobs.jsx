import { Link } from "react-router-dom";
import useJobs from "../hooks/useJobs";
function Jobs() {
	// const jobList = [
	//   { id: 1, title: "Frontend Developer" },
	//   { id: 2, title: "Backend Developer" },
	//   { id: 3, title: "Full Stack Developer" },
	//   { id: 4, title: "Java Developer" },
	// ];
	const jobs = useJobs();

	return (
		<div>
			<h1>Available Jobs</h1>

			{jobs.map((job) => (
				<div key={job.id}>
					<h3>{job.title}</h3>
					<Link to={`/jobs/${job.id}`}>View Details</Link>
				</div>
			))}
		</div>
	);
}

export default Jobs;
