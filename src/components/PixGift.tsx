import { FadeInSection } from "./FadeInSection";

export function PixGift() {
  const copiarPix = async () => {
    await navigator.clipboard.writeText(
      "85985805306"
    );

    alert("Chave PIX copiada!");
  };

  return (
    <FadeInSection>
      <section className="bg-stone-50 px-6 py-16">
        <div className="mx-auto max-w-lg text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-stone-500">
            Presente aos Noivos
          </p>

          <h2 className="text-3xl font-light text-stone-800">
            Pix para Presente
          </h2>

          <p className="mt-6 text-stone-600">
            Sua presença já é um presente para nós.
            Mas caso deseje nos presentear,
            disponibilizamos nossa chave Pix.
          </p>

          <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-lg">
            <p className="text-sm text-stone-500">
              Chave Pix
            </p>

            <p className="mt-2 text-xl font-medium text-stone-800">
              (85) 98580-5306
            </p>

            <p className="mt-4 text-sm text-stone-600">
              Maria Amanda Souza de Araújo Ramos
            </p>

            <button
              onClick={copiarPix}
              className="
                mt-6
                w-full
                rounded-2xl
                bg-emerald-700
                py-4
                text-white
                transition
                hover:bg-emerald-800
              "
            >
              Copiar Chave Pix
            </button>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}