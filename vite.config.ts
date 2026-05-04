import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        qualifications: resolve(__dirname, 'qualifications.html'),
        projects: resolve(__dirname, 'projects.html'),
        experience: resolve(__dirname, 'experience.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
