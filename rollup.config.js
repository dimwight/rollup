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