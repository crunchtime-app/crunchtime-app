import styled from 'styled-components/native';
import colors from '../resources/colors';

const Page = styled.View`
    background: ${props => props.colorful ? colors.purple : colors.white};
    flex: 1;
	justify-content: ${props => props.centered ? 'center' : 'space-between'};
    align-items: center;
    display: flex;
`;



export default Page;