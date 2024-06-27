import { actionType, stateType } from "@/utils/TypesNews";

export const reducer = (state: stateType, action: actionType): stateType => {
	switch (action.type) {
		case "FETCH_SUCCES":
			return { ...state, News: action.payload, loading: true };
			break;
		case "LOADING_FALSE":
			return { ...state, loading: action.payload };
			break;
		case "REMOVE_new":
			return {
				...state,
				News: state.News.filter((news) => news.story_id !== action.payload),
			};

		case "SEARCH_NEW":
			return {
				...state,
				search: action.payload,
				page: 0,
			};
			break;
		case "PAGINATION":
			return {
				...state,
				page: action.payload ? state.page + 1 : Math.max(state.page - 1, 0),
			};
		default:
			return state;
	}
};
