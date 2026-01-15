export function menuPage() {
    const contentHolder = document.getElementById('content');

    const menuData = {
        antipasti: [
            {name: 'Burrata Caprese:', desc: ' Fresh burrata, heirloom tomatoes, basil, aged balsamic', price: 18},
            {name: 'Carapaccio di Manzo:', desc: ' Thinly sliced beef tenderloin, arugula, parmigiano, truffle oil', price: 22},
            {name: 'Calamari Fritti:', desc: ' Crispy fried calamari, lemon aioli, marinara', price: 16},
        ],

        primi: [
            {name: 'Tagliatelle al Tartufo:', desc: ' House made pasta, black truffle, parmigiano cream', price: 38},
            {name: 'Lobster Ravioli:', desc: ' Handmade ravioli, lobster bisque, fresh herbs', price: 42},
            {name:'Cacio e Pepe:', desc: ' Tonnarelli pasta, pecorino romano, cracked black pepper', price: 28},
            {name: 'Pappardelle Bolognese:', desc: ' Wide ribbon pasta, slow-braised meat ragu', price: 32},


        ],

        secondi: [
            {name: 'Osso Buco:', desc: ' Braised veal shank, saffron risotto, gremolata', price: 48},
            {name: 'Branzino al Forno:', desc: ' Roasted Mediterranean sea bass, lemon, olive oil', price: 44},
            {name: 'Bistecca Fiorentina:', desc: ' 32oz porterhouse steak, rosemary, roasted vegetables', price: 78},
            {name: 'Pollo alla Marsala:', desc: ' Pan-seared chicken breast, mushrooms, marsala wine sauce', price: 36},

        ],

        dolci: [
            {name: 'Tiramisu:', desc: ' Espresso-soaked ladyfingers, mascarpone, cocoa', price: 14},
            {name: 'Panna Cotta:', desc:' Vanilla bean custard, berry compote', price: 12},
            {name: 'Cannoli Siciliani:', desc:' Crispy shells, sweet ricotta, pistachios, chocolate chips', price: 13},
            {name: 'Affogato:', desc:' Vanilla gelato, hot espresso shot', price: 10},
        ]
    };

    function createMenuItems(item) {
        const li = document.createElement('li');
        li.classList.add('menu-item');

        const nameEle = document.createElement('span');
        nameEle.classList.add('item-name');
        nameEle.textContent = item.name;

        const descEle = document.createElement('span');
        descEle.classList.add('item-desc');
        descEle.textContent = item.desc;

        const priceEle = document.createElement('span');
        priceEle.classList.add('item-price');
        priceEle.textContent = ` $${item.price}`;

        li.appendChild(nameEle);
        li.appendChild(descEle);
        li.appendChild(priceEle);

        return li;
    }

    const antipastiSection = document.createElement('section');
    const antipastiHeading = document.createElement('h2');
    antipastiHeading.textContent = 'Antipasti';
    const antipastiList = document.createElement('ul');

    menuData.antipasti.forEach(item => {
        antipastiList.appendChild(createMenuItems(item));
    });

    antipastiSection.appendChild(antipastiHeading);
    antipastiSection.appendChild(antipastiList);
    contentHolder.appendChild(antipastiSection);

    const primiSection = document.createElement('section');
    const primiHeading = document.createElement('h2');
    primiHeading.textContent = "Primi";
    const primiList = document.createElement('ul');

    menuData.primi.forEach(item => {
        primiList.appendChild(createMenuItems(item));
    });
    
    primiSection.appendChild(primiHeading);
    primiSection.appendChild(primiList);
    contentHolder.appendChild(primiSection);

    const secondiSection = document.createElement('section');
    const secondiHeading = document.createElement('h2');
    secondiHeading.textContent = "Secondi";
    const secondiList = document.createElement('ul');

    menuData.secondi.forEach(item => {
        secondiList.appendChild(createMenuItems(item));
    });

    secondiSection.appendChild(secondiHeading);
    secondiSection.appendChild(secondiList);
    contentHolder.appendChild(secondiSection);

    const dolciSection = document.createElement('section');
    const dolciHeading = document.createElement('h2');
    dolciHeading.textContent = "Dolci";
    const dolciList = document.createElement('ul');
    
    menuData.dolci.forEach(item => {
        dolciList.appendChild(createMenuItems(item));
    });

    dolciSection.appendChild(dolciHeading);
    dolciSection.appendChild(dolciList);
    contentHolder.appendChild(dolciSection);




}
