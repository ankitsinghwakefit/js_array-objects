
var myPenguin = {
    character : "Greta", 
    origin : "Mr. Popper's Penguins",
    author : "Richard and Florence Atwater",
    favoriteFoods : ["beans", "chalk", "stone"],
}

console.log(myPenguin.favoriteFoods[1]);

var firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods[3] = "meat";

console.log(myPenguin.favoriteFoods.length);

myPenguin.favoriteFoods[3] = "pineapples";

var lastFavFood = myPenguin.favoriteFoods[(myPenguin.favoriteFoods.length)-1];

for(let food in myPenguin.favoriteFoods){
    console.log(myPenguin.favoriteFoods[food]);
}


