"use client";
import React, { useEffect, useReducer, useState } from "react";

import Search from "@/Components/Search";
import Pagination from "@/Components/Pagination";
import Newslist from "@/Components/Newslist";
import { actionType, newsType, stateType } from "@/utils/TypesNews";
import { fetchAllNews } from "@/services/geData";
import { reducer } from "@/Reducer/reducer";
import { ContextReducer } from "@/contexts/contextNews";

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
			<ContextReducer.Provider value={{ dispatch }}>
				<Search />
				<Pagination />
				<Newslist News={state.News} />
			</ContextReducer.Provider>
		</div>
	);
};

export default News;
