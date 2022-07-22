const price = document.getElementById('price')
const url = "https://www.mercadobitcoin.net/api/BTC/ticker"

function getPrice() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        price.innerHTML = JSON.stringify(data.ticker.high)
        price.innerHTML
    })
    .catch(error => price.innerHTML = "Deu ruim")
}

getPrice()


