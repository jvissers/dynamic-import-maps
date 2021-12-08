const app = document.querySelector<HTMLDivElement>('#app')!;

let module = 'dynamic';
import(/* @vite-ignore */ `/ext/${module}/dist/extension-${module}.esm.js`)
  .then((m) => m.default)
  .then(() => {
    console.info('loaded');
  });

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
