module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native",
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
        ],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // Allow to use jsx in js file
        "react/require-extension": "off",
        "arrow-parens": ["error", "as-needed"],
        "quote-props": ["error", "consistent"],
        "object-shorthand": ["error", "consistent"],
        "import/no-unresolved": [2, { ignore: ['\.png$', '\.jpg$'] }],
        "react-native/no-unused-styles": "error",
    },
    "globals": {
        "__DEV__": true
    }
}
