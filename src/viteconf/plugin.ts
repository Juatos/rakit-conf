import type { PluginOption } from "vite"
import type { PluginsOptions } from "./types"
import { resolve } from "node:path"
import vue from "@vitejs/plugin-vue"
import { isArray } from "radash"
import unoCSS from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import dts from "vite-plugin-dts"
import { basicConf, screenConf } from "./unocss-plugin"

// 标准导入库
const DEFAULT_IMPORTS = ["vue", "vue-router", "pinia", "@vueuse/core"]
const DEFAULT_COMPONENTS = [NaiveUiResolver()]

function _vue() {
  return vue()
}

function _unocss(k?: any) {
  const config = (k === true || k !== "screen") ? basicConf : screenConf
  return unoCSS(config)
}

function _autoImport(root: string, k?: any) {
  return AutoImport({
    imports: isArray(k) ? [...DEFAULT_IMPORTS, ...k] : DEFAULT_IMPORTS,
    dts: resolve(root, "src/types/auto-imports.d.ts"),
  })
}

function _components(root: string, k?: any) {
  return Components({
    resolvers: isArray(k) ? [...DEFAULT_COMPONENTS, ...k] : DEFAULT_COMPONENTS,
    dts: resolve(root, "src/types/components.d.ts"),
  })
}

function _dts(root: string) {
  return dts({
    tsconfigPath: resolve(root, "./tsconfig.json"),
    insertTypesEntry: true,
    copyDtsFiles: false,
    rollupTypes: true,
  })
}

/**
 * 初始化插件
 */
export function createPlugins(root: string, options?: PluginsOptions): PluginOption[] {
  const plugins: PluginOption[] = []
  options?.vue && plugins.push(_vue())
  options?.dts && plugins.push(_dts(root))
  options?.unocss && plugins.push(_unocss(options.unocss))
  options?.autoImport && plugins.push(_autoImport(root, options.autoImport))
  options?.components && plugins.push(_components(root, options.components))

  return plugins
} 