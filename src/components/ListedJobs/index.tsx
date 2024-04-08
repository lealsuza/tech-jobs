import {
  Bookmark,
  BookmarkOutline,
  BusinessOutline,
  LocationOutline,
  NewspaperOutline,
} from "react-ionicons";
import { useNavigate } from "react-router";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: string;
  contractStatus: string;
  workStatus: string;
  about: string;
  description: string;
  rquirements: string;
};

interface ListedJobsProps {
  jobs: Job[];
  setSavedJobs: React.Dispatch<React.SetStateAction<number[]>>;
  savedJobs: number[];
}

const ListedJobs = ({ jobs, setSavedJobs, savedJobs }: ListedJobsProps) => {
  const navigate = useNavigate();
  const handleSave = (id: number) => {
    const item = savedJobs.find((j) => j === id);
    if (item) {
      setSavedJobs(savedJobs.filter((j) => j !== item));
    } else {
      setSavedJobs((prev) => [...prev, id]);
    }
  };

  return (
    <div className="w-full flex items-center justify-between flex-wrap mt-8">
      {!jobs.length && (
        <span className="w-full text-center">
          Não há vaga compatível com o seu filtro!
        </span>
      )}
      {jobs.map((job) => {
        return (
          <div
            key={job.id}
            className="sm:w-[49%] w-full bg-white mb-5 rounded-lg flex items-center lg:justify-between justify-center md:p-8 py-8 px-4 border border-gray-200"
          >
            <div className="flex md:flex-row flex-col md:items-center items-start gap-6">
              <img src={job.logo} alt={job.title} className="w-[70px]" />
              <div className="flex flex-col gap-[6px]">
                <span className="font-semibold text-purple-700 text-[22px]">
                  {job.title}
                </span>
                <div className="flex items-center gap-2">
                  <BusinessOutline
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                  />
                  <span className="text-[14px] font-medium text-gray-600">
                    {job.company}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <LocationOutline
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                  />
                  <span className="text-[14px] font-medium text-gray-600">
                    {job.workStatus}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <NewspaperOutline
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                  />
                  <span className="text-[14px] font-medium text-gray-600">
                    {job.contractStatus}
                  </span>
                </div>
                <div className="flex flex-col gap-2 self-start">
                  <button
                    onClick={() => navigate(`/jobs/${job.id}`)}
                    className="text-white font-bold text-lg rounded-md bg-purple-700 w-40 h-10 duration-200 hover:bg-purple-600"
                  >
                    Saber mais
                  </button>
                  <div
                    onClick={() => handleSave(job.id)}
                    className={`flex items-center gap-2 cursor-pointer rounded-md justify-center py-1 border border-gray-200 ${
                      savedJobs.some((j) => j === job.id)
                        ? "bg-gray-100"
                        : "bg-gray-200"
                    } `}
                  >
                    {savedJobs.some((j) => j === job.id) ? (
                      <Bookmark color={"#780aa3"} />
                    ) : (
                      <BookmarkOutline color={"#780aa3"} />
                    )}
                    <span className="font-medium text-[14.5px] text-gray-600">
                      {savedJobs.some((j) => j === job.id)
                        ? "Salvo!"
                        : "Salvar"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListedJobs;
