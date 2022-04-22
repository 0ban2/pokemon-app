import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text size={30}>No hay pokémons favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/122.svg'
        css={{
          opacity: .2,
        }}
        width={250}
        height={250}
      />
    </Container>
  )
}
