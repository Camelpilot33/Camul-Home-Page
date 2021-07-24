const width = window.innerWidth
const height = window.innerHeight
document.getElementById("body").style.zoom = 1
function adjust() {
	while (!(width / 2 >= document.body.clientWidth)) {
		document.getElementById("body").style.zoom = parseFloat(document.getElementById("body").style.zoom) + 0.1
	}
}
adjust()