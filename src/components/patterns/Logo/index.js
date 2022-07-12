import { theme } from '../../../theme/theme';
import { Box, Text, Image } from '../../../theme/components';
import Link from '../../Link'
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
`

export default function Logo() {
    return (
        <StyledDiv>
            <h1>teste</h1>
        </StyledDiv>
    )
}