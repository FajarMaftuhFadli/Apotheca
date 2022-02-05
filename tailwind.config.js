function colorParser(hex) {
  var rgb = hex
    .replace("#", "")
    .match(/.{1,2}/g)
    .map((v) => parseInt(v, 16));
  var value = rgb.toString().replaceAll(",", " ");
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(${value})`;
    }
    return `rgb(${value} / ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colorParser("#f0f9ff"),
        secondary: colorParser("#1200aa"),
      },
    },
  },
  plugins: [],
};
