var people = ['Greg', 'Mary', 'Devon', 'James'];

// 1. Using a loop, iterate through this array and console.log all of the people.
console.log("NO.1");
for (var i = 0; i < people.length; i++){
	console.log(people[i]);
}
// 2. Write the command to remove "Greg" from the array.
console.log("NO.2");
people.shift("Greg");
console.log(people);
// 3. Write the command to remove "James" from the array.
console.log("NO.3");
people.pop("James");
console.log(people);
// 4. Write the command to add "Matt" to the front of the array.
console.log("NO.4");
people.unshift("Matt");
console.log(people);
// 5. Write the command to add your name to the end of the array.
console.log("NO.5");
people.push("Miluku");
console.log(people);
// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
console.log("NO.6");
for (var i = 0; i < people.length; i++){
	if(i > people.indexOf("Mary")){
		break;
	}
	console.log(people[i]);
}
// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log("NO.7");
console.log(people.slice("2"));
// 8. Write the command that gives the indexOf where "Mary" is located.
console.log("NO.8");
console.log(people.indexOf("Mary"));
// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log("NO.9");
console.log(people.indexOf("Foo"));
// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
console.log("NO.10");
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);