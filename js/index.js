//Task 1
function percentage(number, total_amount){
    return(number/total_amount)*100;
}
console.log(percentage(80,100))

//Task 2
const person=[
	{
		id: 1,
		personName: "Fahad",
		personAge: "23",
		personIncome: "2000000"
	},
	{
		id: 2,
		personName: "Zoya",
		personAge: "23",
		personIncome: "3000000"
	}
];
for(let i= 0; i<=Array.length; i++)
console.log('person '+ person[i].id + ' name is '+ person[i].personName + " having salary "+ person[i].personIncome );

//Task 3
for(let i= 0; i<=Array.length; i++)
console.log(person[i])
