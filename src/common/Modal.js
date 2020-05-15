import styled from 'styled-components/native';

import {colors} from '../resources';

const Container = styled.View`
    background: ${colors.lightGrey};
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto auto;
    border-radius: 20px;
    padding: 40px;
`;

export default Container;