import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import path from 'path';

const external = {
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  external: [
    path.resolve('./public/formatTs.js')
  ],
  globals: {
    // 'date-fns/format': 'formatMe',
  },
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
format={
    entry: 'node_modules/date-fns/format/index.js',
    dest: 'public/formatTs.js',
    format: 'es',
    moduleName:'format',
    sourceMap: true,
    plugins: [
      resolve(),
      commonjs(),
      sourcemaps()
    ]
  };

if(false){
  format.format='iife';
  format.dest='public/formatJs.js'
}
export default [external,internal,format][2];