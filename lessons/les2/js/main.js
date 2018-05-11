new Vue ({
 	el: '#app',
 	data: {
 		title: 'Hallo World!!!',
 		styleCSS: ''
 	},
 	methods: {
 		changeText () {
 			this.title = 'NewText'
 		}
 	}
});