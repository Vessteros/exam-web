<template>
    <div class="col-md-12 order-md-1 mb">
        <div class="row">
            <div class="col-md-6 mb-3">
                <h2>ИТОГО <b>{{price}}р.</b></h2>
            </div>
            <div class="col-md-6 mb-3">
                <button class="btn btn-warning btn-lg btn-block bgbot" type="submit" data-toggle="modal"
                        data-target="#exampleModal" @click="updateOrderList">
                    Оформить заказ
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-order-price-computing",

        data: function() {
            return {
                price: 0,
            }
        },

        mounted() {
            this.$eventBus.$on('recountOrder', this.recountOrder);
            this.$eventBus.$on('resetOrder', this.resetOrderCost);
        },

        methods: {
            recountOrder: function () {
                /** [@option 1.3] */
                let priceType = this.$config.useSocialDiscount ? 'discountPrice' : 'basePrice';
                this.price = this.$config.orderList.reduce((sum, obj) => {
                    return sum + obj.amount * obj.set[priceType];
                }, 0);

                /** [@option 5.2] */
                if (this.$config.useDoubled) {
                    this.price += this.price * 0.6;
                    // this.$config.orderList.forEach((set) => {
                    //     set.amount = set.amount * 2;
                    // });
                }

                this.$config.orderCost = this.price = this.price.toFixed(2);
            },

            resetOrderCost: function () {
                this.price = 0;
                this.$config.orderCost = 0;
            },

            updateOrderList: function () {
                console.log(this.$config.orderList);
                this.$eventBus.$emit('updateOrderList');
            }
        },
    }
</script>