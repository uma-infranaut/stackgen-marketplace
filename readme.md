# StackGen Marketplace

A static website built with Hugo for showcasing StackGen software products, modules, and services.

## Overview

This marketplace provides a centralized hub for discovering and exploring StackGen's ecosystem of software offerings. It features:

* Products section for enterprise software solutions
* Modules section for reusable components
* Services section for professional services
* Search functionality - yet to implement 
* Clean, modern design with responsive layout

## Getting Started

### Prerequisites

* Hugo (version 0.123.0 or higher)
* Git

### Installation

1. Clone this repository:

```bash
git clone <repository-url>
cd stackgen-marketplace
```

2. Start the Hugo development server:

```bash
hugo server -D
```

3. Visit http://localhost:1313 in your browser to view the site.

## Hugo Commands

* **Start development server:**

```bash
hugo server -D
```

* **Build site for production:**

```bash
hugo
```

This generates the static site in the `public/` directory.

* **Create new content:**

```bash
# Create a new module
hugo new content/modules/module-name.md

# Create a new product
hugo new content/products/product-name.md

# Create a new service
hugo new content/services/service-name.md
```

* **Stop the server:** Press `Ctrl+C` in the terminal where the server is running.

* **Clean build:**

```bash
rm -rf public/
hugo
```

## Directory Structure

```
├── archetypes/        # Content templates
├── content/           # Markdown content files
│   ├── modules/       # Module content
│   ├── products/      # Product content
│   ├── providers/     # Provider content
│   └── services/      # Service content
├── layouts/           # HTML templates
│   ├── _default/      # Default templates
│   ├── page/          # Page templates
│   └── partials/      # Reusable template parts
├── static/            # Static assets
│   ├── css/           # CSS files
│   ├── images/        # Image files
│   └── js/            # JavaScript files
└── hugo.toml          # Hugo configuration
```

## Customization

### Adding New Content

1. Create a new markdown file in the appropriate content directory.
2. Add the required front matter (YAML or TOML).
3. Add your content in markdown format.

Example front matter for a module:

```markdown
---
title: "Module Name"
date: 2025-04-07
description: "Short description of the module"
provider: "StackGen Official"
version: "1.0.0"
downloads: 1200
tags: ["tag1", "tag2"]
categories: ["category1", "category2"]
---

Content goes here...
```

### Modifying Templates

Edit HTML files in the `layouts/` directory to customize the appearance and structure of the site.

### Styling

Edit the CSS files in `static/css/` to change the site's appearance.

## Deployment

To deploy the site:

1. Build the site:

```bash
hugo
```

2. Upload the contents of the `public/` directory to your web hosting service.

## License

[Include license information here]
