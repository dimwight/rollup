import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  entry: 'src/main.js',
  dest: 'public/bundle.js',
  format: 'cjs',
  sourceMap: true,
  plugins: [
    resolve(),
    commonjs(),
    
    sourcemaps()
  ]
};