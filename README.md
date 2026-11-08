# M & A — Premium Digital Wedding Invitation

An elegant, minimal, and romantic digital Islamic wedding invitation website designed for:

- **Bride:** Mizbha Tahereem Fatima (B. Pharmacy) — *D/o. Mohammed Ibrahim Mulla*
- **Groom:** Altamash Ali (B.E., Mechanical Engineer) — *S/o. Janab Liyaqat Ali Sahab*
- **Couple Initials:** M & A
- **Wedding Dates:** 26 & 27 November 2026 (15 & 16 Jamadi us-Sani 1448 AH)
- **Location:** Gulbarga, Karnataka

---

## ✨ Features & Design Highlights

- **Cinematic Invitation Opening:** Interactive envelope opening experience with Framer Motion, M & A gold monogram seal, family blessing, and "Skip Intro" option.
- **Hero & Islamic Dedication:** Bismillah in Arabic calligraphy (`بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`), English transliteration, Urdu/English blessing message.
- **Real-Time Countdown:** Sophisticated timer counting down to the sacred Nikah (26 November 2026) with zero-negative safeguard.
- **Three Wedding Event Cards:**
  1. **Nikah:** Thursday, 26 Nov 2026 (15 Jamadi us-Sani 1448 AH) After Namaz-e-Asr at *Kalleyrawan Masjid, Lohar Galli, Kirana Bazar, Gulbarga*.
  2. **Wedding Dinner:** Thursday, 26 Nov 2026 at 8:00 PM at *Al-Israr Function Hall, Islamabad Colony, Gulbarga*.
  3. **Valima:** Friday, 27 Nov 2026 (16 Jamadi us-Sani 1448 AH) at 8:00 PM at *Majestic Garden Function Hall, Qamar Colony, Ring Road, Gulbarga*.
- **Direct Searchable Google Maps Navigation:** Real queries for all venues with on-demand map preview loading.
- **Couple Introduction:** Individual profiles with qualifications, parentage, and centered monogram seal.
- **Photo & Illustration Gallery:** Responsive grid with full-screen lightbox modal. Replaceable via `/public/assets/images/`.
- **Floating WhatsApp Share:** Pre-filled invitation message with dynamic live URL detection and quick link copy helper.
- **Editorial Luxury Typography:** Cormorant Garamond, Inter, and Amiri fonts with a bespoke palette (Lavender `#B8A4D8`, Ivory `#FFFDF7`, Champagne Gold `#C6A46C`, Warm Cream `#FAF8F3`).
- **Fully Responsive & Accessible:** Tested across 360px, 390px, 768px, 1024px, and desktop screens with `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React**

---

## 🚀 Local Development

1. Clone or open this folder:
   ```bash
   cd "d:/Projects/M weds A"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## ☁️ Cloudflare Pages Free Plan Deployment

This application is built as an ultra-fast static site (`dist` output) tailored for Cloudflare Pages 100% Free Plan.

### Option A: Connecting via GitHub (Recommended)
1. Create a new GitHub repository (e.g. `ma-wedding-invitation`).
2. Push your code to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/ma-wedding-invitation.git
   git push -u origin main
   ```
3. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
4. Select your `ma-wedding-invitation` repository.
5. In the build settings:
   - **Framework preset:** `Vite` (or `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** `20` or higher
6. Click **Save and Deploy**. Your site will be live at `https://<your-project>.pages.dev` (e.g., `https://ma-wedding.pages.dev`).

### Option B: Deploying directly with Wrangler CLI
If you prefer CLI deployment:
1. Log in to Cloudflare:
   ```bash
   npx wrangler login
   ```
2. Deploy the `dist` folder:
   ```bash
   npx wrangler pages deploy dist --project-name ma-wedding
   ```
