<template>
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img :src="set.pic" class="bd-placeholder-img card-img-top" width="100%"
                 height="225" alt="Responsive image">
            <div class="card-body">
                <h5>{{set.name}}</h5>
                <p> {{set.desc}}</p>
                <h6>{{set.basePrice}}</h6>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="decrease">-
                        </button>
                        <input type="text" class="form-control" v-model="obj.amount" @change="inputChange">
                        <button type="button" class="btn btn-sm btn-outline-secondary" @click="increase">+
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['set_data'],

        name: "app-menu-set",

        data: function () {
            return {
                obj: {
                    amount: 0,
                    set: {},
                }
            };
        },

        mounted() {
            this.obj.set = this.set;
            this.$eventBus.$on('resetOrder', this.resetAmount);
        },

        watch: {
            amount: function () {
                if (this.obj.amount < 0) {
                    this.obj.amount = 0;
                } else {
                    this.inputChange();
                }
            }
        },

        computed: {
            set: function () {
                this.obj.set = this.set_data;
                return this.set_data;
            },

            amount: function () {
                return this.obj.amount;
            }
        },

        methods: {
            decrease: function () {
                this.obj.amount = +this.obj.amount;
                if (this.obj.amount > 1) {
                    this.obj.amount--;
                } else if (this.obj.amount === 1) {
                    let index = this.$config.orderList.indexOf(this.obj);
                    if (index !== -1) {
                        this.$config.orderList.splice(index, 1);
                    }

                    this.obj.amount--;
                }
                this.$eventBus.$emit('recountOrder');
            },

            increase: function () {
                this.obj.amount = +this.obj.amount;
                this.obj.amount++;
                if (!this.$config.orderList.includes(this.obj)) {
                    this.$config.orderList.push(this.obj);
                }

                this.$eventBus.$emit('recountOrder');
            },

            resetAmount: function () {
                this.obj.amount = 0;
            },

            inputChange: function () {
                this.obj.amount = +this.obj.amount;

                if (this.obj.amount > 0) {
                    if (!this.$config.orderList.includes(this.obj)) {
                        this.$config.orderList.push(this.obj);
                    }
                } else {
                    let index = this.$config.orderList.indexOf(this.obj);
                    if (index !== -1) {
                        this.$config.orderList.splice(index, 1);
                    }
                }

                this.$eventBus.$emit('recountOrder');
            }
        },
    }
</script>