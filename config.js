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
