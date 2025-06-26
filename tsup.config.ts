import { defineConfig } from "tsup"

export default defineConfig([
  {
    // 主入口文件
    entry: ["src/index.ts"],
    // 生成类型声明文件
    dts: true,
    // 代码拆分，保持模块化
    splitting: true,
    // 清理输出目录
    clean: true,
    // 输出格式
    format: ["cjs", "esm"],
    // 目标环境
    target: "es2020",
  },
  {
    // eslint配置文件
    entry: {
      "eslint": "src/eslint/index.ts"
    },
    // 不生成类型声明文件
    dts: false,
    // 不代码拆分
    splitting: false,
    // 不清理输出目录
    clean: false,
    // 只输出ESM格式
    format: ["esm"],
    // 目标环境
    target: "es2020",
  },
  {
    // admin 解析器
    entry: {
      "admin/resolver": "src/admin/resolver.ts"
    },
    // 生成类型声明文件
    dts: true,
    // 不代码拆分
    splitting: false,
    // 不清理输出目录
    clean: false,
    // 输出格式
    format: ["cjs", "esm"],
    // 目标环境
    target: "es2020",
  }
])
