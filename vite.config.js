import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
  ],

  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['.', '..', '../..', '/'],
    },
  },
  base: "/threejs_point_cloud_visualizer_live"
};
