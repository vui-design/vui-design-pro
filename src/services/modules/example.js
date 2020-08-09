import axios from "src/utils/axios";

export const submitFormBasic = payload => {
	return axios.post("/example/submitFormBasic", payload);
};

export const submitFormSteps = payload => {
	return axios.post("/example/submitFormSteps", payload);
};

export const getListStandardDatasource = payload => {
	const settings = {
		params: payload
	};

	return axios.get("/example/getListStandardDatasource");
};

export const addListStandardDatasource = payload => {
	return axios.post("/example/addListStandardDatasource", payload);
};

export const editListStandardDatasource = payload => {
	return axios.put("/example/editListStandardDatasource/" + payload.id, payload);
};

export const deleteListStandardDatasource = payload => {
	return axios.delete("/example/deleteListStandardDatasource/" + payload.id);
};

export const getListCardDatasource = payload => {
	const settings = {
		params: payload
	};

	return axios.get("/example/getListCardDatasource");
};

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

export const getListSearchArticlesDatasource = payload => {
	const settings = {
		params: payload
	};

	return axios.get("/example/getListSearchArticlesDatasource");
};

export const getListSearchProjectsDatasource = payload => {
	const settings = {
		params: payload
	};

	return axios.get("/example/getListSearchProjectsDatasource");
};

export const getListSearchApplicationsDatasource = payload => {
	const settings = {
		params: payload
	};

	return axios.get("/example/getListSearchApplicationsDatasource");
};

export default {
	submitFormBasic,
	submitFormSteps,
	getListStandardDatasource,
	addListStandardDatasource,
	editListStandardDatasource,
	deleteListStandardDatasource,
	getListCardDatasource,
	getListTableDatasource,
	addListTableDatasource,
	editListTableDatasource,
	deleteListTableDatasource,
	getListSearchArticlesDatasource,
	getListSearchProjectsDatasource,
	getListSearchApplicationsDatasource
};