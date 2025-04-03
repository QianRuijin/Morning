import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  // 没有额外的规则或选项，仅用于声明适用的文件类型
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  // 浏览器环境的全局变量支持
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  // JavaScript 推荐规则
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  // TypeScript 推荐规则
  tseslint.configs.recommended,
  // React 推荐规则
  pluginReact.configs.flat.recommended,
  // 自定义规则
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "react/react-in-jsx-scope": "off", // 关闭 React 需要显式导入的规则
      // "custom-plugin/custom-rule": "error", // 使用自定义插件中的规则
      // 自定义规则示例
      // "no-console": "warn", // 将 console.log 警告级别改为警告
      // "max-lines": ["error", { max: 100 }], // 文件最大行数为 100 行
      // "no-unused-vars": "off", // 关闭未使用变量的警告
    },
  }
]);