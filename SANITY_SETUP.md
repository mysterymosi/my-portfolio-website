# Sanity CMS Integration Setup Guide

This guide will walk you through setting up Sanity CMS for managing your portfolio projects.

## Step 1: Get Your Sanity Project ID

1. Go to [sanity.io](https://www.sanity.io/) and sign in with your account
2. Create a new project or select an existing one
3. Copy your **Project ID** from the project settings

## Step 2: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (copy from `.env.local.example`):

```bash
cp .env.local.example .env.local
```

2. Update the `.env.local` file with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_WEBHOOK_SECRET=your_chosen_secret_string
```

**Notes:**

- Replace `your_actual_project_id` with the Project ID from Step 1
- Keep `production` as the dataset name (or use `development` for testing)
- Generate a random string for `SANITY_WEBHOOK_SECRET` (e.g., use `openssl rand -base64 32`)

## Step 3: Deploy the Sanity Schema

1. Run the development server:

```bash
npm run dev
```

2. Navigate to `http://localhost:3000/studio` in your browser
3. Sign in with your Sanity account
4. You should now see the Sanity Studio interface

## Step 4: Add Your Existing Projects to Sanity

You'll need to manually add your projects through the Sanity Studio. Here are your existing projects for reference:

### Projects to Add:

1. **Schoolable Pay**

   - Description: Financial infrastructure to run a successful school business
   - URL: https://schoolable.vercel.app/auth/login
   - Label: schoolable.vercel.app
   - Logo: Upload `/src/images/logos/schoolable.jpeg`
   - Order: 1

2. **Cafe One Wallet**

   - Description: Customer and Admin dashboard for a wallet infrastructure
   - URL: https://idbancwaas.vercel.app/login
   - Label: dashboard.c-one.ng
   - Logo: Upload `/src/images/logos/cafeone.jpeg`
   - Order: 2

3. **Little App Website**

   - Description: Collaborated on the development of the Little App's landing page
   - URL: https://trylittleapp.com/
   - Label: trylittleapp.com
   - Logo: Upload `/src/images/logos/little-app.ico`
   - Order: 3

4. **Little Admin**

   - Description: Admin dashboard for monitoring and managing the operations of the Little App
   - URL: https://littleadmin.vercel.app/auth/login
   - Label: littleadmin.vercel.app
   - Logo: Upload `/src/images/logos/little-admin.svg`
   - Order: 4

5. **Mosi ID Banc**

   - Description: Admin dashboard for a Ledger system. The owners for some reason deemed it fit to name it after me. 😅
   - URL: https://mosiidbanc.vercel.app/auth/login
   - Label: mosiidbanc.vercel.app
   - Logo: Upload `/src/images/logos/mosi-id-banc.svg`
   - Order: 5

6. **Duff KYC Portal**
   - Description: Dashboard designed to streamline the Know Your Customer (KYC) process.
   - URL: https://duff.vercel.app/auth/signin
   - Label: duff.vercel.app
   - Logo: Upload `/src/images/logos/duff.svg`
   - Order: 6

## Step 5: Set Up Webhooks for Automatic Revalidation

To ensure your website updates immediately when you make changes in Sanity:

1. Go to your Sanity project dashboard
2. Navigate to **API** → **Webhooks**
3. Click **Create webhook**
4. Configure:
   - **Name**: Portfolio Revalidation
   - **URL**: `https://your-domain.com/api/revalidate` (replace with your actual domain)
   - **Dataset**: production
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type == "project"`
   - **Secret**: Use the same value as `SANITY_WEBHOOK_SECRET` from your `.env.local`
5. Save the webhook

### For Local Development:

To test webhooks locally, you can use a tool like [ngrok](https://ngrok.com/):

```bash
# In a separate terminal, run ngrok
ngrok http 3000

# Use the ngrok URL in your webhook configuration
# Example: https://abc123.ngrok.io/api/revalidate
```

## Step 6: Deploy to Production

When deploying your site (e.g., to Vercel):

1. Add the environment variables to your hosting platform:

   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_WEBHOOK_SECRET`

2. Update the webhook URL in Sanity to point to your production domain

## Usage

### Managing Projects

1. Go to `/studio` on your website (or `http://localhost:3000/studio` locally)
2. Sign in with your Sanity account
3. Click on **Project** in the sidebar
4. Add, edit, or delete projects as needed
5. Changes will automatically trigger a revalidation and update your site

### Project Fields

- **Project Name**: The name of your project
- **Description**: A brief description
- **Logo**: Upload an image file (recommended size: 64x64px or larger)
- **Link**:
  - **URL**: The full URL to your project
  - **Label**: Display text for the link (e.g., "example.com")
- **Display Order**: Number to control the sort order (lower numbers appear first)

## Troubleshooting

### Studio Not Loading

- Ensure your `.env.local` file is properly configured
- Restart your development server after adding environment variables
- Check that your Project ID is correct

### Projects Not Showing

- Make sure you've added at least one project in Sanity Studio
- Check that the project has all required fields filled in
- Try restarting the development server

### Changes Not Reflecting

- Verify that the webhook is properly configured
- Check that the webhook secret matches between Sanity and your `.env.local`
- For ISR, the cache will refresh after 1 hour by default, or immediately via webhook

### Images Not Loading

- Ensure images are uploaded to Sanity (not referenced by path)
- Check that the Sanity Project ID is correct in your environment variables

## Next Steps

- Customize the project schema to add more fields (tags, dates, etc.)
- Add authentication to the Studio route for production
- Consider adding draft previews for unpublished projects
- Extend to other content types (articles, work experience, etc.)

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router)
- [Sanity Studio Documentation](https://www.sanity.io/docs/studio)
