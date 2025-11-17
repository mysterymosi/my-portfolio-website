# Sanity CMS Quick Start Guide

## Quick Setup (5 minutes)

### 1. Create `.env.local` file

Create a file named `.env.local` in the root of your project with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_WEBHOOK_SECRET=your_webhook_secret_here
```

### 2. Get Your Sanity Project ID

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Sign in with your account
3. Create a new project or select an existing one
4. Copy the **Project ID** from the project settings
5. Paste it in `.env.local` replacing `your_project_id_here`

### 3. Generate Webhook Secret

```bash
openssl rand -base64 32
```

Copy the output and paste it in `.env.local` replacing `your_webhook_secret_here`

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Access Sanity Studio

Go to: `http://localhost:3000/studio`

Sign in with your Sanity account when prompted.

### 6. Add Your First Project

In the Studio:

1. Click **Project** in the sidebar
2. Click **Create new Project**
3. Fill in the fields:
   - **Project Name**: e.g., "Schoolable Pay"
   - **Description**: Brief description of the project
   - **Logo**: Upload an image
   - **Link → URL**: Full URL to the project
   - **Link → Label**: Display text (e.g., "schoolable.vercel.app")
   - **Display Order**: 1 (for first position)
4. Click **Publish**

### 7. View Your Projects

Go to: `http://localhost:3000/projects`

Your projects should now be loading from Sanity!

## What's Configured

✅ Sanity Studio at `/studio` route  
✅ Projects schema with fields for name, description, logo, and links  
✅ ISR (Incremental Static Regeneration) with 1-hour cache  
✅ Webhook endpoint for instant revalidation at `/api/revalidate`  
✅ Image optimization through Sanity CDN

## Next Steps

- Add all your projects to Sanity Studio
- Set up webhooks for production (see `SANITY_SETUP.md`)
- Deploy to your hosting platform with environment variables

## Need Help?

See `SANITY_SETUP.md` for detailed instructions and troubleshooting.
