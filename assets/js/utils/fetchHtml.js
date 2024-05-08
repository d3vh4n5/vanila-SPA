export async function fetchHtml(path) {
    try{
        const response = await fetch(path)
        const html = await response.text()
        document.querySelector('main').innerHTML = html
    } catch (e){
        console.error(e)
        document.querySelector('main').innerHTML = "Failed to fetch: " + path;
    }
}