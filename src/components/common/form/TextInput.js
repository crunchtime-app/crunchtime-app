import styled from 'styled-components/native';
import {colors} from '../../../resources';

const TextInput = styled.TextInput`
    background: ${colors.inputBackground};
    padding: 5px;
    font-size: 16px;
    border: 1px solid ${colors.grey};
`;

export default TextInput;