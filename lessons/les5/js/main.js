Vue.filter ('capitalize', function (value) {
	if (!value) return ''
	value = value.toString()
	return value.replace(/\b\w/g, function (l) { return l.toUpperCase() })
});

new Vue ({
 	el: '#app',
 	data: {
 		show: true,
 		message: 'Hallo ollo lool lolol',
 		cars: [
 			{model: "BMW", speed: 150},
 			{model: "Audi", speed: 160},
 			{model: "Ford", speed: 120},
 			{model: "Renault", speed: 130}
 		]
 	},
 	computed: {
 		showMess () {
 			return this.message.toUpperCase ()
 		}
 	},
 	filters: {
 		lowercase (value) {
 			return value.toLowerCase ()
 		}
 	}
});