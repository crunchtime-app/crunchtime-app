import colors from './colors';

const dimensions = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    sizes: [0, '25%', '33%', '50%', '67%', '75%', '100%'],
    fontSizes: [12, 14, 16, 20, 24, 32],
    fontWeights: [300, 500, 700]
};


const theme = {
    ...dimensions,
    colors
};

export default theme;
