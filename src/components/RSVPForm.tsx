import { useState } from "react";
import { FadeInSection } from "./FadeInSection";

export function RSVPForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  async function enviarFormulario(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setEnviando(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw96hLA22m8nLqOZbKuSivFZWrPYppGfTTbYk1-L009Mtgod3rGOyB7YjwdTYMLLh2_cw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({
            nome,
            telefone,
            mensagem,
          }),
        }
      );

      setSucesso(true);

      setNome("");
      setTelefone("");
      setMensagem("");
    } catch (error) {
      console.error(
        "Erro ao enviar:",
        error
      );

      alert(
        "Não foi possível enviar a confirmação."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <FadeInSection>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-lg">
          <div className="text-center">
            <h2 className="text-3xl font-light text-stone-800">
              Confirmar Presença
            </h2>

            <p className="mt-4 text-stone-600">
              Sua presença tornará este momento
              ainda mais especial.
            </p>
          </div>

          {sucesso && (
            <div className="mt-6 rounded-2xl bg-green-100 p-4 text-center text-green-800">
              Presença confirmada com sucesso ❤️
            </div>
          )}

          <form
            onSubmit={enviarFormulario}
            className="mt-10 space-y-4"
          >
            <input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) =>
                setNome(e.target.value)
              }
              required
              className="w-full rounded-2xl border border-stone-300 p-4 outline-none focus:border-emerald-700"
            />

            <input
              type="tel"
              placeholder="WhatsApp (Ex: (85) 99999-9999)"
              value={telefone}
              onChange={(e) => {
                let value =
                  e.target.value.replace(
                    /\D/g,
                    ""
                  );

                value = value
                  .replace(
                    /^(\d{2})(\d)/,
                    "($1) $2"
                  )
                  .replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                  )
                  .slice(0, 15);

                setTelefone(value);
              }}
              required
              className="w-full rounded-2xl border border-stone-300 p-4 outline-none focus:border-emerald-700"
            />

            <textarea
              placeholder="Mensagem para os noivos (opcional)"
              rows={4}
              value={mensagem}
              onChange={(e) =>
                setMensagem(e.target.value)
              }
              className="w-full rounded-2xl border border-stone-300 p-4 outline-none resize-none focus:border-emerald-700"
            />

            <button
              type="submit"
              disabled={enviando}
              className="w-full rounded-2xl bg-emerald-700 py-4 text-white transition hover:bg-emerald-800 disabled:opacity-50"
            >
              {enviando
                ? "Enviando..."
                : "Confirmar Presença ❤️"}
            </button>
          </form>
        </div>
      </section>
    </FadeInSection>
  );
}