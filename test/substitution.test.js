// Write your tests here!
const expect = require('chai').expect;
const substitutionObject = require("../src/substitution");
let substitution = substitutionObject.substitution;

describe("substitution", ()=>{
    //test encode with the right entry
    describe("substitution", ()=>{
        it("should encode the code using the alphabet", ()=>{
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'jrufscpw';
            expect(actual).to.be.equal(expected)
        })


    //test with spaces between words
        it("should maintain the space throughout", ()=>{
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'elp xhm xf mbymwwmfj dne'
            expect(actual).to.be.equal(expected);
        })
    });

    // test with special characters
    describe("substitution", ()=>{
        it("should be able to encode or decode messages with special characters.", ()=>{
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message"
            expect(actual).to.be.equal(expected);
        })   
    });

    //test to decode(encode=false)
    describe("substitution", ()=>{
        it("should be able to decode the code using the alphabet", ()=>{
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = 'thinkful';
            expect(actual).to.equal(expected);
        })
    });

    //test the alphabet requirements
    describe("substitution", ()=>{
        it("The alphabet parameter must be a string of exactly 26 characters,", ()=>{
            const actual = substitution("thinkful", "short");
            expect(actual).to.be.false;
        })
    });

    describe("substitution", ()=>{
        it("All the characters in the alphabet parameter must be unique", ()=>{
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
            expect(actual).to.be.false;
        })
    });
});
