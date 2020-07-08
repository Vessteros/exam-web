function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getArea() {
    let areas = ["ЦАО", "ВАО"];
    return areas[getRandomInt(0, 2)];
}
function getType() {
    let areas = ["Тип 1", "Тип 2"];
    return areas[getRandomInt(0, 2)];
}
function getDistricts() {
    let dst = ["Арбат", "Тверской", "Гольяново"];
    return dst[getRandomInt(0, 3)]
}
let objects = [];

for (let i = 0; i < 200; i++) {
    let obj = {};
    obj.name = `Заведение ${i}`;
    obj.id = i;
    obj.admArea = getArea();
    obj.district = getDistricts()
    obj.address = `Улица Пушкина, дом Колотушкина ${i}`
    obj.typeObject = getType();
    obj.rate = getRandomInt(0, 1000);
    obj.set_1 = getRandomInt(0, 100000);
    obj.set_2 = getRandomInt(0, 100000);
    obj.set_3 = getRandomInt(0, 100000);
    obj.set_4 = getRandomInt(0, 100000);
    obj.set_5 = getRandomInt(0, 100000);
    obj.set_6 = getRandomInt(0, 100000);
    obj.set_7 = getRandomInt(0, 100000);
    obj.set_8 = getRandomInt(0, 100000);
    obj.set_9 = getRandomInt(0, 100000);
    obj.set_10 = getRandomInt(0, 100000);
    objects.push(obj);
}