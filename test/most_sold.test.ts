import 'mocha';
import * as chai from 'chai';
import { setObjectOfItems, reducer } from '../src/utils/helpers';
import { purchasesMock } from './mock_data';

const expect = chai.expect;

describe('Most sold item', () => {
	it('should return the most sold item', () => {
		const dataObject = setObjectOfItems(purchasesMock, 'item');
		const mostSoldItem = reducer(dataObject);
		expect(mostSoldItem.toUpperCase()).to.equal('SYNERGISTIC CONCRETE PANTS');
	});
});
