<template>
    <div class="modal fade" id="orderModal" tabindex="-1" role="dialog"
         aria-labelledby="orderModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="orderModalLabel">Оформление заказа</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h5>Позиции заказа</h5>
                            </div>
                            <div class="col-md-12" v-if="orderList.length !== 0">
                                <app-index-order-pos v-for="(pos, index) in orderList" :pos_data="pos"
                                                     :key="index"></app-index-order-pos>
                            </div>
                            <div class="col-md-12" v-else>
                                <div class="alert alert-danger">
                                    Наборы не выбраны :с
                                </div>
                            </div>
                            <div class="col-md-12">
                                <h5>Дополнительные опции</h5>
                            </div>
                            <div class="col-md-12">
                                <div class="row" v-if="useSocialDiscount || useDoubled">
                                    <div class="col-md-6 mb-3">

                                        <p v-if="useSocialDiscount">Социальная скидка</p>
                                        <p v-if="useDoubled">Удвоение</p>
                                    </div>
                                    <div class="col-md-1 mb-3">


                                    </div>
                                    <div class="col-md-5 mb-3">

                                        <p v-if="useSocialDiscount"><b>{{cafeInfo.socialDiscount}}%</b></p>
                                        <p v-if="useDoubled"><b>x2 / + 60%</b></p>
                                    </div>
                                </div>

                                <div v-else class="alert alert-danger">
                                    Опции не выбраны :с
                                </div>
                            </div>

                            <div class="col-md-12 mb-3">
                                <h5>Информация о предприятии</h5>
                            </div>

                            <div class="col-md-5 mb-3">
                                <p>Название</p>
                            </div>
                            <div class="col-md-7 mb-3">
                                <p><b>{{cafeInfo.name}}</b></p>
                            </div>

                            <div class="col-md-5 mb-3">
                                <p>Административный округ</p>
                            </div>
                            <div class="col-md-7 mb-3">
                                <p><b>{{cafeInfo.admArea}}</b></p>
                            </div>

                            <div class="col-md-5 mb-3">
                                <p>Район</p>
                            </div>
                            <div class="col-md-7 mb-3">
                                <p><b>{{cafeInfo.district}}</b></p>
                            </div>

                            <div class="col-md-5 mb-3">
                                <p>Адрес</p>
                            </div>
                            <div class="col-md-7 mb-3">
                                <p>{{cafeInfo.address}}</p>
                            </div>

                            <div class="col-md-5 mb-3">
                                <p>Рейтинг</p>
                            </div>
                            <div class="col-md-7 mb-3">
                                <p><b>{{cafeInfo.rate}}</b></p>
                            </div>

                            <div class="col-md-12 mb-3">
                                <h5>Доставка</h5>
                            </div>

                            <div class="col-md-5 mb-3">
                                <p>Зона доставки:</p>
                            </div>
                            <div class="col-md-7 mb-3">
                                <form>
                                    <select class="custom-select d-block w-100" id="delivery_address"
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
                                <p><b>{{deliveryPrice}} руб.</b></p>
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
                            <div class="alert alert-light col-md-12">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <h4>Итого:</h4>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <h4>{{orderPrice}} руб.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена
                    </button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="notifyOrderSuccess">
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

        data: function () {
            return {
                orderList: [],
                useSocialDiscount: false,
                useDoubled: false,

                cafeInfo: {},
            };
        },

        mounted() {
            this.$eventBus.$on('updateOrderList', this.updateList);
            this.$eventBus.$on('updateFlags', this.updateFlags);
            this.$eventBus.$on('updateCafeInfo', this.updateCafeInfo);
        },

        computed: {
            deliveryPrice: function () {
                return 250;
            },

            orderPrice: function () {
                let priceType = this.$config.useSocialDiscount ? 'discountPrice' : 'basePrice';
                let price = this.$config.orderList.reduce((sum, obj) => {
                    return sum + obj.amount * obj.set[priceType];
                }, 0);

                price = this.useDoubled ? (price * 1.6) : price;

                return this.orderList.length === 0 ? price : price + this.deliveryPrice;
            }
        },

        methods: {
            updateList: function () {
                this.orderList = this.$config.orderList;
                this.$eventBus.$emit('updateFlags');
            },

            updateFlags: function () {
                this.useSocialDiscount = this.$config.useSocialDiscount;
                this.useDoubled = this.$config.useDoubled;
            },

            updateCafeInfo: function () {
                this.cafeInfo = this.$config.currentCafeObj;
            },

            notifyOrderSuccess: function () {
                this.$notify({
                    title: 'Заказ оформлен!',
                    message: 'Ожидайте доставку курьером',
                    type: 'success'
                });
            }
        },
    }
</script>