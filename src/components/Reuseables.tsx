import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import toast from "react-hot-toast";

interface CheckboxProps {
        id: string;
        label: string;
        checked?: boolean;
        onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked = false, onChange }) => {
        return (
                <div className="flex items-center cursor-pointer">
                        <input
                                id={id}
                                aria-label={id}
                                type="checkbox"
                                checked={checked}
                                onChange={(e) => onChange?.(e.target.checked)}
                                className="peer hidden"
                        />
                        <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-[4px] app__flex bg-white peer-checked:bg-interactive peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]`}>
                                {checked && <FaCheck size={10} className="text-white" />}
                        </span>
                        <label htmlFor={id} className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting">
                                {label}
                        </label>
                </div>
        );
};

interface RadioButtonProps {
        id: string;
        label: string;
        checked?: boolean;
        onChange?: (checked: boolean) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, checked = false, onChange }) => {
        return (
                <div className="flex items-center cursor-pointer">
                        <input
                                id={id}
                                type="radio"
                                aria-label={id}
                                checked={checked}
                                onChange={(e) => onChange?.(e.target.checked)}
                                className="peer hidden"
                                name="radio-group"
                        />
                        <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-full app__flex peer-checked:bg-brand-subtle peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:bg-disabled  peer-checked:!rounded-full `} />
                        <span className="-ml-2.5 w-1.5 h-1.5 transition-all rounded-full peer-checked:bg-white bg-transparent peer-checked:shadow-[0px_1px_2px_0px_#491C9699]" />
                        <label htmlFor={id} className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting">{label}</label>
                </div>
        );
};

interface InputProps {
        placeholder?: string;
        value?: string;
        onChange?: (value: string) => void;
        type?: 'text' | 'password' | 'email';
}

const Input: React.FC<InputProps> = ({
        placeholder,
        value,
        onChange,
        type = 'text'
}) => {
        return (
                <input
                        type={type}
                        value={value}
                        onChange={(e) => onChange?.(e.target.value)}
                        className="transition placeholder:text-fg-mild text-sm px-3 py-2.5 w-full rounded-[10px] bg-white shadow-[0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#D6D6D6B2] hover:shadow-[0px_0px_0px_3px_#1212170D,0px_1px_2px_0px_#D6D6D6B2,inset_0px_0px_0px_1px_#ECECEC] focus:shadow-[0px_0px_0px_3px_#ECE9FE,0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#A48AFB]"
                        placeholder={placeholder}
                />
        );
};

interface ToggleSwitchProps {
        checked: boolean;
        onChange: (checked: boolean) => void;
        label?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
        checked,
        onChange,
        label
}) => {
        return ( 
                <div className={`flex items-center justify-between gap-2  ${checked?"mb-2":"mb-3"}`}>
                        {label && (
                                <div>
                                        <h6 className="font-medium text-sm flex items-center gap-1">
                                                <span>Sharing is {checked ? "on" : "off"}</span>
                                        </h6>
                                        {!checked && (
                                                <p className="text-fg-supporting text-[13px] leading-[19.5px]">
                                                        To share your workspace with other people you need to publish it first.
                                                </p>
                                        )}
                                </div>
                        )}
                        <label className="inline-flex items-center cursor-pointer">
                                <input
                                        aria-label={label}
                                        type="checkbox"
                                        checked={checked}
                                        onChange={(e) => onChange(e.target.checked)}
                                        className="sr-only peer"
                                />
                                <div className="relative w-8 h-[18px] bg-[#E5E5E5] shadow-[0px_2px_4px_0px_#0000000A] peer-checked:bg-interactive rounded-full peer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-[14px] after:w-[14px] after:transition-all peer-checked:after:translate-x-full" />
                        </label>
                </div>
        );
};

interface CopyButtonProps {
        textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
        const handleCopyClick = () => {
                navigator.clipboard.writeText(textToCopy)
                        .then(() => toast.success("Link copied!", { position: "bottom-right" }))
                        .catch(error => toast.error("Copy failed"));
        };

        return (
                <button
                        onClick={handleCopyClick}
                        className="app__flex flex-row-reverse gap-1 py-1.5 px-2.5 text-fg-base rounded-lg text-sm font-medium w-fit transition hover:bg-brand-subtle hover:text-white shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] group"
                >
                        <span>Copy</span>
                        <IoCopyOutline size={18} className="text-[#525252] group-hover:text-white transition" />
                </button>
        );
};

export {
        Checkbox,
        RadioButton,
        Input,
        ToggleSwitch,
        CopyButton
};