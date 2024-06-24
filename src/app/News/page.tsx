"use client";
import React, { useEffect, useState } from "react";

import { ContextNews } from "@/contexts/contextNews";
import Search from "@/Components/Search";
import Pagination from "@/Components/Pagination";
import Newslist from "@/Components/Newslist";
import { newsType } from "@/utils/TypesNews";
import { fetchAllNews } from "@/services/geData";

const News = () => {
	const [News, setNewslist] = useState<newsType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [search, setSearch] = useState("");
	const [page, setpage] = useState(0);

	useEffect(() => {
		const getData = async () => {
			setLoading(false);
			const response = await fetchAllNews(search, page);
			setNewslist(response.data.hits);
			setLoading(true);
		};
		getData();
	}, [search, page]);

	// if (!loading) {
	// 	return <div>chargement</div>;
	// }

	return (
		<div>
			<ContextNews.Provider value={{ setpage, News, setSearch }}>
				<Search />
				<Pagination setpage={setpage} />
				<Newslist News={News} />
			</ContextNews.Provider>
		</div>
	);
};

export default News;
