module.exports = {
content: ["./index.html", "./src/**/*.{js,jsx}"],
theme: {
extend: {
animation: {
"spin-slow": "spin 4s linear infinite",
"snow": "snow 10s linear infinite",
},
keyframes: {
snow: {
"0%": { transform: "translateY(-100%)" },
"100%": { transform: "translateY(100vh)" },
},
},
fontFamily: {
festive: ["'Mountains of Christmas'", "cursive"],
},
},
},
plugins: [],
};