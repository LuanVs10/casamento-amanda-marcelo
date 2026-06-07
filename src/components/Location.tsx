import { FadeInSection } from "./FadeInSection";

export function Location() {
  return (
    <FadeInSection>
      <section className="bg-stone-50 px-6 py-16">
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-stone-500">
            Local da Celebração
          </p>

          <h2 className="text-3xl font-light text-stone-800">
            Paróquia Imaculado Coração de Maria
          </h2>

          <p className="mt-6 leading-7 text-stone-600">
            Rua Professor Miramar da Ponte, 305
            <br />
            Henrique Jorge
            <br />
            Fortaleza - CE
          </p>

          <a
            href="https://maps.google.com/?q=Paróquia+Imaculado+Coração+de+Maria+Fortaleza"
            target="_blank"
            rel="noreferrer"
            className="
              mt-8
              inline-flex
              rounded-2xl
              bg-emerald-700
              px-6
              py-4
              text-white
              shadow-lg
              transition
              hover:bg-emerald-800
            "
          >
            📍 Abrir no Google Maps
          </a>
        </div>
      </section>
    </FadeInSection>
  );
}