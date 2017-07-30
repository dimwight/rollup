import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	entry: 'src/main.js',
	dest: 'public/bundle.js',
	format: 'cjs',
	plugins: [
		resolve(),
		commonjs(),
	],
	sourceMap: true
};