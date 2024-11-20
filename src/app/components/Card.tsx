import styled from 'styled-components';

const Card = styled.div<{ 
    $primary?: boolean;
    $padding?: string;
    }>`
    background-color: ${props => props.$primary ? 'blue' : 'white'};
    color: ${props => props.$primary ? 'white' : 'blue'};
    border: 2px solid blue;
    border-radius: 3px;
    padding: ${props => props.$padding || '5px 10px'};
    margin: 5px;
    cursor: pointer;
    `;

export default Card;