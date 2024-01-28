let edad = 25
console.log(`edad: ${edad}, dato: ${typeof(edad)}`)

{
  const edad = 30
  console.log(edad)
}

edad = 'Hola'
console.log(`edad: ${edad}, dato: ${typeof(edad)}`)
// como es debilmente tipado puedo asignar number y luego string
// si tendria las dos declaradas con var el scope entre las {} me cambia el valor

// un array puedo declararlo con const y luego modificarlo internamente
const nombres = ['Ana', 'Diego']
nombres.push('Gaston')
console.log(`nombres: ${nombres}`)

// lo mismo para los objetos
const objetos = {"key": "value"}
objetos.otro = "algo"
console.log(`objetos: ${objetos}`)