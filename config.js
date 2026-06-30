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
  //  TESTI — HOME
  // ─────────────────────────────────────────────
  texts: {
    // Pannello sinistro (Attrice)
    homeLeftEyebrow: 'Portfolio',
    homeLeftTitle:   'Attrice',
    homeLeftSub:     'Book fotografico · Foto artistiche · Lavori · Contatti',

    // Pannello destro (Videomaker)
    homeRightEyebrow: 'Servizi',
    homeRightTitle:   'Videomaker',
    homeRightSub:     'Montaggio · Produzione · Contatti',

    // Sezione Attrice
    actressName:          'Chiara Aiani',
    actressBookCaption:   'Fotografie del book professionale',
    actressArtCaption:    'Foto artistiche',
    actressVideoCaption:  'Produzioni e lavori realizzati',

    // Sezione Videomaker
    vmTitle:    'Regia & Produzione',
    vmBio:      'Videomaker e regista con uno sguardo narrativo nato dal teatro e dalla recitazione. Racconto storie visive che sanno emozionare.',
    vmBioExt:   'Qui puoi inserire la tua biografia completa, la tua formazione, i tuoi riferimenti artistici e il tipo di lavoro che ami fare.',
    vmTags:     'Regia,Montaggio,Riprese,Documentario,Narrativa,Corporate',
    stat1Num:   '5+',
    stat1Lbl:   'Anni',
    stat2Num:   '30+',
    stat2Lbl:   'Progetti',
    stat3Num:   '',       // lascia vuoto per nascondere
    stat3Lbl:   '',

    // Contatti & footer
    contactEmail:    'chiara@gmail.com',
    contactCity:     'Milano',
    instagramHandle: '@chiaraiani',
    instagramUrl:    'https://instagram.com/chiaraiani',

    // Form di contatto
    formReplyNote: 'Riceverai una risposta entro 48 ore alla tua email',
    successText:   'Grazie! Ti rispondo entro 48 ore.\nControlla la tua casella Gmail.',

    // Pagina Lavori
    worksEyebrow:  'Selezione lavori',
    worksHeading:  'Portfolio videomaker',
    worksSubtext:  'Una selezione di progetti realizzati — documentari, fiction, corporate e contenuti social.',

    // Tariffe
    ratesNote: 'Le tariffe sono orientative. Ogni progetto viene valutato singolarmente. Contattami per un preventivo personalizzato.',
  },


  // ─────────────────────────────────────────────
  //  FOTO BOOK
  //  src: percorso file locale o URL https://...
  //  label: nome della foto (appare nel lightbox)
  //  objectPosition: punto focale, es. 'center top' oppure '40% 25%'
  // ─────────────────────────────────────────────
  bookPhotos: [
    // Esempio:
    // { src: 'foto/book1.jpg', label: 'Ritratto', objectPosition: 'center top' },
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
  //  Campi di ogni foto:
  //    src             — percorso file o URL
  //    label           — didascalia (opzionale, appare nel lightbox)
  //    objectPosition  — punto focale (opzionale, es. 'center top')
  // ─────────────────────────────────────────────
  artProjects: [
    {
      year:         '2026',
      photographer: 'Marco Ragaini',
      location:     'Milano',
      photos: [
        { src: 'file:///Users/chiara/Desktop/Chiara%20work/Chiara%20book%2013:02%20Ragaini/NO%20IVAN/B0027288.jpg',     label: 'Foto', objectPosition: 'center top' },
        { src: 'file:///Users/chiara/Desktop/Chiara%20work/Chiara%20book%2013:02%20Ragaini/NO%20IVAN/B0027257.jpg',     label: 'Foto', objectPosition: 'center top' },
        { src: 'file:///Users/chiara/Desktop/Chiara%20work/Chiara%20book%2013:02%20Ragaini/NO%20IVAN/B0027339.jpg',     label: 'Foto', objectPosition: 'center top' },
        { src: 'file:///Users/chiara/Desktop/Chiara%20work/Chiara%20book%2013:02%20Ragaini/NO%20IVAN/B0027309%20copia.jpg', label: 'Foto', objectPosition: 'center top' },
        { src: 'file:///Users/chiara/Desktop/Chiara%20work/Chiara%20book%2013:02%20Ragaini/NO%20IVAN/B0027316.jpg',     label: 'Foto', objectPosition: 'center top' },
        { src: 'file:///Users/chiara/Desktop/Chiara%20work/Chiara%20book%2013:02%20Ragaini/NO%20IVAN/L1072168.jpg',     label: 'Foto', objectPosition: 'center top' },
        { src: 'file:///Users/chiara/Desktop/Chiara%20work/Chiara%20book%2013:02%20Ragaini/NO%20IVAN/B0027305.jpg',     label: 'Foto', objectPosition: 'center top' },
        { src: 'file:///Users/chiara/Desktop/Chiara%20work/Chiara%20book%2013:02%20Ragaini/NO%20IVAN/B0027297-2.jpg',   label: 'Foto', objectPosition: 'center top' },
        { src: 'file:///Users/chiara/Desktop/Chiara%20work/Chiara%20book%2013:02%20Ragaini/NO%20IVAN/B0027235.jpg',     label: 'Foto', objectPosition: 'center top' },
      ]
    },
    // ── Per aggiungere un secondo progetto, copia il blocco qui sotto ──
    // {
    //   year:         '2025',
    //   photographer: 'Nome Fotografo',
    //   location:     'Roma',
    //   photos: [
    //     { src: 'foto/scena1.jpg', label: 'Scena 1' },
    //     { src: 'foto/scena2.jpg', label: 'Scena 2' },
    //   ]
    // },
  ],


  // ─────────────────────────────────────────────
  //  VIDEO ATTRICE
  // ─────────────────────────────────────────────
  actressVideos: [
    // Esempio:
    // { title: 'Cortometraggio', url: 'https://youtube.com/watch?v=XXX', meta: 'Fiction · 2024', thumb: '' },
  ],


  // ─────────────────────────────────────────────
  //  LAVORI VIDEOMAKER
  // ─────────────────────────────────────────────
  vmVideos: [
    // Esempio:
    // { title: 'Documentario', url: 'https://youtube.com/watch?v=XXX', meta: 'Documentario · 2024', thumb: '', filterVal: 'corporate' },
  ],


  // ─────────────────────────────────────────────
  //  FILTRI LAVORI (categorie nella pagina Lavori)
  // ─────────────────────────────────────────────
  worksFilters: [
    { label: 'Tutti',          icon: 'ti-layout-grid', filterVal: 'all',       isAll: true  },
    { label: 'Narrativa',      icon: 'ti-movie',       filterVal: 'narrativa', isAll: false },
    { label: 'Doc & Corporate',icon: 'ti-camera',      filterVal: 'corporate', isAll: false },
  ],


  // ─────────────────────────────────────────────
  //  SERVIZI VIDEOMAKER
  // ─────────────────────────────────────────────
  services: [
    { icon: 'ti-video',    name: 'Riprese & Regia',             desc: 'Gestione completa del set, direzione attori, scelta location.' },
    { icon: 'ti-cut',      name: 'Montaggio & Post-produzione', desc: 'Color grading, sound design, effetti visivi e finalizzazione.' },
    { icon: 'ti-writing',  name: 'Sviluppo del progetto',       desc: 'Dall\'idea alla sceneggiatura, storyboard e pre-produzione.' },
    { icon: 'ti-building', name: 'Video corporate & eventi',    desc: 'Contenuti per brand, eventi aziendali, documentari istituzionali.' },
  ],


  // ─────────────────────────────────────────────
  //  TARIFFE
  // ─────────────────────────────────────────────
  rates: [
    { name: 'Riprese — mezza giornata', sub: 'Fino a 4 ore · operatore singolo', price: '€ 250',       note: '+ iva' },
    { name: 'Riprese — giornata intera',sub: 'Fino a 8 ore · operatore singolo', price: '€ 450',       note: '+ iva' },
    { name: 'Montaggio',                sub: 'Per ora lavorata',                 price: '€ 40',        note: '/ ora' },
    { name: 'Regia progetto',           sub: 'Sviluppo completo',                price: 'Su richiesta',note: ''      },
  ],


  // ─────────────────────────────────────────────
  //  PACCHETTI
  // ─────────────────────────────────────────────
  packages: [
    { name: 'Pacchetto Social',       price: '€ 350',      desc: 'Riprese mezza giornata + montaggio 5 reel ottimizzati per social', featured: false },
    { name: 'Pacchetto Evento',       price: '€ 700',      desc: 'Copertura completa evento + highlight video + 3 clip brevi',       featured: true  },
    { name: 'Pacchetto Documentario', price: 'Da € 1.200', desc: 'Progetto completo: sviluppo, riprese, post-produzione e consegna finale', featured: false },
  ],


  // ─────────────────────────────────────────────
  //  GIORNI NON DISPONIBILI
  //  Formato: { 'ANNO-MESE': [giorno, giorno, ...] }
  //  Esempio: { '2026-7': [5, 12, 19] }  → luglio 2026, giorni 5, 12, 19
  // ─────────────────────────────────────────────
  blocked: {},
  
};
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
    stat1Num: 'Serietà',   stat1Lbl: '',
    stat2Num: 'Confronto', stat2Lbl: '',
    stat3Num: 'Puntualità',stat3Lbl: '',

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
  //  FILTRI SEZIONE LAVORI
  //  isAll: true  → mostra tutti i video (non filtra per categoria)
  //  isAll: false → filtra i video con filterVal corrispondente
  // ─────────────────────────────────────────────
  worksFilters: [
    { label: 'Tutti', icon: 'ti-layout-grid', filterVal: 'all', isAll: true },
  ],

  // ─────────────────────────────────────────────
  //  SERVIZI OFFERTI (sezione Videomaker › Profilo)
  //  icon: cerca il nome su https://tabler.io/icons  (es. 'ti-video')
  // ─────────────────────────────────────────────
  services: [
    {
      icon: 'ti-video',
      name: 'Riprese & Regia',
      desc: 'Gestione completa del set, direzione attori, scelta location.',
    },
    {
      icon: 'ti-cut',
      name: 'Montaggio & Post-produzione',
      desc: 'Color grading, sound design, effetti visivi e finalizzazione.',
    },
    {
      icon: 'ti-writing',
      name: 'Sviluppo del progetto',
      desc: 'Dall\'idea alla sceneggiatura, storyboard e pre-produzione.',
    },
    {
      icon: 'ti-building',
      name: 'Video corporate & eventi',
      desc: 'Contenuti per brand, eventi aziendali, documentari istituzionali.',
    },
  ],

  // ─────────────────────────────────────────────
  //  TARIFFE GIORNALIERE
  // ─────────────────────────────────────────────
  rates: [
    { name: 'Riprese — mezza giornata', sub: 'Fino a 4 ore · operatore singolo', price: '€ 300', note: '+ iva' },
    { name: 'Riprese — giornata intera', sub: 'Fino a 8 ore · operatore singolo', price: '€ 700', note: '+ iva' },
    { name: 'Montaggio reel', sub: 'Montaggio e color con clip fornite', price: '€ 80', note: '/ ora' },
  ],

  // ─────────────────────────────────────────────
  //  PACCHETTI
  //  featured: true → evidenzia con bordo verde ("Più richiesto")
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
  //  FOTO BOOK
  //  src: 'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg'
  //  label: Primo piano
  //  objectPosition: punto focale dell'immagine nel riquadro (es. 'center top', '30% 20%')
  // ─────────────────────────────────────────────
  bookPhotos: [
    // Esempi - decommenta e modifica:
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
  //  PROGETTI FOTOGRAFICI ARTISTICI
   // Struttura: a tendina (accordion): ogni voce qui diventa un pannello
// apribile/chiudibile nella sezione "Artistiche" della pagina Attrice.
// Ogni progetto ha: anno, fotografo, luogo, e un array di foto
  // ─────────────────────────────────────────────
  artProjects: [
    // Esempio — decommenta e modifica:
     {
       year: '2026',
       photographer: 'Marco Ragaini',
       location: 'Milano',
       photos: [
         { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595619/B0027288_qabn0a.jpg'},
         { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595619/B0027316_yejtiu.jpg'},
         { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595622/L1072168_lnxck5.jpg'},
         { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595618/B0027297-2_hm3nxw.jpg'},
         { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595618/B0027257_vy8yit.jpg'},
         { src: 'https://res.cloudinary.com/diwejzlyi/image/upload/v1782595618/B0027232_iwwcny.jpg'},
       ],
     },
    {
  ],

  // ─────────────────────────────────────────────
  //  VIDEO SEZIONE ATTRICE
  //  url: link YouTube, Vimeo, oppure file MP4 diretto
  //  thumb: (opzionale) URL immagine anteprima
  //  meta: testo secondario sotto il titolo (es. 'Cortometraggio · 2024')
  // ─────────────────────────────────────────────
  actressVideos: [
    // { title: 'Titolo produzione', url: 'https://youtube.com/watch?v=XXXX', meta: 'Cortometraggio · 2024', thumb: '' },
  ],

  // ─────────────────────────────────────────────
  //  VIDEO SEZIONE VIDEOMAKER (tab Lavori)
  //  filterVal: deve corrispondere esattamente al filterVal nei worksFilters sopra
  // ─────────────────────────────────────────────
  vmVideos: [
    // { title: 'Titolo lavoro', url: 'https://youtube.com/watch?v=XXXX', meta: 'Documentario · 2024', thumb: '', filterVal: 'all' },
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
