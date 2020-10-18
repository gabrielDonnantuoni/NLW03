//Create map
const map = L.map('mapid').setView([-3.7537332,-38.5381839], 14);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

//Create marker at a especific position
// L.marker([-3.7348360226819710,-38.55898433963750], { icon }).addTo(map)
//     .bindPopup(popup)
//    .openPopup(); Se quisesse ja iniciar com a popup aberta

// Add marker
let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove marker
    marker && map.removeLayer(marker); // && verifica se o marker existe. Se sim, executa map.removeLayer

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);

} )

// add photo field

function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //Verificar se o field estava vazio
    const input = newFieldContainer.children[0];

    console.log(input.value);

    if (input.value == "") {
        return;
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = "";

    //adicionar o clone ao container #images
    container.appendChild(newFieldContainer);
}

function deleteField (event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <= 1){
        //apagar o conteúdo
        span.parentNode.children[0].value = "";
        return;
    }

    // deletar o campo
    span.parentNode.remove();
}

// seleciona o botão sim ou não

function toggleSelect(event) {
    //retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach( function (button) {
        button.classList.remove('active')
    } )

    //adicionar a classe no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_weekends"]')

    input.value = button.dataset.value
}