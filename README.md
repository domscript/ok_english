# ok.engilsh

Welcome to the documentation for [ok_english](https://ok_english/), a website powered by [Next.js](https://nextjs.org/) and [React](https://react.dev/), and hosted on [Vercel](https://vercel.com/). This site provides information that covers various topics related to web development, programming, and more. The site also utilizes TailwindCSS and PostCSS for styling, and Sandpack for bringing React code into the site.

## Site Overview

## Getting started

### Installation

1. `cd ok_english` to go into the project root
2. `yarn` to install the website's npm dependencies

### Running locally

1. `yarn dev` to start the development server (powered by [Next.js](https://nextjs.org/))
1. `open http://localhost:3000` to open the site in your favorite browser

### Prerequisites

1. Git
1. Node: any 16.8.x version starting with v16.8.0 or greater
1. Yarn: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/)
1. A clone of the [ok_english repo](https://github.com/domscript/ok_english) on your local machine

### File Structure

The file structure of ok_english is organized in a way that helps manage the content of the site efficiently. The site's content is stored in Markdown files and is organized into folders based on the section they belong to. The following is the file structure of the ok_english site:

```
/pages/
        ├── _app.tsx
        ├── _document.tsx
        ├── [[...markdownPath]].tsx
        ├── 404.tsx
        └── 500.tsx
```

#### \_app.tsx

The **\_app.tsx** is a crucial file in Next.js that plays a vital role in initializing pages. With this file, you can override the default App component and take control of the page initialization process. One of the primary benefits of using this file is the ability to persist layouts between page changes, keep state when navigating pages, inject additional data into pages, and add global CSS.

#### \_document.tsx

The **\_document.tsx** file in Next.js is used to customize the server-side rendering (SSR) behavior of the site's pages. It's responsible for rendering the initial HTML document that gets sent to the client, and it's only executed on the server.

This file is particularly useful for adding custom markup or metadata to the `head` section of the HTML document, such as additional stylesheets or scripts. It's also used to configure third-party tools like Google Analytics or Facebook Pixel.

In the case of this site, the \_document.tsx file is used to add custom metadata and apply the site's global styles. Additionally, it's used to load external fonts and scripts, like the fontawesome icon library.

It's important to note that any changes made to this file will only affect server-side rendering and not client-side rendering, as Next.js will automatically take care of client-side hydration of the page.

#### [[...markdownPath]].tsx

**[[...markdownPath]].tsx** is a dynamic route file in Next.js that allows for infinite nested routes. The file utilizes a catch-all route parameter enclosed in square brackets, which means it can match any number of path segments and pass them as a parameter to the page component.

For example, if a user visits /foo/bar/baz, the page component will receive an array of strings ['foo', 'bar', 'baz'] as a parameter. This parameter can be used to dynamically generate content based on the path, allowing for flexible and dynamic routing.

With this file, the site can easily create nested routes without having to manually create individual pages for each route. This leads to a more streamlined development process and better organization of the site's content.

#### 404.tsx

The **404.tsx** file is used to display a custom 404 error page when a user navigates to a page that does not exist on the site. This page can provide helpful information to the user and guide them back to the content they were looking for.

In the case of this site, the 404 page features a friendly message, a search bar, and a list of popular sections on the site to help users easily find what they're looking for.

Custom 404 pages are important for improving the user experience and reducing bounce rates. They can also provide an opportunity to showcase a brand's personality and differentiate from other generic error pages.

#### 500.tsx

The **500.tsx** file is another special page component in Next.js that is rendered when there is a server error. It's a fallback page that's displayed when something goes wrong on the server-side that prevents the page from being rendered correctly.

The file is located in the /pages directory and exports a React component that can be customized to display an error message or other information to the user.

In the case of this site, the 500.tsx page component renders an error message and a link to the home page. It's designed to provide a user-friendly error message and ensure that the user can navigate back to the site's main page in case of a server error.

### Content

```
/content/
        ├── index.md
        ├── about/
        |         ├── index.md
        |         └── **/*.md
        ├── blog/
        |         ├── index.md
        |         └── **/*.md
        ├── links/
        |         ├── index.md
        |         └── **/*.md
        ├── learn/
        |         ├── index.md
        |         └── **/*.md
        └── **/*.md
```

The /content/ directory serves as the storage location for the site's content, which is written in markdown format. The markdown files are grouped based on their corresponding pages and sections. For instance, the content for the home page can be found in /content/index.md, while the content for the learn page is stored in /content/learn/index.md.

To create nested routes, subdirectories can be created within a section, and a catch-all route with the [[...markdownPath]].md file format can be used to represent each nested route.

In order to control the content displayed on the site, import paths are used to reference sidebar files. These files, located at '../sidebarHome.json', '../sidebarLearn.json', '../sidebarLinks.json', '../sidebarAbout.json', and '../sidebarBlog.json', contain the navigation links and sub-links for each section of the site. By importing the appropriate sidebar file, the site can display the desired navigation links for each page.

### Scripts

Here are the important ones:

1. `yarn dev`: Uses next-remote-watch to watch for changes in the ./src/content directory and automatically restarts the development server when changes are detected.
2. `yarn build`: Builds the project using next build and then runs the `downloadFonts.mjs` script using Node.js.
3. `start`: Starts the production server using next start.
4. `yarn check-all`: This script runs Prettier, ESLint, and type checking to ensure the code follows the project's standards and conventions.
5. `yarn design-page`: Runs a custom script `designResources.mjs` to generate markdown file for design-resourses page, and then runs fix-headings to fix any heading ID errors.

## Technologies Used

The site is built using [Next.js](https://nextjs.org/), a popular [React](https://react.dev/) framework for building static and server-side rendered applications. The site also uses React for rendering content, TailwindCSS is used for styling the site, with PostCSS used for processing the CSS. Sandpack is used to bring React code into the site and enable live code editing. Site is hosted on [Vercel](https://vercel.com/), a cloud hosting platform with serverless functions. Vercel provides a seamless deployment experience, with automatic scaling, SSL support, and custom domains, along with HTTPS security for free and continuous integration and deployment. It also offers built-in integrations with popular tools like GitHub, GitLab, and Bitbucket, making it easy to set up continuous deployment workflows. This ensures that the site is fast, reliable, highly available, and always up-to-date with the latest changes, providing a secure and reliable browsing experience for users.

## License

Content submitted to [ok english]() is MIT licensed, as found in the [LICENSE](https://github.com/domscript/ok_english/blob/main/LICENSE) file.
