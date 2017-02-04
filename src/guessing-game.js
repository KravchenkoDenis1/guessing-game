class GuessingGame {
    constructor() {
		this.left = 0;
		this.right = 0;
		this.middle = 0;
		this.result = 0;
	}

    setRange(min, max) {
		this.left = min;
		this.right = max - 1;
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
			this.right = this.middle;
	}

    greater() {
			this.left = this.middle + 1;
    }
}

module.exports = GuessingGame;
