// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
   	view:{
		xhrCache:false,
		pushState:false
	},
	dialog:{
		title:'Framework7'
	},
	routes: [
		{
			path: '/acerca/',
			url: 'acerca.html',
			name: 'acerca'
  		},
		{
			path: '/swipe/',
			url: 'swipe.html',
			name: 'swipe'
  		}
		
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;



// Add another view, which is in right panel





 

