function area() {
    
let base= parseInt(document.getElementById("qtde").value);
let altura= parseInt(document.getElementById("qtde2").value);
let area = (base*altura)/2;

        document.getElementById("area").innerText = "Por favor, insira valores válidos para base e altura."
        document.getElementById("area").innerText = `A área do triângulo é: ${area.toFixed(2)}`;
    

    document.getElementById("resultado-container").style.display = "block";
}
