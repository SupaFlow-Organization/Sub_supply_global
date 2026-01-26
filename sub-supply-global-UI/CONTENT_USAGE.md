# Content Usage Documentation

This document shows how all content from the `content/` folder is consumed and displayed across the application.

## Content Files → Components Mapping

### 1. Hero Section (`content/hero.ts`)
- **Component**: `components/Hero.tsx`
- **Usage**: 
  - `title` → Main heading
  - `highlightedTitle` → Yellow highlighted text (with line break for "One Partner. Zero Middlemen.")
  - `subtitle` → Description paragraph
  - `primaryButtonText` → "Our Capabilities" button
  - `secondaryButtonText` → "Start Project" button
- **Location**: Home page

### 2. Trusted Companies (`content/trustedCompanies.ts`)
- **Component**: `components/Hero.tsx` (trustedCompanies prop)
- **Usage**: Company names displayed in hero section (currently removed from UI)
- **Location**: Home page (if enabled)

### 3. About Section (`content/about.ts`)
- **Component**: `components/About.tsx`
- **Usage**:
  - `sectionLabel` → "About Us" label
  - `title` → "Precision"
  - `highlightedTitle` → "Meet Velocity."
  - `description` → Main description text
  - `stats` → Statistics array (value, suffix, label)
  - `ctaText` → Call-to-action button text
- **Location**: About page

### 4. Mission & Vision (`content/missionVision.ts`)
- **Component**: Rendered inline in `App.tsx`
- **Usage**:
  - `missionTitle` → "Our Mission" heading
  - `missionText` → Mission description
  - `visionTitle` → "Our Vision" heading
  - `visionText` → Vision description
- **Location**: About page (below About section)

### 5. Team Members (`content/team.ts`)
- **Component**: `components/PageDetails.tsx` (Team component)
- **Usage**:
  - `name` → Team member name
  - `role` → Team member role
  - `image` → Team member photo
  - `bio` → Biography (available but not currently displayed)
- **Location**: About page

### 6. Services (`content/services.ts`)
- **Component**: `components/Services.tsx`
- **Usage**:
  - `title` → Service name
  - `description` → Service description
  - `icon` → Icon type (ship, plane, truck)
  - `order` → Display order
- **Location**: Services page

### 7. Industries (`content/industries.ts`)
- **Component**: `components/PageDetails.tsx` (Industries component)
- **Usage**:
  - `title` → Industry name
  - `description` → Industry description
  - `icon` → Icon type
  - `order` → Display order
- **Location**: Services page (below Services section)

### 8. Network Hubs (`content/networkHubs.ts`)
- **Component**: Rendered inline in `App.tsx`
- **Usage**:
  - `region` → Hub region name
  - `cities` → City locations
  - `color` → Border color
  - `order` → Display order
- **Location**: Network page

### 9. Contact Info (`content/contact.ts`)
- **Component**: `components/Contact.tsx`
- **Usage**:
  - `title` → "Get in Touch" heading
  - `subtitle` → Contact description
  - `phone` → Phone number
  - `email` → Email address
  - `serviceOptions` → Dropdown options for service selection
- **Location**: Contact page, Home page (footer section)

### 10. Workflow Steps (`content/workflowSteps.ts`)
- **Component**: `components/TradeSupport.tsx`
- **Usage**:
  - `title` → Step title
  - `description` → Step description
  - `icon` → Icon type (package, boxes, anchor, flask, users)
  - `order` → Display order
- **Location**: Home page (Trade Support section)

### 11. Feature Items (`content/featureItems.ts`)
- **Component**: `components/HomeSections.tsx` (Features component)
- **Usage**:
  - `title` → Feature title
  - `icon` → Icon type (clock, globe, zap)
  - `order` → Display order
- **Location**: Home page (Features section)

## Content Flow

```
content/*.ts files
    ↓
App.tsx imports all content
    ↓
Content passed as props to components
    ↓
Components display content (with fallbacks if needed)
```

## Verification

All content is:
- ✅ Imported in `App.tsx`
- ✅ Passed to components as props
- ✅ Used by components (components check for data before using defaults)
- ✅ Displayed on respective pages

## Updating Content

To update any content:
1. Edit the corresponding file in `content/` folder
2. Changes will be reflected immediately (no rebuild needed with HMR)
3. All components will automatically use the updated content
