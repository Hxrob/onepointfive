This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

To enable email functionality, create a `.env.local` file in the root directory with the following variables:

```bash
# Resend API Configuration
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
EMAIL_FROM=onboarding@resend.dev
EMAIL_TO=your_email@example.com

# Google Maps API (if using)
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### Setting up Resend:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add your domain or use the default `onboarding@resend.dev` for testing
4. Update the `EMAIL_TO` with your email address
