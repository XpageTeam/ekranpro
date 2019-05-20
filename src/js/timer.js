class timer{
	constructor(props){
		this.el = props.el;

		this.$el = props.$el;

		this.time = props.settings.time;

		this.ctx = this.el.getContext("2d");
		this.radius = 24;
		this.width = this.el.width;
		this.center = this.el.width / 2;

		this.timelineWidth = 0;

		this.afterEnd = props.afterEnd;

		this.printBackground();
	}

	printBackground(){
		let ctx = this.ctx;

		ctx.clearRect(0, 0, this.width, this.width);
		this.printCircle(0, 2 * Math.PI, "#fff")
	}

	printCircle(start, end, color, blur = false){
		let ctx = this.ctx;

		if (this.timerText == 0 && blur)
			return

		ctx.beginPath();
		ctx.arc(this.center, this.center, this.radius, start, end, true);
		ctx.lineWidth = 2;
		ctx.strokeStyle = color;

		if (blur){
			ctx.shadowBlur = 18;
			ctx.shadowColor = color;
		}
		ctx.stroke();
	}

	printTimeline(){
		this.printBackground();

		// this.timelineWidth = Math.PI * .4

		this.printCircle(0, this.timelineWidth || 2 * Math.PI, "#6eabe1")
	}

	start(){
		this.timelineWidth = 0;

		this.printTimeline();

		this.startAnimate();
	}

	stop(){
		this.pause();
		this.afterEnd(this.el);
	}

	pause(){
		clearInterval(this.animateInterval);
	}

	resume(){
		this.startAnimate();
	}

	startAnimate(){
		this.animateInterval = setInterval(_ => {

			if (this.timelineWidth >= 2*Math.PI){
				// clearInterval(this.animateInterval);
				this.stop();
				return
			}
			this.timelineWidth += 2*Math.PI / (this.time / 5);
			this.printTimeline();

		}, 5);
	}
}

export default timer