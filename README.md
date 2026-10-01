# WEF Agency

Site web officiel de **WEF Agency**, une agence proposant des services numériques, bureautiques, graphiques, audiovisuels et de personnalisation.

Le projet est développé avec **React + Vite** et a pour objectif de présenter les services de WEF Agency de manière moderne, claire, responsive et professionnelle.

---

## 📌 Sommaire

* [Présentation](#-présentation)
* [Objectifs](#-objectifs)
* [Technologies](#-technologies)
* [Fonctionnalités](#-fonctionnalités)
* [Pages et routes](#-pages-et-routes)
* [Architecture du projet](#-architecture-du-projet)
* [Répartition des tâches](#-répartition-des-tâches)
* [Données des services](#-données-des-services)
* [Images et assets](#-images-et-assets)
* [Git et organisation des branches](#-git-et-organisation-des-branches)
* [Installation](#-installation)
* [Lancement du projet](#-lancement-du-projet)
* [Conventions de développement](#-conventions-de-développement)
* [État d'avancement](#-état-davancement)
* [Prochaines étapes](#-prochaines-étapes)

---

# 📖 Présentation

WEF Agency propose différents services, notamment :

* saisie de documents ;
* création et mise en forme de documents ;
* tableaux ;
* pages de garde ;
* cartes et badges ;
* invitations ;
* scan ;
* photocopie ;
* impression ;
* personnalisation de vêtements et produits ;
* conception de projets ;
* gestion de bases de données ;
* développement de sites web, logiciels et applications ;
* production audiovisuelle ;
* photographie ;
* reportage événementiel ;
* événements en direct ;
* installation de systèmes et logiciels ;
* téléchargement de contenus numériques ;
* formations et accompagnement.

Le site doit permettre aux visiteurs de découvrir les services, consulter leurs détails et accéder facilement aux différentes informations de WEF Agency.

---

# 🎯 Objectifs

Le projet vise à :

* créer une présence web professionnelle pour WEF Agency ;
* présenter clairement les différents services ;
* afficher les tarifs lorsqu'ils sont disponibles ;
* présenter les réalisations ;
* présenter les formations ;
* faciliter le contact avec l'agence ;
* proposer une navigation simple et intuitive ;
* avoir une interface responsive ;
* construire une architecture React propre et maintenable.

---

# 🛠️ Technologies

## Frontend

* React
* Vite
* JavaScript
* JSX
* React Router
* Tailwind CSS

## Bibliothèques

* `react-router-dom`
* `lucide-react` pour les icônes

## Outils

* Visual Studio Code
* Git
* GitHub
* npm

---

# ✨ Fonctionnalités

## Navigation

Le site possède plusieurs pages accessibles grâce à React Router.

## Services

La section Services permet de :

* afficher les différents services ;
* afficher une icône ou une image représentant chaque service ;
* afficher une description ;
* afficher les tarifs disponibles ;
* accéder aux détails d'un service.

La route dynamique utilisée pour les détails est :

```text
/services/:id
```

Exemple :

```text
/services/1
/services/2
/services/3
```

---

## Réalisations

La page Réalisations présente les projets et travaux réalisés par WEF Agency.

---

## Formations

La page Formations présente les formations proposées par WEF Agency.

---

## FAQ

La FAQ regroupe les questions fréquentes des visiteurs.

---

## Contact

La page Contact permet aux visiteurs de retrouver les informations nécessaires pour contacter WEF Agency.

---

# 🗺️ Pages et routes

| Page                | Route           |
| ------------------- | --------------- |
| Accueil             | `/`             |
| Services            | `/services`     |
| Détail d'un service | `/services/:id` |
| Réalisations        | `/realisations` |
| Formations          | `/formations`   |
| À propos            | `/a-propos`     |
| FAQ                 | `/faq`          |
| Contact             | `/contact`      |

---

# 📁 Architecture du projet

```text
wef-agency/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── services/
│   │
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ProjectCard.jsx
│   │   └── FormationCard.jsx
│   │
│   ├── data/
│   │   ├── services.js
│   │   ├── projects.js
│   │   └── formations.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── Realisations.jsx
│   │   ├── Formations.jsx
│   │   ├── About.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

---

# 🧩 Rôle des dossiers

## `assets/`

Contient les ressources visuelles du site :

* images ;
* logos ;
* illustrations ;
* visuels des services.

Les images des services pourront être placées dans :

```text
src/assets/services/
```

Pour la première version, les services pourront utiliser des icônes cohérentes. Les photos pourront être ajoutées ultérieurement.

---

## `components/`

Contient les composants React réutilisables.

Exemples :

```text
Button.jsx
ServiceCard.jsx
ProjectCard.jsx
FormationCard.jsx
```

L'objectif est d'éviter de répéter le même code dans plusieurs pages.

---

## `data/`

Contient les données utilisées par l'application.

### `services.js`

Contient les services WEF Agency et leurs informations :

```js
{
  id,
  nom,
  description,
  image,
  tarifs
}
```

### `projects.js`

Contiendra les réalisations.

### `formations.js`

Contiendra les formations.

---

## `pages/`

Contient les pages complètes de l'application.

Une page peut utiliser plusieurs composants.

Exemple :

```text
Services.jsx
      ↓
ServiceCard.jsx
      ↓
services.js
```

---

## `routes/`

Contient la configuration de React Router.

Le fichier principal est :

```text
AppRoutes.jsx
```

---

# 👥 Répartition des tâches

Le projet est réalisé en collaboration.

## 👨🏾‍💻 N'famory

Responsable principalement de :

### Architecture et navigation

* configuration du projet ;
* architecture des dossiers ;
* React Router ;
* routes principales ;
* navigation générale.

### Pages

* `Home.jsx`
* `Services.jsx`
* `ServiceDetails.jsx`

### Composants

* `Button.jsx`
* `ServiceCard.jsx`

### Données

* `services.js`

### Responsabilités supplémentaires

* intégration de la logique liée aux services ;
* gestion de la navigation des services ;
* vérification des routes ;
* intégration des détails des services.

---

## 👩🏾‍💻 Collaboratrice

Responsable principalement de :

### Navigation globale

* `Header`
* `Footer`

### Pages

* `Realisations.jsx`
* `Formations.jsx`
* `About.jsx`
* `FAQ.jsx`
* `Contact.jsx`

### Composants

* `ProjectCard.jsx`
* `FormationCard.jsx`

### Données

* `projects.js`
* `formations.js`

---

# 🤝 Travail commun

Certaines tâches sont communes aux deux développeurs :

* responsive design ;
* intégration des assets ;
* cohérence visuelle ;
* tests ;
* correction des bugs ;
* vérification des routes ;
* revue de code ;
* intégration des différentes branches ;
* amélioration de l'expérience utilisateur ;
* mise à jour du README.

---

# 🧾 Données des services

Les services sont centralisés dans :

```text
src/data/services.js
```

Chaque service possède un identifiant unique.

Exemple :

```js
const services = [
  {
    id: 1,
    nom: "Saisie simple texte",
    description: "Saisie simple de texte par page.",
    image: "",
    tarifs: {
      noirBlanc: "1 000 FC",
      noirBlancEnLigne: "2 000 FC",
      couleur: "1 500 FC",
      couleurEnLigne: "3 000 FC",
    },
  },
]
```

Cette organisation permet aux composants de récupérer les données sans écrire les informations directement dans le JSX.

---

# 🖼️ Images et assets

Les services doivent progressivement disposer d'un visuel.

Organisation prévue :

```text
src/
└── assets/
    └── services/
        ├── saisie-simple.jpg
        ├── saisie-complexe.jpg
        ├── tableau-simple.jpg
        ├── impression-a4.jpg
        ├── impression-a3.jpg
        ├── scan.jpg
        ├── photocopie.jpg
        ├── photographie.jpg
        ├── developpement-web.jpg
        └── ...
```

### Première version

En attendant de trouver les photos adaptées, des icônes professionnelles peuvent être utilisées.

### Version ultérieure

Les icônes pourront être remplacées par des photos cohérentes représentant réellement chaque service.

L'objectif est de conserver la même structure de données afin que le remplacement des visuels ne nécessite pas de modifier les composants.

---

# 🌿 Git et organisation des branches

Le projet utilise Git et GitHub.

## Branches principales

```text
main
develop
```

### `main`

Branche stable.

Elle contient uniquement du code considéré comme prêt.

### `develop`

Branche d'intégration.

Les fonctionnalités terminées peuvent y être regroupées avant leur passage vers `main`.

---

## Branches de fonctionnalités

Les fonctionnalités doivent être développées dans des branches dédiées.

Exemples :

```text
feature/setup
feature/routing
feature/services
feature/home
feature/realisations
feature/formations
feature/contact
```

---

# 🔀 Workflow Git

Avant de commencer une fonctionnalité :

```bash
git checkout develop
git pull
```

Créer ensuite une branche :

```bash
git checkout -b feature/nom-de-la-fonctionnalite
```

Après le développement :

```bash
git add .
git commit -m "feat: description de la fonctionnalite"
```

Puis :

```bash
git push -u origin feature/nom-de-la-fonctionnalite
```

Une Pull Request peut ensuite être créée vers `develop`.

---

# 📝 Convention des commits

Utiliser des messages de commit clairs.

### Nouvelle fonctionnalité

```text
feat: add services page
```

### Correction

```text
fix: correct service route
```

### Style

```text
style: improve service cards
```

### Refactorisation

```text
refactor: reorganize service data
```

### Documentation

```text
docs: update README
```

---

# ⚙️ Installation

Cloner le dépôt :

```bash
git clone URL_DU_REPOSITORY
```

Entrer dans le projet :

```bash
cd wef-agency
```

Installer les dépendances :

```bash
npm install
```

Installer React Router si nécessaire :

```bash
npm install react-router-dom
```

Installer Lucide React :

```bash
npm install lucide-react
```

---

# ▶️ Lancement du projet

Lancer le serveur de développement :

```bash
npm run dev
```

Vite fournira ensuite l'adresse locale du projet.

Exemple :

```text
http://localhost:5173
```

---

# 🧪 Vérification des routes

Les routes suivantes doivent fonctionner :

```text
/
```

```text
/services
```

```text
/services/1
```

```text
/realisations
```

```text
/formations
```

```text
/a-propos
```

```text
/faq
```

```text
/contact
```

---

# 📐 Conventions de développement

## Composants

Les composants React utilisent PascalCase :

```text
ServiceCard.jsx
ProjectCard.jsx
FormationCard.jsx
```

## Pages

Les pages utilisent également PascalCase :

```text
Home.jsx
Services.jsx
ServiceDetails.jsx
```

## Données

Les fichiers de données utilisent camelCase :

```text
services.js
projects.js
formations.js
```

---

# 🎨 Design

Le design doit être :

* moderne ;
* professionnel ;
* simple ;
* responsive ;
* accessible ;
* cohérent avec l'identité de WEF Agency.

Le site doit fonctionner correctement sur :

```text
Desktop
Tablet
Mobile
```

Le développement avec Tailwind CSS sera réalisé progressivement après la configuration et l'organisation initiale du projet.

---

# 📊 État d'avancement

## ✅ Terminé

* [x] Initialisation du projet React/Vite
* [x] Installation/configuration de React Router
* [x] Configuration de `BrowserRouter`
* [x] Création de l'architecture du projet
* [x] Création des dossiers principaux
* [x] Création des pages
* [x] Création des composants de base
* [x] Création des fichiers de données
* [x] Configuration des routes
* [x] Route dynamique `/services/:id`
* [x] Test des routes
* [x] Premier commit de l'architecture

## 🚧 En cours

* [ ] Finalisation des données des services
* [ ] Vérification des tarifs
* [ ] Création des cartes de services
* [ ] Page Services
* [ ] Page détail d'un service
* [ ] Ajout des icônes
* [ ] Recherche et ajout des photos des services
* [ ] Intégration du design
* [ ] Responsive design

## ⏳ À venir

* [ ] Page d'accueil complète
* [ ] Header
* [ ] Footer
* [ ] Réalisations
* [ ] Formations
* [ ] À propos
* [ ] FAQ
* [ ] Contact
* [ ] Tests complets
* [ ] Revue du code
* [ ] Optimisation
* [ ] Déploiement

---

# 🚀 Prochaines étapes

L'ordre de développement prévu est :

```text
Architecture
     ↓
Routing
     ↓
Données
     ↓
Composants
     ↓
Pages
     ↓
Design
     ↓
Responsive
     ↓
Tests
     ↓
Déploiement
```

Pour les services :

```text
services.js
     ↓
ServiceCard
     ↓
Services.jsx
     ↓
/services/:id
     ↓
ServiceDetails.jsx
```

Les visuels seront ajoutés progressivement sans modifier l'architecture générale.

---

# 📌 Règle importante du projet

Les informations concernant WEF Agency ne doivent pas être inventées.

Lorsqu'une information officielle est disponible :

> utiliser l'information fournie par WEF.

Lorsqu'une information manque :

> ne pas inventer de tarif, de prestation ou d'information officielle.

Les données doivent rester séparées du code d'affichage afin de faciliter leur modification ultérieure.

---

# 👨🏾‍💻 Projet

**WEF Agency**

Projet réalisé en collaboration avec :

* N'famory
* Collaboratrice du projet

Technologies principales :

**React · Vite · JavaScript · React Router · Tailwind CSS**

---
