import React from 'react';
import styled from 'styled-components/native';

import {colors} from '../../resources';

const Container = styled.View`
    background: ${colors.lightGrey};
    width: 95%;
    /* height: 90%; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto auto;
    border-radius: 20px;
    padding: 40px;
`;

// const Modal = ({children}) => {
//     return (<Container>{children}</Container>);
// }

export default Container;