import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

//Used by all configs
const base={
  format: 'iife',
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
},
lib=Object.assign({},base,{
  entry: 'node_modules/date-fns/format/index.js',
  dest: 'public/date.js',
  moduleName: 'forLibUnbundled',
}),
allBundled=Object.assign({},base,{
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  sourceMap: true,
}),
unbundledLib=Object.assign({},allBundled,{
  external: ['date-fns/format'],
  globals: {'date-fns/format': lib.moduleName},
});

const bundle = unbundledLib;
console.log('Bundling to '+bundle.dest);
export default bundle;