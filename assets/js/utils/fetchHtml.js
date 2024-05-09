export async function fetchHtml(path, callback) {
    try{
        const response = await fetch(path)
        const html = await response.text()
        document.querySelector('main').innerHTML = html
        if (typeof callback === 'function') {
            callback(); 
        }
    } catch (e){
        console.error(e)
        document.querySelector('main').innerHTML = "Failed to fetch: " + path;
    }
}