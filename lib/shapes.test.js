//Import shapes file
const { Circle, Triangle, Square } = require("./shapes.js");

// testing for a blue circle
describe('Circle test', () => {
    test('test for a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="blue" />'
        );
    });
});

// testing for triangle and to make sure the hexadecimal codes work
describe("Triangle test", () => {
    test("test for a purple triangle code #A020F0", () => {
        const shape = new Triangle();
        shape.setColor("#A020F0");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="#A020F0" />'
        );
    });
});

// testing for green square
describe("Square test", () => {
    test("test for a green square", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="green" />'
        );
    });
});

//test from homework explanation that said it should pass
describe("Triangle Test from Homework", () => {
    test("test for blue triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

