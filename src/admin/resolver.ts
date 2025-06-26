interface ComponentResolver {
  type: "component"
  resolve: (name: string) => { name: string; from: string } | undefined
}

/**
 * Rakit Admin 组件解析器
 * 支持 Rk 前缀的组件自动导入
 * 
 * @example
 * ```vue
 * <template>
 *   <RkButton>按钮</RkButton>
 *   <RkCard>卡片</RkCard>
 *   <RkModal>弹窗</RkModal>
 * </template>
 * ```
 */
export function RakitResolver(): ComponentResolver {
  return {
    type: "component",
    resolve: (name: string) => {
      if (name.startsWith("Rk")) {
        return {
          name,
          from: "@rakit/admin",
        }
      }
    },
  }
}

export default RakitResolver 