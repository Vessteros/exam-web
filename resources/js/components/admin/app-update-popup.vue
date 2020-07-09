<template>
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Редактирование записи</h5>
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <form>
                                    <div class="form-group">
                                        <label for="s_name">Наименование</label>
                                        <input type="text" class="form-control"
                                               id="s_name" v-model="requestData.name"
                                               placeholder="Введите наименование"
                                               required>
                                    </div>

                                    <label for="s_isNetObject1">Является сетевым</label>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio"
                                               name="s_isNetObject1"
                                               id="s_isNetObject1" v-model="requestData.isNetObject"
                                               value="1">
                                        <label class="form-check-label"
                                               for="s_isNetObject1">Да</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio"
                                               name="s_isNetObject2"
                                               id="s_isNetObject2" v-model="requestData.isNetObject"
                                               value="false">
                                        <label class="form-check-label"
                                               for="s_isNetObject2">Нет</label>
                                    </div>

                                    <div class="form-group">
                                        <br>
                                        <label for="s_operatingCompany">Название управляющей
                                            компании</label>
                                        <input type="text" class="form-control" v-model="requestData.operatingCompany"
                                               id="s_operatingCompany" name="s_operatingCompany"
                                               placeholder="Название управляющей компании">
                                    </div>

                                    <div class="form-group ">
                                        <label for="s_typeObject">Вид обьекта</label>
                                        <select id="s_typeObject" class="form-control" name="s_typeObject"
                                                v-model="requestData.typeObject">
                                            <option selected>Столовая</option>
                                            <option>Кафе</option>
                                            <option>Бар</option>
                                            <option>Ресторан</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="s_admArea">Административный
                                            округ</label>
                                        <select id="s_admArea" class="form-control" name="s_admArea"
                                                v-model="requestData.admArea">
                                            <option selected>Южно административный округ</option>
                                            <option>Центральный административный округ</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="s_district">Район</label>
                                        <select id="s_district" name="s_district" class="form-control"
                                                v-model="requestData.district">
                                            <option selected>Жуковский</option>
                                            <option selected>Ленинский</option>
                                            <option selected>Волжский</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="s_address">Адрес</label>
                                        <textarea class="form-control" id="s_address" name="address"
                                                  v-model="requestData.address"
                                                  rows="3"></textarea>
                                    </div>

                                    <div class="form-group">
                                        <label for="seatsCount">Число посадочных мест</label>
                                        <input type="text" class="form-control"
                                               id="seatsCount" name="seatsCount" v-model="requestData.seatsCount"
                                               placeholder="Введите наименование">
                                    </div>

                                    <p>Показатель социальных льгот</p>
                                    <div class="form-check form-check-inline">

                                        <input class="form-check-input" type="radio"
                                               name="s_socialPrivileges1"
                                               id="s_socialPrivileges1" v-model="requestData.socialPrivileges"
                                               value="1">
                                        <label class="form-check-label"
                                               for="s_socialPrivileges1">Есть</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio"
                                               name="s_socialPrivileges2"
                                               id="s_socialPrivileges2" v-model="requestData.socialPrivileges"
                                               value="0">
                                        <label class="form-check-label"
                                               for="s_socialPrivileges2">Нет</label>
                                    </div>

                                    <div class="form-group">
                                        <label for="s_socialDiscount">Размер скидки</label>
                                        <input type="text" class="form-control" v-model="requestData.socialDiscount"
                                               id="s_socialDiscount" name="s_socialDiscount"
                                               placeholder="Введите телефон">
                                    </div>

                                    <div class="form-group">
                                        <label for="s_publicPhone">Телефон</label>
                                        <input type="text" class="form-control"
                                               id="s_publicPhone" name="s_publicPhone" v-model="requestData.publicPhone"
                                               placeholder="Введите телефон">
                                    </div>

                                    <div class="form-group">
                                        <label for="s_rate">Рейтинг</label>
                                        <input type="text" class="form-control"
                                               id="s_rate" name="s_rate" v-model="requestData.rate"
                                               placeholder="Введите рейтинг">
                                    </div>

                                    <p>Цены наборов:</p>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="s_set_1">Набор 1</label>
                                            <input type="text" class="form-control" v-model="requestData.set_1"
                                                   id="s_set_1" name="s_set_1">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="s_set_2">Набор 2</label>
                                            <input type="text" class="form-control" v-model="requestData.set_2"
                                                   id="s_set_2" name="s_set_2">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="s_set_3">Набор 3</label>
                                            <input type="text" class="form-control" v-model="requestData.set_3"
                                                   id="s_set_3" name="s_set_3">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="s_set_4">Набор 4</label>
                                            <input type="text" class="form-control" v-model="requestData.set_4"
                                                   id="s_set_4" name="s_set_4">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="s_set_5">Набор 5</label>
                                            <input type="text" class="form-control" v-model="requestData.set_5"
                                                   id="s_set_5" name="s_set_5">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="s_set_6">Набор 6</label>
                                            <input type="text" class="form-control" v-model="requestData.set_6"
                                                   id="s_set_6" name="s_set_6">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="s_set_7">Набор 7</label>
                                            <input type="text" class="form-control" v-model="requestData.set_7"
                                                   id="s_set_7" name="s_set_7">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="s_set_8">Набор 8</label>
                                            <input type="text" class="form-control" v-model="requestData.set_8"
                                                   id="s_set_8" name="s_set_8">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="s_set_9">Набор 9</label>
                                            <input type="text" class="form-control" v-model="requestData.set_9"
                                                   id="s_set_9" name="s_set_9">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="s_set_10">Набор 10</label>
                                            <input type="text" class="form-control" v-model="requestData.set_10"
                                                   id="s_set_10" name="s_set_10">
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"
                            data-dismiss="modal">
                        Отмена
                    </button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="save">
                        Сохранить
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-update-popup",
        data: function () {
            return {
                requestData: {
                    name: '',
                    isNetObject: false,
                    operatingCompany: '',
                    typeObject: 'Столовая',
                    admArea: 'Южно административный округ',
                    district: 'Жуковский',
                    address: '',
                    seatsCount: 0,
                    socialPrivileges: false,
                    socialDiscount: 0,
                    rate: 0,
                    publicPhone: '',
                    set_1: 0,
                    set_2: 0,
                    set_3: 0,
                    set_4: 0,
                    set_5: 0,
                    set_6: 0,
                    set_7: 0,
                    set_8: 0,
                    set_9: 0,
                    set_10: 0,
                },

                id: null,
            };
        },

        computed: {
            updatePath: function () {
                return this.$config.getListRoute + '/' + this.id + this.$config.token;
            }
        },

        mounted() {
            this.$eventBus.$on('loadCafeInfo', this.loadCafeInfo);
        },

        methods: {
            loadCafeInfo: function (id) {
                this.id = id;
                this.$axios
                    .get(this.$config.getListRoute + '/' + id + this.$config.token)
                    .then((response) => {
                        if (response.data.error) {
                            this.$notify.error({
                                title: 'Ошибка',
                                message: 'Не удалось загрузить данные заведение: ' + response.data.error,
                            });
                        } else {
                            this.$notify({
                                title: 'Успех!',
                                message: 'Данные заведения загружены',
                                type: 'success',
                            });

                            for (let property in this.requestData) {
                                if (this.requestData.hasOwnProperty(property)) {
                                    this.requestData[property] = response.data[property]
                                }
                            }
                        }

                    })
                    .catch((reason) => {
                        console.warn(reason);
                    })
                    .finally();
            },

            save: function () {
                let data = new FormData;

                for (let key in this.requestData) {
                    if (this.requestData[key] !== 0 && this.requestData[key] !== null && this.requestData[key] !== undefined) {
                        data.append(key, this.requestData[key]);
                    }
                }

                this.$axios.put(
                    this.updatePath,
                    data
                )
                    .then((response) => {
                        if (response.data.error) {
                            this.$notify.error({
                                title: 'Ошибка',
                                message: 'Не удалось сохранить данные заведения: ' + response.data.error,
                            });
                        } else {
                            this.$notify({
                                title: 'Успех!',
                                message: 'Данные заведения сохранены',
                                type: 'success',
                            });

                            this.$eventBus.$emit('reloadCafeList');
                        }
                    })
                    .catch((reason) => {
                        console.warn(reason);
                    });
            }
        },
    }
</script>