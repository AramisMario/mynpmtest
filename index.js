const ordenar  = (array) => {
    const myArray = [...array];
    return myArray.sort((a,b) => a-b)
}


module.exports = {
    ordenar: ordenar
}