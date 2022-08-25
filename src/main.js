import './app.css';
import App from './App.svelte';
import 'bootswatch/dist/sketchy/bootstrap.min.css';

const app = new App({
   target: document.getElementById('app'),
});

export default app;
