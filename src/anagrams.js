import {getLetterCount} from './letter-count';
import {isEqual} from 'lodash';

export const isAnagram = (string1,string2) =>{
    const firstStringLetters = getLetterCount(string1)
    const secondStringLetters = getLetterCount(string2)
    
    return isEqual(firstStringLetters,secondStringLetters);

}