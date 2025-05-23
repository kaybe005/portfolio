import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                },
                // Dexter's Lab theme colors
                dexter: {
                    purple: '#2A1B3D',
                    darkPurple: '#1A0B2E',
                    teal: '#44CFCB',
                    green: '#7FFF00',
                    orange: '#FF7F11',
                    red: '#FF3F00',
                    gray: '#D8D5DB',
                },
            },
            fontFamily: {
                bungee: ['Bungee', 'cursive'],
                'share-tech': ['"Share Tech Mono"', 'monospace'],
                orbitron: ['Orbitron', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.3' }
                },
                glow: {
                    '0%, 100%': {
                        textShadow: '0 0 5px rgba(127, 255, 0, 0.5), 0 0 10px rgba(127, 255, 0, 0.3)',
                        boxShadow: '0 0 5px rgba(127, 255, 0, 0.5), 0 0 10px rgba(127, 255, 0, 0.3)'
                    },
                    '50%': {
                        textShadow: '0 0 20px rgba(127, 255, 0, 0.8), 0 0 30px rgba(127, 255, 0, 0.5)',
                        boxShadow: '0 0 20px rgba(127, 255, 0, 0.8), 0 0 30px rgba(127, 255, 0, 0.5)'
                    }
                },
                scan: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '0% 100%' }
                },
                typing: {
                    from: { width: '0' },
                    to: { width: '100%' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'blink': 'blink 1.5s infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'scan': 'scan 3s linear infinite',
                'typing': 'typing 3.5s steps(40, end)'
            },
            backgroundImage: {
                'lab-pattern': "url('/lab-pattern.svg')",
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
