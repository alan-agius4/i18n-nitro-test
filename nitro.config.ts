export default defineNitroConfig({
  srcDir: 'dist/i18n-nitro-test',
  publicAssets: [
    {
      dir: 'browser',
    },
  ],
  rollupConfig: {
    treeshake: {
      moduleSideEffects: true,
    },
    output: {
      format: 'esm',
    },
  },
  inlineDynamicImports: false,
  preset: 'node-server', // 'cloudflare',
  renderer: './renderer.js',
});
