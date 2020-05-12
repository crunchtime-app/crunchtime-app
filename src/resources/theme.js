import colors from './colors';

const dimensions = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSizes: [12, 14, 16, 20, 24, 32],
    fontWeights: [300, 500, 700]
};


const theme = {
    ...dimensions,
    colors
};

console.log('!@#!@#theme:', theme);

export default theme;
