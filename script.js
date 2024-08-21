const items = [{
        title: "Нежность повсюду",
        description: "Букет цветов из пионовидных роз, озотамнуса, эвкалипта порадует ваших любимых!",
        tags: ["пионовидные розы", "эвкалипт", "озотамнус"],
        price: 195,
        img: "./images/pink.jpg",

    },
    {
        title: "Скромность украшает",
        description: "Букет цветов из пионовидных роз, стабилизированного эвкалипта подойдет для первых свиданий и не только!",
        tags: ["пионовидные розы", "эвкалипт"],
        price: 92,
        img: "./images/small.jpg",

    },
    {
        title: "Классика всегда в моде",
        description: "Букет цветов из пионовидной розы Вайт Охара очарует любую!",
        tags: ["пионовидные розы"],
        price: 131,
        img: "./images/roses.jpg",

    },
    {
        title: "Дари без повода",
        description: "Корзина цветов для любого возраста!",
        tags: ["пионовидные розы", "гортензия", "маттиола", "эвкалипт"],
        price: 470,
        img: "./images/basket.jpg",
    },
    {
        title: "Одним словом - роскошь",
        description: "Пионы в коробке - роскошный подарок! Подари ей живую заставку на экран телефона!",
        tags: ["пионы"],
        price: 3000,
        img: "./images/flowers-box.jpg",

    },
    {
        title: "Для нежных девушек - нежные цветы",
        description: "Цветы в коробке - пионовидные розы, эвкалипт",
        tags: ["пионовидные розы", "гвоздика", "ранункулюсы", "эвкалипт"],
        price: 305,
        img: "./images/small-box.jpg",

    },
    {
        title: "Розы - это не скучно",
        description: "Букет из пионовидной розы в очаровательном окружении эустомы и дельфиниума",
        tags: ["пионовидные розы", "эустома", "дельфиниум"],
        price: 145,
        img: "./images/mix.jpg",

    },
    {
        title: "Цветы в губке",
        description: "Композиция с цветами во флористической губке, что позволяет им сохранять свежесть долгое время!",
        tags: ["пионовидные розы", "эустома", "озотамнус", "эвкалипт"],
        price: 155,
        img: "./images/minibox.jpg",

    },
    {
        title: "Нежность в размере MAX",
        description: "Не знаешь, что подарить? Дари корзину шикарных нежных цветов!",
        tags: ["пионовидные розы", "гортензия", "антуриум", "эустома", "вибурнум", "астильба", "оксипеталум", "гвоздики", "эвкалипт"],
        price: 670,
        img: "./images/big-basket.jpg",

    },
    {
        title: "Цветочный конверт",
        description: "Цветочный конверт из пионовидных роз, фрезии, генисты - бюджетный, но не менее шикарный вариант",
        tags: ["пионовидные розы", "фрезия", "гениста", "ранункулюсы", "эвкалипт"],
        price: 85,
        img: "./images/flowers-cover.jpg",

    },
    {
        title: "Корзина шикарных цветов!",
        description: "Корзина цветов приведет в восторг с первой же секунды!",
        tags: ["пионовидные розы", "фрезия", "ранункулюсы", "эустома", "амариллис", "анемон", "скимия", "гениста", "эвкалипт"],
        price: 690,
        img: "./images/rich-basket.jpg",

    },
    {
        title: "Конверт счастья",
        description: "Цветочный конверт из различных видов цветов - отличное решение для доставки на дом",
        tags: ["пионовидные розы", "эустома", "озотамнус", "писташ"],
        price: 75,
        img: "./images/small-cover.jpg",

    },
    {
        title: "Каждый букет индивидуален!",
        description: "Букет из белой гипсофилы",
        tags: ["гипсофила"],
        price: 70,
        img: "./images/gypsophila.jpg",

    },
    {
        title: "Нестандарно круто",
        description: "Букет цветов из белых гладиолусов удивит каждую девушку",
        tags: ["гладиолусы"],
        price: 70,
        img: "./images/gladioli.jpg",

    },
    {
        title: "Букет тюльпанов",
        description: "Тюльпаны можно дарить не только на 8 марта!",
        tags: ["тюльпаны"],
        price: 104,
        img: "./images/tulips.jpg",

    },

];

let currentState = [...items];

const itemsContainer = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");


function renderItems(arr) {
    nothingFound.textContent = "";
    itemsContainer.innerHTML = "";

    arr.forEach((item) => {
        itemsContainer.append(prepareShopItem(item));
    });
    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

function sortByFilling(a, b) {
    if (a.tags.length < b.tags.length) {
        return 1;
    }
    if (a.tags.length > b.tags.length) {
        return -1;
    }
    return 0;
}

renderItems(currentState);

const choosenFilters = document.querySelector('.tag-filter');
const btnForClear = document.createElement("button");
btnForClear.classList.add("btn-clean");

function cleanFilters() {
    choosenFilters.innerHTML = '';
    choosenFilters.classList.remove('choosen-filters');
    btnForClear.remove();
    currentState = [...items];
    renderItems(currentState);
    sortControl.selectedIndex = 0;
};
btnForClear.addEventListener('click', cleanFilters);

function prepareShopItem(shopItem) {

    const { title, description, tags, img, price } = shopItem;
    const item = itemTemplate.content.cloneNode(true);

    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price}BYN`;
    const tagsHolder = item.querySelector(".tags");

    tags.forEach((tag) => {
        const element = document.createElement("span");
        element.textContent = tag;
        element.classList.add("tag");
        tagsHolder.append(element);

        element.addEventListener('click', function() {
            currentState = currentState.filter((el) => el.tags.includes(this.textContent));
            const choosenFilter = document.createElement('span');
            choosenFilter.textContent = this.textContent;
            choosenFilter.classList.add('choosen-filters');
            choosenFilters.append(choosenFilter);
            choosenFilters.after(btnForClear);
            renderItems(currentState);
            sortControl.selectedIndex = 0;
        });
    });
    return item;
}


const searchInput = document.querySelector("#search-input");

function applySearch() {
    const searchString = searchInput.value.trim().toLowerCase();

    currentState = items.filter((el) =>
        el.title.toLowerCase().includes(searchString) || el.description.toLowerCase().includes(searchString)
    );

    renderItems(currentState);
    sortControl.selectedIndex = 0;
}

searchInput.addEventListener("search", applySearch);

const sortControl = document.querySelector("#sort");
sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "expensive":
            {
                currentState.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap":
            {
                currentState.sort((a, b) => a.price - b.price);
                break;
            }
        case "filling":
            {
                currentState.sort((a, b) => sortByFilling(a, b));
                break;
            }
    }
    renderItems(currentState);
});



const backToCatalog = document.querySelector('.menu__item');
backToCatalog.addEventListener('click', function() {
    document.location.reload();
})