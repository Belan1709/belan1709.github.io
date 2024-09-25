function show_loupe(isOn){
	const { Loupe, enableLoupe } = window.loupe
	const useRectangle = new URLSearchParams(window.location.search).get("shape") === "rectangle"
	const magnification = 1.2
	const style = {
		borderColor: "white",
		boxShadow: "4px 5px 5px 4px rgba(0,0,0,0.5)",
	}

	const opt = useRectangle ? {
		magnification,
		style,
	} : {
		magnification,
		shape: "circle",
		width: 400,
		height: 400,
		container: this.document.body,
		style,
	}
	
	const l = new Loupe(opt)
	const target = document.getElementById("map")

	if (!isOn) {
		disableLoupe = enableLoupe(target, target.src, l);
		console.log('Loupe Enabled');
	} else {
		disableLoupe();
		console.log('Loupe Disabled');
	}
}
