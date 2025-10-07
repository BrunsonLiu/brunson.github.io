// app/layout.tsx
export const metadata = {
  title: "你的主页标题", // 替换成你想显示的页面标题
  description: "主页的描述", // 可选，用于 SEO 等场景
};

export default function RootLayout({
  children, // children 是页面内容（比如 page.tsx 的内容会被传入这里）
}) {
  return (
    <html lang="zh-CN"> {/* 语言可根据需要修改，比如 en */}
      <body>{children}</body>
    </html>
  );
}