const watchList = [];

class Watch {
    id;
    brand;
    name;
    picture;
    color;
    price;

    constructor(id, brand, name, picture, color, price) {
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.picture = picture;
        this.color = color;
        this.price = price;
        watchList.push(this);
    }
}

const watch1 = new Watch(1, "Breitling", "NAVITIMER B01 CHRONOGRAPH 43", "assets/navitimer-1.jpeg", "white", 8400);
const watch2 = new Watch(2, "Breitling", "SUPEROCEAN HERITAGE B01 CHRONOGRAPH 44", "assets/superocean-1.jpeg", "blue", 8400);
const watch3 = new Watch(3, "Rolex", "SUBMARINER HULK GOLF EDITION", "assets/submariner-1.jpeg", "green", 33303);
const watch4 = new Watch(4, "Bell & Ross", "BR S BLACK MATTE 45E WATCHS", "assets/bell-&-ross-1.jpeg", "black", 2400);


const watchContainer = document.querySelector("#watches-container");
const selectByColor = document.querySelector("#select-color");


selectByColor.addEventListener("change", (e) => {
    const color = e.target.value;
    const newArr = watchList.filter(watch => watch.color === color);
    watchContainer.innerHTML = ``;
    injectWatch(newArr);
    if(color === "none") {
        injectWatch(watchList);
    }
});


function injectWatch(arr) {
    arr.forEach(watch => {
        watchContainer.innerHTML +=
        `  
        <div class="watch-card">
            <img src="${watch.picture}" alt="${watch.name}">
            <h3>${watch.name}</h3>
            <p>${watch.price}€</p>
        </div>
        `
    });
}
injectWatch(watchList);

const searchInput = document.querySelector("#search-watch-input");


searchInput.addEventListener("input", (e) => {
    const text = e.target.value.toLowerCase();
    const newList = watchList.filter(watch => watch.name.toLowerCase().includes(text));
    watchContainer.innerHTML = ``;
    injectWatch(newList);
});
