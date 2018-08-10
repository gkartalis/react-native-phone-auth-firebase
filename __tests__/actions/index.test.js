import * as actionTypes from '../../src/actions/actionTypes';
import { 
    phoneChanged,
    codeChanged 
} from '../../src/actions';

test('should return new string on each number pressed', () => {
    const text = '+3069469'
    const action = phoneChanged(text);
    expect(action).toEqual({
        type: actionTypes.PHONE_CHANGED,
        payload: text
    });
});

test('should return new string on each code number pressed', () => {
    const text = '12345'
    const action = codeChanged(text);
    expect(action).toEqual({
        type: actionTypes.CODE_CHANGED,
        payload: text
    });
});
