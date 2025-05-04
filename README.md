# Site RGPD - Simulation de gestion des données personnelles

Ce projet est un site statique simulant un espace utilisateur conforme au RGPD, sans base de données. Il permet à un utilisateur de consulter, modifier, exporter ou supprimer ses données personnelles, tout en intégrant des aspects d'accessibilité, de responsabilité sociétale et de propriété intellectuelle.

## 🔧 Technologies utilisées
- HTML5 sémantique
- CSS3 (responsive + mode sombre)
- JavaScript léger (aucun framework)

## 📄 Pages disponibles
- **Accueil** : Présentation de l’objectif du site et de la démarche responsable
- **Mon Profil** : Affiche des données simulées (nom, prénom, email), avec options de modification, suppression et export
- **Inscription** : Formulaire avec case RGPD obligatoire
- **Politique de confidentialité** : Explication du traitement fictif des données

## 🎯 Fonctionnalités simulées
- Export de données au format JSON
- Suppression de compte (modale de confirmation)
- Validation de consentement RGPD obligatoire à l'inscription
- Changement de thème clair/sombre

## ♿ Accessibilité respectée
- Balises sémantiques (`<header>`, `<nav>`, `<main>`, etc.)
- Navigation clavier avec `Tab`
- Styles visibles au focus (outline)
- Contraste vérifié ≥ 4.5:1
- Images avec attribut `alt`

## 🌱 Responsabilité sociétale
- Données minimales simulées
- Thème sombre pour le confort visuel
- Accessibilité soignée

## 🧪 Tests réalisés
- Test WAVE pour accessibilité : ✅
- Test WebAIM Contrast Checker : ✅

---

## 🚀 Mise en place locale

1. **Télécharge le projet**
```bash
https://github.com/votre-utilisateur/mon-projet-rgpd.git
```

2. **Structure des fichiers**
```
mon-projet-rgpd/
├── index.html
├── README.md
├── LICENCE.txt
├── credits.md
```

3. **Lancer le site**
- Ouvrir `index.html` dans un navigateur (double-clic ou clic droit > Ouvrir avec Chrome/Firefox...)

4. **Effectuer les tests d’accessibilité**
- [WAVE tool](https://wave.webaim.org/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 📜 Licence
MIT — voir [LICENCE.txt](LICENCE.txt)

## 👨‍💻 Auteur / Développement
Projet réalisé à but pédagogique dans le cadre d’un exercice sur le RGPD, l’accessibilité et la conception responsable.

**Développé par Pierre Lescombe**
