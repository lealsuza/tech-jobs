import { useCallback, useEffect, useState } from "react";
import { BusinessOutline, CloseCircleOutline } from "react-ionicons";
import { useNavigate } from "react-router";
import { jobs } from "../../data/jobs";

interface FiltersProps {
	onFilterChange: (filters: { contractStatus: string[]; workStatus: string[] }) => void;
	savedJobs: number[];
}

const Filters = ({ onFilterChange, savedJobs }: FiltersProps) => {
	const [contract, setContract] = useState<string[]>([]);
	const [work, setWork] = useState<string[]>([]);
	const navigate = useNavigate();

	const memoFilterChange = useCallback(onFilterChange, []);
	useEffect(() => {
		memoFilterChange({ contractStatus: contract, workStatus: work });
	}, [contract, work, memoFilterChange]);

	const handleCloseFilters = () => {
		setContract([]);
		setWork([]);
	};
	const handleContractStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		const filterValue = e.target.value;

		setContract((prev) => {
			if (isChecked) {
				return [...prev, filterValue];
			} else {
				return prev.filter((status) => status !== filterValue);
			}
		});
	};
	const handleLocationStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		const filterValue = e.target.value;

		setWork((prev) => {
			if (isChecked) {
				return [...prev, filterValue];
			} else {
				return prev.filter((status) => status !== filterValue);
			}
		});
	};

	return (
		<div className="lg:sticky relative lg:top-10 lg:w-[500px] w-full">
			<div className="w-full bg-white rounded-lg p-5 border border-gray-200">
				<div className="w-full flex items-center justify-between">
					<span className="text-gray-800 font-semibold text-[15px]">Filtre sua vaga</span>
					<CloseCircleOutline
						cssClasses={"cursor-pointer"}
						color="#ed5a85"
						onClick={handleCloseFilters}
					/>
				</div>
				<div className="w-full flex md:flex-col flex-row justify-between gap-4 mt-5">
					<div className="flex flex-col gap-4">
						<span className="text-gray-800 font-semibold text-[15.5px]">Contrato</span>
						<div className="w-full flex flex-col gap-2">
							<div className="w-full flex items-center gap-2">
								<input
									type="checkbox"
									value="CLT"
									checked={contract.some((c) => c === "CLT")}
									onChange={handleContractStatusChange}
									className="w-[16px] h-[16px]"
								/>
								<span className="text-gray-800 font-medium text-[15px]">CLT</span>
							</div>
							<div className="w-full flex items-center gap-2">
								<input
									type="checkbox"
									value="PJ"
									checked={contract.some((c) => c === "PJ")}
									onChange={handleContractStatusChange}
									className="w-[16px] h-[16px]"
								/>
								<span className="text-gray-800 font-medium text-[15px]">PJ</span>
							</div>
							<div className="w-full flex items-center gap-2">
								<input
									type="checkbox"
									value="Estágio"
									checked={contract.some((c) => c === "Estágio")}
									onChange={handleContractStatusChange}
									className="w-[16px] h-[16px]"
								/>
								<span className="text-gray-800 font-medium text-[15px]">Estágio</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<span className="text-gray-800 font-semibold text-[15.5px]">Modelo de trabalho</span>
						<div className="w-full flex flex-col gap-2">
							<div className="w-full flex items-center gap-2">
								<input
									type="checkbox"
									value="Presencial"
									checked={work.some((c) => c === "Presencial")}
									onChange={handleLocationStatusChange}
									className="w-[16px] h-[16px]"
								/>
								<span className="text-gray-800 font-medium text-[15px]">Presencial</span>
							</div>
							<div className="w-full flex items-center gap-2">
								<input
									type="checkbox"
									value="Remoto"
									checked={work.some((c) => c === "Remoto")}
									onChange={handleLocationStatusChange}
									className="w-[16px] h-[16px]"
								/>
								<span className="text-gray-800 font-medium text-[15px]">Remoto</span>
							</div>
							<div className="w-full flex items-center gap-2">
								<input
									type="checkbox"
									value="Híbrido"
									checked={work.some((c) => c === "Híbrido")}
									onChange={handleLocationStatusChange}
									className="w-[16px] h-[16px]"
								/>
								<span className="text-gray-800 font-medium text-[15px]">Híbrido</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-white rounded-lg p-5 mt-5 border border-gray-200">
				<div className="w-full flex flex-col gap-2">
					<span className="text-gray-800 font-semibold text-[15px]">Vagas Salvas</span>
					<div className="flex flex-col w-full gap-5">
						{!savedJobs.length && (
							<span className="text-gray-400 text-[14px]">
								Você não salvou nenhuma vaga ainda!
							</span>
						)}
						{savedJobs.map((job) => {
							const j = jobs.find((j) => j.id === job);
							if (j) {
								return (
									<div
										key={job}
										className="text-gray-800 flex items-center justify-between w-full order-b border-gray-300 pb-3"
									>
										<div className="flex flex-col items-start gap-1">
											<span>{j.title}</span>
											<div className="flex items-center gap-2">
												<BusinessOutline
													width={"18px"}
													height={"18px"}
													color="#555"
												/>
												<span className="text-[14px] text-gray-600">{j.company}</span>
											</div>
										</div>
										<button
											onClick={() => navigate(`/jobs/${j.id}`)}
											className="text-white font-semibold text-[15px] rounded-md bg-purple-500 w-40 h-8"
										>
											Acessar
										</button>
									</div>
								);
							}
							return null;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
