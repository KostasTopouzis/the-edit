# The Edit v0.5.1

This project is intended as a portfolio piece demonstrating:
- overall full-stack web development capabilities
- entry level professional knowledge and technical skills on backend/database implementation and integration. 
- knowledge of e-commerce platform conventions, templates, and business models.

This is an ongoing project constantly improving as I learn more and improve my skills.

## Description

The Edit is an online shop for everyday home and kitchen goods: simple, durable and elegant objects in wood, glass, ceramic and steel, at affordable prices. In its current form I am still working on the storefront trying to establish the e-shop's presence and character. 

The current storefront version presents a curated product catalogue with a hero section, shopping benefits and a searchable product grid.

There are separate Greek and English versions. Greek is the default, and the English version is available through the language switch. Interface text, product names and descriptions are translated, prices are formatted for each language, and product search ignores letter case and Greek accents. The visual design follows an editorial direction with a warm ivory and espresso palette, serif display type and fine brass details, and adapts to desktop and mobile screens.

## Screenshot

![The Edit storefront](/public/storefront_hero.png)

## New Features (v0.5.1)

- Migrated from Vite to Next.js with the App Router, in preparation for the backend and database work.
- Rewrote the codebase in TypeScript, with typed translations, product data and component props.
- The server reads the chosen language from the URL, so the English version and its page title load in English from the first render.
- Product and hero images are served by Next.js in sizes suited to each screen.
- Fonts are served with the site and preloaded in both Greek and Latin, so switching language never shows a font swap.
- Added a GitHub Actions workflow (`ci.yml`) for automated lint and build tests upon a pull requests into main and on pushes to main.

## Tech Stack

- ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
- ![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)
- ![Claude Code](https://img.shields.io/badge/Claude%20Code-Agentic%20development-D97757?logo=claude&logoColor=white)

## Learning Goals

- Improve my mastery of full-stack web development fundamentals, but on a grander and more professional stage than in previous projects.

- After working with Azure's Managed Functions using Python for endpoint design and psycopg for backend-database communication, in this project I swith to a combination of Next.js and Prisma for backend and database implementation respectively.

- Feeling a bit frustrated with Azure's immense complexity, I decided to use Vercel for this project's deployment, so this is a good opportunity to start using that platform's CI/CD and DevOps paradigm as well.

- The project is made with extensive use of agentic workflows, particularly Claude Code's various models, since I am on the road where I keep improving my conceptual knowledge and practical skills in directing and orchestrating AI agents as part of the development, testing and deployment workflows. I have included the various `.md` files and skills as a demonstration of improvement in that area.

- Another goal is to continue familiarizing myself with e-commerce conventions and workflows, particulary the various data model paradigms used on a production level by major platforms since that area, and data management in general, is of particular interest to me.

- Improvement in areas like authentication and validation best practices, internet security and SEO integration is very much desired.

- Even though my main emphasis is on full-stack integration and API/database design and implementation, I still wish to improve on front-end practices, so this project will give me a chance to improve my skills and overall knowledge of the React framework.

## How to Run

[Visit the storefront](https://the-edit-drab.vercel.app/)

To run the project locally (requires Node.js):

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Workflow

Changes are developed on a feature branch and merged into `main` through a pull request, as in a team setting, even though this is a solo project. The reason for this is that I wish to demonstrate my knowledge of professional collaborative practices and CI/CD workflows and also to make use of GitHub Actions automated checks.

1. Create a feature branch (for example `feat/footer`) and push.
2. Open a pull request into `main` describing what changed and why.
3. A GitHub Actions workflow runs `npm run lint` and `npm run build`, and Vercel builds a preview deployment of the branch.
4. Once the checks pass and I have reviewed the diff, the pull request is merged and Vercel deploys `main` to production.

NOTE: I only follow this workflow for major changes. For smaller updates, I do not use PRs since they would create unnessecary overhead for a solo project.

## Future Goals

- Add the server that connects to the Prisma database.

- Improve the storefront page by adding image feature sections and a more professional and informative footer.

## License

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This project is distributed under the MIT License. See the `LICENSE` file for the full text and details.

Third-party material keeps its original license and is not covered by the MIT License:

- Product images are placeholder renders from [DummyJSON](https://dummyjson.com), used for demonstration only and subject to that service's terms.
- The Noto Serif Display and Commissioner fonts come from [Google Fonts](https://fonts.google.com) and are served with the site. They are licensed under the SIL Open Font License 1.1.

## How to Reach Me

* You can reach me via the email address on my profile page or through my LinkedIn profile: [Kostas Topouzis | LinkedIn](https://www.linkedin.com/in/kostas-topouzis-03992b410/)
* If you are interested, you can also check my music on my official artist channel. I operate under the name Vayos Avramides: [Vayos Avramides | YouTube](https://www.youtube.com/@vayosavramides). You will find there links to all major streaming platforms. Also, feel free to follow my Facebook channel: [Vayos Avramides | Facebook](https://www.facebook.com/profile.php?id=61594800706567)
