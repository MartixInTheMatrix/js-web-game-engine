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
    class Scene {
        constructor(window, player, options) {
            this.window = window;
            this.background = {
                color: '#000000',
                innerHeight: window.innerHeight,
                innerWidth: window.innerWidth
            };
            this.innerHeight = window.innerHeight;
            this.innerWidth = window.innerWidth;
            this.plugins = options ? options.plugins ? options.plugins : [] : [] || [];
            this.objects = options ? options.objects ? options.objects : undefined : undefined;
            this.id = options ? options.id ? options.id : 'game' : 'game' || 'game';
            this.player = player;
        }
    }
    exports.default = Scene;
});
