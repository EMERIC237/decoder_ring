// Write your tests here!
const expect = require('chai').expect;
const caesarObject = require("../src/caesar");
let caesar = caesarObject.caesar;

describe("caesar", ()=>{
    //test with possible values of shift
    describe("caesar", ()=>{
        it("should return false is the shift value is not present, equal to 0, less than -25, 0r greater than 25", ()=>{
            const actual = caesar("thinkful");
            expect(actual).to.be.false;
            const actualSecondCase = caesar("thinkful", 99);
            expect(actualSecondCase).to.be.false;
            const actualThirdCase = caesar("thinkful", -26);
            expect (actualThirdCase).to.be.false;
        })


    //test with correct values of input and shift.
        it("should return the correct value of the encoded message", ()=>{
            const actual = [caesar("thinkful", 3),
            caesar("thinkful", -3),
            caesar("wklqnixo", 3, false),
        ];
            const expected = ['wklqnixo', 'qefkhcri', 'thinkful'];

            expect(actual[1]).to.equal(expected[1]);
            expect(actual[2]).to.equal(expected[2]);
            expect(actual[3]).to.equal(expected[3]);

        })
    });

    // test with spaces between words 
    describe("caesar", ()=>{
        it("should maintained spaces troughout, as should other non-alphabetic symbols.", ()=>{
            const actual = caesar("This is a secret message!", 8);
            const expected = 'bpqa qa i amkzmb umaaiom!';
            expect(actual).to.equal(expected);
        })
    });

    //test with Capital letters
    describe("caesar", ()=>{
        it("Capital letters can be ignored", ()=>{
            const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
            const expected = 'this is a secret message!';
            expect(actual).to.equal(expected);
        })
    });
});

