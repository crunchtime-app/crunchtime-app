import styled from 'styled-components/native';

import {colors} from '../../resources';

const BaseCard = styled.View`
    background: ${colors.white};
    width: 100%;
    min-height: 80px;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: 15px;
    margin: 5px 0;
`;

export default BaseCard;