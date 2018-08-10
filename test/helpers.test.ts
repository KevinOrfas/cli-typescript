import 'mocha';
import * as chai from 'chai';

import { setObjectOfItems, reducer } from '../src/utils/helpers';
import { purchasesMock } from './mock_data';

const expect = chai.expect;

describe('Testing helpers', () => {
	it('setObjectOfItems function should return an object', () => {
		expect(setObjectOfItems(purchasesMock, 'user_id')).to.be.an('object');
	});

	it('reducer function should return a string', () => {
		const dataObject = setObjectOfItems(purchasesMock, 'user_id');
		const loyalUser = reducer(dataObject);
		expect(loyalUser).to.be.a('string');
	});
});
