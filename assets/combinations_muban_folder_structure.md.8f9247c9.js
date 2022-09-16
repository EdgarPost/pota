import{_ as e,c as o,o as t,a as d}from"./app.5d93eea0.js";const m='{"title":"Folder Structure","description":"","frontmatter":{},"headers":[],"relativePath":"combinations/muban/folder_structure.md","lastUpdated":1646931738000}',s={},c=d('<h1 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-hidden="true">#</a></h1><p>A list of the folders and most important files inside a standard Muban project.</p><ul><li><p><code>.storybook/</code> \u2013 Contains the <a href="https://storybook.js.org/docs/react/configure/overview" target="_blank" rel="noopener noreferrer">storybook configuration</a>.</p></li><li><p><code>dist/</code> \u2013 Contains the output of the <code>build</code> commands.</p><ul><li><code>site/</code> \u2013 The website assets, can be moved to the CMS or deployed when a <code>build:preview</code> was used.</li><li><code>node/</code> \u2013 Contains a node-js project to be deployed to offer a API mock service.</li><li><code>storybook/</code> \u2013 Contains a storybook build.</li></ul></li><li><p><code>mocks/</code> \u2013 Contains API mock files used by <a href="https://github.com/mediamonks/monck#readme" target="_blank" rel="noopener noreferrer">@mediamonks/monck</a>.</p></li><li><p><code>public/</code> \u2013 Contents of this folder will be copied over to the <code>dist/site</code>, and should contain files that will be accessed from the HTML templates or <code>fetch</code>. These are not processed by webpack (just copied over), and the filenames will stay the same (no <code>[contenthash]</code> is added). In the future, we could consider versioning parts of this folder.</p></li><li><p><code>src/</code> \u2013 All your project code.</p><ul><li><code>assets/</code> \u2013 All non-js/css assets (e.g. images, video, fonts, etc) that you require directly in your JS/CSS and gets automatically processed by webpack. These file will get a <code>[contenthash]</code> in their filename to be different in each build if they have changed.</li><li><code>components/</code> \u2013 All your Muban Components, both UI and non-UI. For UI components we try to use atomic design, so expect the <code>atoms</code> <code>molecules</code> and <code>organisms</code> folders in here as well. There&#39;s also a <code>layouts</code> folder (which can be seen as page templates).</li><li><code>pages/</code> \u2013 Contains the page data files, used to render and preview the website pages. Pages are rendered using the templates, and the <code>src/App.template.ts</code> is the entrypoint for all. <ul><li><code>_main.ts</code> \u2013 The entry point for the pages bundle, re-exports the <code>App.template.ts</code> and exports a <code>pages</code> object containing the <code>data</code> functions for each page.</li><li><code>public/</code> \u2013 Contains the base <code>.html</code> use to generate each page and a <code>static/</code> directory for assets that come from the CMS. Contents will only be copied over to the <code>dist</code> folder when doing a preview build.</li></ul></li><li><code>styles/</code> - All styling (<code>.scss</code> files) for the project.</li><li><code>main.ts</code> \u2013 The entry point for the Muban application.</li></ul></li></ul>',3),a=[c];function i(r,n,l,p,h,u){return t(),o("div",null,a)}var b=e(s,[["render",i]]);export{m as __pageData,b as default};
