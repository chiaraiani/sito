// =============================================================================
//  config.js — Configurazione sito Chiara Aiani
//  Modifica questo file con qualsiasi editor di testo (Notepad, VSCode, ecc.)
//  Poi salva e ricarica index.html nel browser per vedere le modifiche.
//
//  REGOLE DI SINTASSI:
//  • Le stringhe di testo vanno tra apici singoli: 'testo qui'
//  • Se il testo contiene un apice (es. un apostrofo), usa il backslash: 'l\'attrice'
//  • true/false (senza apici) per i valori vero/falso
//  • Ogni voce finisce con una virgola, tranne l'ultima del suo gruppo
//  • NON toccare le righe con solo { } [ ] o le parole come "texts:", "media:" ecc.
// =============================================================================

const SITE_CONFIG = {

  // ─────────────────────────────────────────────
  //  TESTI — HOME
  // ─────────────────────────────────────────────
  texts: {
    // Pannello sinistro (Attrice)
    homeActressEyebrow: 'Portfolio',
    homeActressTitle:   'Attrice',
    homeActressSub:     'Book fotografico · Foto artistiche\nLavori & produzioni',

    // Pannello destro (Videomaker)
    homeVmEyebrow: 'Servizi',
    homeVmTitle:   'Videomaker',
    homeVmSub:     'Regia · Montaggio · Produzione\nPrenota una collaborazione',

    // ─── SEZIONE ATTRICE ───
    actressName:          'Chiara Aiani',
    actressBookCaption:   'Fotografie del book professionale',
    actressArtCaption:    'Scatti artistici e di scena organizzati per progetto',
    actressVideoCaption:  'Produzioni e lavori realizzati',

    // ─── SEZIONE VIDEOMAKER ───
    vmTitle:   'Regia & Produzione',

    // Frase in corsivo (bio breve)
    vmBio:     'Videomaker e regista con uno sguardo narrativo nato dal teatro e dalla recitazione. Racconto storie visive che sanno emozionare.',

    // Paragrafo esteso (biografia completa)
    vmBioExt:  'Qui puoi inserire la tua biografia completa, la tua formazione, i tuoi riferimenti artistici e il tipo di lavoro che ami fare.',

    // Tag competenze separati da virgola
    vmTags: 'Regia,Montaggio,Riprese,Documentario,Narrativa,Corporate',

    // Statistiche (lascia num vuoto per nascondere la terza)
    stat1Num: '5+',  stat1Lbl: 'Anni',
    stat2Num: '30+', stat2Lbl: 'Progetti',
    stat3Num: '',    stat3Lbl: '',         // ← lascia vuoti per non mostrarlo

    // ─── PAGINA LAVORI (tab Videomaker) ───
    worksEyebrow:  'Selezione lavori',
    worksHeading:  'Portfolio videomaker',
    worksSubtext:  'Una selezione di progetti realizzati — documentari, fiction, corporate e contenuti social.',

    // ─── CONTATTI & FOOTER ───
    contactEmail:    'chiara@gmail.com',
    contactCity:     'Milano',
    instagramHandle: '@chiaraiani',
    instagramUrl:    'https://instagram.com/chiaraiani',

    // Nota sotto il pulsante "Invia messaggio"
    formReplyNote: 'Riceverai una risposta entro 48 ore alla tua email',

    // Testo mostrato dopo l\'invio del form
    successText: 'Grazie! Ti rispondo entro 48 ore.\nControlla la tua casella Gmail.',

    // Nota in fondo alla tabella tariffe
    ratesNote: 'Le tariffe sono orientative. Ogni progetto viene valutato singolarmente. Contattami per un preventivo personalizzato.',
  },

  // ─────────────────────────────────────────────
  //  FILTRI SEZIONE LAVORI
  //  isAll: true  → mostra tutti i video (non filtra per categoria)
  //  isAll: false → filtra i video che hanno filterVal corrispondente
  // ─────────────────────────────────────────────
  worksFilters: [
    { label: 'Tutti',            icon: 'ti-layout-grid', filterVal: 'all',       isAll: true  },
    { label: 'Narrativa',        icon: 'ti-movie',       filterVal: 'narrativa', isAll: false },
    { label: 'Doc & Corporate',  icon: 'ti-camera',      filterVal: 'corporate', isAll: false },
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
    { name: 'Riprese — mezza giornata', sub: 'Fino a 4 ore · operatore singolo', price: '€ 250',      note: '+ iva'  },
    { name: 'Riprese — giornata intera', sub: 'Fino a 8 ore · operatore singolo', price: '€ 450',     note: '+ iva'  },
    { name: 'Montaggio',                 sub: 'Per ora lavorata',                 price: '€ 40',       note: '/ ora'  },
    { name: 'Regia progetto',            sub: 'Sviluppo completo',                price: 'Su richiesta', note: ''     },
  ],

  // ─────────────────────────────────────────────
  //  PACCHETTI
  //  featured: true → evidenzia con bordo verde ("Più richiesto")
  // ─────────────────────────────────────────────
  packages: [
    {
      name:     'Pacchetto Social',
      price:    '€ 350',
      desc:     'Riprese mezza giornata + montaggio 5 reel ottimizzati per social',
      featured: false,
    },
    {
      name:     'Pacchetto Evento',
      price:    '€ 700',
      desc:     'Copertura completa evento + highlight video + 3 clip brevi',
      featured: true,
    },
    {
      name:     'Pacchetto Documentario',
      price:    'Da € 1.200',
      desc:     'Progetto completo: sviluppo, riprese, post-produzione e consegna finale',
      featured: false,
    },
  ],

  // ─────────────────────────────────────────────
  //  FOTO BOOK
  //  src: URL dell'immagine (https://...) oppure percorso relativo (es. 'foto/book1.jpg')
  //  label: didascalia visibile nel lightbox
  //  objectPosition: punto focale dell'immagine nel riquadro (es. 'center top', '30% 20%')
  // ─────────────────────────────────────────────
  bookPhotos: [
    // Esempi — sostituisci con le tue foto:
    // { src: 'https://esempio.com/foto1.jpg', label: 'Ritratto', objectPosition: 'center top' },
    // { src: 'foto/book2.jpg',                label: 'Primo piano', objectPosition: '50% 20%' },
  ],

  // ─────────────────────────────────────────────
  //  PROGETTI FOTOGRAFICI ARTISTICI
  //  Ogni progetto ha: anno, fotografo, luogo, e un array di foto
  // ─────────────────────────────────────────────
  artProjects: [
    // Esempio — decommenta e modifica:
    // {
    //   year:         '2024',
    //   photographer: 'Nome Fotografo',
    //   location:     'Milano',
    //   photos: [
    //     { src: 'https://esempio.com/art1.jpg', label: 'Scatto di scena' },
    //     { src: 'foto/art2.jpg',                label: 'Backstage'        },
    //   ],
    // },
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
    // { title: 'Titolo lavoro', url: 'https://youtube.com/watch?v=XXXX', meta: 'Documentario · 2024', thumb: '', filterVal: 'corporate' },
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
