import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

const external = true;

export default external ? {
  external: ['./src/myFormat.js'],
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'es',
  sourceMap: true,
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
} : {
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/date-fns/index.js': ['format']
      }
    }),
    sourcemaps()
  ]
};