const app = document.querySelector<HTMLDivElement>('#app')!;

let module = 'dynamic';
import(/* @vite-ignore */ `/ext/${module}/dist/extension-${module}.esm.js`)
  .then((m) => m.default)
  .then((exportedFunction) => {
    app.innerHTML = `
       <h5>The function got loaded? (${exportedFunction()})</h5>
       `;
  });
