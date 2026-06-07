import { FadeInSection } from "./FadeInSection";

export function Invitation() {
  return (
    <FadeInSection>
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-lg">
          <h2 className="mb-8 text-center text-3xl font-light text-stone-800">
            Nosso Convite
          </h2>

          <img
            src="/img/convite.jpeg"
            alt="Convite de casamento"
            className="
              w-full
              rounded-3xl
              border
              border-stone-200
              shadow-xl
            "
          />
        </div>
      </section>
    </FadeInSection>
  );
}