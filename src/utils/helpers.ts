import { IPurchase } from '../cmds/total_spend';

export const setObjectOfItems = (purchaseData: IPurchase[], selector: string): object => {
	const objectOfItems = {};
	const userIds = purchaseData.map((data) => data[selector]);
	userIds.forEach((item) => (objectOfItems[item] = (objectOfItems[item] || 0) + 1));
	return objectOfItems;
};

export const reducer = (dataObject: object): string => {
	return Object.keys(dataObject).reduce((itemOne, itemTwo) => {
		return dataObject[itemOne] > dataObject[itemTwo] ? itemOne : itemTwo;
	});
};
