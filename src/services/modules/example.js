import axios from "src/utils/axios";

export const getListTableDatasource = payload => {
	const settings = {
		params: payload
	};

	return axios.get("/example/getListTableDatasource");
};

export const addListTableDatasource = payload => {
	return axios.post("/example/addListTableDatasource", payload);
};

export const editListTableDatasource = payload => {
	return axios.put("/example/editListTableDatasource/" + payload.id, payload);
};

export const deleteListTableDatasource = payload => {
	return axios.delete("/example/deleteListTableDatasource/" + payload.id);
};

export default {
	getListTableDatasource,
	addListTableDatasource,
	editListTableDatasource,
	deleteListTableDatasource
};