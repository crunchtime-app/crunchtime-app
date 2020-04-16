// Nice colors
const hues = {
    // darkPurple: '#2c003e',
    // lightPurple: '#a99cd6',
    // mint: '#86fde8',

    darkBlue: '#021B79',
    darkerBlue: '#24283b',
    aqua: '#29A7B5',

    white: '#FFFFFF',


    lightGrey: '#EEEFF3',
    grey: '#C3C5C7',

    /* Colors I like, not currently in use */
    // purple: '#512b58',
    blue: '#1c60bf',
    bluePurple: '#396afc',
    darkBluePurple: '#2948ff',
    lightAqua: '#84CEEB',
    // pink: '#ea2e35',
    // yellow: '#FFAA15'
};

/* Colors for specific things,
so they can be changed in one place */
const palette = {
    backgroundTop: hues.bluePurple,
    backgroundBottom: hues.darkBluePurple,
    body: hues.darkerBlue,
    action: hues.aqua,
    modalShadow: hues.darkerBlue + 'aa',
    inputBackground: hues.white
}

export default {...hues, ...palette};