// ==========================================
// 🩷 CÉREBRO DA MAMI - MALVADEZA CLUB 😈
// ==========================================

// Guarda em qual assunto a cliente está
let contexto = "";

// Dados da reserva
let reserva = {
  pessoas: "",
  data: "",
  horario: ""
};


// ==========================================
// ENVIAR MENSAGEM
// ==========================================

function enviarMensagem() {
  let input = document.getElementById("mensagem");
  let texto = input.value.trim();

  if (texto === "") return;

  let historico = document.getElementById("historico");

  // Mostra a mensagem da cliente
  historico.innerHTML += `
    <p class="user">Você: ${texto}</p>
  `;

  input.value = "";

  let mensagem = texto.toLowerCase();

  processarMensagem(mensagem, texto);

  historico.scrollTop = historico.scrollHeight;
}


// ==========================================
// PROCESSAR A MENSAGEM
// ==========================================

function processarMensagem(mensagem, textoOriginal) {

  // ==========================================
  // MEMÓRIA DA RESERVA
  // ==========================================

  // ==========================================
// TENTAR IDENTIFICAR RESERVA COMPLETA
// ==========================================

if (
  mensagem.includes("reserv") &&
  (mensagem.includes("pessoa") || mensagem.includes("pessoas"))
) {

  let numeroPessoas = mensagem.match(/\d+\s*pessoas?/);
  let data = mensagem.match(/dia\s+\d+/);
  let horario = mensagem.match(/\d{1,2}h/);

  if (numeroPessoas && data && horario) {

    reserva.pessoas = numeroPessoas[0];
    reserva.data = data[0];
    reserva.horario = horario[0];

    contexto = "";

    responder(
      `💋 Perfeito, gata! Sua reserva foi anotada. 😈<br><br>

      👯 Pessoas: ${reserva.pessoas}<br>
      📅 Data: ${reserva.data}<br>
      🕐 Horário: ${reserva.horario}<br><br>

      Te espero na Malvadeza Club, gata. 💋😈`
    );

    return;
  }
}

  if (contexto === "reserva_pessoas") {

    reserva.pessoas = textoOriginal;

    contexto = "reserva_data";

    responder(
      `💋 Perfeito, gata 😈 Agora me fala para qual dia você quer fazer a reserva.`
    );

    return;
  }


  if (contexto === "reserva_data") {

    reserva.data = textoOriginal;

    contexto = "reserva_horario";

    responder(
      `😈 Anotado: ${reserva.data}. Agora só falta me dizer o horário que você pretende chegar, gata. 💋`
    );

    return;
  }


  if (contexto === "reserva_horario") {

    reserva.horario = textoOriginal;

    responder(
      `💋 Reserva anotada, gata! 😈<br><br>

      👯 Pessoas: ${reserva.pessoas}<br>
      📅 Data: ${reserva.data}<br>
      🕐 Horário: ${reserva.horario}<br><br>

      A Mami vai deixar tudo preparado pra sua chegada. 😈🩷`
    );

    contexto = "";

    return;
  }


  // ==========================================
  // BOYS
  // ==========================================

  if (
    mensagem.includes("boy") ||
    mensagem.includes("boys") ||
    mensagem.includes("homem") ||
    mensagem.includes("homens") ||
    mensagem.includes("catálogo") ||
    mensagem.includes("catalogo") ||
    mensagem.includes("garoto") ||
    mensagem.includes("rapaz")
  ) {

    mostrarCatalogo();

    return;
  }


  // ==========================================
  // RESERVA
  // ==========================================

  if (
    mensagem.includes("reserva") ||
    mensagem.includes("reservar") ||
    mensagem.includes("mesa") ||
    mensagem.includes("agendar")
  ) {

    contexto = "reserva_pessoas";

    responder(
      `💅 Ahhh, quer garantir sua noite na Malvadeza Club? Boa escolha, gata. 😈<br><br>
      Primeiro me diz: <strong>quantas pessoas vão?</strong> 💋`
    );

    return;
  }


  // ==========================================
  // HORÁRIO
  // ==========================================

  if (
    mensagem.includes("horário") ||
    mensagem.includes("horario") ||
    mensagem.includes("abre") ||
    mensagem.includes("fecha") ||
    mensagem.includes("funcionamento") ||
    mensagem.includes("funciona")
  ) {

    responder(
      `🌙 <strong>HORÁRIO DE FUNCIONAMENTO</strong><br><br>
      Quinta a domingo<br>
      🕐 Das 22h às 05h<br><br>
      Porque gata... a noite é nossa. 😈💋`
    );

    return;
  }


  // ==========================================
  // ENDEREÇO
  // ==========================================

  if (
    mensagem.includes("onde fica") ||
    mensagem.includes("endereço") ||
    mensagem.includes("endereco") ||
    mensagem.includes("localização") ||
    mensagem.includes("localizacao") ||
    mensagem.includes("local")
  ) {

    responder(
      `📍 <strong>ONDE ESTAMOS</strong><br><br>
      Rua das Malvadezas, 666<br>
      Centro - Uberlândia/MG 😈<br><br>
      Mas cuidado... depois que você entra, pode não querer ir embora. 💋`
    );

    return;
  }


  // ==========================================
  // VALORES
  // ==========================================

  if (
    mensagem.includes("preço") ||
    mensagem.includes("preco") ||
    mensagem.includes("preços") ||
    mensagem.includes("precos") ||
    mensagem.includes("valor") ||
    mensagem.includes("valores") ||
    mensagem.includes("quanto custa") ||
    mensagem.includes("quanto é")
  ) {

    responder(
      `💰 <strong>VALORES DA MALVADEZA CLUB</strong><br><br>

      🎟️ Entrada: R$ 50,00<br>
      👑 Camarote: R$ 150,00 por pessoa<br>
      🍸 Drinks: a partir de R$ 25,00<br>
      💋 Reserva de mesa: a partir de R$ 100,00<br><br>

      😈 Para conhecer os boys, é só pedir o catálogo.`
    );

    return;
  }


  // ==========================================
  // CUMPRIMENTOS
  // ==========================================

  if (
    mensagem.includes("oi") ||
    mensagem.includes("olá") ||
    mensagem.includes("ola") ||
    mensagem.includes("bom dia") ||
    mensagem.includes("boa tarde") ||
    mensagem.includes("boa noite")
  ) {

    responder(
      `💋 Oi, gata... a Mami tava te esperando. 😈<br><br>
      O que você quer fazer hoje?`
    );

    mostrarMenu();

    return;
  }


  // ==========================================
  // AGRADECIMENTOS
  // ==========================================

  if (
    mensagem.includes("obrigada") ||
    mensagem.includes("obrigado") ||
    mensagem.includes("valeu") ||
    mensagem.includes("vlw")
  ) {

    responder(
      `💋 Sempre, gata. Precisando, é só chamar a Mami. 😈🩷`
    );

    return;
  }


  // ==========================================
  // AJUDA
  // ==========================================

  if (
    mensagem.includes("ajuda") ||
    mensagem.includes("menu") ||
    mensagem.includes("opções") ||
    mensagem.includes("opcoes") ||
    mensagem.includes("não sei") ||
    mensagem.includes("nao sei")
  ) {

    responder(
      `😈 Relaxa, gata. A Mami te guia. 💋`
    );

    mostrarMenu();

    return;
  }


  // ==========================================
  // QUANDO NÃO ENTENDER
  // ==========================================

  responder(
    `😈 Hmmm... acho que não peguei essa, gata KKKKK.<br><br>
    Mas posso te ajudar com uma dessas opções:`
  );

  mostrarMenu();
}


