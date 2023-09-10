import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        celeste:{
            light:'#11ced8',
            DEFAULT:'#05c2cc',
            dark:"#08a2aa",
        },
        purple:{
            light:'#592c87',
            DEFAULT:'#421f66',
            dark:"#300c54",
        }
    },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
