<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Оформление заказа</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h5>Позиции заказа</h5><br/>
                            </div>

                            <div class="col-md-12">
                                <app-index-order-pos v-for="(pos, index) in orderList" :pos_data="pos" :key="index"></app-index-order-pos>
                            </div>

                            <div class="col-md-12 mb-3">
                                <h5>Дополнительные опции</h5><br/>
                            </div>
                            <div class="col-md-6 mb-3">

                                <p v-if="useSocialDiscount">Социальная скидка</p>
                                <p v-if="useDoubled">Удвоение</p>
                            </div>
                            <div class="col-md-1 mb-3">


                            </div>
                            <div class="col-md-5 mb-3">

                                <p v-if="useSocialDiscount"><b>11%</b></p>
                                <p v-if="useDoubled"><b>+ 60%</b></p>
                            </div>
                            <div class="col-md-12 mb-3">
                                <h5>Информация о предприятии</h5><br/>
                            </div>
                            <div class="col-md-7 mb-3">
                                <p>Название</p>
                            </div>


                            <div class="col-md-5 mb-3">
                                <p><b>Столовая Мфит</b></p>
                            </div>

                            <div class="col-md-7 mb-3">
                                <p>Административный округ</p>
                            </div>


                            <div class="col-md-5 mb-3">
                                <p><b>Юго-Восточный</b></p>
                            </div>
                            <div class="col-md-7 mb-3">
                                <p>Район</p>
                            </div>


                            <div class="col-md-5 mb-3">
                                <p><b>район Лефортово</b></p>
                            </div>
                            <div class="col-md-7 mb-3">
                                <p>Адрес</p>
                            </div>


                            <div class="col-md-5 mb-3">
                                <p>город Москва, Авиамоторная, дом 8</p>
                            </div>

                            <div class="col-md-7 mb-3">
                                <p>Рейтинг</p>
                            </div>


                            <div class="col-md-5 mb-3">
                                <p><b>4.5</b></p>
                            </div>
                            <div class="col-md-12 mb-3">
                                <h5>Доставка</h5></br>
                            </div>


                            <div class="col-md-5 mb-3">
                                <p>Зона доставки:</p>
                            </div>


                            <div class="col-md-7 mb-3">
                                <form>
                                    <select class="custom-select d-block w-100" id="country"
                                            required="">
                                        <option value="">Выберите зону...</option>
                                        <option>Первая зона</option>
                                        <option>Вторая зона</option>
                                        <option>Третья зона</option>
                                    </select>
                                </form>
                            </div>

                            <div class="col-md-5 mb-3">
                                <p>Адрес доставки:</p>
                            </div>


                            <div class="col-md-7 mb-3">
                                <form>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1"
                                                                  rows="3"></textarea>
                                </form>
                            </div>

                            <div class="col-md-6 mb-3">
                                <p>Стоимость доставки:</p>
                            </div>


                            <div class="col-md-6 mb-3">
                                <p><b>250 руб.</b></p>
                            </div>

                            <div class="col-md-5 mb-3">
                                <p>Фио получателя:</p>
                            </div>


                            <div class="col-md-7 mb-3">
                                <form>
                                    <input type="text" class="form-control" id="exampleFio"
                                           placeholder="Введите фио">
                                </form>
                            </div>
                            <div class="col-md-6 mb-3">
                                <h4>Итого:</h4>
                            </div>


                            <div class="col-md-6 mb-3">
                                <h4>825 руб.</h4>
                            </div>


                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена
                    </button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Подтвердить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-order-popup",

        data: function() {
            return {
                orderList: [],
            };
        },

        mounted() {
            this.$eventBus.$on('updateOrderList', this.updateList);
        },

        computed: {
            useSocialDiscount: function () {
                return this.$config.useSocialDiscount;
            },

            useDoubled: function () {
                return this.$config.useDoubled;
            },
        },

        methods: {
            updateList: function () {
                console.log(this.$config.orderList);
                this.orderList = this.$config.orderList;
                this.$eventBus.$emit('updateFlags');
            }
        }
    }
</script>