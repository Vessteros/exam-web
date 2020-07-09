<template>
    <div class="modal fade" id="createModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel3" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Создание записи</h5>
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
                                        <label for="name">Наименование</label>
                                        <input type="text" class="form-control"
                                               id="name" v-model="requestData.name"
                                               placeholder="Введите наименование"
                                               required>
                                    </div>

                                    <label for="isNetObject1">Является сетевым</label>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio"
                                               name="isNetObject1"
                                               id="isNetObject1" v-model="requestData.isNetObject"
                                               value="1">
                                        <label class="form-check-label"
                                               for="isNetObject1">Да</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio"
                                               name="isNetObject2"
                                               id="isNetObject2" v-model="requestData.isNetObject"
                                               value="false">
                                        <label class="form-check-label"
                                               for="isNetObject2">Нет</label>
                                    </div>

                                    <div class="form-group">
                                        <br>
                                        <label for="operatingCompany">Название управляющей
                                            компании</label>
                                        <input type="text" class="form-control" v-model="requestData.operatingCompany"
                                               id="operatingCompany" name="operatingCompany"
                                               placeholder="Название управляющей компании">
                                    </div>

                                    <div class="form-group ">
                                        <label for="typeObject">Вид обьекта</label>
                                        <select id="typeObject" class="form-control" name="typeObject"
                                                v-model="requestData.typeObject">
                                            <option selected>Столовая</option>
                                            <option>Кафе</option>
                                            <option>Бар</option>
                                            <option>Ресторан</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="admArea">Административный округ</label>
                                        <select id="admArea" class="form-control" name="admArea"
                                                v-model="requestData.admArea">
                                            <option selected>Южно административный округ</option>
                                            <option>Центральный административный округ</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="district">Район</label>
                                        <select id="district" name="district" class="form-control"
                                                v-model="requestData.district">
                                            <option selected>Жуковский</option>
                                            <option selected>Ленинский</option>
                                            <option selected>Волжский</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="address">Адрес</label>
                                        <textarea class="form-control" id="address" name="address"
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
                                               name="socialPrivileges1"
                                               id="socialPrivileges1" v-model="requestData.socialPrivileges"
                                               value="1">
                                        <label class="form-check-label"
                                               for="socialPrivileges1">Есть</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio"
                                               name="socialPrivileges2"
                                               id="socialPrivileges2" v-model="requestData.socialPrivileges"
                                               value="0">
                                        <label class="form-check-label"
                                               for="socialPrivileges2">Нет</label>
                                    </div>

                                    <div class="form-group">
                                        <label for="socialDiscount">Размер скидки</label>
                                        <input type="text" class="form-control" v-model="requestData.socialDiscount"
                                               id="socialDiscount" name="socialDiscount"
                                               placeholder="Введите телефон">
                                    </div>

                                    <div class="form-group">
                                        <label for="publicPhone">Телефон</label>
                                        <input type="text" class="form-control"
                                               id="publicPhone" name="publicPhone" v-model="requestData.publicPhone"
                                               placeholder="Введите телефон">
                                    </div>

                                    <div class="form-group">
                                        <label for="rate">Рейтинг</label>
                                        <input type="text" class="form-control"
                                               id="rate" name="rate" v-model="requestData.rate"
                                               placeholder="Введите рейтинг">
                                    </div>

                                    <p>Цены наборов:</p>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="set_1">Набор 1</label>
                                            <input type="text" class="form-control" v-model="requestData.set_1"
                                                   id="set_1" name="set_1">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="set_2">Набор 2</label>
                                            <input type="text" class="form-control" v-model="requestData.set_2"
                                                   id="set_2" name="set_2">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="set_3">Набор 3</label>
                                            <input type="text" class="form-control" v-model="requestData.set_3"
                                                   id="set_3" name="set_3">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="set_4">Набор 4</label>
                                            <input type="text" class="form-control" v-model="requestData.set_4"
                                                   id="set_4" name="set_4">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="set_5">Набор 5</label>
                                            <input type="text" class="form-control" v-model="requestData.set_5"
                                                   id="set_5" name="set_5">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="set_6">Набор 6</label>
                                            <input type="text" class="form-control" v-model="requestData.set_6"
                                                   id="set_6" name="set_6">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="set_7">Набор 7</label>
                                            <input type="text" class="form-control" v-model="requestData.set_7"
                                                   id="set_7" name="set_7">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="set_8">Набор 8</label>
                                            <input type="text" class="form-control" v-model="requestData.set_8"
                                                   id="set_8" name="set_8">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="set_9">Набор 9</label>
                                            <input type="text" class="form-control" v-model="requestData.set_9"
                                                   id="set_9" name="set_9">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="set_10">Набор 10</label>
                                            <input type="text" class="form-control" v-model="requestData.set_10"
                                                   id="set_10" name="set_10">
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
                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="create">
                        Сохранить
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-create-popup",

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
            };
        },

        computed: {
            createPath: function () {
                return this.$config.getListRoute + this.$config.token;
            }
        },

        methods: {
            create: function () {
                let data = new FormData;

                for (let key in this.requestData) {
                    if (this.requestData[key] !== 0 && this.requestData[key] !== null && this.requestData[key] !== undefined) {
                        data.append(key, this.requestData[key]);
                    }
                }

                this.$axios.post(
                    this.createPath,
                    data
                )
                    .then((response) => {
                        if (response.data.error) {
                            this.$notify.error({
                                title: 'Ошибка',
                                message: 'Не удалось добавить заведение'
                            });
                        } else {
                            this.$notify({
                                title: 'Успех!',
                                message: 'Новое заведение было добавлено в список',
                                type: 'success'
                            });

                            this.$eventBus.$emit('reloadCafeList');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    }
</script>