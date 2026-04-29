import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
  			mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
  		},
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			breathe: {
  				'0%, 100%': {
  					opacity: '0.6'
  				},
  				'50%': {
  					opacity: '0.85'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'vessel-bob': {
  				'0%, 100%': {
  					transform: 'translate(-50%, -4px) rotate(0deg)'
  				},
  				'30%': {
  					transform: 'translate(-50%, -7px) rotate(0.4deg)'
  				},
  				'60%': {
  					transform: 'translate(-50%, -5px) rotate(-0.3deg)'
  				},
  				'80%': {
  					transform: 'translate(-50%, -8px) rotate(0.15deg)'
  				}
  			},
  			'sub-bob': {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'30%': {
  					transform: 'translateY(-5px)'
  				},
  				'60%': {
  					transform: 'translateY(-2px)'
  				},
  				'80%': {
  					transform: 'translateY(-6px)'
  				}
  			},
  			'bubble-rise': {
  				'0%': {
  					transform: 'translateY(0) scale(1)',
  					opacity: '0.4'
  				},
  				'100%': {
  					transform: 'translateY(-30px) scale(1.5)',
  					opacity: '0'
  				}
  			},
  			'jelly-drift': {
  				'0%': {
  					transform: 'translateY(0px) translateX(0px)'
  				},
  				'25%': {
  					transform: 'translateY(-12px) translateX(8px)'
  				},
  				'50%': {
  					transform: 'translateY(-4px) translateX(-5px)'
  				},
  				'75%': {
  					transform: 'translateY(-15px) translateX(3px)'
  				},
  				'100%': {
  					transform: 'translateY(0px) translateX(0px)'
  				}
  			},
  			'whale-pass': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(calc(100vw + 400px))'
  				}
  			},
  			'cloud-drift': {
  				'0%': {
  					transform: 'translateX(-150px)'
  				},
  				'100%': {
  					transform: 'translateX(calc(100vw + 150px))'
  				}
  			},
  			'school-swim': {
  				'0%': {
  					transform: 'translateX(-200px) translateY(0)'
  				},
  				'50%': {
  					transform: 'translateX(50vw) translateY(-20px)'
  				},
  				'100%': {
  					transform: 'translateX(calc(100vw + 200px)) translateY(10px)'
  				}
  			},
  			'jelly-pulse': {
  				'0%, 100%': {
  					transform: 'translateY(0) scaleY(1)',
  					opacity: '0.7'
  				},
  				'30%': {
  					transform: 'translateY(-8px) scaleY(0.92)',
  					opacity: '0.9'
  				},
  				'60%': {
  					transform: 'translateY(-3px) scaleY(1.04)',
  					opacity: '0.6'
  				}
  			},
  			'salp-undulate': {
  				'0%, 100%': {
  					transform: 'translateX(0) translateY(0) rotate(0deg)'
  				},
  				'20%': {
  					transform: 'translateX(6px) translateY(-4px) rotate(1deg)'
  				},
  				'40%': {
  					transform: 'translateX(-3px) translateY(-8px) rotate(-0.5deg)'
  				},
  				'60%': {
  					transform: 'translateX(4px) translateY(-3px) rotate(0.8deg)'
  				},
  				'80%': {
  					transform: 'translateX(-5px) translateY(-6px) rotate(-0.3deg)'
  				}
  			},
  			'dolphin-arc': {
  				'0%': {
  					transform: 'translateX(-300px) translateY(0) rotate(0deg)',
  					opacity: '0'
  				},
  				'10%': {
  					opacity: '1'
  				},
  				'30%': {
  					transform: 'translateX(15vw) translateY(-40px) rotate(-15deg)'
  				},
  				'50%': {
  					transform: 'translateX(40vw) translateY(-60px) rotate(-5deg)'
  				},
  				'70%': {
  					transform: 'translateX(65vw) translateY(-30px) rotate(10deg)'
  				},
  				'90%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translateX(calc(100vw + 300px)) translateY(0) rotate(5deg)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			breathe: 'breathe 4s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'vessel-bob': 'vessel-bob 6s ease-in-out infinite',
  			'sub-bob': 'sub-bob 6s ease-in-out infinite',
  			'bubble-rise': 'bubble-rise 3s ease-out infinite',
  			'jelly-drift': 'jelly-drift 18s ease-in-out infinite',
  			'whale-pass': 'whale-pass 45s linear forwards',
  			'cloud-drift': 'cloud-drift 50s linear infinite',
  			'school-swim': 'school-swim 35s linear infinite',
  			'jelly-pulse': 'jelly-pulse 4s ease-in-out infinite',
  			'salp-undulate': 'salp-undulate 12s ease-in-out infinite',
  			'dolphin-arc': 'dolphin-arc 25s ease-in-out forwards'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
}
