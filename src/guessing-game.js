class GuessingGame {
    constructor() {
		this.left = 0;
		this.right = 0;
		this.middle = 0;
		this.result = 0;
	}

    setRange(min, max) {
		this.left = min;
		this.right = max;
    }

    guess() {
		var result = 0;
		if (this.left <= this.right) {
			this.middle = (this.right + this.left)/2;
			
		}
		this.middle = Math.floor(this.middle);
		result = this.middle + 1;
		return result;
		
    }

    lower() {
			//this.middle = Math.round(this.middle);
			this.right = this.middle;
			//this.result = this.middle;
	}

    greater() {
			//this.middle = Math.round(this.middle);
			this.left = this.middle + 1;
			//this.result = this.middle;
    }
}

module.exports = GuessingGame;
