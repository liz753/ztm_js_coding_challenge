// Question 1: Clean the room function: 
// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]

function sortingarray(array)
{
	array.sort((a,b) => {
		if(a > b)
			return 1;
		else if(b > a)
			return -1;
		return 0;
	});
	return array;
}

function organizing(array)
{
	let sortedarray = sortingarray(array);
	let organizedarray = [sortedarray[0]]
	let answer = []

	for (let i = 0; i < sortedarray.length; i++)
	{
		if(sortedarray[i] === sortedarray[i+1])
			organizedarray.push(sortedarray[i+1]);
		else
		{
			if (organizedarray.length === 1)
				answer.push(organizedarray[0]);
			else 
				answer.push(organizedarray);
			organizedarray = [sortedarray[i+1]];
		}
	}
	return (answer)
}
organizing(array);
