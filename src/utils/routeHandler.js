import { fetchHtml } from "./fetchHtml.js";
import { ROUTES } from "../constants/routes.js";
import { codeEval } from "./codeEval.js";

async function handleRouter(newRoute){
    await fetchHtml(ROUTES[newRoute].html, ()=>{
        codeEval(ROUTES[newRoute].js)
    })
}

window.addEventListener('load', () => {
    handleRouter(window.location.pathname);
});

window.addEventListener('popstate', () => {
    handleRouter(window.location.pathname);
});

window.addEventListener('historyChange', () => {
    handleRouter(window.location.pathname)
});