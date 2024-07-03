import Background from '../components/Background'
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Interests from '../components/Interests';
import Tecnologies from '../components/Tecnologies'
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div>
      <Background />
      <Head>
        <link rel="icon" href="/img/favicon.ico" /> 
        <title>Perfil de Usuario</title>
      </Head>
      <Header />
      <About />
      <Interests interests={['Ver peliculas', 'Musica', 'Viajar', 'Programar']} />
      <Tecnologies />
      <ContactForm />
    </div>
  );
}
