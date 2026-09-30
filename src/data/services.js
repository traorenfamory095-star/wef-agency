const services = [
  {
    id: 1,
    nom: "Saisie simple texte",
    description: "Saisie simple de texte par page.",
    tarifs: {
      noirBlanc: "1 000 FC",
      noirBlancEnLigne: "2 000 FC",
      couleur: "1 500 FC",
      couleurEnLigne: "3 000 FC",
    },
  },

  {
    id: 2,
    nom: "Saisie complexe",
    description: "Saisie complexe de texte par page.",
    tarifs: {
      noirBlanc: "2 000 FC",
      noirBlancEnLigne: "3 000 FC",
      couleur: "3 000 FC",
      couleurEnLigne: "4 000 FC",
    },
  },

  {
    id: 3,
    nom: "Tableau simple",
    description: "Saisie d'un tableau simple par page.",
    tarifs: {
      noirBlanc: "1 500 FC",
      noirBlancEnLigne: "2 000 FC",
      couleur: "2 000 FC",
      couleurEnLigne: "3 000 FC",
    },
  },

  {
    id: 4,
    nom: "Tableau complexe",
    description: "Saisie d'un tableau complexe par page.",
    tarifs: {
      noirBlanc: "2 500 FC",
      noirBlancEnLigne: "3 000 FC",
      couleur: "3 000 FC",
      couleurEnLigne: "4 000 FC",
    },
  },

  {
    id: 5,
    nom: "Page de garde simple",
    description: "Création d'une page de garde simple.",
    tarifs: {
      noirBlanc: "2 000 FC",
      noirBlancEnLigne: "3 000 FC",
      couleur: "3 000 FC",
      couleurEnLigne: "4 000 FC",
    },
  },

  {
    id: 6,
    nom: "Page de garde complexe",
    description: "Création d'une page de garde complexe.",
    tarifs: {
      noirBlanc: "3 000 FC",
      noirBlancEnLigne: "4 000 FC",
      couleur: "5 000 FC",
      couleurEnLigne: "6 000 FC",
    },
  },

  {
    id: 7,
    nom: "Carte / Badge Word simple",
    description: "Création d'une carte ou d'un badge simple avec Word.",
    tarifs: {
      noirBlanc: "5 000 FC",
      noirBlancEnLigne: "7 000 FC",
      couleur: "7 000 FC",
      couleurEnLigne: "7 000 FC",
    },
  },

  {
    id: 8,
    nom: "Carte / Badge Word complexe",
    description: "Création d'une carte ou d'un badge complexe avec Word.",
    tarifs: {
      noirBlanc: "7 000 FC",
      noirBlancEnLigne: "8 000 FC",
      couleur: "10 000 FC",
      couleurEnLigne: "10 000 FC",
    },
  },

  {
    id: 9,
    nom: "Carte / Badge Photoshop simple",
    description: "Création d'une carte ou d'un badge simple avec Photoshop.",
    tarifs: {
      noirBlanc: "10 000 FC",
      noirBlancEnLigne: "12 000 FC",
      couleur: "12 000 FC",
      couleurEnLigne: "12 000 FC",
    },
  },

  {
    id: 10,
    nom: "Carte / Badge Photoshop complexe",
    description: "Création d'une carte ou d'un badge complexe avec Photoshop.",
    tarifs: {
      noirBlanc: "10 $",
      noirBlancEnLigne: "12 $",
      couleur: "15 $",
      couleurEnLigne: "15 $",
    },
  },

  {
    id: 11,
    nom: "Invitation Word simple",
    description: "Création d'une invitation simple avec Word.",
    tarifs: {
      noirBlanc: "5 000 FC",
      noirBlancEnLigne: "6 000 FC",
      couleur: "7 000 FC",
      couleurEnLigne: "7 000 FC",
    },
  },

  {
    id: 12,
    nom: "Invitation Word complexe",
    description: "Création d'une invitation complexe avec Word.",
    tarifs: {
      noirBlanc: "7 000 FC",
      noirBlancEnLigne: "8 000 FC",
      couleur: "1 000 FC",
      couleurEnLigne: "1 000 FC",
    },
  },

  {
    id: 13,
    nom: "Invitation Photoshop simple",
    description: "Création d'une invitation simple avec Photoshop.",
    tarifs: {
      noirBlanc: "5 $",
      noirBlancEnLigne: "6 $",
      couleur: "7 $",
      couleurEnLigne: "7 $",
    },
  },

  {
    id: 14,
    nom: "Invitation Photoshop complexe",
    description: "Création d'une invitation complexe avec Photoshop.",
    tarifs: {
      noirBlanc: "10 $",
      noirBlancEnLigne: "12 $",
      couleur: "15 $",
      couleurEnLigne: "15 $",
    },
  },

  {
    id: 15,
    nom: "Scan",
    description: "Numérisation de documents.",
    tarifs: {
      standard: "500 FC",
      A3: "1 000 FC",
    },
  },

  {
    id: 16,
    nom: "Photocopie",
    description: "Photocopie de documents.",
    tarifs: {
      noirBlancSimple: "300 FC",
      noirBlancComplexe: "500 FC",
      autreTarif: "1 000 FC",
      A3: "2 000 FC",
    },
  },

  {
    id: 17,
    nom: "Impression A4",
    description: "Impression de documents au format A4.",
    tarifs: {
      simpleTexteNoirBlanc: "500 FC",
      simpleTexteCouleur: "1 000 FC",
      imageNoirBlanc: "1 500 FC",
      imageCouleur: "2 500 FC",
    },
  },

  {
    id: 18,
    nom: "Impression A3",
    description: "Impression de documents au format A3.",
    tarifs: {
      simple: "2 000 FC",
      complexe: "3 500 FC",
    },
  },

  {
    id: 19,
    nom: "Carte PVC",
    description: "Création et personnalisation de cartes PVC.",
    tarifs: {},
  },

  {
    id: 20,
    nom: "T-shirt blanc",
    description: "Personnalisation de T-shirt blanc.",
    tarifs: {},
  },

  {
    id: 21,
    nom: "T-shirt noir",
    description: "Personnalisation de T-shirt noir.",
    tarifs: {},
  },

  {
    id: 22,
    nom: "Gilet",
    description: "Personnalisation de gilet.",
    tarifs: {},
  },

  {
    id: 23,
    nom: "Casquette",
    description: "Personnalisation de casquette.",
    tarifs: {},
  },

  {
    id: 24,
    nom: "Sticker",
    description: "Création et impression de stickers.",
    tarifs: {},
  },

  {
    id: 25,
    nom: "Personnalisation / Sécurisation de papiers",
    description: "Personnalisation et sécurisation de documents.",
    tarifs: {},
  },

  {
    id: 26,
    nom: "Tamponnage de produits",
    description: "Personnalisation et marquage de produits.",
    tarifs: {},
  },

  {
    id: 27,
    nom: "Conception de projet / Gestion de base de données",
    description: "Conception de projets et gestion de bases de données.",
    tarifs: {},
  },

  {
    id: 28,
    nom: "Conception de site web / logiciel / application",
    description: "Conception et développement de solutions numériques.",
    tarifs: {},
  },

  {
    id: 29,
    nom: "Conception et production de séries / chansons / publicités",
    description: "Conception et production de contenus audiovisuels.",
    tarifs: {},
  },

  {
    id: 30,
    nom: "Production / Tournage de programmes",
    description: "Production et tournage de programmes.",
    tarifs: {},
  },

  {
    id: 31,
    nom: "Photos professionnelles / Photos passeport",
    description: "Réalisation de photos professionnelles et photos passeport.",
    tarifs: {},
  },

  {
    id: 32,
    nom: "Reportage événementiel",
    description: "Couverture et reportage d'événements.",
    tarifs: {},
  },

  {
    id: 33,
    nom: "Événement en direct",
    description: "Diffusion et couverture d'événements en direct.",
    tarifs: {},
  },

  {
    id: 34,
    nom: "Prime d'excellence",
    description: "Service mentionné dans le document WEF.",
    tarifs: {},
  },

  {
    id: 35,
    nom: "Supervision des stagiaires",
    description: "Accompagnement et supervision des stagiaires.",
    tarifs: {},
  },

  {
    id: 36,
    nom: "Installation de systèmes / logiciels",
    description: "Installation de systèmes d'exploitation et de logiciels.",
    tarifs: {},
  },

  {
    id: 37,
    nom: "Téléchargement de musique / vidéos / jeux",
    description: "Téléchargement de contenus numériques.",
    tarifs: {},
  },
]

export default services