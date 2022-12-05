/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      boxShadow: { custom: "-10px 18px 70px 0px rgba(0, 0, 0, 0.5)" },
      backgroundImage: {
        "profile-pic": "url('/profilepicture.webp')",
        footer: "url('/footer.svg')",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        monts: ["Montserrat Alternates", "sans-serif"],
      },
    },
    colors: {
      cherry: "#fe003a",
      light: "#edf1fd",
      dark: "#12192c",
      grey: "#878b97",
    },
  },
  plugins: [],
  safelist: ["bg-profile-pic", "bg-footer"],
};
