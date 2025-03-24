# 11ty Contentful Site

A modern website built with 11ty (Eleventy) and Contentful CMS.

## Features

- Built with 11ty static site generator
- Content management through Contentful CMS
- Blog functionality
- Responsive design
- Modern development setup

## Prerequisites

- Node.js (v14 or higher)
- npm
- Contentful account and credentials

## Setup

1. Clone the repository:
```bash
git clone git@github.com:stocktonpr/11ty-contentful.git
cd 11ty-contentful
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Contentful credentials:
```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

4. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:8081`

## Content Structure

The site uses Contentful for content management with the following content types:

- Post
  - Title (Short text)
  - Content (Rich text)
  - Author (Short text)
  - Date (Date)

## Development

- `npm start` - Start development server
- `npm run build` - Build for production

## License

ISC 