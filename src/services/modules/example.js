import axios from "src/utils/axios";

export const getListTableDatasource = () => {
	return axios.get("/example/getListTableDatasource");
};

export default {
	getListTableDatasource
};