module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    "@babel/preset-react"
  ],
  env: {
    production: {},
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'auto',
            useBuiltIns: 'entry',
            corejs: 3,
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-react',
      ],
    },
  },
}
