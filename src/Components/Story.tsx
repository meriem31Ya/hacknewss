import { newsType } from "@/utils/TypesNews";
import React from "react";

const Story = ({ item }: { item: newsType }) => {
	return (
		<article className=" mb-4 p-4 border border-gray-300 rounded-lg shadow-md w-[250px] h-[200px]">
			<h4 className="title text-xl font-semibold mb-2">{item.title}</h4>
			<p className="info text-sm text-gray-600 mb-2">
				{item.points}points by <span className="font-bold">{item.author}</span>|
				{item.num_comments} comments
			</p>
			<div className="flex items-center space-x-4">
				<a
					href={item.url}
					className="read-link text-blue-500 hover:underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					read more
				</a>
				<button className="remove-btn text-red-500 hover:text-red-700">
					remove
				</button>
			</div>
		</article>
	);
};

export default Story;
