function converte(){
    let temperatura = document.getElementById('txtt')
    let res = document.getElementById('res')
    let temp = temperatura.value
    res.innerHTML = `${temp}ºC equivale a ${(temp * 1.8) + 32}ºF`
}
