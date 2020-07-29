

// The script wiil start from this method
function generate(){
	let newColor = new RandomColor().getColor();
	document.body.style.backgroundColor = " #" + newColor;
	document.getElementsByClassName("color-name").item(0).innerHTML = " #" + newColor; 
}







function RandomColor() {
	

	this.value = "#222266";
	
	this.getRandom = (min, max) => {
  		return Math.floor(Math.random() * (max - min) ) + min;
	}
	
	
	this.generateRGBValues = () =>{
		let RGBValues = [];
		
		for(let i=0; i<3; i++){
			RGBValues[i] = this.getRandom(0,256);
		}
		
		return RGBValues;
	}
	
	
	this.toHexValues = () =>{
		
		let colorString = "";
		
		let colorValues = this.generateRGBValues();
		
		for(let color of colorValues){
			
			if(color.toString(16).length == 1){ 
				colorString += "0";   
				// 0 will be added if one of RGB values is one digit only
				colorString += color.toString(16);
			}else{
				colorString += color.toString(16);
			}
		}
		
		this.value = colorString;
		
	}
	

	this.getColor = () => {
		
		this.toHexValues();
		
		return this.value;
	}
}



