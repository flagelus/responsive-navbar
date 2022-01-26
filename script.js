//Função pra expressar elementos mto importante

const selectElement = (s) => document.querySelector(s);

//Abra o menu no click

selectElement ('.open').addEventListener('click', () => {

    selectElement('.nav-list').classList.add('active');

});

//Fecha o menu no click

selectElement ('.close').addEventListener('click', () => {

    selectElement('.nav-list').classList.remove('active');

});