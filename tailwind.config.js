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
        base: {
          1: colorParser("#e0f2fe"),
          2: colorParser("#f0f9ff"),
        },
        primary: {
          1: colorParser("#6366f1"),
          2: colorParser("#818cf8"),
          3: colorParser("#4f46e5"),
        },
        secondary: {
          1: colorParser("#64748b"),
          2: colorParser("#94a3b8"),
          3: colorParser("#475569"),
        },
        tertiary: {
          1: colorParser("#000000"),
        },
        quaternary: {
          1: colorParser("#000000"),
        },
      },
    },
  },
  plugins: [],
};
