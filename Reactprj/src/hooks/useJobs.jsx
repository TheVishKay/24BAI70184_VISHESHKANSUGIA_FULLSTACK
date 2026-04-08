import { useEffect, useState } from "react";
import axios from "axios";

function useJobs() {
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts",
				);

				const formatJobs = response.data.slice(0, 10).map((job) => ({
					id: job.id,
					title: job.title,
				}));
				setJobs(formatJobs);
			} catch (error) {
				console.error("Error fetching jobs:", error);
			}
		};
		fetchJobs();
	}, []);
	return jobs;
}

export default useJobs;
