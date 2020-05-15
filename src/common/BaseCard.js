import styled from 'styled-components/native';
import {color, space, flexbox} from 'styled-system';

// import {colors} from '../resources';

    // /* background: ${colors.white}; */
const BaseCard = styled.View`
    width: 100%;
    min-height: 80px;
    border-radius: 20px;
    ${color}
    ${space}
    ${flexbox}
`;

BaseCard.defaultProps = {
    my: 1,
    mx: 0,
    bg: 'offwhite',
    alignItems: 'center',
    flexDirection: 'row'
};

export default BaseCard;
