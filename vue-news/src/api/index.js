import axios from "axios"; // axios is Promise based library. axios = new Promise()

const config = {
	baseUrl: "https://api.hnpwa.com/v0/"
};

function fetchNewsList() {
	// return axios.get(config.baseUrl + "news/1.json"); to ES6 syntax
	return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchAskList() {
	return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList };
