import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/josephng/Documents/code/personal/ubiquitous-doodle/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}