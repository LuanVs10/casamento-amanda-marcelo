import { FadeInSection } from "./FadeInSection";

export function Family() {
  return (
    <FadeInSection>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-lg">
          <img
            src={`${import.meta.env.BASE_URL}img/familia.jpeg`}
            alt="Família"
            className="
              w-full
              rounded-3xl
              shadow-xl
              object-cover
            "
          />

          <div className="mt-8 text-center">
            <h2 className="text-3xl font-light text-stone-800">
              Esperamos por Você
            </h2>

            <p className="mt-6 leading-8 text-stone-600">
              Será uma grande alegria compartilhar este momento tão especial
              com nossos familiares e amigos.
            </p>

            <p className="mt-4 leading-8 text-stone-600">
              Agradecemos pelo carinho, pelas orações e pela presença em um
              dos dias mais importantes de nossas vidas.
            </p>

            <p className="mt-8 text-lg font-medium text-stone-800">
              Amanda & Marcelo ❤️
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}