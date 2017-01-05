// ==UserScript==
// @name        Atelier801 - Menú personalizado
// @include     http://atelier801.com/*
// @version     0.1
// @author      Jordynl
// ==/UserScript==

var menu = {
    "Favoritos de ES": [
        ["[Guía] Aventuras 2017", "http://atelier801.com/topic?f=6&t=818593"],
        ["Preguntas y Respuestas", "http://atelier801.com/topic?f=6&t=1125"],
        ["Últimos cambios, actualizaciones y anuncios", "http://atelier801.com/topic?f=6&t=825660"],
        ["[Reacciones] Últimos cambios, actualizaciones y anuncios", "http://atelier801.com/topic?f=6&t=12937"],
        ["Códigos hexadecimales de colores de Transformice", "http://atelier801.com/topic?f=6&t=791285"],
        ["Helpers ES", "http://atelier801.com/topic?f=6&t=412884"],
        ["[API] Cheese For Mice", "http://atelier801.com/topic?f=6&t=828017"],
        ["[Guía] Sanciones", "http://atelier801.com/topic?f=6&t=841048"],
        ["[Utilidad] Thread Manager", "http://atelier801.com/topic?f=6&t=191443"],
    ],
    "Favoritos de EN": [
        ["[Reactions] Recent Changes, Updates and Announcements", "http://atelier801.com/topic?f=6&t=64554"],
        ["General 2016 Adventure Guides & Discussions", "http://atelier801.com/topic?f=6&t=814231"],
        ["2017 Events Guidelines & Discussions", "http://atelier801.com/topic?f=6&t=840811"],
        ["Map Editor Q&A", "http://atelier801.com/topic?f=6&t=1908"],
    ],
    "Enlaces útiles": [
        ["The backgrounds Editor", "http://hybinkunduz.com/editor/"],
        ["TFM Tools", "http://derpolino.shost.ca/"],
        ["Cj Objects", "http://cjobjects.makinit.nl/"],
        ["Viprin", "http://adamay000.github.io/vde/index.html"],
        ["Imágenes de TFM", "http://outil.derpolino.shost.ca/imagetfm/"],
        ["Dressroom", "http://fewfre.com/projects/tfm_dressroom/dressroom.swf"],
        ["Colores de pieles", "http://www.area801.com/p/cores-pelos.html"],
    ]
};

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

$(document).ready(function(){ 
    var menuContainer = getElementByXpath('//*[@id="barre_navigation"]/div/div[1]/div/ul[1]');
    for (var button in menu) {
        var reportMenu = document.createElement('li');
        reportMenu.className ="dropdown";
        var reportButton = document.createElement('a');
        reportButton.href = "#";
        reportButton.innerHTML = button;
        reportButton.setAttribute("data-toggle", "dropdown");
        reportButtonCaret = document.createElement('b');
        reportButtonCaret.className = "caret";
        reportButtonCaret.style.borderTop = "4px solid #999";
        reportButton.appendChild(reportButtonCaret);
        reportMenu.appendChild(reportButton);
        var subMenu = document.createElement('ul');
        subMenu.className = "dropdown-menu menu-contextuel pull-left";
        menu[button].forEach(function(value) {
            var menuItemLi = document.createElement('li');
            var menuItem = document.createElement('a');
            menuItem.className = "element-menu-principal";
            if (value[2]) {
             menuItem.style.fontWeight = "bold";
            }
            menuItem.text = value[0];
            menuItem.href = value[1];
            menuItemLi.appendChild(menuItem);
            subMenu.appendChild(menuItemLi);
        });
        reportMenu.appendChild(subMenu);
        menuContainer.appendChild(reportMenu);
    }
});
