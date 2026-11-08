# M & A — Premium Digital Islamic Wedding Invitation Website

A luxury, Pinterest-inspired Islamic wedding invitation website designed for:

- **Bride:** Mizba Tehreem Fatima (B. Pharmacy) — *D/o. Mohammed Ibrahim Mulla*
- **Groom:** Altamash Ali (B.E., Mechanical Engineer) — *S/o. Liyaqat Ali*
- **Couple Initials:** M & A
- **Wedding Dates:** 26 & 27 November 2026 (15 & 16 Jamadi us-Sani 1448 AH)
- **Location:** Gulbarga, Karnataka

---

## ✨ Features & Architecture

1. **Cinematic Invitation Opening:**
   - Interactive gold & ivory envelope opening with Framer Motion, M & A seal, and skip option.
2. **Hero Section (Strict Master Prompt Hierarchy):**
   - **First:** Arabic Bismillah (`بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`) with proper RTL & Amiri font.
   - **Immediately Below:** English transliteration (*Bismillah ir-Rahman ir-Rahim*).
   - **Second:** Quranic Ayat (`وَخَلَقْنَاكُمْ أَزْوَاجًا`), English translation (*"And We created you in pairs."*), and reference (*Surah An-Naba (78:8)*).
   - **Third:** `UNDER THE BLESSINGS OF THEIR FAMILIES` in spaced small-caps.
   - **Fourth:** "A Wedding Celebration", Mizba Tehreem Fatima, centered `— WEDS —`, Altamash Ali, "With the blessings of their families", and "26 & 27 November 2026 • Gulbarga, Karnataka".
3. **The Blessed Couple (Symmetrical 3-Circle Horizontal Layout):**
   - **Left Circle:** Custom anime-style Muslim bride in pastel lavender hijab with gold embroidery and ivory lace.
   - **Center Circle:** Champagne-gold M & A circular wedding monogram seal.
   - **Right Circle:** Custom anime-style Muslim groom in royal ivory & gold sherwani with lavender accents.
   - **Below the circles:** "Mizba & Altamash" with Qur'anic blessing.
4. **Wedding Countdown:**
   - Real-time Days, Hours, Minutes, and Seconds counting down to 26 November 2026.
5. **Wedding Events (with Direct Google Maps Navigation):**
   - **Nikah:** Thursday, 26 Nov 2026 (15 Jamadi us-Sani 1448 AH) After Namaz-e-Asr at *Kalleyrawan Masjid, Lohar Galli, Kirana Bazar, Gulbarga*.
   - **Wedding Dinner:** Thursday, 26 Nov 2026 (15 Jamadi us-Sani 1448 AH) at 8:00 PM at *Al-Israr Function Hall, Islamabad Colony, Gulbarga*.
   - **Valima:** Friday, 27 Nov 2026 (16 Jamadi us-Sani 1448 AH) at 8:00 PM at *Majestic Garden Function Hall, Qamar Colony, Ring Road, Gulbarga*.
6. **Gallery & Full-Screen Lightbox:**
   - Responsive wedding stationery and illustration gallery with smooth modal lightbox.
7. **Floating WhatsApp Share:**
   - Pre-filled invitation message with automatic dynamic URL detection and one-click copy helper.
8. **Final Footer (Exact Master Prompt Order):**
   - Wedding blessing: *"May Allah bless the couple with love, happiness, barakah and a beautiful life together."*
   - Couple Names: `Mizba & Altamash`
   - Closing message: `Made with love and duas`
   - Couple Monogram: `• M & A`
   - Location & Year: `Gulbarga, Karnataka • 2026`
   - Authentic Instagram icon linked to `theinvitationhub.co` ([https://www.instagram.com/theinvitationhub.co/](https://www.instagram.com/theinvitationhub.co/)).

---

## 🛠️ Technology Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React**

---

## 🚀 Local Development

1. Open this repository:
   ```bash
   cd "d:/Projects/M weds A"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start local development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Preview production build:
   ```bash
   npm run preview
   ```

---

## ☁️ Cloudflare Pages Free Plan Deployment

### Option A: Via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/ma-wedding.git
   git push -u origin main
   ```
2. Navigate to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository `ma-wedding`.
4. Configure Build Settings:
   - **Framework preset:** `Vite` (or `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**. Your site will be published at `https://ma-wedding.pages.dev`.

### Option B: Via Wrangler CLI
1. Log in to Cloudflare:
   ```bash
   npx wrangler login
   ```
2. Deploy the static `dist` build:
   ```bash
   npx wrangler pages deploy dist --project-name ma-wedding
   ```
