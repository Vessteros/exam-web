<template>
    <div class="row">
        <div class="col-md-3 mb-3">
            <img :src="pos.set.pic" class="bd-placeholder-img card-img-top"
                 width="100%" height="50" alt="Responsive image">
        </div>
        <div class="col-md-3 mb-3">
            <b>{{pos.name}}</b>
        </div>
        <div class="col-md-3 mb-3">
            <small class="text-muted">{{amount}} * {{priceBySet}}р.</small>
        </div>
        <div class="col-md-3 mb-3">
            <b class="logotext1">{{posPrice}}р.</b>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-order-pos",

        props: ['pos_data'],

        data: function () {
            return {
                useSocialDiscount: false,
                useDoubled: false,
            };
        },

        mounted() {
            this.useSocialDiscount = this.$config.useSocialDiscount;
            this.useDoubled = this.$config.useDoubled;

            this.$eventBus.$on('updateFlags', this.updateFlags);
        },

        computed: {
            pos: function () {
                return this.pos_data;
            },

            amount: function () {
                return this.useDoubled ? this.pos.amount * 2 : this.pos.amount;
            },

            priceBySet: function () {
                let val = this.useSocialDiscount ? this.pos.set.discountPrice : this.pos.set.basePrice;
                return val.toFixed(2);
            },

            posPrice: function () {
                let price = this.pos.amount * this.priceBySet;
                let val = this.useDoubled ? (price * 1.6) : price;
                return val.toFixed(2);
            },
        },

        methods: {
            updateFlags: function () {
                this.useSocialDiscount = this.$config.useSocialDiscount;
                this.useDoubled = this.$config.useDoubled;
            },
        },
    }
</script>