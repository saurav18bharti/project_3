import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
       "header-button-1": "#FFFFFF",
       "header-button-2": "#C6C7F8",
       "card-bg-color": "#222222",
       "input-bg-color": "#7166661f",
       "apple_google-bg-color": "#8581811f",
       "overviewBackgroundColor1":"#e3f5ff",
       "overviewBackgroundColor2":"#E5ECF6",
       
       
      
      },
      colors: {
         "card_text_color":"#b7b3b3ba",
         "blue_text_color":"#95A4FC",
         "apple_google_border_color": "#716666",
         "overviewBorderColor":"#595959"
         
        
      }
    },
  },
  plugins: [nextui()],
};
export default config;
