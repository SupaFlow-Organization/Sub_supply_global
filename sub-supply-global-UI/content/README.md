# Content Folder

This folder contains all static content for the frontend application. Each file represents a different section or page of the website.

## Structure

- `hero.ts` - Hero section content (main landing page)
- `about.ts` - About page content
- `missionVision.ts` - Mission and Vision content
- `team.ts` - Team members data
- `services.ts` - Services offered
- `industries.ts` - Industries served
- `networkHubs.ts` - Global network hub locations
- `contact.ts` - Contact information and form options
- `workflowSteps.ts` - Workflow/process steps
- `featureItems.ts` - Feature highlights
- `trustedCompanies.ts` - Trusted partners/companies
- `index.ts` - Central export file for all content

## Usage

Import content directly from this folder:

```typescript
import { heroContent, aboutContent, servicesContent } from './content';
```

## Updating Content

To update content, simply edit the corresponding TypeScript file in this folder. The changes will be reflected immediately on the frontend without needing to rebuild or restart the application (with hot module reloading).

## Type Safety

All content files use TypeScript interfaces defined in `lib/types.ts` to ensure type safety and consistency.
