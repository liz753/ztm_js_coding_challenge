// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function auto-dect the formats so 
// that if you enter HEX color format it returns RGB and if 
// you enter RGB color format it returns HEX.

function answer(value)
{
	if(value.at(0) === '#')//is a HEX
	{
		//convert to RGB
		let red = value.substring(1, 3);
        let green = value.substring(3, 5);
        let blue = value.substring(5, 7);
        console.log(Number.parseInt(red, 16), Number.parseInt(green, 16), Number.parseInt(blue, 16));
	}
	else
	{
		//convert to HEX
        //"255 3 174"
		let parts = value.split(" ");
		parts[0] = Number.parseInt(parts[0]);
		parts[1] = Number.parseInt(parts[1]);
		parts[2] = Number.parseInt(parts[2]);
		parts[0] = parts[0].toString(16);
		parts[1] = parts[1].toString(16);
		parts[2] = parts[2].toString(16);
		console.log("#" + parts.join(""));
	}
}
answer("255 3 174")
