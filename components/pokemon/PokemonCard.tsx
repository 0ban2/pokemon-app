import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard = ({pokemon: {id, name, image}}:Props) => {

  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${name}`)
  }

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card
        hoverable
        clickable
        onClick={onClick}
      >
        <Card.Body>
          <Card.Image
            src={image}
            alt={name}
            width='100%'
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>{`#${id}`}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
