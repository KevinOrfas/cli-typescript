import 'mocha';
import * as chai from 'chai';
import { setObjectOfItems, reducer } from '../src/utils/helpers';
import { purchasesMock } from './mock_data';

const expect = chai.expect;

describe('Most loyal user', () => {
	it('should return the most loyal user', () => {
		const dataObject = setObjectOfItems(purchasesMock, 'user_id');
		const loyalUser = reducer(dataObject);
		expect(loyalUser.toUpperCase()).to.equal('HEI7-W5NW-OO9S-Z382');
	});
});
