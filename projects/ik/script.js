var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var jts = [];
var idIndex = 0;
var running = true
var origin = { x: 100, y: 100 }
var target = { x: 50, y: 200 }

var percentColors = [
	{ pct: 0.0, color: { r: 0xff, g: 0x00, b: 0x00 } },
	{ pct: 0.35, color: { r: 0xff, g: 0xff, b: 0x00 } },
	{ pct: 0.5, color: { r: 0x00, g: 0xff, b: 0x00 } },
	{ pct: 0.65, color: { r: 0x00, g: 0xff, b: 0xff } },
	{ pct: 1.0, color: { r: 0x00, g: 0x00, b: 0xff } }];

function color(pct) {
	for (var i = 1; i < percentColors.length - 1; i++) {
		if (pct < percentColors[i].pct) {
			break;
		}
	}
	var lower = percentColors[i - 1];
	var upper = percentColors[i];
	var range = upper.pct - lower.pct;
	var rangePct = (pct - lower.pct) / range;
	var pctLower = 1 - rangePct;
	var pctUpper = rangePct;
	var color = {
		r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
		g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
		b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
	};
	return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
};
function getdist(x1, y1, x2, y2) {
	let y = x2 - x1;
	let x = y2 - y1;
	return Math.sqrt(x * x + y * y);
};
function makeJt(x1, y1, c1) {
	jts.push({ x: x1, y: y1, c: color(c1), id: idIndex })
	idIndex++
};
function drawEnds() {
	ctx.strokeStyle = "#000"
	ctx.beginPath();
	ctx.arc(origin.x, origin.y, 10, 0, 2 * Math.PI);
	ctx.stroke()
	ctx.beginPath()
	ctx.arc(target.x, target.y, 10, 0, 2 * Math.PI);
	ctx.stroke()
}
function ik() {
	var l = jts.length - 1
	//EXTEND
	moveX = target.x
	moveY = target.y
	dist = getdist(jts[l].x, jts[l].y, jts[l - 1].x, jts[l - 1].y)
	jts[l].x = moveX
	jts[l].y = moveY
	for (i = 0; i < jts.length - 2; i++) {
		moveX = dist * (jts[l - 1].x - jts[l].x) / getdist(jts[l].x, jts[l].y, jts[l - 1].x, jts[l - 1].y)
		moveY = dist * (jts[l - 1].y - jts[l].y) / getdist(jts[l].x, jts[l].y, jts[l - 1].x, jts[l - 1].y)
		dist = getdist(jts[l - 1].x, jts[l - 1].y, jts[l - 2].x, jts[l - 2].y)
		jts[l - 1].x = jts[l].x + moveX
		jts[l - 1].y = jts[l].y + moveY
		l--
	}
	moveX = dist * (jts[l - 1].x - jts[l].x) / getdist(jts[l].x, jts[l].y, jts[l - 1].x, jts[l - 1].y)
	moveY = dist * (jts[l - 1].y - jts[l].y) / getdist(jts[l].x, jts[l].y, jts[l - 1].x, jts[l - 1].y)
	jts[l - 1].x = jts[l].x + moveX
	jts[l - 1].y = jts[l].y + moveY
	//CONTRACT
	l = 0
	moveX = origin.x
	moveY = origin.y
	dist = getdist(jts[l].x, jts[l].y, jts[l + 1].x, jts[l + 1].y)
	jts[l].x = moveX
	jts[l].y = moveY
	for (i = 0; i < jts.length - 2; i++) {
		moveX = dist * (jts[l + 1].x - jts[l].x) / getdist(jts[l].x, jts[l].y, jts[l + 1].x, jts[l + 1].y)
		moveY = dist * (jts[l + 1].y - jts[l].y) / getdist(jts[l].x, jts[l].y, jts[l + 1].x, jts[l + 1].y)
		dist = getdist(jts[l + 1].x, jts[l + 1].y, jts[l + 2].x, jts[l + 2].y)
		jts[l + 1].x = jts[l].x + moveX
		jts[l + 1].y = jts[l].y + moveY
		l++
	}
	moveX = dist * (jts[l + 1].x - jts[l].x) / getdist(jts[l].x, jts[l].y, jts[l + 1].x, jts[l + 1].y)
	moveY = dist * (jts[l + 1].y - jts[l].y) / getdist(jts[l].x, jts[l].y, jts[l + 1].x, jts[l + 1].y)
	jts[l + 1].x = jts[l].x + moveX
	jts[l + 1].y = jts[l].y + moveY
}
numjt = parseInt(window.prompt("Number of joints:"))
if (numjt < 3) numjt = 3
makeJt(0, 0, 0)
d=0
for (i=0;i<numjt-1;i++) {
	i1=i+1;i2=i+2
	d+=parseInt(window.prompt("distance from joint #" + i1 + " to joint #" + i2))
	console.log(0,d)
	makeJt(0,d,(1/(numjt-1))*(i+1))
}

zoom = getComputedStyle(document.querySelector(".body")).zoom;
function frame() {
	if (running) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawEnds()
		ik()
		for (i = 0; i < jts.length - 1; i++) {
			ctx.strokeStyle = jts[i].c
			ctx.beginPath();
			ctx.moveTo(jts[i].x, jts[i].y);
			ctx.lineTo(jts[i + 1].x, jts[i + 1].y);
			ctx.stroke();
		}
		for (jt of jts) {
			ctx.beginPath();
			ctx.strokeStyle = jt.c
			ctx.fillStyle = jt.c
			ctx.arc(jt.x, jt.y, 5, 0, 2 * Math.PI);
			ctx.fill();
			ctx.stroke()
		}
	}
}
frame()
canvas.addEventListener('mousemove', e => {
	target.x = e.offsetX * (1 / zoom);
	target.y = e.offsetY * (1 / zoom);
});
setInterval(frame, 30)