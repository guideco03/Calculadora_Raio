function calcularArea(){
  var h2o = document.getElementById("out")
  var inR = document.getElementById("r")
  
  var raio = inR.value
  var area = 3.14 * raio**2
  h2o.innerHTML = "Área =" + area 
}