// ==========================================
// RESPOSTA DA MAMI
// ==========================================

function responder(resposta) {

  let historico = document.getElementById("historico");

  setTimeout(function() {

    historico.innerHTML += `
      <div class="bot">
        💋 <strong>Mami:</strong> ${resposta}
      </div>
    `;

    historico.scrollTop = historico.scrollHeight;

  }, 500);
}


// ==========================================
// MENU DE OPÇÕES
// ==========================================

function mostrarMenu() {

  let historico = document.getElementById("historico");

  setTimeout(function() {

    historico.innerHTML += `

      <div class="bot">

        <div class="botoes-boys">

          <button onclick="escolherOpcao('boys')">
            😈 Conhecer os boys
          </button>

          <button onclick="escolherOpcao('reserva')">
            📅 Fazer reserva
          </button>

          <button onclick="escolherOpcao('horario')">
            🕐 Horários
          </button>

          <button onclick="escolherOpcao('endereco')">
            📍 Endereço
          </button>

          <button onclick="escolherOpcao('valores')">
            💰 Valores
          </button>

        </div>

      </div>
    `;

    historico.scrollTop = historico.scrollHeight;

  }, 700);
}


// ==========================================
// QUANDO CLICAR NO MENU
// ==========================================

function escolherOpcao(opcao) {

  if (opcao === "boys") {
    mostrarCatalogo();
  }

  else if (opcao === "reserva") {

    contexto = "reserva_pessoas";

    responder(
      `💅 Boa escolha, gata. 😈<br><br>
      Me diz: <strong>quantas pessoas vão?</strong> 💋`
    );
  }

  else if (opcao === "horario") {

    responder(
      `🌙 <strong>HORÁRIO DE FUNCIONAMENTO</strong><br><br>
      Quinta a domingo<br>
      🕐 Das 22h às 05h<br><br>
      Porque gata... a noite é nossa. 😈💋`
    );
  }

  else if (opcao === "endereco") {

    responder(
      `📍 <strong>ONDE ESTAMOS</strong><br><br>
      Rua das Malvadezas, 666<br>
      Centro - Uberlândia/MG 😈`
    );
  }

  else if (opcao === "valores") {

    responder(
      `💰 <strong>VALORES</strong><br><br>
      🎟️ Entrada: R$ 50,00<br>
      👑 Camarote: R$ 150,00 por pessoa<br>
      🍸 Drinks: a partir de R$ 25,00<br>
      💋 Reserva de mesa: a partir de R$ 100,00`
    );
  }
}


