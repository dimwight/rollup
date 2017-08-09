import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

const external = false;

export default external ? {
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  // external: ['./src/myFormat.js'],
  external: ['date-fns/format'],
  globals: {
    // 'date-fns/format': 'formatMe',
  },
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
        'node_modules/date-fns/format': ['format']
      }
    }),
    sourcemaps()
  ]
};