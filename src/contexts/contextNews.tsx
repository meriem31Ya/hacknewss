import { actionType, dispatchType, newsType } from "@/utils/TypesNews";
import { createContext } from "react";

export const ContextReducer = createContext<dispatchType>({
	dispatch: () => {},
});
