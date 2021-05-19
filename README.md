# React Template

### Basic react project with webpack, babel, prettier, eslint, typescript, husky hooks, and semantic commit messages enabled.

### Standard configurations include:

- React refresh
- Bundle analyser
- Hot module replacement
- Fonts and svgs can be used
- Dynamic modules are prefetched
- Supports .css and .scss extensions
- Assets are put inside build/assets folder
- Image formats include .png, .jpg, .jpeg, .gif
- Lazy compilation experimental feature of webpack
- Filenames include content hash for caching purposes
- CSS is minified and moved to external file for production
- Husky hooks that runs eslint and prettier as pre commit hook and lint staged as commit msg hook

### Things which you might want to change:

- Source map types included in dev and prod
- Vendor bundle is separated for caching purpose.
- Target environment (set to default browserlist)
- Dynamic imports create separate bundles which are prefetched
- Common modules are separated into separate bundle for optimization purpose
- Gzip and brotli compression is enabled. Include a server script to send brotli or gzip file to the user or turn it off.

### Getting started

- Clone this repo and cd into it by running `git clone https://github.com/kishan02patel/React-Template.git && cd React-Template`
- Run `npm install`
- Change any configurations if needed
