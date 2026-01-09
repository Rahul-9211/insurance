# Setup Guide - Google Apps Script URL Configuration

## Setting Up the Google Apps Script URL

The contact form API requires a Google Apps Script Web App URL to submit form data to Google Sheets. Follow these steps to configure it:

### Step 1: Create a `.env.local` file

Create a file named `.env.local` in the root directory of your project (same level as `package.json`).

### Step 2: Add the Environment Variable

Add the following line to your `.env.local` file:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with your actual Google Apps Script deployment ID.

### Step 3: Get Your Google Apps Script URL

1. **Create a Google Apps Script** that handles form submissions
2. **Deploy it as a Web App**:
   - Click "Deploy" → "New deployment"
   - Click the gear icon ⚙️ next to "Select type" and choose "Web app"
   - Set the following:
     - **Execute as**: Me (your email)
     - **Who has access**: Anyone (important!)
   - Click "Deploy"
   - Copy the **Web App URL** (it should end with `/exec`, not `/dev`)

3. **Paste the URL** into your `.env.local` file

### Example `.env.local` file:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycby1234567890abcdefghijklmnopqrstuvwxyz/exec
```

### Important Notes:

- ✅ The URL must end with `/exec` (production deployment), not `/dev` (development)
- ✅ The deployment must be set to "Anyone" access, not "Only myself"
- ✅ After creating `.env.local`, restart your Next.js development server
- ✅ Never commit `.env.local` to git (it's already in `.gitignore`)

### For Production Deployment:

When deploying to Vercel or another hosting platform:

1. Go to your project settings
2. Add the environment variable `GOOGLE_APPS_SCRIPT_URL` with your script URL
3. Redeploy your application

### Testing:

After setting up the environment variable:

1. Restart your development server: `npm run dev`
2. Submit a test form on the contact page
3. Check your Google Sheet to verify the data was submitted
4. Check the browser console and server logs for any errors

### Troubleshooting:

If you see errors:

- **401 Unauthorized**: Check that the URL ends with `/exec` and the deployment is active
- **403 Permission denied**: Make sure the deployment is set to "Anyone" access
- **404 Not found**: Verify the URL is correct and the deployment hasn't been deleted
- **Server configuration error**: Make sure `GOOGLE_APPS_SCRIPT_URL` is set in your `.env.local` file

