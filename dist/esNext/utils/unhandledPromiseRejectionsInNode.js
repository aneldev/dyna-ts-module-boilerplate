import { isNode } from "./isNode";
if (isNode) {
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