import React from "react";

import Story from "./Story";
import { actionType, newsType } from "@/utils/TypesNews";

const Newslist = ({ News }: { News: newsType[] }) => {
	return (
		<section className="flex gap-4 flex-wrap items-center justify-between py-8 mx-8">
			{News?.map((item: newsType) => {
				return <Story key={item.story_id} item={item} />;
			})}
		</section>
	);
};

export default Newslist;
