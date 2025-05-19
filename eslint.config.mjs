import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

// This is a configuration file for ESLint, a static code analysis tool for identifying problematic patterns in JavaScript code.

export default defineConfig([
/** @type {import('eslint').Linter.Config[]} */
	export default [
	  {
	    languageOptions: {
	      globals: {
	        ...globals.browser,
	        describe: true,   // Used for grouping tests
	        test: true,       // Used to create tests
	        it: true,        // Alternative way to create tests
	        expect: true,    // Used for test assertions
	        require: true,   // Used in Node.js files like Tailwind config
	        module: true,    // Used in Node.js files like Tailwind config
	        process: true,   // Used for environment variables later
	      },
	    },
	  },
	  pluginJs.configs.recommended,
	];
])

