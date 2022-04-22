import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import React, { useState } from 'react'
import { Pokemon } from '../../interfaces';
import localFavorites from '../../utils/localFavorites';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export const PokemonLayout = ({pokemon}:{pokemon: Pokemon}) => {

  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsFavorite(!isFavorite);
    if(isFavorite) return;
    confetti({
      zIndex: 999,
      particleCount: 150,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })
  }

  useEffect(() => {
    setIsFavorite(localFavorites.isInFavorite(pokemon.id));
  }, [pokemon.id]);

  return (
    <Grid.Container css={{padding: '1rem', display: 'flex'}} gap={2}>
      <Grid css={{padding: '2rem'}} xs={12} md={4}>
        <Card hoverable>
          <Card.Body>
            <Image
              src={pokemon.sprites.other?.dream_world.front_default || '/image-notfound.png'}
              alt={pokemon.name}
              width="100%"
              height={200}
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} md={8}>
        <Card>
          <Card.Header css={{display: 'flex', justifyContent:'space-between'}}>
            <Text h1 transform='capitalize'>
              {pokemon.name}
            </Text>
            <Button
              onClick={toggleFavorite}
              color='gradient'
              ghost={!isFavorite}
            >
              {isFavorite ? 'En favoritos' : 'Guardar en favoritos'}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>
              Attacks:
            </Text>
            <ul>
              {pokemon.abilities.map(some => (
                <li key={some.slot}>
                  <Text size={20}>{some.ability.name}</Text>
                </li>
              ))}
            </ul>
          </Card.Body>
          <Card.Footer css={{padding: '1rem'}}>
            <Text size={20}>
              Sprites:
            </Text>
            <Container direction='row' display='flex' justify='space-around'>
              <Image 
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image 
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image 
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image 
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  )
}
