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
    class Objet {
        constructor(object) {
            this.type = object.type || undefined;
            this.x = object.x || 0;
            this.y = object.y || 0;
            this.width = object.width || 50;
            this.height = object.height || 50;
            this.radius = object.radius || 5;
            this.color = object.color ? object.color : false || 'green';
        }
        getTypeFromString(t, ctx) {
            switch (t) {
                case "rect":
                    return ctx.rect(this.x, this.y, this.width, this.height);
                case "circle":
                    return ctx.arc(this.x, this.y, this.radius, 0, Math.PI);
            }
        }
        draw(ctx) {
            this.getTypeFromString(this.type, ctx);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    exports.default = Objet;
});
