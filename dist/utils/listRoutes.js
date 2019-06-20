"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listRoutes = listRoutes;

function listRoutes(routes, stack, parent) {
  parent = parent || '';

  if (stack) {
    stack.forEach(function (r) {
      if (r.route && r.route.path) {
        var method = '';

        for (method in r.route.methods) {
          if (r.route.methods[method]) {
            routes.push({
              method: method.toUpperCase(),
              path: parent + r.route.path
            });
          }
        }
      } else if (r.handle && r.handle.name == 'router') {
        const routerName = r.regexp.source.replace("^\\", "").replace("\\/?(?=\\/|$)", "");
        return listRoutes(routes, r.handle.stack, parent + routerName);
      }
    });
    return routes;
  } else {
    return listRoutes([], app._router.stack);
  }
}