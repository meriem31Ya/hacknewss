"use client";
import React, { useEffect, useReducer, useState } from "react";

import Search from "@/Components/Search";
import Pagination from "@/Components/Pagination";
import Newslist from "@/Components/Newslist";
import { actionType, newsType, stateType } from "@/utils/TypesNews";
import { fetchAllNews } from "@/services/geData";
import { reducer } from "@/Reducer/reducer";

const News = () => {
	const [state, dispatch] = useReducer<React.Reducer<stateType, actionType>>(
		reducer,
		{
			News: [],
			loading: false,
			search: "",
			page: 0,
		}
	);

	useEffect(() => {
		const getData = async () => {
			const response = await fetchAllNews(state.search, state.page);
			dispatch({ type: "LOADING_FALSE", payload: false });
			dispatch({ type: "FETCH_SUCCES", payload: response.data.hits });
		};
		getData();
	}, [state.search, state.page]);

	return (
		<div>
			{/* <Search setSearch={setSearch} setpage={setpage} />
			<Pagination setpage={setpage} /> */}
			<Newslist News={state.News} dispatch={dispatch} />
		</div>
	);
};

export default News;
