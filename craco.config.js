module.exports = {
  webpack: {
      configure: {
          module: {
              rules: [
                  {
                      test: /\.mjs$/,
                      include: /node_modules/,
                      type: "javascript/auto"
                  }
              ],
          }
      },
  }
}