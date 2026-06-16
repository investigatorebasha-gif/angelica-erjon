export type StoryPage = {
  title: string;
  date?: string;
  text: string;
  highlight?: string;
};

export type TimelineMoment = {
  date: string;
  title: string;
  description: string;
  photoLabel: string;
};

export type FutureCard = {
  title: string;
  text: string;
};

export const storyPages: StoryPage[] = [
  {
    title: "Lo scherzo prima dell'uno",
    date: "Estate 2022",
    text:
      "Alla sagra di paese, tra luci, giostre e rumore d'estate, Angelica vide Erjon per la prima volta. Non sapeva il suo nome, non sapeva nulla di lui, ma bastò uno sguardo in diagonale per lasciare una domanda sospesa nella notte.",
    highlight: "A volte il destino arriva travestito da casualità.",
  },
  {
    title: "L'ombra prima della luce",
    text:
      "Prima di fidarsi di nuovo, Angelica attraversò un periodo che le tolse leggerezza e sicurezza. Da quella ferita nacque una promessa a se stessa: nessuno sarebbe entrato davvero, a meno che non fosse capace di cambiare tutto con pazienza.",
    highlight: "Le mura più alte non nascono dal freddo, ma da ciò che si è dovuto superare.",
  },
  {
    title: "Il profilo ritrovato",
    date: "18 aprile 2025",
    text:
      "Un pomeriggio qualunque, scorrendo TikTok, apparve un profilo suggerito. Quei tratti non erano nuovi: erano gli stessi della sagra, gli stessi del ricordo rimasto fermo per anni. Angelica fece uno screenshot e chiese alle amiche chi fosse.",
    highlight: "Il fantasma della sagra aveva finalmente un volto vicino.",
  },
  {
    title: "Le 22:22",
    date: "18 aprile 2025",
    text:
      "Quella sera, alle 22:22, arrivò la notifica: lui aveva visto il suo profilo. Un minuto dopo, Instagram mostrò la richiesta di Erjon. Il nome che mancava alla storia era comparso sullo schermo.",
    highlight: "Erjon. Da quel momento il caso smise di sembrare solo caso.",
  },
  {
    title: "Il primo messaggio",
    date: "Maggio 2025",
    text:
      "Una storia interattiva diventò il pretesto per parlarsi. All'inizio erano frasi semplici, scuola, musica e giornate, ma dentro quelle parole c'era una fluidità diversa: il modo naturale con cui due mondi iniziano ad accorciare la distanza.",
    highlight: "Le conversazioni migliori non fanno rumore: restano.",
  },
  {
    title: "Il primo incontro",
    date: "2 luglio 2025",
    text:
      "Erjon prese un autobus sotto il caldo estivo per incontrarla davvero. Non fu subito una scena da romanzo: c'erano ansia, goffaggine e difese ancora alte. Ma qualcosa, piano, cominciò a restare anche dopo il saluto.",
    highlight: "Non tutti gli inizi sembrano perfetti mentre li vivi.",
  },
  {
    title: "Prima della partenza",
    date: "4 agosto 2025",
    text:
      "Pochi giorni prima delle vacanze di Angelica, Erjon si presentò di nuovo solo per salutarla. Quel gesto semplice, senza secondi fini, aprì una crepa nelle sue difese. Il suo ricordo partì con lei per l'estate.",
    highlight: "A volte bastano pochi minuti per cambiare il peso di un'intera estate.",
  },
  {
    title: "Le prove",
    date: "Agosto 2025 - gennaio 2026",
    text:
      "Ci furono paura, distanza, errori, confessioni e settimane in cui sembrava impossibile capire se restare o lasciarsi andare. Il libro non cancella quelle pagine: le tiene con delicatezza, perché anche da lì è passata la scelta di ricostruire.",
    highlight: "Un amore vero non è quello senza crepe, ma quello che impara cosa farne.",
  },
  {
    title: "Il nostro sì",
    date: "18 ottobre 2025",
    text:
      "In autunno, con un peluche enorme e un mazzo di rose rosse, Erjon chiese ad Angelica di diventare la sua ragazza. Il formicolio della sagra tornò, ma questa volta aveva un altro nome: felicità.",
    highlight: "Da quel sì iniziò la relazione più bella della sua vita.",
  },
  {
    title: "Quello che siamo oggi",
    date: "Giugno 2026",
    text:
      "Dopo la tempesta, Angelica ed Erjon sono diventati una squadra. Non perfetti, non senza discussioni, ma presenti. Una spalla per l'altra, un rifugio quando il mondo fuori pesa troppo, due metà che scelgono di imparare insieme.",
    highlight: "Siamo una squadra, anche quando stiamo ancora imparando.",
  },
  {
    title: "Perché ti amo",
    text:
      "Dal secondo quaderno arrivano i dettagli più teneri: le risate che restano addosso, la calma dopo i giorni difficili, le parole custodite piano e quel sentirsi casa anche quando il mondo resta fuori.",
    highlight: "Casa non è un posto: casa è dove sei tu.",
  },
  {
    title: "Una promessa",
    text:
      "Questo libro non vuole chiudere la storia. Vuole lasciarle spazio. Ogni pagina potrà cambiare, crescere, riempirsi di foto, date, lettere e nuove promesse, perché Angelica ed Erjon non sono un ricordo fermo: sono un futuro che continua.",
    highlight: "Il nostro libro non finisce qui.",
  },
];

