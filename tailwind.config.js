/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // 扫描app目录下所有文件
  ],
  theme: {
    extend: {
      colors: {
        // 学术高级配色体系（主色：科技蓝，辅助色：深空紫/金属灰，避免浮夸）
        primary: '#165DFF',
        secondary: '#722ED1',
        dark: '#0F172A',
        light: '#F8FAFC',
        accent: '#FF7D00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // 现代无衬线字体，清晰易读
        display: ['"Montserrat"', 'sans-serif'], // 标题用稍具设计感的字体
      },
      animation: {
        'float': 'float 6s ease-in-out infinite', // 悬浮动画（用于装饰元素）
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // 慢脉冲
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}