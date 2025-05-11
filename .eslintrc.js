module.exports = {
    parser: '@babel/eslint-parser', 
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, 
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    plugins: [
        'react'
    ],
    rules: {
       "no-unused-vars": "off",
       "react/prop-types": "off"
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,  
        node: true,    
        es2021: true    
    },
};
