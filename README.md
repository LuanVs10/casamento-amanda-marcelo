# Site de Casamento - Amanda & Marcelo

## Sobre o Projeto

Este projeto consiste em um site de casamento desenvolvido para Amanda e Marcelo com o objetivo de disponibilizar informações sobre o evento, permitir a confirmação de presença dos convidados e fornecer uma forma prática de presentear os noivos através do Pix.

O sistema foi desenvolvido utilizando React, TypeScript e Tailwind CSS, oferecendo uma interface moderna, responsiva e de fácil utilização.

---

## Funcionalidades

* Exibição da data do casamento
* Contador regressivo em tempo real
* Mensagem especial aos convidados
* Exibição do convite oficial
* Localização da cerimônia com acesso ao Google Maps
* Formulário de confirmação de presença (RSVP)
* Armazenamento automático das confirmações em Google Sheets
* Área de presentes via Pix
* Galeria/foto da família dos noivos
* Animações suaves com Framer Motion
* Layout responsivo para dispositivos móveis e desktop

---

##  Tecnologias Utilizadas

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Framer Motion

### Backend / Integração

* Google Apps Script
* Google Sheets

### Hospedagem

* GitHub Pages

---

## Estrutura do Projeto

src/

components/

* Hero.tsx
* Countdown.tsx
* Message.tsx
* Invitation.tsx
* Location.tsx
* RSVPForm.tsx
* PixGift.tsx
* Family.tsx
* FadeInSection.tsx

App.tsx

---

##  Fluxo de Funcionamento

1. O usuário acessa o site.
2. Visualiza as informações do casamento.
3. Preenche o formulário de confirmação.
4. O React envia os dados para o Google Apps Script.
5. O Apps Script registra os dados na planilha Google Sheets.
6. O sistema retorna confirmação de sucesso ao usuário.

---

## Armazenamento dos Dados

As confirmações de presença são armazenadas automaticamente em uma planilha Google Sheets contendo:

* Data/Hora
* Nome do convidado
* Telefone
* Mensagem

---

##  Publicação

O projeto está hospedado utilizando GitHub Pages.

### Comandos de Deploy

npm run build

npm run deploy

---

## Desenvolvedor

Luan Victor Souza Alves
