'use strict';

module.exports = {
    'extends': 'eslint:recommended',
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'modules': true
        }
    },
    'globals': {
        'neo': false,
        'neofonie': false
    },
    'rules': {
        'indent': [
            'error',
            4,
            {
                'ArrayExpression': 1,
                'ObjectExpression': 1,
                'CallExpression': {
                    'arguments': 1
                },
                'FunctionExpression': {
                    'parameters': 'first'
                },
                'FunctionDeclaration': {
                    'parameters': 'first'
                },
                'VariableDeclarator': {
                    'var': 1
                },
                'MemberExpression': 1,
                'SwitchCase': 1,
                'flatTernaryExpressions': false
            }
        ],
        'max-len': [
            'error',
            {
                'code': 120,
                'ignoreComments': true,
                'ignoreTrailingComments': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true
            }
        ],
        'no-unused-vars': 'off',
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
