const colors = require('tailwindcss/colors');

const sans = ['Nunito', 'sans-serif'];
const code = ['agave Nerd Font', 'agave Nerd Font Mono', 'agave NF', 'sans-serif'];
const serif = ['Arvo', 'serif'];

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sans,
            serif,
            mono: code,
            code,
            display: sans,
            body: sans,
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            black: colors.black,
            gray: colors.trueGray,
            rose: colors.rose,
            teal: colors.teal,
            magenta: {
                50: '#FF97BC',
                100: '#FE7EAC',
                200: '#FE659C',
                300: '#FD4C8C',
                400: '#FC347C',
                500: '#FC1B6C',
                600: '#F9045C',
                700: '#DF0553',
                800: '#C5054A',
                900: '#AC0441',
                default: '#ff317b',
            },
            red: {
                50: '#E07386',
                100: '#DB5E74',
                200: '#D64A63',
                300: '#D13651',
                400: '#C02D47',
                500: '#AB2940',
                600: '#962438',
                700: '#812031',
                800: '#6C1B29',
                900: '#571622',
            },
            redsun: {
                50: '#fdece7',
                100: '#fbd9d0',
                200: '#f9c7b8',
                300: '#f7b4a1',
                400: '#f4a28a',
                500: '#f28f73',
                600: '#ef7d5c',
                700: '#ed6b45',
                800: '#ea582f',
                900: '#e74618',
            },
            sepia: {
                50: '#F7F2EE',
                100: '#EFE5DC',
                200: '#E6D7CB',
                300: '#DECABA',
                400: '#D5BDA9',
                500: '#CDB098',
                600: '#C4A388',
                700: '#BB9677',
                800: '#B28967',
                900: '#A97C56',
            },
            watchos: {
                red: '#df1125',
                neonpink: '#fb212f',
                electricpink: '#fc3644',
                hibiscus: '#fb0049',
                pink: '#fd4154',
                pinkcitrus: '#ea383a',
                dragonfruit: '#f12e6d',
                pomagranate: '#d80e4f',
                camellia: '#bf3138',
                redrose: '#ab1438',
                plum: '#81323d',
                // ---------------
                orange: '#fc4e12',
                clementine: '#fd513b',
                apricot: '#fc5c42',
                papaya: '#fd7036',
                kumquat: '#fd7441',
                lightorange: '#fd820b',
                peach: '#e0694e',
                flamingo: '#ca6f59',
                rosegold: '#e99475',
                pinksand: '#feb69c',
                lightpink: '#f19f9d',
                vintagerose: '#f29c98',
                grapefruit: '#fda27e',
                // ---------------
                cream: '#ffe0ab',
                mellowyellow: '#f7f6af',
                canaryyellow: '#ffda3a',
                pollen: '#fecb4d',
                yellow: '#e8c511',
                flashlight: '#faed0b',
                lemoncream: '#ffeb6d',
                flash: '#dff81e',
                green: '#80e220',
                spearmint: '#77ea7e',
                mint: '#a2ec8e',
                beryl: '#d0f2b1',
                seafoam: '#cff1d6',
                turquoise: '#91cec2',
                // ---------------------
                blue: '#1ea5fc',
                lightblue: '#5ebad9',
                cerulian: '#87b9e7',
                surfblue: '#1871ac',
                pacificgreen: '#0f6d8e',
                bluecobalt: '#3a6b8e',
                darkteal: '#2c6184',
                bluehorizon: '#1e538f',
                denimblue: '#4b709a',
                linenblue: '#455785',
                alaskanblue: '#525c73',
                deepnavy: '#3a4565',
                midnightblue: '#323b65',
                // -------------------------
                purple: '#8962f8',
                ultraviolet: '#5f41b2',
                lilac: '#a990dd',
                oceanblue: '#6273bd',
                delftblue: '#4662b2',
                indigo: '#474e95',
                lavendergray: '#757397',
                lavender: '#a58998',
                cocoa: '#8b7d7d',
                // -------------------------
                stormgray: '#578887',
                cactus: '#5b7971',
                pinegreen: '#4e6c54',
                cyprusgreen: '#cda986',
                northernblue: '#638a8d',
                azure: '#788991',
                mistblue: '#a7ab99',
                darkolive: '#7c7a66',
                khaki: '#7a6e49',
                softwhite: '#d8c9af',
                antiquewhite: '#cda986',
                yellowgold: '#cc996d',
                gold: '#b08053',
                camel: '#a97d4f',
                walnut: '#a17455',
                stone: '#a28872',
                pebble: '#9f8d7e',
                coastalgray: '#715d50',
            },
            'flat-r-cloud': {
                1: '#F4EDF6',
                2: '#F8D9D5',
                3: '#D8E2EC',
                4: '#F2E4F9',
                5: '#FDE1F7'
            },
            'flat-affect': {
                1: '#E3EEFF',
                2: '#E8FFFF',
                3: '#E1FAFC',
                4: '#EDF9FF',
            },
            'flat-earth': {
                1: '#59AE7F',
                2: '#64C4AF',
                3: '#91CED7',
                4: '#CCEBC0',
                5: '#D9F5BE'
            }
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
