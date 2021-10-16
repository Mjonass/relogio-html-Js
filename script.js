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