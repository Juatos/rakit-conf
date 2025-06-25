import type { UserConfig } from "vite"
import type { ViteConf } from "./types"
import { defineConfig as viteDefineConfig } from "vite"
import { createBuild } from "./build"
import { createPlugins } from "./plugin"

/**
 * 定义 Vite 配置
 * @param config 自定义配置选项
 * @returns Vite 配置对象
 */
export function defineConfig(config: ViteConf): UserConfig {
  const root: string = config.root as string

  // 创建配置对象
  const userConfig: UserConfig = {
    root,
    server: config.server,
    resolve: config?.resolve,

    plugins: createPlugins(root, config.plugins),
    build: config.build
      ? createBuild({ ...config.build, root })
      : createBuild({ mode: "APP", root }),
  }

  return viteDefineConfig(userConfig)
} 