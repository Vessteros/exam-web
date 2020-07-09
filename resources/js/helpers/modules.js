import Vue from 'vue';

/** Шина ивентов */
export const eventbus = new Vue({});

/** Конфигурация компонента */
export const config = {
    token: '?api_key=e133b1bd-913f-42e7-ba8b-d521b1250510',
    getListRoute: 'http://exam-2020-1-api.std-900.ist.mospolytech.ru/api/data1',
    getCafeDesc: '/ajax/cafedesc.php',

    currentCafeId: 0,
    currentCafeObj: 0,
    useSocialDiscount: false,
    useDoubled: false,
    orderCost: 0,
    orderList: [],

    deliveryPrice: 250,
    filterOptions: {},
};