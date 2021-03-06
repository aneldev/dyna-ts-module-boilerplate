"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.get = function () {
        return {
            name: this.name,
            age: this.age,
        };
    };
    Person.prototype.console = function () {
        console.log("Person " + this.name + " " + this.age);
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map