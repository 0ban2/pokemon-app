import { useRouter } from "next/router";
import { Card, Grid, Image } from "@nextui-org/react"

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon = ({pokemonId}:Props) => {

  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemonId}`)
  }
  
  return (
    <Grid key={pokemonId} xs={6} sm={3} md={2} lg={1}>
      <Card
        clickable
        hoverable
        onClick={onClick}
      >
        <Card.Body>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
            height={200}
          />
        </Card.Body>
      </Card>
    </Grid>
  )
}
