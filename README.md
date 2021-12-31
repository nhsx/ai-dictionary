# NHSX AI Dictionary 

## What is it? 

A simple dictionary of common AI terms with basic search and navigation. 

## Term Management

The terms are currently stored in `data/terms.json`. 

To add new terms, simply add a new item to the terms array following the structure below: 

| Field       | Type   | Description                                                       |
|-------------|--------|-------------------------------------------------------------------|
| title       | string | The title of the term. E.G. 'Artificial Intelligence'.            |
| description | string | The definition of the term.                                       |
| related     | array  | Array of slugs of related terms, E.G. 'ai' or 'machine-learning'. |

Take a look at the existing terms in the JSON file as an example of the structure above. 
You can also edit existing terms or remove them from the array. 

## Stack

The tool is primarily built using Next.js (v12) and Tailwind CSS (v3) on top of React (v17).
There are also some other supporting tools such as Framer Motion, Headless UI and Heroicons. 

There is currently no 'backend' for this project. A JSON file (`data/terms.json`) is used to house and manage the available terms. 

## Development

Once the project has been cloned, ensure you have installed the required dependancies using the command below:

```bash
npm i
```

Now you have installed the required packages, you can start the development server using the following command: 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Hot reloading is enabled on this project, so your changes should reflect in realtime when running the dev server without constantly refreshing the page.

## Building

If you want to build and export the project locally, then run the commands below: 


```bash
npm run build
```

If the build completes successfully, then you can export the project to static HTML files using the command: 


```bash
npm run export 
```

**Note:** using the static export feature disables some of the features of Next.js as you can [read here](https://nextjs.org/docs/advanced-features/static-html-export). Currently, none of these features are used on this project. 

## Deployment  

Upon merging into production, the project is automatically deployed to Github Pages via a Githook Action found in `.github/workflows/gh-pages-deployment.yml`. 

## Deploy on Vercel

To get the most out of Next.JS, it may be worth looking at deploying on [Vercel](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) long term. 