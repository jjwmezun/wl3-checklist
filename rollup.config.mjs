import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default [{
    external: false,
    input: 'src/index.jsx',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        inlineDynamicImports: true,
        assetFileNames: '[name][extname]',
    },
    plugins: [
        postcss({
            extensions: ['.css', '.scss', '.sass'],
            plugins: [cssnano({ preset: 'default' })],
            extract: true,
            modules: false,
        }),
        nodeResolve(),
        babel(
            {
                exclude: 'node_modules/**',
                presets: [['@babel/preset-react', { useBuiltIns: false }]],
                babelHelpers: 'inline',
            }
        ),
        commonjs(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true,
        }),
        terser(),
    ],
}];
