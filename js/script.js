var crianca = 'Criança';
var jovem = 'Jovem';
var adulto = 'Adulto';
var idoso = 'Idoso';

while (true) {

    var idade = prompt('Digite sua idade para saber sua faixa etária');

    if (idade === null  || idade.trim() === "" ) {
        alert('Por favor, insira sua idade para continuar.');
        continue;
    } 
    
    idade = parseInt(idade);

    
    if (isNaN(idade)) {
        alert('Por favor, digite um número válido');
        continue;
    } 
  

    if (idade >= 0 && idade < 15) {
        document.write(crianca);
    } else if (idade >= 15 && idade < 30) {
        document.write(jovem);
    } else if (idade >= 30 && idade < 60) {
        document.write(adulto);
    } else if (idade >= 60) {
        document.write(idoso);
    } else {
        alert('Idade inválida.');
        continue;
    }


    break;

}









/*else if (idade === null  || idade.trim() === "" ) {
    alert('Idade inválida');
}*/