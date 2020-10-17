//Create map
const map = L.map('mapid').setView([-3.7537332,-38.5381839], 14);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Create Icon
const icon = L.icon({
    iconUrl: "public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [175,2]
})

//Create Popup Overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Instituto Cristo Rei <a href="orphanage.html?id=1" class="choose-orphanages"> <img src="./public/images/arrow-white.svg"> </a>')

//Create marker
L.marker([-3.7348360226819710,-38.55898433963750], { icon }).addTo(map)
    .bindPopup(popup)
//    .openPopup(); Se quisesse ja iniciar com a popup aberta