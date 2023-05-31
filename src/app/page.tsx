import Image from 'next/image'
import GamesIllustration from '../assets/games.svg'
import MoviesIllustration from '../assets/movies.svg'
import BooksIllustration from '../assets/books.svg'

export default function Home() {
  const randomIllustration = Math.ceil(Math.random() * 3)

  return (
    <main className="container mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          {randomIllustration === 1 && (
            <Image
              src={GamesIllustration}
              alt="Games"
              className="animate-wiggle animate-duration-[5000ms] animate-infinite animate-ease-in-out"
            ></Image>
          )}
          {randomIllustration === 2 && (
            <Image
              src={MoviesIllustration}
              alt="Movies"
              className="animate-wiggle animate-duration-[5000ms] animate-infinite animate-ease-in-out"
            ></Image>
          )}
          {randomIllustration === 3 && (
            <Image
              src={BooksIllustration}
              alt="Books"
              className="animate-wiggle animate-duration-[5000ms] animate-infinite animate-ease-in-out"
            ></Image>
          )}
          <div>
            <h1 className="text-5xl font-bold">
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-secondary">
                  Minha Estante
                </div>
              </div>
            </h1>
            <p className="py-6">
              O lugar para você guardar e compartilhar suas experiências.
              <br />
              Trazendo um pedacinho do físico pro mundo virtual.
            </p>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <button className="btn-primary btn">Fazer Login</button>
              <button className="btn-outline btn-secondary btn">
                Criar Conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
