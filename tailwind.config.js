/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shella-bg': '#f6f5f0',
        'shella-fg': '#101013',
        'shella-muted': '#5a5a63',
        'shella-line': '#111',
        'shella-neon': '#1e6bff',
        'shella-card': '#fff',
      },
      fontFamily: {
        'display': ['Archivo Black', 'Anton', 'Impact', 'system-ui', 'sans-serif'],
        'body': ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Inter', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
