document.getElementById('button').addEventListener('click', mathstuff)

function mathstuff () {
  const diameter = document.getElementById('userinput').value
  const radius = parseFloat(diameter / 2)
  const area = Math.PI * (radius * radius)
  const circumference = Math.PI * diameter
  document.getElementById('answer').innerHTML = ' Area is ' + area + '<br> Circumference is ' + circumference
}
