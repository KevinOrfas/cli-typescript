"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setObjectOfItems = function (purchaseData, selector) {
    var objectOfItems = {};
    var userIds = purchaseData.map(function (data) { return data[selector]; });
    userIds.forEach(function (item) { return (objectOfItems[item] = (objectOfItems[item] || 0) + 1); });
    return objectOfItems;
};
exports.reducer = function (dataObject) {
    return Object.keys(dataObject).reduce(function (itemOne, itemTwo) {
        return dataObject[itemOne] > dataObject[itemTwo] ? itemOne : itemTwo;
    });
};
