# 💬 Chat App Moderne

Une application web de messagerie instantanée développée avec la **stack MERN** (**MongoDB, Express, React, Node.js**). Ce projet permet aux utilisateurs de créer un compte, se connecter, discuter en temps réel, et retrouver leur historique de conversations dans une interface moderne et responsive.

## 🚀 Fonctionnalités

- 🔐 Authentification des utilisateurs avec JWT (connexion / inscription)
- 💬 Système de chat en temps réel
- 🧾 Historique des messages par utilisateur
- 📱 Interface utilisateur moderne et responsive
- 🧑‍💼 Gestion des utilisateurs (création, connexion, déconnexion)
- 🗂️ Organisation propre du code (front-end et back-end)

## 🧰 Technologies utilisées

### Front-end :
- React.js
- Tailwind CSS
- Axios

### Back-end :
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Bcrypt pour le hachage des mots de passe

## 📸 Captures d’écran

> *(Ajoute ici quelques captures d’écran de ton application : page de connexion, interface de chat, etc.)*

## 🛠️ Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/ton-nom-utilisateur/chat-app.git
cd chat-app


cd client
npm install
Back-end :

cd ../server
npm install
3. Configurer les variables d’environnement
Dans le dossier server/, crée un fichier .env avec :

env

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
4. Lancer le projet
Serveur back-end :

cd server
npm run dev
Application front-end :

cd ../client
npm start
Visite http://localhost:3000 pour voir l’application.

📂 Structure du projet
pgsql

chat-app/
├── client/         # Code Front-end (React)
├── server/         # Code Back-end (Express)
└── README.md
🧱 Fonctionnement
L’utilisateur s’inscrit ou se connecte.

Une fois connecté, il accède à l’interface de messagerie.

Les messages sont stockés et récupérés via MongoDB.

L’utilisateur peut voir l’historique de ses discussions à tout moment.

✨ Améliorations possibles
🔔 Notifications en temps réel

📤 Envoi de fichiers ou images

👥 Discussions en groupe ou par canaux

🌍 Support multilingue

📬 Contact
