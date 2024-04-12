function changeState(id) {
    const game = document.getElementById(`game-${id}`);
    changeElementState( game );
}


function changeElementState(element) {

    if (element.querySelector('a').classList.contains("dashboard__item__button--return")) {
        element.querySelector('a').classList.remove("dashboard__item__button--return");
        element.querySelector('div').classList.remove("dashboard__item__img--rented");
        element.querySelector('a').innerText = "Alugar";
    } else {
        element.querySelector('a').classList.add("dashboard__item__button--return");
        element.querySelector('div').classList.add("dashboard__item__img--rented");
        element.querySelector('a').innerHTML = "Devolver";
    }

}