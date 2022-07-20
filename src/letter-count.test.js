import {expect} from 'chai';
import { getLetterCount } from './letter-count';

describe('getLetterCount - Basic functionality', () => {
    it('returns an empty object when passed an empty string', () => {
        const expected = {};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected);
    });

    it('return the correct letter count for a word with only one of each letter', () => {
        const expected = {c:1, a:1, t:1};
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected);
    });

    it('return the correct letter count for words with more than one of certain letters', ()=>{
        const expected = {c:2,r:1,a:3,s:1}
        const actual = getLetterCount('caracas')
        expect(actual).to.deep.equal(expected);
    });
});