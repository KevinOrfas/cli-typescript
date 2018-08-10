import 'mocha';
import * as chai from 'chai';

import { purchasesMock } from './mock_data';
import { usersMock } from './mock_data';
import { totalSpend } from '../src/cmds/total_spend';

const expect = chai.expect;

describe('Total spend', () => {
	it('should return the toltal spend of user', () => {
		expect(totalSpend(usersMock, purchasesMock, 'pearlie.yost@greenholt.biz')).to.equal(85.93);
	});
});
