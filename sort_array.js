

let a = [4,3,1,2,5]
let i = 0

while(i < a.length){

	if(a[i] != i+1){
		let x = a[i]
		let y = a[x - 1]

		a[i] = y
		a[x - 1] = x
	}
	else
	{
		i++
	}
}

console.log(a)

// swapping till I get 1 at index 0.
// did with Indexing as mentioned in Interview.
// Sorry, to say apart from indexing I can't found any way as of now that solves it in less than o(nlogn)
// By Indexing in o(n)