// ==========================================
// CATÁLOGO DOS BOYS
// ==========================================

function mostrarCatalogo() {

  responder(
    `💋 Ahhh, então você quer conhecer nossos boys... 😈<br><br>
    Escolhe com calma, gata. Depois não diz que a Mami não avisou. 💅`
  );

  let historico = document.getElementById("historico");

  setTimeout(function() {

    historico.innerHTML += `

      <div class="bot">

        <div class="botoes-boys">

          <button onclick="mostrarBoy('lucio')">LÚCIO 😈</button>
          <button onclick="mostrarBoy('ravi')">RAVI 🖤</button>
          <button onclick="mostrarBoy('miguel')">MIGUEL 💋</button>
          <button onclick="mostrarBoy('lucca')">LUCCA 🔥</button>
          <button onclick="mostrarBoy('theo')">THEO 👀</button>

        </div>

      </div>
    `;

    historico.scrollTop = historico.scrollHeight;

  }, 700);
}


// ==========================================
// PERFIL DOS BOYS
// ==========================================

function mostrarBoy(nome) {

  let historico = document.getElementById("historico");
  let descricao;

  if (nome === "lucio") {

    descricao = `
      <div class="perfil-boy">
        <h3>😈 LÚCIO</h3>

        <div class="informacoes-boy">
          <p>🎂 <strong>Idade:</strong> 28 anos</p>
          <p>📏 <strong>Altura:</strong> 1,88m</p>
          <p>👤 <strong>Cor:</strong> Preto</p>
          <p>🔥 <strong>Informação +18:</strong> 22 cm</p>
        </div>

        <div class="frase-boy">
          💬 <strong>Lúcio diz:</strong><br>
          "Você parece curiosa... eu gosto disso. Só não reclama depois que descobrir demais." 😈
        </div>
      </div>
    `;
  }


  else if (nome === "ravi") {

    descricao = `
      <div class="perfil-boy">
        <h3>🖤 RAVI</h3>

        <div class="informacoes-boy">
          <p>🎂 <strong>Idade:</strong> 26 anos</p>
          <p>📏 <strong>Altura:</strong> 1,85m</p>
          <p>👤 <strong>Cor:</strong> Preto</p>
          <p>🔥 <strong>Informação +18:</strong> 18,5 cm</p>
        </div>

        <div class="frase-boy">
          💬 <strong>Ravi diz:</strong><br>
          "Não preciso falar muito. Se você me escolheu, já sabe o que quer." 🖤
        </div>
      </div>
    `;
  }


  else if (nome === "miguel") {

    descricao = `
      <div class="perfil-boy">
        <h3>💋 MIGUEL</h3>

        <div class="informacoes-boy">
          <p>🎂 <strong>Idade:</strong> 25 anos</p>
          <p>📏 <strong>Altura:</strong> 1,82m</p>
          <p>👤 <strong>Cor:</strong> Branco</p>
          <p>🔥 <strong>Informação +18:</strong> 17 cm</p>
        </div>

        <div class="frase-boy">
          💬 <strong>Miguel diz:</strong><br>
          "Pode relaxar, gata. Eu sei como transformar uma boa noite em uma noite inesquecível." 😏
        </div>
      </div>
    `;
  }


  else if (nome === "lucca") {

    descricao = `
      <div class="perfil-boy">
        <h3>🔥 LUCCA</h3>

        <div class="informacoes-boy">
          <p>🎂 <strong>Idade:</strong> 29 anos</p>
          <p>📏 <strong>Altura:</strong> 1,90m</p>
          <p>👤 <strong>Cor:</strong> Preto</p>
          <p>🔥 <strong>Informação +18:</strong> 25 cm</p>
        </div>

        <div class="frase-boy">
          💬 <strong>Lucca diz:</strong><br>
          "Gosta de desafio? Então talvez você tenha acabado de encontrar o seu." 🔥
        </div>
      </div>
    `;
  }


  else if (nome === "theo") {

    descricao = `
      <div class="perfil-boy">
        <h3>👀 THEO</h3>

        <div class="informacoes-boy">
          <p>🎂 <strong>Idade:</strong> 27 anos</p>
          <p>📏 <strong>Altura:</strong> 1,87m</p>
          <p>👤 <strong>Cor:</strong> Branco</p>
          <p>🔥 <strong>Informação +18:</strong> 16 cm</p>
        </div>

        <div class="frase-boy">
          💬 <strong>Theo diz:</strong><br>
          "Não se deixa enganar pela minha cara de bonzinho... eu também sei surpreender." 👀
        </div>
      </div>
    `;
  }


  historico.innerHTML += `

    <div class="bot perfil-mensagem">
      💋 <strong>Mami:</strong>
      ${descricao}
    </div>

  `;

  historico.scrollTop = historico.scrollHeight;
}
function entrarNoClub() {
  const tela = document.getElementById("telaInicial");

  tela.style.opacity = "0";
  tela.style.pointerEvents = "none";

  setTimeout(() => {
    tela.style.visibility = "hidden";
  }, 500);
}