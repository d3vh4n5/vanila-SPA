export async function fetchHtml(path, callback) {
    try{
        const app = document.querySelector('main')
        app. innerHTML = 'Cargando...'
        const response = await fetch(path)
        const html = await response.text()
        app.innerHTML = html
        if (typeof callback === 'function') {
            callback(); 
        }
    } catch (e){
        console.error(e)
        document.querySelector('main').innerHTML = "Failed to fetch: " + path;
    }
}

export async function delayedFetchHtml(path, callback) {
    try{
        const app = document.querySelector('main')
        app. innerHTML = 'Cargando...'
        const response = await fetch(path)
        const html = await response.text()
        setTimeout(()=>{
            app.innerHTML = html
            if (typeof callback === 'function') {
                callback(); 
            }
        }, 300)
    } catch (e){
        console.error(e)
        document.querySelector('main').innerHTML = "Failed to fetch: " + path;
    }
}