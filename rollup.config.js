import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import path from 'path';

const formatPath=path.resolve('public/formatTs.js')
console.log(formatPath);

const bundles ={
internal:{
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
},
external:{
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  external: [
    path.resolve('./public/formatTs.js')
  ],
  globals: {
    formatPath: 'format',
  },
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
},
format:{
  entry: 'node_modules/date-fns/format/index.js',
  dest: 'public/formatTs.js',
  format: 'es',
  moduleName:'format',
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
}};

if(true){
  bundles.format.format='iife';
  bundles.format.dest='public/formatJs.js';
}
const bundle = bundles.external;
console.log('Bundling to '+bundle.dest)
export default bundle;