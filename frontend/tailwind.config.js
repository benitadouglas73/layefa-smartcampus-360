/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-space': '#020617',
                'bg-panel': 'rgba(30, 41, 59, 0.4)',
                'neon-cyan': '#06b6d4',
                'neon-purple': '#8b5cf6',
                'neon-pink': '#ec4899',
                'text-primary': '#f8fafc',
                'text-secondary': '#94a3b8',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
