import { useState } from "react";
import { CopyButton, Input, ToggleSwitch } from "./Reuseables";

export const ShareWorkspaceSection: React.FC = () => {
        const [isSharing, setIsSharing] = useState(false);
        const [shareLink, setShareLink] = useState('/mylink.com');

        return (
                <div className="overflow-hidden">
                        <section
                                className="w-full p-3 rounded-[10px] bg-mild pb-[48px]"
                                style={{ boxShadow: "0px 1px 2px 0px #09090B0D, 0px 0px 0px 1px #09090B0D" }}
                        >
                                <ToggleSwitch
                                        checked={isSharing}
                                        onChange={setIsSharing}
                                        label="Sharing Workspace"
                                />

                                {isSharing && (
                                        <div className="mb-3">
                                                <div className="w-full mb-3">
                                                        <Input
                                                                value={shareLink}
                                                                onChange={setShareLink}
                                                                placeholder="Share link"
                                                        />
                                                </div>
                                                <CopyButton textToCopy={shareLink} />
                                        </div>
                                )}
                        </section>
                </div>
        );
};

export default ShareWorkspaceSection;
