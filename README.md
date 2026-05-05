# VibeCheck 📍

A casual mobile social app to post spontaneous hangout spots, discover what's happening nearby, and join in with others — no invites, no planning pressure.

Built with **React Native (Expo)** + **Firebase**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Mobile framework | React Native (Expo) |
| Authentication | Firebase Auth |
| Database | Firestore (real-time) |
| File storage | Firebase Storage |
| Navigation | React Navigation v6 |
| Image picking | expo-image-picker |
| Session persistence | AsyncStorage |

---

## Project Structure

```
VibeCheck/
├── src/
│   ├── config/
│   │   └── firebase.js          # Firebase init — auth, db, storage
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.js
│   │   │   └── SignUpScreen.js
│   │   ├── FeedScreen.js
│   │   ├── PostScreen.js
│   │   ├── DetailScreen.js
│   │   └── ProfileScreen.js
│   ├── components/
│   │   ├── HangoutCard.js       # Feed card — photo + no-photo variants
│   │   ├── VibePill.js          # Coloured vibe tag pill
│   │   └── AvatarCircle.js      # Initials avatar
│   ├── navigation/
│   │   ├── AppNavigator.js      # Bottom tab navigator (authed users)
│   │   └── AuthNavigator.js     # Stack navigator (login / signup)
│   └── hooks/
│       ├── useAuth.js           # Auth state listener
│       └── useHangouts.js       # Firestore onSnapshot hook
├── assets/
├── App.js
├── app.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your phone (iOS or Android)
- A Firebase project (see Firebase Setup below)

### Install

```bash
git clone https://github.com/yourname/vibecheck.git
cd vibecheck
npm install
```


### Run

```bash
npx expo start
```

Scan the QR code with Expo Go on your phone.

---

## Firebase Setup

### 1. Create project
Go to [console.firebase.google.com](https://console.firebase.google.com) → Add project → name it `vibecheck`.

### 2. Enable services

**Authentication**
- Build → Authentication → Get started
- Enable **Email/Password** provider

**Firestore**
- Build → Firestore Database → Create database
- Start in **test mode**
- Choose a region close to you

**Storage**
- Build → Storage → Get started
- Start in **test mode**

### 3. Register your app
- Project overview → Android icon
- Package name: `com.yourname.vibecheck`
- Download `google-services.json` → place in project root

---

## Data Model

### `hangouts/` collection

```
id           string       auto-generated
title        string       required — max 80 chars
location     string       required
dateTime     timestamp    required
vibeTag      string       required — see Vibe Tags below
imageUrl     string?      nullable — Firebase Storage URL
createdBy    string       Firebase Auth UID
joinerIds    string[]     array of UIDs
createdAt    timestamp    server timestamp
```

### `users/` collection

```
uid          string       matches Firebase Auth UID
displayName  string       required
photoUrl     string?      nullable
city         string       required
createdAt    timestamp    server timestamp
```

---

## Vibe Tags

| Tag | Value | Color |
|---|---|---|
| Food & drinks | `food` | Amber |
| Outdoors | `outdoors` | Teal |
| Chill | `chill` | Blue |
| Nightlife | `nightlife` | Purple |
| Sports | `sports` | Red |
| Other | `other` | Gray |

---

## Key Features

- **Live feed** — Firestore `onSnapshot` updates the feed in real time, no pull-to-refresh needed
- **Photo posts** — optional photo uploaded to Firebase Storage, URL stored in Firestore
- **Join / Leave** — single tap using Firestore `arrayUnion` / `arrayRemove` on `joinerIds`
- **Optimistic UI** — join button updates instantly before Firestore confirms
- **Auth persistence** — session survives app restarts via AsyncStorage
- **No photo fallback** — cards render cleanly without an image, no placeholder shown

---

## Screens

| Screen | Route | Description |
|---|---|---|
| Login | `Auth/Login` | Email + password sign in |
| Sign Up | `Auth/SignUp` | Create account + user doc |
| Feed | `App/Feed` | Live hangout card list |
| Post | `App/Post` | Create a hangout with optional photo |
| Detail | `App/Detail` | Full hangout view + joiner list |
| Profile | `App/Profile` | Your posts, joined hangouts, sign out |

---

## Design Rules

- No box shadows — 0.5px borders for separation
- No gradients — flat solid colors only
- Max font size: 20px (screen titles)
- Primary teal `#1D9E75` used only for CTAs and active states
- Spacing unit: 8px — all spacing is a multiple of 8
- Two font weights only: 400 and 500
- Photos sit at the top of the card — no text overlaid on images

---

## Build Order

1. Firebase setup + config
2. Navigation shell (Auth stack + App tab navigator)
3. Auth screens (Sign up, Log in, route protection)
4. Feed screen (onSnapshot, FlatList, HangoutCard component)
5. Post screen (image picker, Storage upload, Firestore write)
6. Join / Leave logic (arrayUnion / arrayRemove, optimistic UI)
7. Detail screen (full view, joiner list, delete own post)
8. Profile screen (user doc, my posts, joined, sign out)
9. Polish (skeletons, empty states, error handling)

---

## License

MIT