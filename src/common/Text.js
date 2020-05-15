import styled from 'styled-components/native';
import {color, typography} from 'styled-system';

const Text = styled.Text`
    ${color}
    ${typography}
`;

Text.defaultProps = {
    opacity: '0.85',
    fontSize: 2,
    fontWeight: 0,
    color: 'body'

}

export default Text; 