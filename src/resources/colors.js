// Nice colors
const hues = {
    white: '#FFFFFF',
    lightGrey: '#EEEFF3',
    grey: '#C3C5C7',
    blue: '#1c60bf',

    bluePurple: '#396afc',
    darkBlue: '#1f224d',
    darkerBlue: '#1A1B24',
    darkBluePurple: '#2948ff',
    yellow: '#FCC417',
    orange: '#FCB63C',
    green: '#1D7146',
    orangeBright: '#FC5B31',
    warmDarkGrey: '#3d3933'
};

/* Colors for specific things,
so they can be changed in one place */
const palette = {
    backgroundTop: hues.yellow,
    backgroundBottom: hues.orange,
    body: hues.warmDarkGrey,
    action: hues.orangeBright,
    modalShadow: hues.darkerBlue + 'aa',
    inputBackground: hues.white,
    inactive: hues.grey,
    tabIcons: hues.orangeBright,
};

export default {...hues, ...palette};
