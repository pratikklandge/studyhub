# StudyHub – MSBTE K-Scheme Notes & Study App

Modern Next.js application providing MSBTE K-Scheme diploma study notes, syllabus, and unit-wise MCQs.

## 🚀 How to Deploy on Vercel

### Method 1: Deploy via GitHub (Recommended & Simplest)

1. **Upload / Push this project to GitHub**:
   - Create a new repository on [GitHub](https://github.com/new).
   - Push this project folder (`studyhub`) to your GitHub repository.

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** → **"Project"**.
   - Select your GitHub repository.

3. **Deploy settings**:
   - **Framework Preset**: `Next.js` (automatically detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - Click **"Deploy"**.

---

### Method 2: Deploy using Vercel CLI from your Terminal

1. Open PowerShell / Command Prompt in the `studyhub` folder:
   ```bash
   cd C:\Users\Pratik\.gemini\antigravity\scratch\studyhub
   ```

2. Run the Vercel deployment command:
   ```bash
   npx vercel
   ```

3. Follow the on-screen prompts:
   - Log in to your Vercel account via the browser link.
   - Confirm project settings (hit Enter for defaults).
   - To deploy to production, run:
     ```bash
     npx vercel --prod
     ```

---

## 📁 Key Files Configured for Vercel

- `vercel.json`: Sets standard Next.js framework configuration and sets proper caching & inline headers for notes PDFs.
- `next.config.ts`: Configured for Next.js 16 with optimized build settings.
- `.gitignore`: Excludes build artifacts (`.next`), dependencies (`node_modules`), and secrets (`.env`).
- `public/notes/physics/`: Houses unit-wise notes PDFs (`unit_1.pdf`, `unit_2.pdf`, `unit_3.pdf`, `studyhub_physics_complete_notes.pdf`).
