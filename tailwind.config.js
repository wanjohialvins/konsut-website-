/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: {
                        900: '#0f172a', // Slate 900
                        800: '#1e293b',
                        700: '#334155',
                        600: '#475569',
                    },
                    blue: {
                        500: '#2563EB', // Royal Blue (Standard Corporate)
                        600: '#1D4ED8', // Darker Royal
                        400: '#60A5FA', // Lighter Blue
                    },
                    gray: {
                        50: '#f9fafb',
                        100: '#f3f4f6',
                        900: '#111827',
                    }
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
