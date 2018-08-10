import 'mocha';

import * as chai from 'chai';
import { expect, assert } from 'chai';

// Using require statement
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Get data from API', () => {
	it('should get users', (done) => {
		chai.request('https://driftrock-dev-test.herokuapp.com').get('/users').end((err, res) => {
			expect(res).to.have.status(200);
			assert.isArray(res.body.data, 'contains all users in an array');
			done();
		});
	});

	it('should get purchases', (done) => {
		chai.request('https://driftrock-dev-test.herokuapp.com').get('/purchases').end((err, res) => {
			expect(res).to.have.status(200);
			assert.isArray(res.body.data, 'contains all purchases in an array');
			done();
		});
	});
});
