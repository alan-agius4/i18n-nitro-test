// This should not be in the users source.

// Metadata that can be injected during the build
const entryPoints = {
  "en-US": () => import(`./dist/i18n-nitro-test/server/en-US/server.mjs`),
  fr: () => import(`./dist/i18n-nitro-test/server/fr/server.mjs`),
};

// Render hook.
export default eventHandler(async (event) => {
  const locale = getRequestURL(event).pathname.split("/").filter(Boolean)[0];

  if (!entryPoints[locale]) {
    return
  }

  const document = await useStorage().getItem(
    `assets/server/${locale}/index.server.html`
  );

  const html = await entryPoints[locale]();
  return html.render(event.req, document);
});
