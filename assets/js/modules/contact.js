
(async () => {

    const { useless } = await import('../utils/useless.mjs')
    let newFn = useless.bind({})
    // useless()
    newFn()
    
})();

const $form = document.querySelector('#myForm')

$form.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.warn("Se hizo un submit")
    alert("Se hizo un submit")
})