export const timelineMoments: TimelineMoment[] = [
  {
    date: "Estate 2022",
    title: "Primo sguardo",
    description:
      "Una sagra, una giostra, un incontro mai davvero iniziato ma impossibile da dimenticare.",
    photoLabel: "Sagra",
  },
  {
    date: "18 aprile 2025",
    title: "Il profilo ritrovato",
    description:
      "TikTok riporta Erjon davanti agli occhi di Angelica, questa volta con un nome e una possibilità.",
    photoLabel: "22:22",
  },
  {
    date: "Maggio 2025",
    title: "Il primo messaggio",
    description:
      "Una storia interattiva apre la conversazione e trasforma la curiosità in presenza quotidiana.",
    photoLabel: "Chat",
  },
  {
    date: "2 luglio 2025",
    title: "Il primo incontro",
    description:
      "Un viaggio in autobus, l'ansia del primo appuntamento e l'inizio reale di qualcosa che restava.",
    photoLabel: "Incontro",
  },
  {
    date: "18 ottobre 2025",
    title: "Il nostro sì",
    description:
      "Rose rosse, un peluche e una domanda semplice: diventare ufficialmente Angelica ed Erjon.",
    photoLabel: "Sì",
  },
  {
    date: "Giugno 2026",
    title: "Oggi",
    description:
      "Dopo tutto, una squadra: due persone giovani, vere, imperfette, ma ancora scelte ogni giorno.",
    photoLabel: "Noi",
  },
];

export const loveReasons = [
  "La dolcezza con cui riesci a restare anche nei giorni storti.",
  "Il modo in cui trasformi la distanza in attesa e non in vuoto.",
  "Come mi fai sorridere quando il cuore avrebbe voglia di tacere.",
  "I piccoli gesti che diventano ricordi senza chiedere permesso.",
  "Il tuo essere casa anche quando siamo lontani.",
  "Il modo in cui mi fai sentire protetta, scelta e importante.",
];

export const futureCards: FutureCard[] = [
  {
    title: "Sogni",
    text: "Tenere aperto un posto per tutto quello che ancora non sappiamo immaginare.",
  },
  {
    title: "Viaggi",
    text: "Raccogliere città, strade, foto e ritorni in cui sentirci sempre noi.",
  },
  {
    title: "Promesse",
    text: "Scegliere rispetto, presenza e cura anche nei giorni più difficili.",
  },
  {
    title: "Noi",
    text: "Restare una squadra: non perfetta, ma vera, paziente e capace di ricominciare.",
  },
];
