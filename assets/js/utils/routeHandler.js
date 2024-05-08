import { fetchHtml } from "./fetchHtml.js";
import { ROUTES } from "../constants/routes.js";

async function handleRouter(newRoute){
    console.log(newRoute)
    console.log(ROUTES[newRoute])
    fetchHtml(ROUTES[newRoute])
}

window.addEventListener('load', () => {
    handleRouter(window.location.pathname);
});

window.addEventListener('popstate', () => {
    handleRouter(window.location.pathname);
});

window.addEventListener('historialCambiado', () => {
    handleRouter(window.location.pathname)
});