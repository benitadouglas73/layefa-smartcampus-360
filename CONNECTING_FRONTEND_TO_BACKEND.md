# Connecting Frontend to Backend

## Environment Variables Setup

The frontend needs to know where your backend API is hosted. This is configured via the `NEXT_PUBLIC_API_URL` environment variable.

### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://layefa-smartcampus-360-1-feli.onrender.com`
   - **Environments**: Select all (Production, Preview, Development)
4. Click **Save**
5. Go to **Deployments** and **Redeploy** the latest deployment

### For Local Development

Create a `.env.local` file in the `frontend` directory:

```bash
cd frontend
echo "NEXT_PUBLIC_API_URL=https://layefa-smartcampus-360-1-feli.onrender.com" > .env.local
```

Or for local backend testing:
```bash
echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env.local
```

**Note**: `.env.local` is already in `.gitignore` and won't be committed to Git.

### Verify Configuration

The frontend reads the API URL from `src/config.ts`:
```typescript
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
```

If `NEXT_PUBLIC_API_URL` is not set, it defaults to `http://localhost:5000`.

## Backend CORS Configuration

Make sure your Render backend allows requests from your Vercel frontend domain. Update the backend's CORS configuration if needed.

### In `backend/server.js` or wherever CORS is configured:

```javascript
const cors = require('cors');

app.use(cors({
  origin: [
    'http://localhost:3000',  // Local frontend
    'https://your-vercel-app.vercel.app'  // Your Vercel domain
  ],
  credentials: true
}));
```

## Testing the Connection

After deploying with the environment variable:

1. Open your Vercel frontend
2. Try to log in or register
3. Check the browser console (F12) → Network tab
4. Verify requests are going to: `https://layefa-smartcampus-360-1-feli.onrender.com/api/...`

If you see errors, check:
- Environment variable is set correctly on Vercel
- Backend is running on Render
- CORS is configured properly on the backend
