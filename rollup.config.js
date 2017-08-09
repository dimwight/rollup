import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

const plugins= [
  resolve(),
  commonjs(),
  sourcemaps()
];

const libExternal={
  entry: 'node_modules/date-fns/format/index.js',
  dest: 'public/date.js',
  format: 'iife',
  moduleName:'silly',
  plugins: plugins
},
nodeOrBrowserLibBundled={
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  plugins: plugins
},
browserOnlyLibExternal={
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  format: 'iife',
  sourceMap: true,
  external: ['date-fns/format'],
  globals: {'date-fns/format': libExternal.moduleName},
  plugins: plugins
};

const bundle = browserOnlyLibExternal;
console.log('Bundling to '+bundle.dest);
export default bundle;