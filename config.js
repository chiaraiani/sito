// =============================================================================
//  config.js — Configurazione sito Chiara Aiani
//  Modifica questo file con qualsiasi editor di testo (Notepad, VSCode, ecc.)
//  Poi salva e ricarica index.html nel browser per vedere le modifiche.
//
//  IMPORTANTE: questo file deve stare nella stessa cartella dell'HTML.
//
//  REGOLE DI SINTASSI:
//  • Le stringhe di testo vanno tra apici singoli: 'testo qui'
//  • Se il testo contiene un apostrofo, usa il backslash: 'l\'attrice'
//  • true/false (senza apici) per i valori vero/falso
//  • Ogni voce finisce con una virgola, tranne l'ultima del suo gruppo
//  • NON toccare le righe con solo { } [ ] o le parole come "texts:", "media:" ecc.
//
//  NOTA SULLE FOTO ARTISTICHE:
//  Ogni progetto è un gruppo di foto con intestazione cliccabile (accordion).
//  Cliccando sull'intestazione si apre/chiude la galleria di quel progetto.
//  Cliccando su una foto si apre il lightbox con navigazione frecce.
// =============================================================================

const SITE_CONFIG = {

  // ─────────────────────────────────────────────
  //  TESTI
  // ─────────────────────────────────────────────
  texts: {
    // Pannello sinistro (Attrice) — home
    homeLeftEyebrow: 'Portfolio',
    homeLeftTitle:   'Attrice',
    homeLeftSub:     'Book fotografico · Foto artistiche · Lavori · Contatti',

    // Pannello destro (Videomaker) — home
    homeRightEyebrow: 'Servizi',
    homeRightTitle:   'Videomaker',
    homeRightSub:     'Montaggio · Produzione · Contatti',

    // ─── SEZIONE ATTRICE ───
    actressName:          'Chiara Aiani',
    actressBookCaption:   'Book professionale',
    actressArtCaption:    'Foto artistiche',
    actressVideoCaption:  'Produzioni e lavori realizzati',

    // ─── SEZIONE VIDEOMAKER ───
    vmTitle:   'Servizi',

    // Frase in corsivo (bio breve) — lascia vuoto per nasconderla
    vmBio: '',

    // Paragrafo esteso (biografia completa)
    vmBioExt: 'Ciao! Sono attrice e videomaker. Ho studiato videomaking a Milano e Arte Drammatica a Venezia e ora ho unito queste arti per poter produrre e avere una maggiore visione dell\'ambiente artistico del settore. Livello EQF5 in digital videomaking.',

    // Tag competenze separati da virgola
    vmTags: 'Idee,Riprese,Reel,Documentario,Narrativa,Corporate',

    // Statistiche — inserisci testo nella chiave "Num", etichetta in "Lbl"
    // Lascia stat3Num e stat3Lbl vuoti per nascondere la terza statistica
    stat1Num: 'Serietà',    stat1Lbl: '',
    stat2Num: 'Confronto',  stat2Lbl: '',
    stat3Num: 'Puntualità', stat3Lbl: '',

    // ─── PAGINA LAVORI (tab Videomaker) ───
    worksEyebrow: 'Selezione lavori',
    worksHeading: 'Portfolio videomaker',
    worksSubtext: 'I miei progetti',

    // ─── CONTATTI & FOOTER ───
    contactEmail:    'chiara.aiani1@gmail.com',
    contactCity:     'Busto Arsizio/Milano',
    instagramHandle: '@chiaraiani',
    instagramUrl:    'https://instagram.com/chiaraiani',

    // Nota sotto il pulsante "Invia messaggio"
    formReplyNote: 'Riceverai una risposta entro 24 ore alla tua email',

    // Testo mostrato dopo l\'invio del form
    successText: 'Grazie! Ti rispondo entro 24 ore.\nControlla la tua casella Gmail.',

    // Nota in fondo alla tabella tariffe
    ratesNote: 'Le tariffe sono orientative. Ogni progetto viene valutato singolarmente. Contattami per un preventivo personalizzato.',
  },


  // ─────────────────────────────────────────────
  //  FOTO BOOK
  //  src: percorso file locale o URL https://...
  //  label: nome della foto (appare nel lightbox)
  //  objectPosition: punto focale, es. 'center top' oppure '40% 25%'
  // ─────────────────────────────────────────────
  bookPhotos: [
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592428/L1072124_copia_nkf7fc.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592428/L1072203_copia_ar04do.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592427/L1072173_copia_m8w2op.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592427/L1072084_copia_wtjuwq.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592427/L1072025_copia_pc6ggq.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592426/L1072012_copia_rysnmm.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592426/L1072018_copia_tgpqiy.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592425/L1072056_copia_ivakg0.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592425/L1071879_copia_pv4ogb.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592425/L1071905_copia_fkttcl.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592424/L1071903_copia_i52icx.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592425/L1071921_copia_mazkyg.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592424/L1071645_copia_rxzlt4.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592424/L1071653_copia_tbmk3a.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592423/L1071599_copia_rksvpx.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592424/L1071897_copia_aoxzlo.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592423/L1071676_copia_ovp2b8.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
    { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782592423/L1071575_copia_hm714q.jpg', label: 'Primo piano', objectPosition: '50% 20%' },
  ],


  // ─────────────────────────────────────────────
  //  FOTO ARTISTICHE — ACCORDION
  //
  //  Ogni elemento è un PROGETTO (una sessione fotografica).
  //  Ha un'intestazione cliccabile che apre/chiude la galleria.
  //  Le foto al suo interno aprono il lightbox al click.
  //
  //  Campi del progetto:
  //    year        — anno visualizzato nell'intestazione (es. '2026')
  //    photographer— nome del fotografo
  //    location    — città / luogo
  //    photos      — array di foto del progetto
  //
  //  Per aggiungere un secondo progetto, copia il blocco { year: ..., photos: [...] }
  //  e aggiungilo qui sotto, separato da una virgola.
  // ─────────────────────────────────────────────
  artProjects: [
    {
      year: '2026',
      photographer: 'Marco Ragaini',
      location: 'Milano',
      photos: [
        { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595619/B0027288_qabn0a.jpg' },
        { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595619/B0027316_yejtiu.jpg' },
        { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595622/L1072168_lnxck5.jpg' },
        { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595618/B0027297-2_hm3nxw.jpg' },
        { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595618/B0027257_vy8yit.jpg' },
        { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595618/B0027232_iwwcny.jpg' },
      ],
    },
  ],


  // ─────────────────────────────────────────────
  //  VIDEO SEZIONE ATTRICE
  //  url: link YouTube, Vimeo, oppure file MP4 diretto
  //  thumb: (opzionale) URL immagine anteprima
  //  meta: testo secondario sotto il titolo (es. 'Cortometraggio · 2024')
  // ─────────────────────────────────────────────
  actressVideos: [
    // { title: 'Titolo produzione', url: 'https://youtube.com/watch?v=XXXX', meta: 'Cortometraggio · 2024', regista, thumb: '' },
    { 
  title: 'Almost', 
  url: 'https://youtu.be/wJ3Fm9lTFD4?feature=shared', 
  meta: 'Cortometraggio · 2026',
 director: 'Massimiliano Montàgano',
  thumb: '',
},
  ],


  // ─────────────────────────────────────────────
  //  VIDEO SEZIONE VIDEOMAKER (tab Lavori)
  //  filterVal: deve corrispondere esattamente al filterVal nei worksFilters sopra
  // ─────────────────────────────────────────────
  vmVideos: [
    // { title: 'Titolo lavoro', url: 'https://youtube.com/watch?v=XXXX', meta: 'Documentario · 2024', thumb: '', filterVal: 'all' },
  ],


  // ─────────────────────────────────────────────
  //  FILTRI SEZIONE LAVORI
  //  isAll: true  → mostra tutti i video (non filtra per categoria)
  //  isAll: false → filtra i video con filterVal corrispondente
  // ─────────────────────────────────────────────
  worksFilters: [
    { label: 'Tutti',           icon: 'ti-layout-grid', filterVal: 'all',       isAll: true  },
    { label: 'Narrativa',       icon: 'ti-movie',       filterVal: 'narrativa', isAll: false },
    { label: 'Doc & Corporate', icon: 'ti-camera',      filterVal: 'corporate', isAll: false },
  ],


  // ─────────────────────────────────────────────
  //  SERVIZI OFFERTI (sezione Videomaker › Profilo)
  //  icon: cerca il nome su https://tabler.io/icons  (es. 'ti-video')
  // ─────────────────────────────────────────────
  services: [
    { icon: 'ti-video',    name: 'Riprese & Regia',             desc: 'Gestione completa del set, direzione attori, scelta location.' },
    { icon: 'ti-cut',      name: 'Montaggio & Post-produzione', desc: 'Color grading, sound design, effetti visivi e finalizzazione.' },
    { icon: 'ti-writing',  name: 'Sviluppo del progetto',       desc: 'Dall\'idea alla sceneggiatura, storyboard e pre-produzione.' },
    { icon: 'ti-building', name: 'Video corporate & eventi',    desc: 'Contenuti per brand, eventi aziendali, documentari istituzionali.' },
  ],


  // ─────────────────────────────────────────────
  //  TARIFFE GIORNALIERE
  //  ATTENZIONE: nel file originale questi prezzi comparivano due volte con
  //  valori diversi (250/450/40 in una versione, 300/700/80 in un'altra).
  //  Qui sono stati tenuti i valori della versione più recente — ricontrollali!
  // ─────────────────────────────────────────────
  rates: [
    { name: 'Riprese — mezza giornata',  sub: 'Fino a 4 ore · operatore singolo', price: '€ 300', note: '+ iva' },
    { name: 'Riprese — giornata intera', sub: 'Fino a 8 ore · operatore singolo', price: '€ 700', note: '+ iva' },
    { name: 'Montaggio reel',            sub: 'Montaggio e color con clip fornite', price: '€ 80', note: '/ ora' },
  ],


  // ─────────────────────────────────────────────
  //  PACCHETTI
  //  featured: true → evidenzia con bordo verde ("Più richiesto")
  //  ATTENZIONE: anche qui i prezzi comparivano due volte con valori diversi
  //  (350/700/1.200 in una versione, 400/900/1.200 in un'altra). Tenuta la
  //  versione più recente — ricontrollala!
  // ─────────────────────────────────────────────
  packages: [
    {
      name:     'Pacchetto Social',
      price:    '€ 400',
      desc:     'Riprese mezza giornata + montaggio 4 reel ottimizzati per social',
      featured: false,
    },
    {
      name:     'Pacchetto Evento',
      price:    '€ 900',
      desc:     'Copertura completa evento + highlight video + 3 reel brevi',
      featured: true,
    },
    {
      name:     'Pacchetto Documentario',
      price:    'Da € 1.200',
      desc:     'Progetto: sviluppo, riprese, post-produzione e consegna finale (escluse trasferte e attori)',
      featured: false,
    },
  ],


  // ─────────────────────────────────────────────
  //  GIORNI NON DISPONIBILI (calendario)
  //  Formato chiave: 'ANNO-MESE' (mese da 1 a 12)
  //  Valore: array di numeri-giorno del mese
  //  Esempio: '2026-7': [4, 5, 18] → 4, 5 e 18 luglio 2026 non disponibili
  // ─────────────────────────────────────────────
  blocked: {
    // '2026-7': [4, 5, 18],
    // '2026-8': [1, 2, 3, 14, 15],
  },

};
