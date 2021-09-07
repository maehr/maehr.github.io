const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	layout: {
		blog: './src/routes/blog/layout.svelte',
		projects: './src/routes/projects/layout.svelte'
	}
};

export default config;
