import * as ora from 'ora';
import getPurchases from '../utils/purchases';
import { setObjectOfItems, reducer } from '../utils/helpers';

export default async (): Promise<any> => {
	const spinner = ora().start();
	try {
		const purchases = await getPurchases();

		spinner.stop();

		const userPurchasesObject = setObjectOfItems(purchases.data, 'user_id');
		const mostRoyalUser = reducer(userPurchasesObject);

		console.log(`The most royal user is "${mostRoyalUser}" with ${userPurchasesObject[mostRoyalUser]} purchases\n`);
	} catch (err) {
		spinner.stop();
		console.error(err);
	}
};
