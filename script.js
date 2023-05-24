//your JS code here. If required.
function updateSizeinfo() {
	const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	const changeElement = document.querySelector("h1");
	changeElement.textContent = `Width: ${width} and Height: ${height}`
	
}

window.addEventListener("resize", updateSizeinfo);
updateSizeinfo();