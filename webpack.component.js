const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const glob = require('glob')
const list = {}

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.ts`)
  console.log('files: ', files)
  for (let file of files) {
    const component = file.split(/[/.]/)[2]
    console.log('component: ', component)
    if (component === 'index') {
      continue
    }
    list[component] = `./${file}`
  }
  console.log(list)
}

makeList('components/lib', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'fly-design',
    libraryTarget: 'umd',
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
    ],
  },
}
