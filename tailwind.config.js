/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "header-background":
                    "url('./client/images/wallpaper-background.jpg')",
                "login-wrapper": "url(./client/images/login-wrapper.jpg)",
                "login-footer": "url(./client/images/bookrow.jpg)",
            },
            fontFamily: {
                pacifico: ["Pacifico", "system-ui"],
            },
            boxShadow: {
                "3xl": "0 2px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 10px 0 rgba(0, 0, 0, 0.2)",
            },
            variants: {
                fill: ["hover", "focus"],
            },
        },
    },
    plugins: [],
};
