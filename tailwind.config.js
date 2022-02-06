/**
 * Given a hex color, return a function that returns a CSS rgb or rgba string
 * @param hex - The hex value of the color.
 * @returns A function that returns a string.
 */
function colorParser(hex) {
  /* Converting a hexadecimal color code to an RGB color code. */
  var rgb = hex
    .replace("#", "")
    .match(/.{1,2}/g)
    .map((v) => parseInt(v, 16));

  var value = rgb.toString().replaceAll(",", " ");

  /* Given a value and an opacity, return a string representing the color. */
  return ({ opacityValue }) => {
    /* If the opacity value is undefined, return the value as a rgb string. Otherwise, return the value
    and the opacity value as a rgba string. */
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
          1: colorParser("#818cf8"),
          2: colorParser("#6366f1"),
          3: colorParser("#4f46e5"),
        },
        secondary: {
          1: colorParser("#475569"),
          2: colorParser("#334155"),
          3: colorParser("#1e293b"),
        },
        tertiary: {
          1: colorParser("#4b5563"),
          2: colorParser("#374151"),
          3: colorParser("#1f2937"),
        },
        quaternary: {
          1: colorParser("#000000"),
        },
      },
    },
  },
  plugins: [],
};
