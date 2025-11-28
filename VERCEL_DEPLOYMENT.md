# Vercel Deployment Instructions

## Configure Vercel Project Settings

Since this is a monorepo project with separate `frontend` and `backend` directories, you need to configure Vercel to deploy only the frontend:

### Steps:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **General**
3. Under **Build & Development Settings**:
   - **Root Directory**: Set to `frontend`
   - **Build Command**: Leave as default (`npm run build`)
   - **Output Directory**: Leave as default (`.next`)
   - **Install Command**: Leave as default (`npm install`)

4. Click **Save**
5. Go to **Deployments** and click **Redeploy** on the latest deployment

### Alternative: Use Vercel CLI

```bash
# In the project root, run:
vercel --cwd frontend
```

That's it! Vercel will now build only the frontend directory.
