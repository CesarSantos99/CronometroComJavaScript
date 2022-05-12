let seg = 0
let min = 0
let horas = 0
let cancelar

function doisZeros(digito){
    if (digito < 10) {
        return('0' + digito) 
    } else {
        return(digito)
    }
}

function iniciar(){
    cancelar =setInterval(rodar,1)
}

function pausar(){
    clearInterval(cancelar)
} 

function parar(){
    clearInterval(cancelar)
    seg = 0
    min = 0
    document.getElementById('rodar').innerText= '00:00:00'
}

function rodar(){
    seg++
    if(seg==60){
        min++
        seg =0
    }
        if(min==60){
            min = 0
            horas++
        }
        document.getElementById('rodar').innerText=doisZeros(horas)+ ':' +doisZeros(min)+ ':' +doisZeros(seg) 
    }