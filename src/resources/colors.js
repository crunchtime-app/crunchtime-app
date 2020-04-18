// Nice colors
const hues = {
    white: '#FFFFFF',
    lightGrey: '#EEEFF3',
    grey: '#C3C5C7',
    blue: '#1c60bf',

    bluePurple: '#396afc',
    darkBlue: '#021B79',
    darkerBlue: '#1A1B24',
    darkBluePurple: '#2948ff',
    yellow: '#F2C94C',
    orange: '#F2994A',
    green: '#1D7146',
    orangeBright: '#F37335'
};

/* Colors for specific things,
so they can be changed in one place */
const palette = {
    backgroundTop: hues.yellow,
    backgroundBottom: hues.orange,
    body: hues.darkerBlue,
    action: hues.orangeBright,
    modalShadow: hues.darkerBlue + 'aa',
    inputBackground: hues.white,
    inactive: hues.grey,
    tabIcons: hues.orangeBright,
};

export default {...hues, ...palette};
