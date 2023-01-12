"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNode_1 = require("./isNode");
if (isNode_1.isNode) {
    if (typeof process !== "undefined") {
        process.on('unhandledRejection', function (reason, promise) {
            console.error('Dyna boilerplate: Unhandled Rejection; you should catch it!', {
                promise: promise,
                reason: reason,
            });
        });
    }
}
//# sourceMappingURL=unhandledPromiseRejectionsInNode.js.map