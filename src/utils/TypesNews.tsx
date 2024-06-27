export type newsType = {
	story_id: number;
	title: string;
	url: string;
	author: string;
	points: number;
	num_comments: number;
};

export type stateType = {
	News: newsType[];
	page: number;
	search: string;
	loading: boolean;
};

export type actionType = {
	type: string;
	payload: any;
};
