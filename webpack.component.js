const glob = require('glob')
const list = {}
// {
//   Card: './components/lib/card/index.ts',
//   Button: './components/lib/Button/index.ts',
//   Input: './components/lib/Input/index.ts',
//   Layout: './components/lib/Layout/index.ts',
//   Transfer: './components/lib/Transfer/index.ts',
//   Upload: './components/lib/upload/index.ts',
// }
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
  output: {
    filename: '[name].umd.js',
    path: 'dist',
    library: 'fly-design',
    libraryTarget: 'umd',
  },
}
