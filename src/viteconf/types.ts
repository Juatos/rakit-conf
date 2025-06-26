import type { UserConfig } from "vite"

/** 插件配置项 */
export interface PluginsOptions {
  /** Vue 插件配置，只能为 true 或 null(禁用) */
  vue?: boolean | null

  /** UnoCSS 插件配置，true 为基础配置，"screen" 为屏幕适配配置，或 null(禁用) */
  unocss?: string | boolean | null

  /** 自动导入插件配置，可以是额外导入模块数组或 true(默认导入) 或 null(禁用) */
  autoImport?: any[] | boolean | null

  /** 组件自动注册插件配置，可以是 true(默认组件) 或 null(禁用) */
  components?: boolean | null

  /** DTS 插件配置，只能为 true 或 null(禁用) */
  dts?: boolean | null
}

/** 构建配置 */
export interface BuildConfig {
  /** 构建模式：APP 或 LIB */
  mode: "APP" | "LIB"
  /** 输出目录路径 */
  distPath?: string
  /** 根目录路径，用于解析入口文件 */
  root?: string
}

/** 自定义 Vite 配置格式 */
export interface ViteConf {
  /** 项目根目录 */
  root: string
  /** 项目基础路径 */
  base?: string
  /** 服务器配置 */
  server?: UserConfig["server"]
  /** 解析配置 */
  resolve?: UserConfig["resolve"]
  /** 插件配置 */
  plugins?: PluginsOptions
  /** 构建配置 */
  build?: BuildConfig
} 
