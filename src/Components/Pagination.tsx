import React, { useRef } from "react";

const Pagination = ({
	setpage,
}: {
	setpage: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const btnprev = useRef<HTMLButtonElement>(null);
	return (
		<div className="flex  justify-center mt-4">
			<div className="flex justify-between ">
				<button
					className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
					onClick={() => {
						setpage((prev) => {
							if (prev > 0) {
								if (btnprev.current) {
									btnprev.current.style.backgroundColor = "blue";
									btnprev.current.style.color = "white";
									return prev - 1;
								}
							}
							return prev;
						});
					}}
					ref={btnprev}
				>
					Previous
				</button>

				<button
					className="flex items-center justify-center px-4 h-10  text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
					onClick={() => {
						setpage((prev) => prev + 1);
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
