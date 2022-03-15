(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.keys = void 0;
    var keys;
    (function (keys) {
        keys["up"] = "z";
        keys["down"] = "s";
        keys["right"] = "d";
        keys["left"] = "q";
    })(keys = exports.keys || (exports.keys = {}));
});
