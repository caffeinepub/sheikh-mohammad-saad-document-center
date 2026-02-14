# Specification

## Summary
**Goal:** Redeploy the site, make the correct live URL easy to retrieve, and prevent static asset paths from breaking across deployment base paths.

**Planned changes:**
- Trigger a fresh deployment and provide the final working live URL as part of the deployment output/instructions.
- Add a footer “Live URL” display that shows the current browser origin with a copy-to-clipboard control and simple success confirmation.
- Update header/hero/footer image references (shop-board logo and banner) to avoid hard-coded absolute paths so assets load correctly when not served from the domain root.

**User-visible outcome:** The site loads successfully at a single provided live URL, and the deployed site footer shows the current live URL with a one-tap/click copy button; logos/banners reliably load without 404s.
