import {
  __commonJS
} from "./chunk-YFRIKTX7.js";

// browser-external:fs/promises
var require_promises = __commonJS({
  "browser-external:fs/promises"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "fs/promises" has been externalized for browser compatibility. Cannot access "fs/promises.${key}" in client code. See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});
export default require_promises();
//# sourceMappingURL=promises-WIPB4ZIS.js.map
