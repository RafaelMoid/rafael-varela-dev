import { theme } from '../../../theme/theme';
import { Box, Text } from '../../../theme/components';
import Link from '../../Link'
import styled from 'styled-components';

const LOGO_RAFAEL_VARELA_URL_NAV = 'public/images/logoSm.png';

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: right;
`;

const StyledLi = styled.li`
    margin-left: 2rem;
`;


export default function Navbar() {
  return (
    <Box
      as="footer"
      styleSheet={{
        backgroundColor: theme.colors.primary[100]
      }}
    >
      <Box
        styleSheet={{
          overflow:"hidden",
          maxWidth: theme.space.xcontainer_xl,
          marginLeft: "auto",
          marginRight:"auto",
          paddingVertical:{
            xs: theme.space.x12,
          },
          paddingHorizontal:{
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
        }}
      >
            {/* Dando o seguinte erro: Server Error
                        ReferenceError: Image is not defined

                        This error happened while generating the page. Any console logs will be displayed in the terminal window.
                        Source
                        src\components\patterns\Navbar\index.js (60:22) @ Navbar

                          58 |       }}
                          59 |       src={LOGO_RAFAEL_VARELA_URL_NAV}
                        > 60 |       alt="Logo Rafael Varela da Nav"
                             |          ^
                          61 |     />
                          62 |     <h1>Rafael Varela</h1>
                          63 | </Box> */}
            {/* <Box styleSheet={{
                      display: "inline-flex",
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                    }}>
                <Image
                  styleSheet={{
                    width: "auto",
                    height: theme.space.x10,
                  }}
                  src={LOGO_RAFAEL_VARELA_URL_NAV}
                  alt="Logo Rafael Varela da Nav"
                />
                <h1>Rafael Varela</h1>
            </Box> */}
            <StyledUl>
                <StyledLi><Link href="/" >Home</Link></StyledLi>
                <StyledLi><Link href="/portfolio" >Portfolio</Link></StyledLi>
                <StyledLi><Link href="/contato" >Contato</Link></StyledLi>
            </StyledUl>
      </Box>
    </Box>
  )
}