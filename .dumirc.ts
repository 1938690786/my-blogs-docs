import { defineConfig } from 'dumi';

const repo = 'my-blogs-docs'; // 项目名(也就是你的仓库名)

export default defineConfig({
  title: "xw's docs",
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
});