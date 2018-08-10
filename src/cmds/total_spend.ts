import * as ora from 'ora';
import getPurchases from '../utils/purchases';
import getUsers from '../utils/users';

export interface IUser {
	id: string;
	first_name: string;
	last_name: string;
	phone: string;
	email: string;
}

export interface IPurchase {
	user_id: string;
	item: string;
	spend: string;
}

export const totalSpend = (usersData: IUser[], purchasesData: IPurchase[], email: string = '') => {
	let user = { id: '', first_name: '', last_name: '', phone: '', email: '' };
	user = usersData.find((user: IUser) => user.email === email) || user;

	const userPurchase = purchasesData.filter((purchase: IPurchase) => purchase.user_id === user.id);

	const allSpends = userPurchase.map((purchase: IPurchase) => parseFloat(purchase.spend));
	const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
	return allSpends.reduce(reducer);
};

export default async (args: any): Promise<any> => {
	const spinner = ora().start();
	try {
		const users = await getUsers();
		const purchases = await getPurchases();
		const email = args.email;
		const purchasesData = purchases.data;
		const userData = users.data;

		spinner.stop();

		console.log(`Total spend ${totalSpend(userData, purchasesData, email)}`);
	} catch (err) {
		spinner.stop();
		console.error(err);
	}
};
