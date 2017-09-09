# rollup

- Based on https://github.com/rollup/rollup-starter-app
- TS support including sourcemaps
- Debug frames in Webstorm
- Headless with Node
- Test for tree-shaking
- And for minimal browser bundle with library

Bundles in 'rollup.config.js':
- _src/main.js_ imports _src/myDate.js_ which in turn imports
`dateFormat-fns/format` as `dateFormat`.
- `includeLib` bundles everything as _public/rollup.js_ which
runs and launches 
- `extractLib` bundles `dateFormat-fns/format` 
as _public/dateFormat.js_ 
- `excludeLib` bundles the app, which launches  
but doesn't run because it can't import the lib.  
```
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

const common = {
  format: 'iife',
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
};
const includeLib = Object.assign({}, common, {
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  sourceMap: true,
});
const extractLib = Object.assign({}, common, {
  entry: 'node_modules/date-fns/format/index.js',
  dest: 'public/dateFormat.js',
  moduleName: 'dateFormat',
});
const excludeLib = Object.assign({}, includeLib, {
  external: ['date-fns/format'],
  globals: {'date-fns/format': extractLib.moduleName},
});

const bundle = excludeLib;// includeLib|extractLib|excludeLib
console.log('Bundling to '+bundle.dest);
export default bundle;