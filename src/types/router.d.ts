import 'vue-router'

type Layout = 'default' | 'empty';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: Layout;
    enabledAuth?: boolean;
  }
}
