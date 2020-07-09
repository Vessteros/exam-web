<template>
    <div class="col-md-12 order-md-1">
        <div class="row">

            <div class="col-md-8 mb-3">
                <div class="form-group">
                    <label for="f_name">Наименовование</label>
                    <input type="email" class="form-control" id="f_name" v-model="name"
                           placeholder="Введите наименование">
                </div>
            </div>


            <div class="col-md-4 mb-3">
                <label for="f_admArea">Административный округ</label>
                <select class="custom-select d-block w-100" id="f_admArea" v-model="admArea" required="">
                    <option value="" selected>Не выбрано</option>
                    <option v-for="admArea in options.admArea">{{admArea}}</option>
                </select>
            </div>


            <div class="col-md-8 mb-3">
                <div class="row">
                    <div class="col-md-12 mb-31">
                        Число посадочных мест
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="form-group row">
                            <label for="seatsCount_from" class="col-sm-3 col-form-label">От</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="seatsCount_from" id="seatsCount_from">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="form-group row">
                            <label for="seatsCount_to" class="col-sm-3 col-form-label">До</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" v-model="seatsCount_to" id="seatsCount_to">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 mb-3">
                        <div class="form-group row">
                            <label for="f_isNetObject" class="col-sm-6 col-form-label">Является сетевым</label>
                            <select class="custom-select d-block col-sm-6" v-model="isNetObject" id="f_isNetObject"
                                    required="">
                                <option value="2">Не выбрано</option>
                                <option value="1">Да</option>
                                <option value="0">Нет</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-md-4 mb1">
                <label for="f_district">Район</label>
                <select class="custom-select d-block w-100" v-model="district" id="f_district" required="">
                    <option value="" selected>Не выбрано</option>
                    <option v-for="district in options.district">{{district}}</option>
                </select>


            </div>


            <div class="col-md-8 mb-3">
                <div class="row">
                    <div class="col-md-12 mb-31">
                        Дата создания
                    </div>

                    <div class="col-md-4 mb-3">
                        <div class="form-group row">
                            <label for="created_at_from" class="col-sm-2 col-form-label">С</label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" v-model="created_at_from" id="created_at_from">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3">
                        <div class="form-group row">
                            <label for="created_at_to" class="col-sm-2 col-form-label">По</label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" v-model="created_at_to" id="created_at_to">
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mb-3">
                        <div class="form-group row">
                            <label for="f_socialPrivileges" class="col-sm-4 col-form-label">Льготы</label>
                            <select class="custom-select d-block col-sm-8" v-model="socialPrivileges"
                                    id="f_socialPrivileges" required="">
                                <option value="2">Не выбрано</option>
                                <option value="1">Да</option>
                                <option value="0">Нет</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-md-4 mb1">
                <label for="f_typeObject">Вид обьекта</label>
                <select class="custom-select d-block w-100" v-model="typeObject" id="f_typeObject" required="">
                    <option value="" selected>Не выбрано</option>
                    <option v-for="typeObject in options.typeObject">{{typeObject}}</option>
                </select>
            </div>


            <div class="col-md-12">
                <div class="row justify-content-center">
                    <div class="col-md-5 mb-3">
                        <button class="btn  btn-block bgbot" type="submit" @click="updateList">Найти</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-filter-form",

        data: function () {
            return {
                name: '',
                admArea: '',
                district: '',
                seatsCount_from: '',
                seatsCount_to: '',
                isNetObject: 2,
                created_at_from: '',
                created_at_to: '',
                socialPrivileges: 2,
                typeObject: '',

                options: {
                    admArea: this.$eventBus.filterOptions.admArea,
                    district: this.$eventBus.filterOptions.district,
                    typeObject: this.$eventBus.filterOptions.typeObject,
                },
            };
        },

        mounted() {
            let _updateOptions = () => {
                this.options = {
                    admArea: this.$eventBus.filterOptions.admArea,
                    district: this.$eventBus.filterOptions.district,
                    typeObject: this.$eventBus.filterOptions.typeObject,
                };
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
                    name: this.name,
                    admArea: this.admArea,
                    district: this.district,
                    seatsCount_from: +this.seatsCount_from,
                    seatsCount_to: +this.seatsCount_to,
                    isNetObject: +this.isNetObject,
                    created_at_from: this.created_at_from,
                    created_at_to: this.created_at_to,
                    socialPrivileges: +this.socialPrivileges,
                    typeObject: this.typeObject,
                };

                /**
                 * Функция фильтрации списка кафе
                 * @param cafeList array
                 */
                this.$eventBus.listFilter = (cafeList) => {
                    // let _isNetObjectChecker = isNetObject => {
                    //     return this.$config.filterValues.isNetObject !== 2
                    //         ? isNetObject === this.$config.filterValues.isNetObject
                    //         : true;
                    // }
                    //
                    // let _seatsCountChecker = seatsCount => {
                    //     let res = true;
                    //     if (this.$config.filterValues.seatsCount_from !== '') {
                    //         res = res && (seatsCount >= this.$config.filterValues.seatsCount_from);
                    //     }
                    //     if (this.$config.filterValues.seatsCount_to !== '') {
                    //         res = res && (seatsCount <= this.$config.filterValues.seatsCount_to);
                    //     }
                    //
                    //     return res;
                    // }
                    //
                    let _nameChecker = name => {
                        return this.$config.filterValues.name !== ''
                            ? name.indexOf(this.$config.filterValues.name) + 1
                            : true;
                    }

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
                                && _nameChecker(cafe.name)
                                && _districtChecker(cafe.district)
                                && _socialPrivilegesChecker(cafe.socialPrivileges)
                                && _typeObjectChecker(cafe.typeObject);
                            // && _isNetObjectChecker(cafe.isNetObject)
                            // && _seatsCountChecker(cafe.seatsCount)
                            // &&
                        });
                    }

                    return [];
                }
            }
        }
    }
</script>