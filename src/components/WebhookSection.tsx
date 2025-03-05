import React, { useState } from "react";
import { Checkbox, Input, RadioButton } from "./Reuseables";

export const WebhookSection: React.FC = () => {
        const [endpoint, setEndpoint] = useState('');
        const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
        const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

        const projectOptions = [
                { id: 'all-team', label: 'All team projects in acme' },
                { id: 'tagged', label: 'Tagged projects' }
        ];

        const eventOptions = [
                'Deployment created',
                'Project created',
                'Deployment error',
                'Project deleted',
                'Deployment cancelled'
        ];

        return (
                <div className="overflow-hidden">
                        <section
                                className="w-full p-3 rounded-[10px] bg-mild pb-[48px]"
                                style={{ boxShadow: "0px 1px 2px 0px #09090B0D, 0px 0px 0px 1px #09090B0D" }}
                        >
                                <form>
                                        <div className="w-full mb-[20px]">
                                                <label className="font-medium text-sm block mb-2">Endpoint</label>
                                                <Input
                                                        placeholder="https://myapp.com/webhooks"
                                                        value={endpoint}
                                                        onChange={setEndpoint}
                                                />
                                        </div>

                                        <div className="w-full mb-[20px]">
                                                <h6 className="font-medium text-sm block mb-2">Projects</h6>
                                                <div className="flex items-center flex-wrap gap-[20px] select-none">
                                                        {projectOptions.map((project) => (
                                                                <RadioButton
                                                                        key={project.id}
                                                                        id={project.id}
                                                                        label={project.label}
                                                                        checked={selectedProjects.includes(project.id)}
                                                                        onChange={(checked) => {
                                                                                if (checked) {
                                                                                        setSelectedProjects([project.id]);
                                                                                } else {
                                                                                        setSelectedProjects([]);
                                                                                }
                                                                        }}
                                                                />
                                                        ))}
                                                </div>
                                        </div>

                                        <div className="w-full mb-3">
                                                <h6 className="font-medium text-sm block mb-2">Events</h6>
                                                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 w-full h-full p-3 bg-disabled rounded-[10px] select-none">
                                                        {eventOptions.map((event, index) => (
                                                                <Checkbox
                                                                        key={`event-${index}`}
                                                                        id={`event-${index}`}
                                                                        label={event}
                                                                        checked={selectedEvents.includes(event)}
                                                                        onChange={(checked) => {
                                                                                if (checked) {
                                                                                        setSelectedEvents(prev => [...prev, event]);
                                                                                } else {
                                                                                        setSelectedEvents(prev => prev.filter(e => e !== event));
                                                                                }
                                                                        }}
                                                                />
                                                        ))}
                                                </div>
                                        </div>
                                </form>
                        </section>
                </div>
        );
};

export default WebhookSection;
