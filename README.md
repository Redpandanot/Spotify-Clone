# 🎵 Spotify Clone

A React-based web application mimicking Spotify’s interface and features using the Spotify Web API and Playback SDK.

---

## 📌 Description

This app replicates several core functionalities of Spotify, including:
- Music playback with pause/play/skip controls.  
- Browsing and searching songs, playlists, albums, and artists.  
- Viewing and managing user playlists and liked tracks.

It’s built for learning and showcasing integration with Spotify’s API. Features include authentication, dynamic UI components, and smooth audio playback.

---

## 🚀 Features

- 🔐 **Spotify OAuth Login**  
  Secure login through Spotify’s authentication flow using Implicit Grant and PKCE :contentReference[oaicite:1]{index=1}.

- 🎶 **Music Playback**  
  Play 30-second previews using the Spotify Playback SDK; includes playback controls, shuffle, repeat, next/previous :contentReference[oaicite:2]{index=2}.

- 🔍 **Search & Browse UI**  
  Search for tracks, playlists, albums, and artists; sidebar navigation to access user library.

- 📂 **Playlists & Liked Tracks**  
  Display user’s playlists and saved songs with ability to play or save.

- 🎨 **Dynamic Visuals**  
  Extract dominant album colors with ColorThief (and TinyColor) to theme UI :contentReference[oaicite:3]{index=3}.

---

## 🧰 Tech Stack

| Technology              | Use                                       |
|-------------------------|-------------------------------------------|
| React  | UI               |
| Tailwind CSS             | Responsive, utility-first styling         |
| ColorThief & TinyColor   | Dynamic theming based on album art       |

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- Node.js (v14+)
- npm or yarn
- Spotify Developer account (Client ID & Redirect URI)

### 📦 Clone & Install

```bash
git clone https://github.com/Redpandanot/Spotify-Clone.git
cd Spotify-Clone
npm install
```
🛠️ Environment Setup
Create a .env file in the root directory:

env
```
REACT_APP_CLIENT_ID=your_spotify_client_id
REACT_APP_REDIRECT_URI=http://localhost:3000/
```
▶️ Start the App
```bash
npm start
```
Open http://localhost:3000 and log in with your Spotify account.

🗂️ Project Structure
bash
```
Spotify-Clone/
├── public/
│   └── index.html
├── src/
│   ├── components/       # UI components: Player, Sidebar, SongRow, etc.
│   ├── DataLayer.js      # Redux-style state management
│   ├── Spotify.js        # Spotify API wrapper & token handling
│   ├── utils/            # Helpers (e.g., color extraction)
│   ├── App.js            # Main application logic & routing
│   └── index.js          # Entry point
├── .env
├── package.json
└── README.md
```
