# SEO implementation

## Implemented

- Added a distinct title, description, canonical URL, index/follow directive, Open Graph metadata, and X card metadata to each public top-level HTML page.
- Standardized canonical URLs, social URLs, internal home links, robots.txt, and sitemap entries on `https://bkresume.vercel.app/`. The homepage canonical is the root URL; other pages use their `.html` paths.
- Replaced the stale, single-entry sitemap with the ten public indexable pages. No guessed `lastmod`, priority, or change-frequency values are included.
- Added a branded SVG favicon and an original branded 1200×630 PNG social image using the existing profile photo; all public pages use the share-sized preview image for Open Graph and X large-image cards.
- Added factual Person and WebSite JSON-LD to the homepage, using the public GitHub and LinkedIn profiles already linked from the site. Added visible breadcrumbs and matching BreadcrumbList structured data to all nine subpages.
- Marked the old Bootstrap starter page at `/resume-bootstrap4-master/index.html` `noindex, follow` and excluded it from the sitemap.
- Improved project-page heading structure and semantic landmarks, made shared navigation consistent across the two project-detail pages, added accessible names and expanded state to mobile navigation, visible keyboard focus styling, and reduced-motion support.
- Added explicit dimensions and high fetch priority to the homepage portrait; the about-page portrait is dimensioned and lazy-loaded.
- Updated the legacy project pages to use the site's teal/navy/orange palette, wrap actions for small screens, reserve image aspect ratios, and lazy-load decorative project imagery. Replaced nonfunctional certificate download placeholders with a clear "PDF not published" status.
- Kept the existing robots policy permissive for public pages and assets.

## Changed files

- `index.html`, `about.html`, `certifications.html`, `contact.html`, `documents.html`, `portfolio.html`, `portfolio-loan.html`, `portfolio-water.html`, `projects.html`, `skills.html`
- `robots.txt`, `sitemap.xml`, `favicon.svg`, `img/og-image.png`
- `css/shared-styles.css`, `js/shared-nav.js`
- `resume-bootstrap4-master/index.html`

No dependencies or paid services were added. The repository is a static multi-page site. `package.json` has no build, lint, or test scripts, so there is no configured production build to run; deployment serves the static files directly.

## URLs and content

- Sitemap: <https://bkresume.vercel.app/sitemap.xml>
- Robots: <https://bkresume.vercel.app/robots.txt>
- Canonical homepage: <https://bkresume.vercel.app/>
- Social preview image: <https://bkresume.vercel.app/img/og-image.png> (1200×630 PNG)

The homepage's Person JSON-LD identifies Bafokeng Khoali, the two professional roles shown on the site, the public profile image, and public GitHub and LinkedIn profiles. Person markup does not guarantee a Google rich result or higher ranking.

## Validation status

- Implemented locally: route-specific metadata, canonical alignment, social tags, JSON-LD, favicon, robots policy, sitemap, accessibility refinements, and legacy-page noindex.
- Live deployment was verified after push `0971049`: the homepage, social preview image, sitemap (ten URLs), and robots.txt returned HTTP 200. All ten public routes loaded without horizontal overflow at 360px and 390px.
- Local validation passed: sitemap XML parsed with ten canonical URLs; robots.txt matched the public crawl policy; all ten public HTML pages had unique titles/descriptions, canonical URLs, and exactly one H1; homepage JSON-LD and all breadcrumb JSON-LD parsed; all pages use English language markup and the 1200×630 share image; and local HTML links and asset paths resolved, including the CV PDF.
- Responsive browser checks covered all ten public routes at 360, 390, 768, 960, 1024, 1280, and 1440px (70 route/viewport combinations) with no horizontal overflow. The mobile navigation opened and closed with its `aria-expanded` state synchronized, and certificate panels fit a 360px viewport.
- `git diff --check` passed. `package.json` has no build, lint, or test scripts, so a production build could not be run; deployment serves the static files directly.
- Core Web Vitals field data and Search Console reports are not available from this repository. No performance score, indexing result, or ranking is claimed.

## Google Search Console owner steps

1. Open <https://search.google.com/search-console/about> and sign in to the Google account that should own the property.
2. Add a **URL-prefix** property for `https://bkresume.vercel.app/`.
3. Choose an offered verification method. A Google verification HTML file is already present at the site root; confirm in Search Console whether it is the current token for this account. If it is not, download the new verification file and publish it at the root exactly as Google instructs, or use another supported method. Do not share verification tokens publicly.
4. After the updated site is deployed, submit `https://bkresume.vercel.app/sitemap.xml` in the Sitemaps report.
5. Use URL Inspection for `https://bkresume.vercel.app/`, test the live URL, and request indexing after the deployment is ready.
6. Monitor the Pages/indexing and Sitemaps reports, impressions, clicks, and search queries. Review Manual actions and Security issues when those reports are available.
7. Recheck the public robots and sitemap endpoints after deployment.
8. Optionally verify the site in [Bing Webmaster Tools](https://www.bing.com/webmasters/) or import the verified Search Console property, then submit the same sitemap.
9. If desired, add the portfolio URL to professional profiles you control, such as GitHub or LinkedIn; use only genuine profiles and avoid link directories or paid backlink schemes.

Google controls indexing and ranking. Sitemap submission and indexing requests do not guarantee inclusion, timing, or position in search results.

## Free follow-up checks

- [PageSpeed Insights](https://pagespeed.web.dev/) for lab and available field performance data. No PSI report was run as part of this implementation.
- [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/) for structured-data checks.
- Recheck the deployed homepage, `robots.txt`, `sitemap.xml`, canonical tags, social preview image, and project/download links after each deployment.
