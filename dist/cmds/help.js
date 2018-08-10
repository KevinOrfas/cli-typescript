"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menus = {
    main: "\n      driftrock [command] <options>\n  \n      most_sold           .............. shows the name of the most sold item\n      total_spend [email] .............. shows the total spend of the user with this email address\n      most_loyal          .............. shows the email address of the most loyal user (most purchases)\n      \n      version              ............... shows package version\n      help                 ............... shows help menu for a command"
};
exports.default = function (args) {
    var subCmd = args._[0] === 'help' ? args._[1] : args._[0];
    console.log(menus[subCmd] || menus.main);
};
