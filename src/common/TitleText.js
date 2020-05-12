import React from 'react';

import Text from './Text';

const TitleText = props => (
    <Text {...props} />
);

TitleText.defaultProps = {
    opacity: '0.85',
    fontSize: 4,
    fontWeight: 1,
    color: 'title'
}

export default TitleText;