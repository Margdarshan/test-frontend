import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  // purge: [],
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
    // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #FFF 0%, #D7D3FF 100%)',
        'different-gradient' : 'linear-gradient(180deg, #D7D3FF 0%, #FFF 100%)'
      },
      height: {
        16: "4rem",
      },
      width: {
        36: "9rem",
      },
      colors: {
        body: "#F3F5FE",
        login: "#EBE8F3",
        hero: " #020D2B",
        jee: "#4E18CD",
        step: "#E8E8E8",
        step2: "#BCBCBC",
        welcome: "rgba(2, 13, 43, 0.80)",
        card1: "rgba(81, 29, 204, 0.07)",
        plan: "#020D2B",
        pbtn: "#4E18CD",
        ani1: "rgba(78, 24, 205, 0.12)",
        ani2: "rgba(78, 24, 205, 0.30)",
        ani3: "rgba(78, 24, 205, 0.50)",
        ani4: "rgba(78, 24, 205, 0.50)",
        ani5: "rgba(78, 24, 205, 0.80)",
        glass: "rgba(222, 227, 224, 0.95);",
        predictor: "rgba(1, 12, 43, 0.12)",
        submit: "#4E18CD",
        userbg:'hsba(258, 88%, 80%, 0.12)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
});
