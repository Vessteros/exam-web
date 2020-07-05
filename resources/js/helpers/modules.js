import Vue from 'vue';

/** Шина ивентов */
export const eventbus = new Vue({ });

/** Конфигурация компонента */
export const config = {
    getList: 'http://exam-2020-1-api.std-400.ist.mospolytech.ru/api/data1',
};