# Guide de Déploiement Hostinger (Node.js App) — British Board UK

Ce projet est prêt pour un déploiement direct en production sur **Hostinger (Node.js Application)** via hPanel ou VPS.

---

## 1. Variables d'Environnement (Environment Variables)

Dans votre espace **Hostinger hPanel** > **Node.js** > **Environment Variables** (ou dans un fichier `.env`), configurez les variables suivantes :

| Variable | Valeur recommandée | Description |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Active le mode production haute performance |
| `PORT` | `3000` (ou géré par Hostinger) | Port d'écoute du serveur Node.js |
| `APP_URL` | `https://votre-domaine.com` | URL publique de votre site web |

---

## 2. Configuration dans Hostinger hPanel

Rendez-vous dans votre panneau **Hostinger** :
**Sites web (Websites)** > **Gérer (Dashboard)** > **Node.js**

Renseignez les champs suivants :

- **Node.js version** : Sélectionnez `20.x` ou `22.x` (LTS recommandé)
- **Application mode** : `Production`
- **Application root** : `/public_html` (ou le dossier où vous déposez les fichiers)
- **Application startup file** : `server.js`
- **Application URL** : Sélectionnez votre nom de domaine

---

## 3. Commandes de Build et Lancement

Une fois vos fichiers poussés sur Hostinger (via Git ou terminal SSH) :

```bash
# 1. Installer les dépendances
npm install

# 2. Compiler le frontend Vite (génère le dossier dist/)
npm run build

# 3. Démarrer le serveur (ou cliquer sur "Restart Application" dans hPanel)
npm start
```

---

## 4. Architecture des Fichiers Clés

- `server.js` : Serveur Express de production configuré pour servir `dist/` avec fallback SPA et endpoint de statut `/health`.
- `package.json` : Contient les scripts `"build": "vite build"` et `"start": "node server.js"`.
- `.env.example` : Modèle documenté des variables d'environnement.
- `dist/` : Dossier généré automatiquement par `npm run build` contenant le site optimisé.

---

## 5. Vérification du Déploiement

Une fois l'application démarrée, vous pouvez tester :
- Le site web principal : `https://votre-domaine.com`
- La route de diagnostic : `https://votre-domaine.com/health` (doit renvoyer `{"status": "ok"}`)
