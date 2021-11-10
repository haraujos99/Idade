function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
  
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } 
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        if (fsex[0].checked) {
            genero = 'Homem';
        } else {
            genero = 'Mulher';
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        if (genero == 'Homem'){
            if (idade < 13){
                res.innerHTML += '<img style="border-radius: 50%" width="250" height="250" src="Criança-Homem.jpg" alt="Criança Homem">'
            } else   if (idade < 25){
                res.innerHTML += '<img style="border-radius: 50%" width="250" height="250" src="Jovem-Homem.jpg" alt="Jovem Homem">'
            } else   if (idade < 55){
                res.innerHTML += '<img style="border-radius: 50%" width="250" height="250" src="Adulto-Homem.jpg" alt="Adulto Homem">'
            } else {
                res.innerHTML += '<img style="border-radius: 50%" width="250" height="250" src="Idoso-Homem.jpg" alt="Idoso Homem">'
            }
        } else {
            if (idade < 13){
                res.innerHTML += '<img style="border-radius: 50%" width="250" height="250" src="Criança-Mulher.jpg" alt="Criança Mulher">'
            } else   if (idade < 25){
                res.innerHTML += '<img style="border-radius: 50%" width="250" height="250" src="Jovem-Mulher.jpg" alt="Jovem Mulher">'
            } else   if (idade < 55){
                res.innerHTML += '<img style="border-radius: 50%" width="250" height="250" src="Adulto-Mulher.jpg" alt="Adulto Mulher">'
            } else {
                res.innerHTML += '<img style="border-radius: 50%" width="250" height="250" src="Idoso-Mulher.jpg" alt="Idoso Mulher">'
            }
        }



}