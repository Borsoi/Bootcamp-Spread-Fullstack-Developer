function getAdmins(map) {
    const listaAdmins = [];
    for ([key, value] of map) {
        if (value === "Admin") {
            listaAdmins.push(key)
        }
    }
    return listaAdmins;
}

const map = new Map();

map.set("Luiz", "Admin");
map.set("Guilherme", "Admin");
map.set("Mateus", "Desevolvedor");
map.set("Jason", "Estagiáro");
map.set("Cainã", "Uber");

console.log(getAdmins(map));