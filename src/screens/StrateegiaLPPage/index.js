import Footer from '../../components/patterns/Footer'
import Link from '../../components/Link'
import { theme } from '../../theme/theme';
import { Image, Box, Text, Icon, Input, Button } from '../../theme/components';

const LOGO_RAFAEL_VARELA_URL = '/images/logoMd.png';
const SIDE_IMAGE_URL = '/images/telaWeb.png'

function SideImage() {
  return (
    <Box
      styleSheet={{
        paddingHorizontal: {
          md: theme.space.x8,
        },
        marginHorizontal: {
          sm: 'auto'
        },
        maxWidth: {
          sm: theme.space.xcontainer_md,
        }
      }}
    >
      <Box
        styleSheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x0
          },
          width: {
            lg: theme.space["x1/2"],
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16,
          },
          paddingBottom: {
            lg: theme.space.x16,
          },
          position: {
            sm: 'relative',
            lg: 'absolute',
          }
        }}
      >
        <Box 
          styleSheet={{
            height: {
              lg: theme.space["x1/1"],
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: 'none'
            },
            position: 'relative',
            paddingHorizontal: {
              sm: theme.space.x0,
            },
            paddingLeft: {
              lg: theme.space.x12,
            },
            marginRight: {
              lg: `-${theme.space.x40}`,
            },
            marginHorizontal: {
              sm: 'auto',
            },
          }}
        >
          <Image
            styleSheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4,
              },
              maxWidth: {
                lg: "none",
              },
              width: {
                lg: "auto",
              },
              height: {
                lg: theme.space["x1/1"],
              },
            }}
            src={SIDE_IMAGE_URL}
            alt="Treinamento com a roberta arcoverde no alura cases, falando sobre o stackoverflow"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default function StrateegiaLP() {
  return (
    <Box>
      <Box
        as="main"
        styleSheet={{
          flex: 1,
          backgroundColor: theme.colors.neutral["050"],
        }}
      >
        <Box
          styleSheet={{
            overflow: 'hidden',
            position: {
              lg: 'relative',
            },
            paddingTop: {
              xs: theme.space.x6,
              sm: theme.space.x12,
            },
            paddingVertical: {
              md: theme.space.x20,
              lg: theme.space.x24,
            },
          }}
        >
          <Box
            styleSheet={{
              marginHorizontal: 'auto',
              paddingHorizontal: {
                xs: theme.space.x4,
                sm: theme.space.x6,
                lg: theme.space.x8,
              },
              maxWidth: {
                sm: theme.space.xcontainer_md,
                lg: theme.space.xcontainer_lg,
              },
              display: {
                lg: "grid",
              },
              gap: {
                lg: theme.space.x24,
              },
              gridTemplateColumns: {
                lg: "repeat(2, minmax(0, 1fr))",
              }
            }}
          >
            <Box>
              <Box styleSheet={{
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
                    height: theme.space.x11,
                  }}
                  src={LOGO_RAFAEL_VARELA_URL}
                  alt="Logo Rafael Varela"
                />
                <h1>Rafael Varela</h1>
              </Box>
              <Box
                styleSheet={{
                  marginTop: {
                    xs: theme.space.x16,
                    sm: theme.space.x20,
                  },
                }}
              >
                <Box styleSheet={{
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
                  
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        backgroundColor: theme.colors.primary["100"],
                        paddingHorizontal: theme.space['x2.5'],
                        paddingVertical: theme.space['x1'],
                        marginRight: theme.space.x2,
                        marginBottom: {
                          xs: theme.space.x2,
                          sm: theme.space.x0
                        },
                      }}
                    >
                      Projeto em WordPress
                    </Text>
                  <Link
                  href="/faq" 
                  >
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        display: 'inline-flex',
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        alignItems: 'center',
                      }}
                    >
                      <Text>Clique aqui e solicite o seu site</Text>
                    </Text>
                  </Link>
                </Box>
                <Box
                  styleSheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm,
                  }}
                >
                  <Text
                    as="h1"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading1,
                      color: theme.colors.neutral["900"],
                    }}
                  >
                    Landing page Strateegia
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral["500"],
                      marginTop: theme.space.x6,
                    }}
                  >
                    Neste projeto recebi um template com todas as páginas e os textos vindo dos designers e redatores e fiquei responsavel por desenvolver todo o site
                    fazendo uso de WordPress com Elementor.
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral["500"],
                      marginTop: theme.space.x6,
                    }}
                  >
                    Uma landing page com blog e planos, toda responsiva e em dois idiomas.
                  </Text>
                </Box>
                <Box
                  as="form"
                  action="#"
                  styleSheet={{
                    display: {
                      sm: 'flex',
                    },
                    marginTop: theme.space.x12,
                    width: {
                      sm: theme.space['x1/1'],
                    },
                    maxWidth: {
                      sm: theme.space.xcontainer_lg,
                    }
                  }}
                >
                  <Box
                    styleSheet={{
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <Text
                      as="label"
                      htmlFor="email"
                      styleSheet={{
                        srOnly: true,
                      }}
                    >
                      Email address
                    </Text>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Coloque seu email aqui"
                    />
                  </Box>
                  <Box 
                    styleSheet={{
                      marginTop: {
                        xs: theme.space.x4,
                        sm: theme.space.x0,
                      },
                      marginLeft: {
                        sm: theme.space.x3,
                      },
                    }}
                  >
                    <Button
                      type="submit"
                      // button variant
                    >
                      Entre em contato
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <SideImage />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}