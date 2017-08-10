import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

//Convenience function
function assignAdding(target, add) {
  return Object.assign(Object.assign(target), add);
}

//Used by all configs
const base={
  format: 'iife',
  plugins: [
    resolve(),
    commonjs(),
    sourcemaps()
  ]
},
lib=assignAdding(base,{
  entry: 'node_modules/date-fns/format/index.js',
  dest: 'public/date.js',
  moduleName: 'forLibUnbundled',
}),
allBundled=assignAdding(base,{
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  sourceMap: true,
}),
libUnbundled=assignAdding(allBundled,{
  external: ['date-fns/format'],
  globals: {'date-fns/format': lib.moduleName},
});

const bundle = lib;
console.log('Bundling to '+bundle.dest);
export default bundle;