console.log('Hello');
var pikachu = function (a, b) { return a + b; };
console.log(10, 20);
// assign data type to object.
var pokemon = {
    name: "pikachu",
    age: 25,
    skill: "Electric Shock!"
};
var pokemonArray = ["pikachu", "Raichu", "Charizard"];
var pokemonArray2 = ["pikachu", "Raichu", "Charizard"];
// After defined generics type, we can define specific data type.
var pokemon01 = ["pikachu", "Raichu", "Charizard"];
var pokemon02 = [6, 14, 16];
var pokemon03 = [true, true, false];
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
