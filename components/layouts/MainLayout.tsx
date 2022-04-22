import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: JSX.Element;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const MainLayout = ({title, children}: Props) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="Jhon Obando" />
        <meta name="description" content="Información sobre pokemón XXXX" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:title" content={`Aquí encontrarás información sobre ${title || 'Pokémons'}`} />
        <meta property="og:description" content={`Esta es una página con todo lo que necesitas saber acerca de ${title || 'Pokémons'}.`} />
        <meta property="og:image" content={`${origin}/images/pokemon-app.png`} />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}
