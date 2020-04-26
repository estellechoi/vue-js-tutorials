import axios from "axios"; // axios is Promise based library. axios = new Promise()

const config = {
	baseUrl: "https://api.hnpwa.com/v0/",
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
function fetchUserInfo(userId) {
	// https://api.hnpwa.com/v0/user/davideast.json
	return axios.get(`${config.baseUrl}users/${userId}.json`);
}
function fetchAsk(id) {
	// https://api.hnpwa.com/v0/item/13831370.json
	return axios.get(`${config.baseUrl}item/${id}.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchAsk };
