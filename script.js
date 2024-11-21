let sortedNumbers = JSON.parse(localStorage.getItem('sortedNumbers')) || []

function sortearNumero() {
  const remainingDogs = dogs.filter(
    (dog) => !sortedNumbers.includes(dog.number)
  )
  if (remainingDogs.length === 0) {
    alert('Todos os números já foram sorteados!')
    return
  }
  const randomIndex = Math.floor(Math.random() * remainingDogs.length)
  const selectedDog = remainingDogs[randomIndex]

  // Adicionar ao histórico
  sortedNumbers.push(selectedDog.number)
  localStorage.setItem('sortedNumbers', JSON.stringify(sortedNumbers))

  // Atualizar a interface
  mostrarDogSorteado(selectedDog)
  atualizarHistorico()
  adicionarAoLog(`Número sorteado: ${selectedDog.number} (${selectedDog.name})`)
}

function mostrarDogSorteado(dog) {
  document.getElementById(
    'dog-name'
  ).textContent = `Número ${dog.number}: ${dog.name}`
  const dogImage = document.getElementById('dog-image')
  dogImage.src = 'images/'+dog.name+'.jpg'//dog.imageUrl
  dogImage.style.display = 'block'
}

function atualizarHistorico() {
  const historyDiv = document.getElementById('sorted-numbers')
  historyDiv.innerHTML = ''

  // Ordenar os números sorteados
  const sortedNumbersOrdered = [...sortedNumbers].sort((a, b) => a - b)

  sortedNumbersOrdered.forEach((numero) => {
    const dog = dogs.find((d) => d.number === numero)
    const span = document.createElement('span')
    span.textContent = `${dog.number} (${dog.name})`
    historyDiv.appendChild(span)
  })
}

function resetJogo() {
  // Limpar o localStorage e a variável sortedNumbers
  localStorage.removeItem('sortedNumbers')
  sortedNumbers = []

  // Limpar a interface
  document.getElementById('dog-name').textContent =
    'Clique em Sortear para começar!'
  document.getElementById('dog-image').style.display = 'none'
  document.getElementById('sorted-numbers').innerHTML = ''

  // Adicionar evento ao log
  adicionarAoLog('Jogo resetado.')
}

function adicionarAoLog(mensagem) {
  const logDiv = document.getElementById('event-log')
  const timestamp = new Date().toLocaleString('pt-PT')
  const logEntry = document.createElement('div')
  logEntry.textContent = `[${timestamp}] ${mensagem}`
  logDiv.prepend(logEntry) // Adiciona a nova mensagem no topo do log
}

function toggleLog() {
  const logDiv = document.getElementById('log')
  if (logDiv.style.display === 'block') {
    logDiv.style.display = 'none'
  } else {
    logDiv.style.display = 'block'
  }
}

// Restaurar histórico ao carregar a página
window.onload = function () {
  if (sortedNumbers.length > 0) {
    const lastSorted = dogs.find(
      (dog) => dog.number === sortedNumbers[sortedNumbers.length - 1]
    )
    mostrarDogSorteado(lastSorted)
  }
  atualizarHistorico()
  adicionarAoLog('Página carregada e histórico restaurado.')
}
