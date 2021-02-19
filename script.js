document.getElementById('button').addEventListener('click', mathstuff)

function mathstuff () {
  //Area first
  const diameter = document.getElementById('userinput').value //input
  let radius = parseFloat(diameter / 2)
  let area = Math.PI * (radius * radius)
  let circumference = Math.PI * diameter
  document.getElementById('answer').innerHTML = ' Area is ' + area + "<br> Circumference is " + circumference
}
