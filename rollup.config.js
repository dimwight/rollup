import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

//Used by all configs
const common={
  format: 'iife',
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
},
extractLib=Object.assign({},common,{
  entry: 'node_modules/date-fns/format/index.js',
  dest: 'public/date.js',
  moduleName: 'forLibUnbundled',
}),
includeLib=Object.assign({},common,{
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  sourceMap: true,
}),
excludeLib=Object.assign({},includeLib,{
  external: ['date-fns/format'],
  globals: {'date-fns/format': extractLib.moduleName},
});

const bundle = excludeLib;
console.log('Bundling to '+bundle.dest);
export default bundle;