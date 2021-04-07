module.exports = {
  presets: [
    "@babel/env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties"],
    ["@babel/plugin-transform-typescript"]
  ]
};