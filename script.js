function Relogio(){
    var data = new Date()
    var hr = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    var horat = hr + ':' + min + ':' + sec
    var res = window.document.getElementById('res')
    res.innerHTML = horat

}
setInterval(Relogio,500)

function calendario(){
    var data1 = new Date()
    var ano = data1.getFullYear()
    var mes = data1.getMonth()
    var dia = data1.getDate()
    mes += 1

    var anot = window.document.getElementById('mes')
    anot.innerHTML= dia + '/' + mes + '/' + ano 
}
setInterval(calendario,50)


function diasemana(){
     var dias = window.document.getElementById('dias')
     var agora = new Date()
     var diasem = agora.getDay()

     if( diasem == 0){
         dias.innerHTML= 'Domingo'
     } else if( diasem == 1){
         dias.innerHTML = 'Segunda'
     } else if( diasem == 2){
        dias.innerHTML = 'Terça'
     } else if( diasem == 3){
        dias.innerHTML = 'Quarta'
     } else if( diasem == 4){
        dias.innerHTML = 'Quinta'
     } else if( diasem == 5){
        dias.innerHTML = 'Sexta'
     }else{
        dias.innerHTML = 'Sabado'
     }
 


}
setInterval(diasemana,50)
