module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    // "extends": "eslint:recommended",
    "extends": "plugin:prettier/recommended",
    parser: "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        allowImportExportEverywhere: true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    },
    "globals": {
        document: true,
        describe: true,
        expect: true,
        it: true
    }
};