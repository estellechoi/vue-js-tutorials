import axios from "axios"; // axios is Promise based library. axios = new Promise()

const config = {
	baseUrl: "https://api.hnpwa.com/v0/",
};

function fetchList(pageName) {
	return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

// ES6 syntax
function fetchUserInfo(userId) {
	// https://api.hnpwa.com/v0/user/davideast.json
	return axios.get(`${config.baseUrl}users/${userId}.json`);
}
function fetchAsk(id) {
	// https://api.hnpwa.com/v0/item/13831370.json
	return axios.get(`${config.baseUrl}item/${id}.json`);
}

export { fetchList, fetchUserInfo, fetchAsk };
