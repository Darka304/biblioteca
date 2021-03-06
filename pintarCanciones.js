export function pintarCanciones(canciones){

    
    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //rutina para llenado
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let nombre = document.createElement("h5")
        nombre.classList.add("titulo")
        nombre.textContent=cancion.name

        let popu = document.createElement("h6")
        popu.classList.add("popu")
        popu.textContent="Popularidad: " + cancion.popularity + "%"

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=cancion.album.images[0].url

        //padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(popu)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })

}