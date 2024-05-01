var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
import inquirer from "inquirer";
function atm() {
    return __awaiter(this, void 0, void 0, function () {
        var balance, pin, invalid_pin, Transaction, _a, amount, withdrawAmount, withdraw_Amount, depositAmount, deposit_amount, TotaldepositAmount;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    balance = 10000;
                    return [4 /*yield*/, inquirer.prompt([{
                                name: 'pin',
                                type: 'number',
                                message: 'Enter the four digits pin code'
                            }])];
                case 1:
                    pin = (_b.sent()).pin;
                    invalid_pin = function () {
                        if (!(pin >= 1000 && pin <= 10000)) {
                            throw new Error('Sorry, You have entered invalid pin. ');
                        }
                    };
                    invalid_pin();
                    return [4 /*yield*/, inquirer.prompt([{
                                name: 'Transaction',
                                type: 'list',
                                message: 'Select the transaction method',
                                choices: ["Withdraw", "Deposit", "Check balance"]
                            }])];
                case 2:
                    Transaction = _b.sent();
                    _a = Transaction.Transaction;
                    switch (_a) {
                        case "Withdraw": return [3 /*break*/, 3];
                        case "Deposit": return [3 /*break*/, 5];
                        case "Check balance": return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 3: return [4 /*yield*/, inquirer.prompt([{
                            name: 'amount',
                            type: 'number',
                            message: 'Enter the remaining amount'
                        }])];
                case 4:
                    amount = _b.sent();
                    withdrawAmount = Number(amount.amount);
                    if (withdrawAmount > 0 && withdrawAmount <= balance) {
                        withdraw_Amount = balance - withdrawAmount;
                        console.log("The remaining amount = " + withdraw_Amount);
                    }
                    else {
                        console.log('Sorry, The transaction cannot proceed. Your balance is less than amount entered.');
                    }
                    return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, inquirer.prompt([{
                            name: 'deposit',
                            type: "number",
                            message: 'Enter the deposit amount'
                        }])];
                case 6:
                    depositAmount = _b.sent();
                    deposit_amount = Number(depositAmount.deposit);
                    TotaldepositAmount = balance + deposit_amount;
                    console.log("The deposited amount = " + TotaldepositAmount);
                    return [3 /*break*/, 8];
                case 7:
                    console.log("Balance = " + balance);
                    _b.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
atm();

