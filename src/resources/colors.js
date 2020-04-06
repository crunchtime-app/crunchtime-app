// Nice colors
const hues = {
    // darkPurple: '#2c003e',
    lightPurple: '#a99cd6',
    mint: '#86fde8',

    darkBlue: '#24283b',
    aqua: '#2290BF',

    white: '#FFFFFF',


    lightGrey: '#EEEFF3',
    grey: '#C3C5C7',

    /* Colors I like, not currently in use */
    // purple: '#512b58',
    blue: '#1c60bf',
    lightAqua: '#84CEEB',
    // pink: '#ea2e35',
    // yellow: '#FFAA15'
};

/* Colors for specific things,
so they can be changed in one place */
const palette = {
    backgroundTop: hues.lightPurple,
    backgroundBottom: hues.mint,
    body: hues.darkBlue,
    action: hues.aqua,
    modalShadow: hues.darkBlue + 'aa',
    inputBackground: hues.white
}

export default {...hues, ...palette};