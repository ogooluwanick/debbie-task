import type { Config } from "tailwindcss";

const config: Config = {
        content: [
                "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
                extend: {
                        colors: {
                                "fg-base": "#292929",
                                "fg-supporting": "#737373",
                                "fg-mild": "#A3A3A3",
                                "fg-subtle": "#525252",
                                "off-black": "#1e1e1e",
                                "brand-subtle": "#7839EE",
                                "base-alt": "#424242",
                        },
                        backgroundColor: {
                                "subtle": "#F7F7F7",
                                "strong": "#E5E5E5",
                                "disabled": "#F5F5F5",
                                "mild": "#FCFCFC",
                        },
                        backgroundImage: {
                                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                                "gradient-conic":
                                        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                        },
                        fontFamily: {
                                sfmono: ['"SF Mono"', 'monospace'],
                        },
                },
        },
        plugins: [],
};

export default config;
