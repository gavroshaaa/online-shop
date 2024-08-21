export const items = [{
        title: "Нежный букет",
        description: "Букет цветов из пионовидных роз, озотамнуса, эвкалипта",
        tags: ["розы", "эвкалипт", "озотамнус"],
        price: 195,
        img: "./images/pink.jpg",
        rating: 4.4,
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
        rating: 3.1,
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
        rating: 5.0,
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
        rating: 4.7,
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
        rating: 4.9,
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
        rating: 3.2,
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
        rating: 2.9,
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
        rating: 3.4,
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
        rating: 4.8,
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
        rating: 3.2,
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
        rating: 3.7,
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
        rating: 4.1,
    },
];


const searchTag = document.querySelectorAll(".tag");

const choosenFilters = document.querySelector(".tag-filter__content");
const choosenFilterWrapper = document.querySelector('.tag-filter');
const btnForClear = document.createElement("button");
btnForClear.classList.add("btn-clean");
btnForClear.addEventListener('click', function() {
    choosenFilterWrapper.innerHTML = '';
    itemsContainer.innerHTML = '';
    items.forEach((item) => {
        itemsContainer.append(prepareShopItem(item));
    });
    return itemsContainer;
});

function filterByTag() {
    currentState = items.filter((el) =>
        el.tags.includes(this.textContent)
    );

    choosenFilters.classList.add('choosen-filters');
    choosenFilters.append(this.textContent);
    choosenFilters.after(btnForClear);
    renderItems(currentState);

    sortControl.selectedIndex = 0;
}


for (let tag of searchTag) {
    tag.addEventListener('click', filterByTag);
}



for (let tag of searchTag) {
    tag.addEventListener('click', function() {
        currentState = items.filter((el) => el.tags.includes(this.textContent));
        console.log(tag);
        choosenFilters.classList.add('choosen-filters');
        choosenFilters.append(this.textContent);
        choosenFilters.after(btnForClear);
        btnForClear.addEventListener('click', function() {
            choosenFilterWrapper.innerHTML = '';
            itemsContainer.innerHTML = '';
            currentState = [...items];
            renderItems(currentState);
            sortControl.selectedIndex = 0;
            choosenFilters.classList.remove('choosen-filters');
        });
        renderItems(currentState);
        sortControl.selectedIndex = 0;
    });
}