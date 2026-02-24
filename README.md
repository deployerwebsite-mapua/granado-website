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

**FOR CSS Styling**

The website project uses various tools and framework in designing the entire website, these are:

**1** Tailwind CSS - CSS Framework
**2** Shadcn UI - Collection of Reusable Tailwind CSS styles
**3** React - Front-end Framework

Tailwind CSS is primarily used for styling through a utility-class basis, where instead of the usual:

`p {
  color: red;
  font-size: 20px;
}`

You can style an HTML element via:

`<p class="text-red-500 text-[20px]"></p>`

This is because tailwind prioritizes rapid development

Shadcn UI provides even a step further, if you had to type the utility classes manually, you could just import a pre-built tailwind css style:

You first install the node package for button: npx shadcn-ui add button
Then you import: import { Button } from "@/components/ui/button";
And you use: <Button> Click Me </Button>

And above all of these, lies React:
If Tailwind is the paint and Shadcn is the furniture, React is the brain that makes them move. It ties everything together by using State (variables that the website "watches").

In a normal website, if you click a button, nothing happens unless you write a script to find that specific button and force it to change.


