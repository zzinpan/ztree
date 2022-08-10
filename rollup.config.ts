import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';


class RollupOption {

    input;
    output;
    plugins;

    constructor( outFileName, outFormat ){

        this.input = "./src/Ztree.ts";
        this.output = {
            file: `./dist/${outFormat}/${outFileName}`,
            name: 'Ztree',
            sourcemap: true,
            format: outFormat
        };
        this.plugins = [];

    }

    addPlugin( plugins ){

        this.plugins.push( plugins );
        return this;

    }

}


const Plugin = {

    typescript: typescript({

        tsconfig: './tsconfig.json',
        sourceMap: true

    }),

    terser: terser()

};


const Modules = [
    "esm", "cjs", "iife", "amd", "umd"
];


export default Modules.reduce( ( rollupOptions, module ) => {


    rollupOptions.push(
        new RollupOption( "ztree.js", module )
            .addPlugin( Plugin.typescript )
    );


    rollupOptions.push(
        new RollupOption( "ztree.min.js", module )
            .addPlugin( Plugin.typescript )
            .addPlugin( Plugin.terser )
    );


    return rollupOptions;


}, [] );