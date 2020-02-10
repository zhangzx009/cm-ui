/**
 * Vue Router support
 */
export function route(router, config) {
  const { to, url, replace } = config;
  if (to && router) {
    const promise = router[replace ? 'replace' : 'push'](to);

    /* istanbul ignore else */
    if (promise && promise.catch) {
      promise.catch(err => {
        /* istanbul ignore if */
        if (err && err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : (location.href = url);
  }
}

export function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}

export const routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};
