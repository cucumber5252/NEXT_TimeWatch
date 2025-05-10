/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        screens: {
            // 반응형 브레이크포인트를 비활성화하거나 수정할 수 있습니다.
            sm: 'none', // sm 브레이크포인트 비활성화
            md: 'none', // md 브레이크포인트 비활성화
            lg: 'none', // lg 브레이크포인트 비활성화
            xl: 'none', // xl 브레이크포인트 비활성화
        },
    },
    plugins: [],
};
