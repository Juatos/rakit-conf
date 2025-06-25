import type { BuildOptions } from "vite"
import type { BuildConfig } from "./types"
import { resolve } from "node:path"
import { cwd } from "node:process"

/**
 * 创建构建配置
 * @param options 构建配置
 * @returns Vite 构建配置对象
 */
export function createBuild(options: BuildConfig): BuildOptions {
  let buildConfig: BuildOptions

  const mode = options.mode || "APP"
  // 使用传入的输出目录或默认值
  const distPath = options.distPath || "dist"
  // 获取根目录，用于解析入口文件
  const rootPath = options.root || cwd()

  if (mode === "APP") {
    // 应用模式构建配置
    buildConfig = {
      outDir: distPath,
      emptyOutDir: true,
      minify: "terser",
      chunkSizeWarningLimit: 1024,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ["vue", "vue-router", "pinia"],
            naive: ["naive-ui"],
          },
        },
      },
    }
  }
  else {
    buildConfig = {
      cssCodeSplit: false,
      sourcemap: false,
      lib: {
        entry: resolve(rootPath, "src/index.ts"),
        formats: ["es"],
        fileName: () => "index.mjs",
      },
      rollupOptions: {
        // 只排除真正必要的外部依赖
        external: ["vue", "naive-ui", "fsevents"],
        output: {
          globals: {
            "vue": "Vue",
            "naive-ui": "naive",
          },
          preserveModules: false,
          // 主入口文件名
          entryFileNames: "index.mjs",
          // 代码分割 chunk 文件名
          chunkFileNames: "chunks/[name]-[hash].mjs",
          // 静态资源文件名
          assetFileNames: "index.css",
        },
      },
      outDir: distPath,
      emptyOutDir: true,
    }
  }

  return buildConfig
} 