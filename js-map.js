// Map is key value stores, key can be any type.

// create map
let userMap = new Map();

// use set method to add key value in js map.
userMap.set("id", 100001);   // key is string & value is number
userMap.set(101, "John Smith");   // key is number & value is string
userMap.set("lastName", "Smith");   // key is string & value is string
userMap.set(true, "Married");   // key is boolean & value is string
userMap.set({ id: 202}, { id: 202 ,plot:"Plot 202"});   // key is object & value is object

console.log(userMap);
// get values from map
console.log(userMap.get("id"));
console.log(userMap.get(101));
console.log(userMap.get(true));
console.log(userMap.get({id: 202}));

// collect all keys
console.log(userMap.keys());

// collect all values
console.log(userMap.values());

for (const key of userMap.keys()) {
    console.log("Key  : "+key +" ,  value : "+userMap.get(key));
}