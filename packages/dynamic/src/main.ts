import hasIt from './index';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <bold>${hasIt()}</b>
`;
