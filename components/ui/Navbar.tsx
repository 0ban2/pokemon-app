import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react'

export const Navbar = () => {
  const {theme} = useTheme();
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '.25rem 2rem',
      backgroundColor: theme?.colors.gray900.value,
    }}>
      <NextLink href='/' passHref>
        <Link css={{display: 'flex', alignItems: 'center'}}>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
            alt="Ícono de la aplicación"
            width={70}
            height={70}
          />
          <Text h2>P</Text>
          <Text h3>okémon</Text>
        </Link>
      </NextLink>
      <Spacer css={{
        flex: 1,
      }}/>
      <NextLink href='/favorites' passHref>
        <Link>
          <Text>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}
