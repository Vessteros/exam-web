<template>
    <div class="album bg-light">
        <div class="container">
            <div class="row">
                <app-index-menu-set v-for="(set, num) in menu" :set_data="set" :key="num"></app-index-menu-set>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-menu-list",
        data: function () {
            return {
                cafeInfo: {
                    set_1: {
                        basePrice: '',
                        discountPrice: '',
                    },
                    set_2: {
                        basePrice: '',
                        discountPrice: '',
                    },
                    set_3: {
                        basePrice: '',
                        discountPrice: '',
                    },
                    set_4: {
                        basePrice: '',
                        discountPrice: '',
                    },
                    set_5: {
                        basePrice: '',
                        discountPrice: '',
                    },
                    set_6: {
                        basePrice: '',
                        discountPrice: '',
                    },
                    set_7: {
                        basePrice: '',
                        discountPrice: '',
                    },
                    set_8: {
                        basePrice: '',
                        discountPrice: '',
                    },
                    set_9: {
                        basePrice: '',
                        discountPrice: '',
                    },
                    set_10: {
                        basePrice: '',
                        discountPrice: '',
                    },
                },

                useDiscount: false,
                discountValue: 0,

                cafeDesc: [],
            };
        },

        mounted() {
            // this.getCafeDesc();
            this.$eventBus.$on('updateMenuList', this.getCafeInfo);
        },

        computed: {
            menu: function () {
                return this.cafeDesc.map((currentValue, index) => {
                    let price = this.cafeInfo['set_' + ++index];
                    currentValue.basePrice = price.basePrice;
                    currentValue.discountPrice = price.discountPrice;
                    return currentValue;
                });
            }
        },

        methods: {
            getCafeInfo: function () {
                this.$axios
                    .get(this.$config.getListRoute + '/' + this.$config.currentCafeId + this.$config.token)
                    .then((response) => {
                        /** [@option 1.2] */
                        let data = response.data;

                        let discount = 1;
                        this.discountValue = data.socialDiscount / 100;

                        if (data.socialPrivileges === 1) {
                            discount -= this.discountValue;
                        }

                        /** лень писать парсер */
                        this.cafeInfo.set_1 = {
                            basePrice: data.set_1,
                            discountPrice: data.set_1 * discount
                        };
                        this.cafeInfo.set_2 = {
                            basePrice: data.set_2,
                            discountPrice: data.set_2 * discount
                        };
                        this.cafeInfo.set_3 = {
                            basePrice: data.set_3,
                            discountPrice: data.set_3 * discount
                        };
                        this.cafeInfo.set_4 = {
                            basePrice: data.set_4,
                            discountPrice: data.set_4 * discount
                        };
                        this.cafeInfo.set_5 = {
                            basePrice: data.set_5,
                            discountPrice: data.set_5 * discount
                        };
                        this.cafeInfo.set_6 = {
                            basePrice: data.set_6,
                            discountPrice: data.set_6 * discount
                        };
                        this.cafeInfo.set_7 = {
                            basePrice: data.set_7,
                            discountPrice: data.set_7 * discount
                        };
                        this.cafeInfo.set_8 = {
                            basePrice: data.set_8,
                            discountPrice: data.set_8 * discount
                        };
                        this.cafeInfo.set_9 = {
                            basePrice: data.set_9,
                            discountPrice: data.set_9 * discount
                        };
                        this.cafeInfo.set_10 = {
                            basePrice: data.set_10,
                            discountPrice: data.set_10 * discount
                        };

                        this.$config.currentCafeObj = data;
                        this.$eventBus.$emit('updateCafeInfo');

                        /** Придумать, как динамически подсасывать в 2 потока через watch */
                        this.getCafeDesc();
                    })
                    .catch((reason) => {
                        console.warn(reason);
                    })
                    .finally();
            },

            getCafeDesc: function () {
                this.$axios
                    .get(this.$config.getCafeDesc)
                    .then((response) => {
                        let data = response.data;

                        this.cafeDesc = [
                            data.set_1,
                            data.set_2,
                            data.set_3,
                            data.set_4,
                            data.set_5,
                            data.set_6,
                            data.set_7,
                            data.set_8,
                            data.set_9,
                            data.set_10,
                        ];
                    })
                    .catch((reason) => {
                        console.warn(reason);
                    })
                    .finally();
            }
        },
    }
</script>