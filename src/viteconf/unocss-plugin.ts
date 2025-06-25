import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"

export const basicConf = defineConfig({
  shortcuts: [
    ["flex-center", "flex justify-center items-center"],
    ["flex-col-center", "flex flex-col justify-center items-center"],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})

export const screenConf = defineConfig({
  // 屏幕适配配置可以在这里添加
  ...basicConf,
}) 