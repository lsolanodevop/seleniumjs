import {expect} from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - Basic functionality', ()=>{
    it('returns true when two know anagrams are passed in',() =>{
        const expected = true
        const actual = isAnagram('god','dog');
        expect(actual).to.equal(expected);
    });

    it('returns false when either of the string has extra letters',() =>{
        const expected = false
        const actual = isAnagram('gods','dog');
        expect(actual).to.equal(expected);

        const actual2 = isAnagram('dog','gods');
        expect(actual2).to.equal(expected);
    });

    it('returns false when the string has the same letters different quantities',()=>{
        const expected = false;
        const actual = isAnagram('silents','listen');
        expect(actual).to.equal(expected);
    })
});