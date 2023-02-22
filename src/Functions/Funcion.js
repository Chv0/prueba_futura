

const obtener= async (url, setSiguiente, setAnterior, setPaginas, setTotal, setEpisodios) => {
    const peticion= await fetch(url)
    const {info, results} = await peticion.json()
    setSiguiente(info.next)
    info.prev != null? setAnterior(info.prev): setAnterior(null)
    setPaginas (info.pages)
    setTotal(info.count)
    setEpisodios(results)
    console.log(info, results)
}

const obtenerEpisodio = async (id, setEpisodio)=>{
    const peticion= await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const resultado=await peticion.json()
    setEpisodio(resultado)
}



export {
    obtener,
    obtenerEpisodio
}