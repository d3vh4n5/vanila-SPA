export const codeEval = async (path)=>{
    if (path === '') return
    fetch(path)
        .then(resp => resp.text())
        .then(txt=> {
            eval(txt)
        })
        .catch(e=>{
            console.error("Ocurrio un error al evaluar el codigo")
        })
    
    // const module = await import('../modules/about.js')
    // module.load()
}