<template>
    <form class="needs-validation">
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="admArea">Административный округ</label>
                <select class="custom-select d-block w-100" id="admArea" v-model="admArea">
                    <option value="" selected>Не выбрано</option>
                    <option v-for="admArea in options.admArea">{{admArea}}</option>
                </select>
                <div class="invalid-feedback">
                    Пожалуйста выберите административный округ
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="district">Район</label>
                <select class="custom-select d-block w-100" id="district" v-model="district">
                    <option value="" selected>Не выбрано</option>
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
                            <option value="" selected>Не выбрано</option>
                            <option v-for="typeObject in options.typeObject">{{typeObject}}</option>
                        </select>
                        <div class="invalid-feedback">
                            Пожалуйста выберите тип
                        </div>
                    </div>
                    <div class="col-md-6 mb-3 type">
                        <label for="socialPrivileges">Соц. скидка</label>
                        <select class="custom-select d-block w-100" id="socialPrivileges" v-model="socialPrivileges">
                            <option value="2" selected>Не выбрано</option>
                            <option value="1">Да</option>
                            <option value="0">Нет</option>
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
                admArea: '',
                district: '',
                socialPrivileges: 2,
                typeObject: '',

                options: {
                    admArea: this.$eventBus.filterOptions.admArea,
                    district: this.$eventBus.filterOptions.district,
                    typeObject: this.$eventBus.filterOptions.typeObject,
                }
            }
        },

        mounted() {
            let _updateOptions = () => {
                this.options.admArea = this.$eventBus.filterOptions.admArea;
                this.options.district = this.$eventBus.filterOptions.district;
                this.options.socialPrivileges = this.$eventBus.filterOptions.socialPrivileges;
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
                    socialPrivileges: +this.socialPrivileges,
                    typeObject: this.typeObject
                };

                /**
                 * Функция фильтрации списка кафе
                 * @param cafeList array
                 */
                this.$eventBus.listFilter = (cafeList) => {
                    let _admAreaChecker = admArea => {
                        return this.$config.filterValues.admArea !== ''
                            ? admArea === this.$config.filterValues.admArea
                            : true;
                    }

                    let _districtChecker = district => {
                        return this.$config.filterValues.district !== ''
                            ? district === this.$config.filterValues.district
                            : true;
                    }

                    let _socialPrivilegesChecker = socialPrivileges => {
                        return this.$config.filterValues.socialPrivileges !== 2
                            ? socialPrivileges === this.$config.filterValues.socialPrivileges
                            : true;
                    }

                    let _typeObjectChecker = typeObject => {
                        return this.$config.filterValues.typeObject !== ''
                            ? typeObject === this.$config.filterValues.typeObject
                            : true;
                    }

                    if (cafeList instanceof Array) {
                        return cafeList.filter(cafe => {
                            return _admAreaChecker(cafe.admArea)
                                && _districtChecker(cafe.district)
                                && _socialPrivilegesChecker(cafe.socialPrivileges)
                                && _typeObjectChecker(cafe.typeObject);
                        });
                    }

                    return [];
                }
            }
        }
    }
</script>