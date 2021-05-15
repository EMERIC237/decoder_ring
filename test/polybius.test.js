// Write your tests here!
const expect = require('chai').expect;
const polybiusObject = require("../src/polybius");
let polybius = polybiusObject.polybius;

describe("polybius", ()=>{
    //test if the result is a string
    describe("polybius", ()=>{
        it("should return a string", ()=>{
            const actual = polybius("thinkful");
            expect(actual).to.be.a('string');
        })


    //test with correct values of input and shift.
        it("When decoding, the number of characters in the string excluding spaces should be even", ()=>{
            const actual = polybius("44324233521254134", false);
            expect(actual).to.be.false;
        })
    });

    // test with spaces between words 
    describe("polybius", ()=>{
        it("Spaces should be maintained throughout.", ()=>{
            const actual = [polybius("Hello world"), polybius("3251131343 2543241341", false)];
            const expected = ['3251131343 2543241341', "hello world"];
            expect(actual[0]).to.be.equal(expected[0]);
            expect(actual[1]).to.be.equal(expected[1]);
        })   
    });

    //test with Capital letters
    describe("polybius", ()=>{
        it("Capital letters can be ignored", ()=>{
            const actual = polybius("Hello world");
            const expected = '3251131343 2543241341';
            expect(actual).to.equal(expected);
        })
    });

    //test with i and j
    describe("polybius", ()=>{
        it("When encoding, both letters i and j, can be converted to 42, and shown when decoding", ()=>{
            const actual = polybius("4432423352125413", false); 
            const expected = "th(i/j)nkful";
            expect(actual).to.equal(expected);
        })
    });
});
