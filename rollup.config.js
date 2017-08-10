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
libExternal=assignAdding(base,{
  entry: 'node_modules/date-fns/format/index.js',
  dest: 'public/date.js',
  moduleName: 'silly',
}),
nodeOrBrowserLibBundled=assignAdding(base,{
  entry: 'src/main.js',
  dest: 'public/rollup.js',
  sourceMap: true,
}),
browserOnlyLibExternal=assignAdding(nodeOrBrowserLibBundled,{
  external: ['date-fns/format'],
  globals: {'date-fns/format': libExternal.moduleName},
});

const bundle = browserOnlyLibExternal;
console.log('Bundling to '+bundle.dest);
export default bundle;