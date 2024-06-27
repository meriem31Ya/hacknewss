import { ContextReducer } from "@/contexts/contextNews";
import { actionType } from "@/utils/TypesNews";
import React, { useContext, useRef } from "react";

const Pagination = () => {
	const { dispatch } = useContext(ContextReducer);
	const btnprev = useRef<HTMLButtonElement>(null);
	return (
		<div className="flex  justify-center mt-4">
			<div className="flex justify-between ">
				<button
					className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
					onClick={() => {
						dispatch({ type: "PAGINATION", payload: true });
					}}
				>
					Previous
				</button>

				<button
					className="flex items-center justify-center px-4 h-10  text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
					onClick={() => {
						dispatch({ type: "PAGINATION", payload: false });
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
