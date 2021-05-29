// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        safeList: [],
        content: [
            './index.html',
            './src/**/*.tsx',
            './src/**/*.ts',
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'warm-gray': colors.warmGray,
                teal: colors.teal,
                // cyan: colors.cyan,
            }
        },
    },
    plugins: [
        // ...
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio')
    ]
    // ...
}