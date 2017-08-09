import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import path from 'path';

const plugins= [
  resolve(),
  commonjs(),
  sourcemaps()
];

const dateTsPath=path.resolve('public/dateTs.js');

console.log('datePath='+dateTsPath);

const date={
  entry: 'node_modules/date-fns/format/index.js',
  dest: 'public/dateTs.js',
  format: 'es',
  moduleName:'date',
  plugins: plugins
},
node={
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  plugins: plugins
},

browser={
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  external: [dateTsPath],//What makes it work.
  globals: {
    datePath: 'date', //Makes no odds either way
  },
  plugins: plugins
};

if(true){
  date.format='iife';
  date.dest='public/dateJs.js';
}
const bundle = browser;
console.log('Bundling to '+bundle.dest);
export default bundle;