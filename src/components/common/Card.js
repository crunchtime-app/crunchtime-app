import styled from 'styled-components/native';
import colors from '../../resources/colors';

const Card = styled.View`
    background: ${colors.white};
    min-width: 200px;
    min-height: 100px;

    display: flex;
	justify-content: center;
    align-items: center;
	flex-direction: column;

    border-radius: 15px;
    padding: 20px;

`;

export default Card;