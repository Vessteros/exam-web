<template>
    <form class="needs-validation">
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="admArea">Административный округ</label>
                <select class="custom-select d-block w-100" id="admArea" v-model="admArea">
                    <option v-for="admArea in options.admArea">{{admArea}}</option>
                </select>
                <div class="invalid-feedback">
                    Пожалуйста выберите административный округ
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="district">Район</label>
                <select class="custom-select d-block w-100" id="district" v-model="district">
                    <option v-for="district in options.district">{{district}}</option>
                </select>
                <div class="invalid-feedback">
                    Пожалуйста выберите район
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="row">
                    <div class="col-md-6 mb-3 type">
                        <label for="typeObject">Тип</label>
                        <select class="custom-select d-block w-100" id="typeObject" v-model="typeObject">
                            <option v-for="typeObject in options.typeObject">{{typeObject}}</option>
                        </select>
                        <div class="invalid-feedback">
                            Пожалуйста выберите тип
                        </div>
                    </div>
                    <div class="col-md-6 mb-3 type">
                        <label for="socialDiscount">Соц. скидка</label>
                        <select class="custom-select d-block w-100" id="socialDiscount" v-model="socialDiscount">
                            <option v-for="socialDiscount in options.socialDiscount">{{socialDiscount}}</option>
                        </select>
                        <div class="invalid-feedback">
                            Пожалуйста выберите социальную скидку
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb">
                <div class="btn  btn-lg btn-block bgbot" @click="updateList">Найти</div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "app-filter-form",
        data: function () {
            return {
                admArea: null,
                district: null,
                socialDiscount: null,
                typeObject: null,

                options: {
                    admArea: this.$eventBus.filterOptions.admArea,
                    district: this.$eventBus.filterOptions.district,
                    socialDiscount: this.$eventBus.filterOptions.socialDiscount,
                    typeObject: this.$eventBus.filterOptions.typeObject,
                }
            }
        },

        mounted() {
            let _updateOptions = () => {
                this.options.admArea = this.$eventBus.filterOptions.admArea;
                this.options.district = this.$eventBus.filterOptions.district;
                this.options.socialDiscount = this.$eventBus.filterOptions.socialDiscount;
                this.options.typeObject = this.$eventBus.filterOptions.typeObject;
            }

            this.$eventBus.$on('updateOptions', _updateOptions);
        },

        methods: {
            updateList: function () {
                this.setFilter();

                this.$eventBus.$emit('updateCafeList');
            },

            setFilter: function () {
                this.$config.filterValues = {
                    admArea: this.admArea,
                    district: this.district,
                    socialDiscount: this.socialDiscount,
                    typeObject: this.typeObject
                };

                /**
                 * Функция фильтрации списка кафе с апи
                 * @param cafeList array
                 */
                this.$eventBus.listFilter = (cafeList) => {
                    let _admAreaChecker = admArea => {
                        return this.$config.filterValues.admArea !== null
                            ? admArea === this.$config.filterValues.admArea
                            : true;
                    }

                    let _districtChecker = district => {
                        return this.$config.filterValues.district !== null
                            ? district === this.$config.filterValues.district
                            : true;
                    }

                    let _socialDiscountChecker = socialDiscount => {
                        return this.$config.filterValues.socialDiscount !== null
                            ? socialDiscount === this.$config.filterValues.socialDiscount
                            : true;
                    }

                    let _typeObjectChecker = typeObject => {
                        return this.$config.filterValues.typeObject !== null
                            ? typeObject === this.$config.filterValues.typeObject
                            : true;
                    }

                    if (cafeList instanceof Array) {
                        return cafeList.filter(cafe => {
                            return _admAreaChecker(cafe.admArea)
                                && _districtChecker(cafe.district)
                                && _socialDiscountChecker(cafe.socialDiscount)
                                && _typeObjectChecker(cafe.typeObject);
                        });
                    }

                    return [];
                }
            }
        }
    }
</script>