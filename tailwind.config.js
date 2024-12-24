/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        mainColor: '#F8F7F3',
        secondryColor: '#FDBD3F',
        lightGrayColor: '#C7C7C7',
      },
      fontFamily: {
        SequelSans: ["Sequel Sans Heavy Disp"],
        SequelSansMedium: ["Sequel Sans Medium Body"],
      },
      backgroundImage:{
        "logo": "url('/black simle .png')",
        "whiteSmile": "url('/white smile.png')",
        "soumyName": "url('/soumy textt.png')",
        "bgBox": "url('/photo-box111.png')",
        "photoWithBg": "url('/photo with box.png')",
        "podcastBg": "url('/portfolio2.png')",
      }
    },
  },
  plugins: [],
};
