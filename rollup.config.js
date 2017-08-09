import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import path from 'path';

const datePath=path.resolve('public/dateTs.js')
console.log(datePath);

const date={
  entry: 'node_modules/date-fns/format/index.js',
  dest: 'public/dateTs.js',
  format: 'es',
  moduleName:'date',
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
},
internal={
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

external={
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  external: [datePath],
  // globals: {
  //   datePath: 'date',
  // },
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
};

if(true){
  date.format='iife';
  date.dest='public/dateJs.js';
}
const bundle = external;
console.log('Bundling to '+bundle.dest)
export default bundle;