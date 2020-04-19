import styled from 'styled-components/native';
import {colors} from '../../../resources';

const TextInput = styled.TextInput`
    background: ${colors.inputBackground};
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${colors.grey};
    border-radius: 10px;
`;

export default TextInput;