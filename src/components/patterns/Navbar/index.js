import { theme } from '../../../theme/theme';
import { Box, Text } from '../../../theme/components';
import Link from '../../Link'

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

            <ul>
                <li><Link href="/" >Home</Link></li>
                <li><Link href="/portfolio" >Portfolio</Link></li>
                <li><Link href="/contato" >Contato</Link></li>
            </ul>
      </Box>
    </Box>
  )
}