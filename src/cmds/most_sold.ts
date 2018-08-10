import * as ora from 'ora';
import getPurchases from '../utils/purchases';
import { setObjectOfItems, reducer } from '../utils/helpers';

export default async (): Promise<any> => {
	const spinner = ora().start();
	try {
		const purchases = await getPurchases();

		spinner.stop();

		const soldItemsObject = setObjectOfItems(purchases.data, 'item');
		const mostSoldItem = reducer(soldItemsObject);

		console.log(`The most sold item is "${mostSoldItem}" with ${soldItemsObject[mostSoldItem]} purchases\n`);
	} catch (err) {
		spinner.stop();
		console.error(err);
	}
};
