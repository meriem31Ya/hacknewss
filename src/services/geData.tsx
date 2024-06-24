import axios from "axios";

export const axiosfetch = axios.create({
	baseURL: "https://hn.algolia.com/api/v1/",

	headers: {
		"Content-Type": "application/json",
	},
});

export const fetchAllNews = (search: string, page: number) => {
	return axiosfetch.get(`search?&query=${search}&page=${page}`);
};
