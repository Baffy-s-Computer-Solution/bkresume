# SEO implementation

## Implemented

- Added a distinct title, description, canonical URL, index/follow directive, Open Graph metadata, and X card metadata to each public top-level HTML page.
- Standardized canonical URLs, social URLs, internal home links, robots.txt, and sitemap entries on `https://bkresume.vercel.app/`. The homepage canonical is the root URL; other pages use their `.html` paths.
- Replaced the stale, single-entry sitemap with the ten public indexable pages. No guessed `lastmod`, priority, or change-frequency values are included.
- Added a branded SVG favicon and used the existing profile photo for social sharing.
- Added factual Person JSON-LD to the homepage, using the public GitHub and LinkedIn profiles already linked from the site.
- Marked the old Bootstrap starter page at `/resume-bootstrap4-master/index.html` `noindex, follow` and excluded it from the sitemap.
- Improved the project page's heading structure and semantic main landmark, added accessible names and expanded state to shared mobile navigation, and added visible keyboard focus styling.
- Added explicit dimensions and high fetch priority to the homepage portrait; the about-page portrait is dimensioned and lazy-loaded.
- Kept the existing robots policy permissive for public pages and assets.

## Changed files

- `index.html`, `about.html`, `certifications.html`, `contact.html`, `documents.html`, `portfolio.html`, `portfolio-loan.html`, `portfolio-water.html`, `projects.html`, `skills.html`
- `robots.txt`, `sitemap.xml`, `favicon.svg`
- `css/shared-styles.css`, `js/shared-nav.js`
- `resume-bootstrap4-master/index.html`

No dependencies or paid services were added. The repository is a static multi-page site. `package.json` has no build, lint, or test scripts, so there is no configured production build to run; deployment serves the static files directly.

## URLs and content

- Sitemap: <https://bkresume.vercel.app/sitemap.xml>
- Robots: <https://bkresume.vercel.app/robots.txt>
- Canonical homepage: <https://bkresume.vercel.app/>
- Social preview image: <https://bkresume.vercel.app/img/profile.jpg>

The homepage's Person JSON-LD identifies Bafokeng Khoali, the two professional roles shown on the site, the public profile image, and public GitHub and LinkedIn profiles. Person markup does not guarantee a Google rich result or higher ranking.

## Validation status

- Implemented locally: route-specific metadata, canonical alignment, social tags, JSON-LD, favicon, robots policy, sitemap, accessibility refinements, and legacy-page noindex.
- Production endpoints were reachable before these local changes: the homepage, robots.txt, and sitemap returned HTTP 200 from Vercel. This confirms the existing deployment and endpoints only; it does not verify the new local files in production.
- Local validation passed: sitemap XML parsed with ten canonical URLs; robots.txt matched the public crawl policy; all ten public HTML pages had unique titles/descriptions, canonical URLs, and exactly one H1; homepage JSON-LD parsed as JSON; and all local HTML links and asset paths resolved, including the CV PDF.
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

Google controls indexing and ranking. Sitemap submission and indexing requests do not guarantee inclusion, timing, or position in search results.

## Free follow-up checks

- [PageSpeed Insights](https://pagespeed.web.dev/) for lab and available field performance data.
- [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/) for structured-data checks.
- Recheck the deployed homepage, `robots.txt`, `sitemap.xml`, canonical tags, social preview image, and project/download links after each deployment.
