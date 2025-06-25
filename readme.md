# @juatos/shared-conf

Vue 3 项目的共享配置库，提供 Vite 构建配置和 TypeScript 配置模板。

## 📦 安装

```bash
pnpm add @juatos/shared-conf -D
```

> **注意**: 本项目强制使用 pnpm 作为包管理器

## 🚀 快速开始

### Vite 配置

在你的 `vite.config.ts` 中使用：

```typescript
import { defineConfig } from "@juatos/shared-conf"

export default defineConfig({
  root: import.meta.dirname,
  
  plugins: {
    vue: true,
    unocss: true,
    autoImport: true,
    components: true,
    dts: true
  },
  
  build: {
    mode: "APP" // 或 "LIB"
  }
})
```

### TypeScript 配置

在你的 `tsconfig.json` 中继承：

```json
{
  "extends": "@juatos/shared-conf/tsconfig/app.json",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📚 配置选项

### 插件配置

| 插件 | 类型 | 说明 |
|------|------|------|
| `vue` | `boolean` | Vue 3 单文件组件支持 |
| `unocss` | `boolean \| "screen"` | UnoCSS 原子化 CSS |
| `autoImport` | `boolean \| string[]` | API 自动导入 |
| `components` | `boolean` | 组件自动注册 |
| `dts` | `boolean` | TypeScript 声明文件生成 |

### 构建配置

| 选项 | 值 | 说明 |
|------|-----|------|
| `mode` | `"APP"` | 应用模式构建 |
| `mode` | `"LIB"` | 库模式构建 |

## 🎯 TypeScript 配置模板

### 应用项目配置
```json
{
  "extends": "@juatos/shared-conf/tsconfig/app.json"
}
```

### 库项目配置
```json
{
  "extends": "@juatos/shared-conf/tsconfig/library.json"
}
```

## 🛠️ 特性

- ✅ **开箱即用**：预配置常用插件和选项
- ✅ **TypeScript 优先**：完整的类型支持
- ✅ **模块化设计**：按需启用插件
- ✅ **双模式构建**：支持应用和库两种构建模式
- ✅ **标准化配置**：项目配置的一致性和最佳实践

## 📖 详细文档

### 自定义插件配置

```typescript
export default defineConfig({
  plugins: {
    vue: true,
    unocss: "screen", // 屏幕适配配置
    autoImport: ["lodash-es", "dayjs"], // 额外的自动导入
    components: true,
    dts: true
  }
})
```

### 构建配置示例

```typescript
// 应用构建
export default defineConfig({
  build: {
    mode: "APP",
    distPath: "dist"
  }
})

// 库构建
export default defineConfig({
  build: {
    mode: "LIB",
    distPath: "lib"
  }
})
```

## 🔧 依赖要求

### 对等依赖
- `vue` ^3.0.0
- `naive-ui` ^2.0.0  
- `vite` ^6.0.0

### 自动包含的插件
- `@vitejs/plugin-vue`
- `unocss/vite`
- `unplugin-auto-import`
- `unplugin-vue-components`
- `vite-plugin-dts`

## 📄 许可证

MIT 
