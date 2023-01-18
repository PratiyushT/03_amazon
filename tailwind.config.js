/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        screens: {
            sm: "740px",
            md: "800px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                amazon_blue: {
                    DEFAULT: "#131921",
                    light: "#232f3E",
                },
                
            },
        },
    },
    plugins: [],
};
