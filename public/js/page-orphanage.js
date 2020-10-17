const options = {
    dragging: false,
    doubleClickZoom: false,
    touchZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Create map
const map = L.map('mapid', options).setView([-3.7348360226819710,-38.55898433963750], 14);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [175,2]
})

//Create marker
L.marker([-3.7348360226819710,-38.55898433963750], { icon }).addTo(map)

//Image Gallery

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass (button) {
        button.classList.remove("active")
    }

    // selecionar a img clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container da img

    imageContainer.src = image.src

    // adicionar a .active para o botão 
    button.classList.add("active")
}