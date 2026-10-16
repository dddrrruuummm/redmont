# REDMONT

Interiors, renovation, furniture and decorative accessories sales.

English company showcase built with Next.js 16, TypeScript, React and Tailwind CSS. 12 furniture/decor collections with individual detail pages, category filters, collection search and prefilled quotation inquiries.

This is the complete source project for GitHub and Vercel. Local images, SVG logos, self-hosted fonts and their license files are included. No environment variables, API keys, database or paid services are required.

## Upload to GitHub

1. Unzip the delivery ZIP and open the `REDMONT-LLC` folder.
2. Create an empty GitHub repository.
3. Upload **the contents inside the company folder** to the repository root. The root should contain `package.json`, `package-lock.json`, `app/`, `components/`, `lib/` and `public/`.
4. Include the hidden `.gitignore` file. Do not upload the ZIP itself as the website source.
5. Commit the files.

For an existing repository, update the website source while keeping any intentional repository settings. The delivery contains no Git history or deployment credentials.

## Deploy with Vercel

1. Import this GitHub repository into Vercel.
2. Choose the Next.js framework preset.
3. Set Root Directory to `./` if the source is at the repository root. For a monorepo, select the company subfolder.
4. Use `npm ci` as the install command. Keep the Next.js build and output defaults. No environment variables are needed.
5. Deploy, then connect the company domain. Current canonical URL: https://redmont.fit.

Vercel builds from source. Dependency folders, build caches and local Vercel state are excluded. The existing Next.js configuration is preserved.

## Local development and verification

Use Node.js 22 LTS or a compatible version satisfying Next.js (20.9 or newer).

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run build -- --webpack
```

The explicit webpack option matches the production build verified in this workspace. The standard `npm run build` command remains available for Vercel. For a standalone self-hosted deployment, follow the Next.js standalone output workflow; the source upload here is intended for Vercel's Next.js integration.

## Maintain the website

| Location | Purpose |
| --- | --- |
| `lib/site.ts` | Company identity, contact information and core business data |
| `lib/furniture.ts` | Furniture/decor collections, descriptions and images |
| `lib/gallery.ts` | Additional category and application photography |
| `components/industry-home.tsx` | Homepage composition |
| `components/site-header.tsx`, `site-footer.tsx` | Navigation and footer |
| `app/furniture/` | Catalog and static category/collection detail pages |
| `app/globals.css`, `app/furniture.css` | Styles and responsive layouts |
| `app/contact/page.tsx`, `components/inquiry-form.tsx` | Product-prefilled inquiry and email draft preparation |
| `app/layout.tsx`, `sitemap.ts`, `robots.ts` | SEO metadata, structured data and crawler files |
| `public/` | Deployed photographs, generated visuals, logos and fonts |
| `docs/photo-sources.json` | Internal photo source and license records |
| `PRODUCT.md`, `DESIGN.md` | Business context, assumptions and visual direction |

Images introduce product categories and application settings. They do not establish owned inventory, completed projects, manufacturer authorization or exact SKUs. Specific prices, stock, configuration and delivery terms are handled through quotation.

The inquiry form validates locally and prepares a prefilled email draft. The visitor reviews and sends it in their own email app. The website does not send or store submissions on a server.

Business facts and open verification items are recorded in `PRODUCT.md`. Core pages include Home, About, Services, Showcase, Contact, Privacy Policy and Terms, plus the furniture catalog and detail pages.

## Delivery contents

The GitHub package retains all runtime images and fonts, their license records, source code and dependency lock file. Original image duplicates are omitted from the delivery when the deployed WebP version is present and the original is not used by the website. The original working project retains those source files.

The package excludes `node_modules/`, `.next/`, local environment files, build artifacts, system metadata, Git history and development-skill tooling. No website was published as part of packaging.

