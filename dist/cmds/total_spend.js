"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var ora = require("ora");
var purchases_1 = require("../utils/purchases");
var users_1 = require("../utils/users");
exports.totalSpend = function (usersData, purchasesData, email) {
    if (email === void 0) { email = ''; }
    var user = { id: '', first_name: '', last_name: '', phone: '', email: '' };
    user = usersData.find(function (user) { return user.email === email; }) || user;
    var userPurchase = purchasesData.filter(function (purchase) { return purchase.user_id === user.id; });
    var allSpends = userPurchase.map(function (purchase) { return parseFloat(purchase.spend); });
    var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
    return allSpends.reduce(reducer);
};
exports.default = function (args) { return __awaiter(_this, void 0, void 0, function () {
    var spinner, users, purchases, email, purchasesData, userData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                spinner = ora().start();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, users_1.default()];
            case 2:
                users = _a.sent();
                return [4 /*yield*/, purchases_1.default()];
            case 3:
                purchases = _a.sent();
                email = args.email;
                purchasesData = purchases.data;
                userData = users.data;
                spinner.stop();
                console.log("Total spend " + exports.totalSpend(userData, purchasesData, email));
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                spinner.stop();
                console.error(err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
