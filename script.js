// Passo 1: Configurar o mapa
// A primeira array [lat, lon] é o centro do mapa. A segunda é o nível de zoom.
// Escolhi o centro do Brasil para começar. Ajuste conforme sua necessidade.
const map = L.map('map').setView([-29.780510133506073, -51.1396954119796], 10);

// Passo 2: Adicionar a "camada" do mapa (a aparência visual)
// Usamos o OpenStreetMap, que é gratuito.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// ===================================================================
// ✨✨✨ AQUI É ONDE VOCÊ ADICIONA SUAS MEMÓRIAS ✨✨✨
// ===================================================================

// Crie uma lista com todos os locais importantes para vocês.
// Basta copiar e colar o bloco de um objeto `{...}` para adicionar novos locais.
const locations = [
    // Classe dos locais que já foram visitados
    {
        coords: [-10.931812281895548, -37.07738375860697], // Coordenadas Aracaju
        title: "Nossa primeira viagem juntos",
        date: "Março de 2022",
        description: "Como que a gente viajou junto e não se falou nessa viagem? Pior q e tinha te notado mas tu andava com uma cara de brava, fiquei com medo.",
        imageUrl: "img/aracaju.jpg" // URL de uma imagem de exemplo
    },
    {
        // Sogipa
        coords: [-30.00927790738802, -51.18794444475988], // Coordenadas Sogipa
        title: "Nossa Primeira Viagem",
        date: "",
        description: "Ponto de partida! Só agradecer ao atletismo pela parceria IvotiPa/SogiTi.",
        imageUrl: "img/tami-sogipa.jpg" // URL de uma imagem de exemplo
    },
    {
        // Ivoti
        coords: [-29.610275747181284, -51.164656423300066], // Coordenadas Ivoti
        title: "Ivoti",
        date: "",
        description: "Eu gosto muito dessa cidade, pra mim ivoti é sinônimo de Tami, sério. Quero passar mais tempo contigo aqui. E a gente precisa tirar uma foto também.",
        imageUrl: "img/grenal.jpg" // URL de uma imagem de exemplo
    },
    {
        //Brasilia
        coords: [-15.7801, -47.9292], // Coordenadas Brasília
        title: "Brasília",
        date: "",
        description: "Onde tudo começou de verdade!",
        imageUrl: "img/brasilia.jpg" // URL de uma imagem de exemplo
    },

    //Classe dos locais que ainda não foram visitados

    // Brasil
    {
        // Rio de Janeiro
        coords: [-22.906847, -43.172896], // Coordenadas Rio de Janeiro
        title: "Rio de Janeiro",
        date: "Em Breve...",
        description: "Precisamos pegar uma praia juntos no rio, ir no cristo e no pão de açúcar. E eu juro que vou andar com chimarrão por lá (só andar mesmo).",
        imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/3b/66/8f.jpg"
    },
    
    

    //EUA
    {
        // Nova Iorque
        coords: [40.712776, -74.005974], // Coordenadas Nova Iorque
        title: "NYC the big apple!!!",
        date: "Em Breve...",
        description: "New York! A gente vai começar as viagens por aqui né? Até porque vamos estar perto kk depois Itália. <br> Obs: Quero patinar contigo no Central Park.",
        imageUrl: "https://image.visitenovayork.com.br/wp-content/uploads/2013/02/Central-Park-Skating-on-the-Wollman-Rink.jpg"
    },
    {
        //Havaí
        coords: [21.306944, -157.858337], // Coordenadas Havai
        title: "Havaí",
        date: "Em breve...",
        description: 'Praias paradisíacas, vulcões. O Havai é o destino perfeito pra relaxar e explorar a natureza. Aloha! 🌺',
        imageUrl: "https://hawaiiattractions.com/wp-content/uploads/2017/04/luau1.jpg" // URL de uma imagem de exemplo
    },
    {
        // Disney World
        coords: [28.538336, -81.379234], // Coordenadas Disney World
        title: "Disney World",
        date: "Em Breve...",
        description: "A gente não pode deixar de vir aqui! É tipo, lei universal de casal/família. Também preciso agradcer eles pessoalmente por mandarem a melhor princesa de todas pra Ivoti (melhor longe do que mais longe).",
        imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/800/450/90/media/disneyparksjapan-prod/disneyparksjapan_v0001/1/media/wdw/homepage/billboard/0831ZQ_0520MS_JLM_DS_16x9.jpg"
    },

    // Itália
    {
        // Roma
        coords: [41.902782, 12.496366], // Coordenadas Roma
        title: "Roma mi amore 🟩⬜🟥",
        date: "Em Breve...",
        description: 'A gente vai andar pelo Coliseu, jogar uma moedinha na Fontana di Trevi pra garantir a volta, e jantar massa 2x todos os dias.',
        imageUrl: "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1640835927/o3pfl41q7m5bj8jardk0.jpg"
    },
    {
        // Veneza
        coords: [45.440847, 12.315515], // Coordenadas Veneza
        title: "Veneza 🟩⬜🟥",
        date: "Em Breve...",
        description: 'Gôndolas, pontes charmosas e a gente se perdendo pelas vielas. Eu vi que tem tour romantico de gondola, com serenata. Acho que a gente merece. Imagina.',
        imageUrl: "https://forbes.com.br/wp-content/uploads/2022/11/Life_O-que-fazer-em-Veneza.jpg"
    },
    {
        // Milão
        coords: [45.464211, 9.191383], // Coordenadas Milão
        title: "Milão 🟩⬜🟥",
        date: "Em Breve...",
        description: 'Milão é o lugar perfeito pra gente se perder nas lojas e depois tomar um café no <a href="https://maps.app.goo.gl/u87nnk1twJh7hdmK8">Duomo</a>. E quem sabe até ver uma peça de teatro na Scala?',
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/e7/e3/a0/food-experience-in-amazing.jpg?w=500&h=-1&s=1"
    },
    {
        // Bari
        coords: [41.117143, 16.871871], // Coordenadas Bari
        title: "Grotta Palazzese 🟩⬜🟥",
        date: "Em Breve...",
        description: 'Na itália tem muito lugar pra gente ir, mas eu vi esse restaurante no tiktok, gostei tanto que coloquei aqui. Ele é dentro de uma caverna, com vista pra uma gruta. Na realidede é um hotel, mas as pessoas vão só pra comer. depois pesquisa pra ver como é. "Ristorante Grotta Palazzese"',
        imageUrl: "https://www.grottapalazzese.it/wp-content/uploads/2018/03/Grotta-Palazzese-tavolo-centrale.jpg"
    },
    // Europa 
    {
        // Paris
        coords: [48.856613, 2.352222], // Coordenadas Paris
        title: "Paris, França",
        date: "Em Breve...",
        description: "La ville de l'amour! Antes de qualquer coisa, foto clássica com a torre no fundo. Depois passear e tomar um café.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvczXnjh--6I_pipOtFOSyzVFyBjyI4MxuKQ&s"
    }, 
    {
        //Alemanha
        coords: [51.165691, 10.451526], // Coordenadas Alemanha
        title: "Alemanha",
        date: "Em Breve...",
        description: "Será que a gente consegue ir no kerp em ivoti antes de ir na Oktober raiz?",
        imageUrl: "https://i.pinimg.com/736x/d4/de/56/d4de562c2a82d6316b59a4ca1a11b5c1.jpg"
    },
    // Adicione mais locais aqui!
    // {
    //     coords: [latitude, longitude],
    //     title: "Título do Local",
    //     date: "Data do Evento",
    //     description: "Sua história aqui.",
    //     imageUrl: "URL_da_sua_foto.jpg"
    // },
];

// Ícone marcador de lugares especiais (marcador vermelho)
const redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Ícone marcador de lugares que ainda não fomos juntos (marcador cinza)
const greyIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Ícone marcador de lugares marcantes pra nós (marcador amarelo)
const yellowIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});




// Passo 4: Adicionar os marcadores e pop-ups ao mapa
locations.forEach((location, idx) => {
    // Escolha o ícone conforme sua lógica (aqui, só para exemplo, o primeiro é vermelho)
    let icon;
    if (idx < 2) icon = greyIcon;
    else if (idx === 2) icon = yellowIcon;
    else if (idx === 3) icon = greyIcon;
    else if (idx >= 4) icon = redIcon;
    else icon = undefined; //padrão 
    

    const marker = L.marker(location.coords, icon ? { icon } : undefined).addTo(map);

    const popupContent = `
        <h3>${location.title}</h3>
        <p class="popup-date">${location.date}</p>
        <p>${location.description}</p>
        <img src="${location.imageUrl}" alt="${location.title}" class="popup-image">
    `;
    marker.bindPopup(popupContent);
});