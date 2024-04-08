interface PopularSearchesProps {
	onSearch: (query: string) => void;
}

const PopularSearches = ({ onSearch }: PopularSearchesProps) => {
	const handleSearch = (term: string) => {
		onSearch(term);
	};
	const searchTerms = [
		{ title: "React" },
		{ title: "Vue" },
		{ title: "Angular" },
		{ title: "Pleno" },
		{ title: "Junior" },
		{ title: "Laravel" },
	];
	return (
		<div className="w-full flex md:flex-row flex-col items-center gap-2 my-6">
			<span className="ml-1 text-gray-600 text-[15px] font-medium">Pesquisas frequentes:</span>
			<div className="flex items-center gap-3 sm:max-w-full overflow-x-auto max-w-[380px]">
				{searchTerms.map((s) => {
					return (
						<span
							key={s.title}
							onClick={() => handleSearch(s.title)}
							className="border sm:mb-0 mb-3 border-purple-500 rounded-full px-3 whitespace-nowrap text-purple-500 bg-gray-100 text-[15px] cursor-pointer hover:bg-purple-100 transition-all duration-200"
						>
							{s.title}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default PopularSearches;
