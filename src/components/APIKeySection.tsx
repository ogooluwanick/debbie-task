import { useState } from "react";
import { Input } from "./Reuseables";

 const APIKeySection: React.FC = () => {
        const [apiKeyName, setApiKeyName] = useState('');

        return (
                <div className="overflow-hidden">
                        <section
                                className="w-full p-3 rounded-[10px] bg-mild pb-[48px]"
                                style={{ boxShadow: "0px 1px 2px 0px #09090B0D, 0px 0px 0px 1px #09090B0D" }}
                        >
                                <h6 className="font-medium text-sm flex items-center gap-1">
                                        <span>Create new API key</span>
                                </h6>
                                <p className="text-fg-supporting text-[13px] leading-[19.5px] mb-2">
                                        Your secret API Key will be shared with all users belonging to your organization.
                                </p>

                                <div className="w-full mb-[20px]">
                                        <Input
                                                placeholder="API key name"
                                                value={apiKeyName}
                                                onChange={setApiKeyName}
                                        />
                                </div>
                        </section>
                </div>
        );
};

export default APIKeySection;
