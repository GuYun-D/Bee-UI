import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
// import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  plugins: [Vue(), VueJsx()],
  test: {
    environment: 'jsdom'
  }
})
