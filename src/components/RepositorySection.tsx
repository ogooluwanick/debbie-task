import { useState } from "react";
import { Checkbox } from "./Reuseables";

const RepositorySection: React.FC = () => {
        const [selectedRepositories, setSelectedRepositories] = useState<string[]>([]);

        const repositoryOptions = [
                'Deployment created',
                'Deployment error',
                'Deployment cancelled'
        ];

        return (
                <div className="overflow-hidden">
                        <section
                                className="w-full p-3 rounded-[10px] bg-mild pb-[48px]"
                                style={{ boxShadow: "0px 1px 2px 0px #09090B0D, 0px 0px 0px 1px #09090B0D" }}
                        >
                                <h6 className="font-medium text-sm mb-2 flex items-center gap-1">
                                        <span>Connect repositories to</span>
                                        <span className="bg-[#ECE9FECC] text-brand-subtle rounded-md font-medium text-xs py-0.5 px-1 transition hover:text-white hover:bg-brand-subtle block cursor-pointer w-fit">
                                                acme
                                        </span>
                                </h6>

                                <div className="flex flex-col gap-2 mb-3">
                                        {repositoryOptions.map((repo, index) => (
                                                <Checkbox
                                                        key={`repo-${index}`}
                                                        id={`repo-${index}`}
                                                        label={repo}
                                                        checked={selectedRepositories.includes(repo)}
                                                        onChange={(checked) => {
                                                                if (checked) { setSelectedRepositories(prev => [...prev, repo]); }
                                                                else { setSelectedRepositories(prev => prev.filter(r => r !== repo)); }
                                                        }}
                                                />
                                        ))}
                                </div>
                        </section>
                </div>
        );
};

export default RepositorySection;