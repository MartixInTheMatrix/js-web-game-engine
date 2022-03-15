(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../settings"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getActionFromKey = void 0;
    const settings_1 = require("../../settings");
    function getActionFromKey(k, player) {
        switch (k) {
            case settings_1.keys.up:
                return player.up();
            case settings_1.keys.down:
                return player.down();
            case settings_1.keys.right:
                return player.right();
            case settings_1.keys.left:
                return player.left();
            default:
                return console.log(k);
        }
    }
    exports.getActionFromKey = getActionFromKey;
});
