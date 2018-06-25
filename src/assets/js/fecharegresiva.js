felicesPorSiempre.fechaRegresiva = (function () {

    var $contador = $('.boss-countdown');

    var fin = new Date('04/08/2017 08:15 PM');

    var segundos = 1000;
    var minutos = segundos * 60;
    var horas = minutos * 60;
    var dias = horas * 24;
    var temporizador;

    function cuentaRegresiva() {
        var fechaDeHoy = new Date();
        var distancia = fin - fechaDeHoy;
        if (distancia < 0) {
            clearInterval(temporizador);
            $contador.html("<b>¡Al fin!</b>");
            return;
        }
        var diasRestantes = Math.floor(distancia / dias);
        var horasRestantes = Math.floor((distancia % dias) / horas);
        var minutosRestantes = Math.floor((distancia % horas) / minutos);
        var segundosRestantes = Math.floor((distancia % minutos) / segundos);
        
        $contador.html('<div><div><span>' + dejarDosDigitos(diasRestantes) + '</span><span>días</span></div><div><span>' + dejarDosDigitos(horasRestantes) + '</span><span>horas</span></div></div><div class="boss-countdown"><div><span>' + dejarDosDigitos(minutosRestantes) + '</span><span>minutos</span></div><div><span>' + dejarDosDigitos(horasRestantes) + '</span><span>segundos</span></div></div>');

    }
    
    function dejarDosDigitos(tiempo){
        if(tiempo < 10)
          tiempo =  '0' + tiempo ;
        return tiempo;
    }

    temporizador = setInterval(cuentaRegresiva, 1000);

    return {
        cuentaRegresiva: cuentaRegresiva
    };

}());