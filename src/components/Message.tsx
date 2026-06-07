import { FadeInSection } from "./FadeInSection";

export function Message() {
  return (
    <FadeInSection>
      <section className="bg-stone-50 px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-lg leading-8 text-stone-700">
            "Assim, eles já não são dois, mas sim uma só carne.
            Portanto, o que Deus uniu, ninguém separe."
          </p>

          <p className="mt-4 text-sm uppercase tracking-widest text-stone-500">
            Mateus 19:6
          </p>

          <div className="mx-auto my-8 h-px w-24 bg-stone-300" />

          <p className="leading-8 text-stone-600">
            Com grande alegria em nossos corações,
            anunciamos a data que diremos o nosso sim diante de Deus
            e de nossos familiares e amigos.
          </p>

          <p className="mt-6 font-medium text-stone-800">
            Você é nosso convidado de honra.
          </p>
        </div>
      </section>
    </FadeInSection>
  );
}