const app = Vue.createApp({
	data() {
		return {
			min: 0,
			sec: 0,
			tens: 0,
			interval: 0,
		};
	},
	methods: {
		startTimer() {
			this.tens++;
			if (this.tens > 99) {
				this.sec++;
				this.tens = 0;
			}
			if (this.sec > 59) {
				this.min++;
				this.tens = 0;
				this.sec = 0;
			}
		},
		startBtn() {
			clearInterval(this.interval);
			this.interval = setInterval(this.startTimer, 10);
		},

		stopBtn() {
			clearInterval(this.interval);
		},

		resetBtn() {
			clearInterval(this.interval);
			(this.tens = 0).toFixed(2);
			this.sec = 0;
			this.min = 0;
		},
		countDistans() {},
	},
}).mount(".container");

//fake

// testowy kom 
// sprawdzenie 
