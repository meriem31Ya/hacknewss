import { newsType } from "@/utils/TypesNews";
import { createContext } from "react";

export type typeContext = {
	setpage: React.Dispatch<React.SetStateAction<number>>;
	News: newsType[];
	setSearch: React.Dispatch<React.SetStateAction<string>>;
};
export const ContextNews = createContext<typeContext>({
	setpage: () => {},
	News: [],
	setSearch: () => {},
});
