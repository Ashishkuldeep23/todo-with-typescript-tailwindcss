import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })




// you can copy the base structure of manifest object.
const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["**/*", "favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "TODO-app-by-Ashish",
    short_name: "TODO-Ashish",
    description: "This is a simple Todo web app.",
    icons: [{
      src: 'https://blog.ipleaders.in/wp-content/uploads/2017/01/write-well.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: 'https://blog.ipleaders.in/wp-content/uploads/2017/01/write-well.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'favicon'
    },
    {
      src: 'https://blog.ipleaders.in/wp-content/uploads/2017/01/write-well.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
    {
      src: 'https://blog.ipleaders.in/wp-content/uploads/2017/01/write-well.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
    }
    ],
    theme_color: '#171717',
    background_color: '#f0e7db',
    display: "standalone",
    scope: '/',
    start_url: "/",
    orientation: 'portrait'
  }
}







export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugIn)
  ],
})

