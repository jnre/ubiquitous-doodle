import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/josephng/Documents/code/personal/ubiquitous-doodle/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}