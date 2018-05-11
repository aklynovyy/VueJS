new Vue ({
 	el: '#app',
 	data: {
 		title: 'Hallo World!!!',
 		className: ''
 	},
 	methods: {
 		changeText () {
 			this.title = 'New text after click'
 		}
 	}
 	
});

// new Vue ({
// 	el: '#app-home-1',
// 		data: {
// 		beforeText: "Some Text",
// 		inputText: ''
// 	},
// 	methods: {
// 		sendText () {
// 			this.BeforeText = this.inputText
// 		}
// 	}
// });

new Vue ({
	el: '#app-home-2',
	data: {
		isDisabled: false
	}
})