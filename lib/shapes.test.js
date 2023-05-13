const { it } = require('node:test');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
// const { describe } = require('yargs');
const { Circle, Triangle, Square } = require('./shapes.js');

//testing for a blue circle
describe('Circle test', () => {
    it('should return a blue circle')
    const shape = new Circle();
    shape.setColor = ('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="blue" />'
    );
});