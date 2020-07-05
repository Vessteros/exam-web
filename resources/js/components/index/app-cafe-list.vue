<template>
    <div class="row">
        <div class="col-md-12 mb-3">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Тип</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="cafe in displayList">
                    <th scope="row">{{cafe.name}}</th>
                    <td>Сталовая</td>
                    <td>Янтарная1</td>
                    <td>
                        <button class="btn  btn-sm btn-block bgbot" type="submit" data-toggle="modal"
                                data-target="#exampleModal1">Выбрать
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item" v-if="pageNumber > 0" style="cursor: pointer" @click="pageNumber--">
                        <div class="page-link">Назад</div>
                    </li>
                    <li class="page-item" v-for="i in paginationCount" @click="pageNumber = i">
                        <div class="page-link">{{i}}</div>
                    </li>
                    <li class="page-item">
                        <div class="page-link" v-if="pageNumber < paginationCount" style="cursor: pointer" @click="pageNumber++">Вперед</div>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-cafe-list",

        data: function () {
            return {
                /** Все отфильтрованные заведения */
                cafeList: [],

                /** Вообще все возможные заведения (получаем при ajax запросе) */
                wholeCafeList: [],

                pageNumber: 0,
            }
        },

        computed: {
            paginationCount: function () {
                return Math.ceil(this.wholeCafeList.length / 10)
            },

            pageNumStart: function() {
                return this.pageNumber * 10;
            },

            /** Список отображаемых заведений при пагинации */
            displayList: function () {
                return this.cafeList.slice(this.pageNumStart, this.pageNumStart + 9)
            }
        },

        mounted() {
            this.getList();

            this.$eventBus.$on('updateCafeList', this.filterList);
        },

        methods: {
            getList: function () {
                this.$axios
                    .get(this.$config.getList)
                    .then((response) => {
                        this.setFilterOptions(response.data);
                        this.cafeList = this.$eventBus.listFilter !== null
                            ? this.$eventBus.listFilter(response.data)
                            : response.data;

                        this.wholeCafeList = JSON.parse(JSON.stringify(response.data));
                    })
                    .catch((reason) => {
                        console.warn(reason);
                    })
                    .finally();
            },

            setFilterOptions: function (data) {
                this.$eventBus.filterOptions.admArea = new Set(data.map((cafe) => {
                    return cafe.admArea;
                }));

                this.$eventBus.filterOptions.district = new Set(data.map((cafe) => {
                    return cafe.district;
                }));

                this.$eventBus.filterOptions.socialDiscount = new Set(data.map((cafe) => {
                    return cafe.socialDiscount;
                }));

                this.$eventBus.filterOptions.typeObject = new Set(data.map((cafe) => {
                    return cafe.typeObject;
                }));

                this.$eventBus.$emit('updateOptions');
            },

            filterList: function () {
                this.cafeList = this.$eventBus.listFilter(this.wholeCafeList);
            }
        }
    }
</script>