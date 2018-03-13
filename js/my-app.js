// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
    view: {
    	xhrCache: false,
    	pushState: false,
    	uniqueHistory: true,
	},
	panel: {
		swipe: 'left',
	},
	dialog: {
    	title: 'FrameWork7 DW2',
  	},
	routes: [
		{
			path: '/acerca/',
			url: 'acerca.html',
			name: 'acerca',
  		},
		{
			path: '/peliculas/',
			url: 'mas-peliculas.html',
			name: 'peliculas',
		}
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;