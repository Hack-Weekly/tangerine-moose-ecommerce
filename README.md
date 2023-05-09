# TANGERINE E-commerce App

This is an online marketplace features a wide range of coffees, teas and equipment which can be filtered by tags, or sorted by price and name. These products come in different sizes, packages and configurations, and can be added to a cart and finally purchased.

## Tech used

- [TypeScript](https://www.typescriptlang.org)
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [tRPC](https://trpc.io)
- [Chakra UI](https://chakra-ui.com)
- [Stripe Checkout](https://stripe.com/payments/checkout)
- [Carbon Icons](https://carbondesignsystem.com)

## What's next?

- [ ] site-wide search
- [ ] functioning user accounts (profiles, settings)
- [ ] suggested products under individual product pages
- [ ] support multiple locales/countries
- [ ] dark mode and theme settings

## How do I deploy this?

Follow the deployment guide for [Vercel](https://create.t3.gg/en/deployment/vercel) for more information.

## Local setup

- Copy the contents of `.env.example` into a file named `.env` and fill in the discord client ID and secret after [creating an app](https://discord.com/developers/docs/getting-started#step-1-creating-an-app).
- Run `npm i` to install project dependencies, `npx prisma db push` to create the prisma client, and then start the application with `npm run dev`.
- You should be able to sign in and then see your new account created by running `npx prisma studio`.
- Seed the database with sample products by running `npx prisma db seed`.
