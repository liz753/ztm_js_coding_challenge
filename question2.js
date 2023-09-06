// Question 2: Write a javascript function 
// that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, 
// when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

function answer(arr, target)
{
	let i;
	let j;

	i = 0;
	j = 0;

	while(i < arr.length)
	{
		j = 0;
        while(j < arr.length)
		{
			if(arr[i] + arr[j] === target)
			{
				return [arr.at(i) , arr.at(j)];
			}
			j++;
		}
		i++;
	}
}
answer([1, 2 ,3], 5);