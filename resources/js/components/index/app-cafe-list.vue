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
                    <td>{{cafe.typeObject}}</td>
                    <td>{{cafe.address}}</td>
                    <td>
                        <button class="btn  btn-sm btn-block bgbot" type="submit" data-toggle="modal"
                                data-target="#orderModal1" @click="chooseCafe(cafe.id)">Выбрать
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            <nav v-if="paginationCount > 1" aria-label="List navigation">
                <ul class="pagination justify-content-center">
                    <li class="page-item" v-if="pageNumber > 0" style="cursor: pointer" @click="pageNumber--">
                        <div class="page-link" :class="pageNumber === 0 ? 'link-active' : ''">Назад</div>
                    </li>
                    <li class="page-item" @click="pageNumber = 0" style="cursor: pointer">
                        <div class="page-link">{{1}}</div>
                    </li>
                    <li class="page-item" v-if="pageNumber > 1">
                        <div style="margin: 0 10px;">...</div>
                    </li>
                    <li class="page-item" v-if="paginationCount > 1" v-for="i in range"
                        @click="pageNumber = i" style="cursor: pointer">
                        <div class="page-link" :class="pageNumber === i ? 'link-active' : ''">{{i + 1}}</div>
                    </li>
                    <li class="page-item" v-if="paginationCount - pageNumber > 3">
                        <div style="margin: 0 10px;">...</div>
                    </li>
                    <li class="page-item" v-if="paginationCount > 2" @click="pageNumber = paginationCount - 1"
                        style="cursor: pointer">
                        <div class="page-link" :class="pageNumber === paginationCount - 1 ? 'link-active' : ''">
                            {{paginationCount}}
                        </div>
                    </li>
                    <li class="page-item" v-if="paginationCount - pageNumber > 1"
                        style="cursor: pointer" @click="pageNumber++">
                        <div class="page-link">Вперед</div>
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

        watch: {
            pageNumber: function () {
                this.setDefaultCafe();
            }
        },

        computed: {
            paginationCount: function () {
                return Math.ceil(this.cafeList.length / 10)
            },

            pageNumStart: function () {
                return this.pageNumber * 10;
            },

            /** Список отображаемых заведений при пагинации */
            displayList: function () {
                return this.cafeList
                    .slice(this.pageNumStart, this.pageNumStart + 9)
                    .sort(this.compare);
            },

            range: function () {
                let range = [];

                if (this.pageNumber === 0) {
                    range = [1,];

                    if (2 < this.paginationCount) {
                        range.push(2);
                    }
                } else if (this.pageNumber === this.paginationCount - 1) {
                    if (this.paginationCount - 3 > 0) {
                        range.push(this.paginationCount - 3);
                    }
                    if (this.paginationCount - 2 > 0) {
                        range.push(this.paginationCount - 2);
                    }
                    if (this.paginationCount <= 2) {
                        range.push(1);
                    }
                } else if (this.pageNumber > 0 && this.paginationCount - this.pageNumber >= 2) {
                    if (this.pageNumber !== 1) { // чтобы убрать дублирование 1ой кнопки
                        range.push(this.pageNumber - 1);
                    }
                    for (let i = this.pageNumber; i < this.pageNumber + 2; i++) {
                        if (i !== this.paginationCount - 1) {
                            range.push(i);
                        }
                    }
                } else {
                    range = [this.pageNumber];
                }

                return range;
            },

            listRoutePath: function () {
                return this.$config.getListRoute + this.$config.token;
            },
        },

        mounted() {
            this.getList();

            this.$eventBus.$on('updateCafeList', this.filterList);
        },

        methods: {
            getList: function () {
                this.$axios
                    .get(this.listRoutePath)
                    .then((response) => {
                        this.setFilterOptions(response.data);

                        this.wholeCafeList = JSON.parse(JSON.stringify(response.data));
                        this.cafeList = this.$eventBus.listFilter !== null
                            ? this.$eventBus.listFilter(response.data)
                            : response.data;

                        this.cafeList.sort(this.compare);

                        this.setDefaultCafe();
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
                this.pageNumber = 0;
                this.cafeList = this.$eventBus.listFilter(this.wholeCafeList).sort(this.compare);
            },

            setDefaultCafe: function () {
                this.setCafe(this.displayList[0].id);
            },

            chooseCafe: function (id) {
                this.setCafe(id)

                this.$notify.info({
                    title: 'Смена кафе',
                    message: 'Посмотрите изменения меню для выбранного вами кафе c:'
                });
            },

            setCafe: function (id) {
                this.$config.currentCafeId = id;
                this.$config.orderList = [];
                this.$eventBus.$emit('updateMenuList');
                this.$eventBus.$emit('resetOrder');
            },

            compare: function (cafe1, cafe2) {
                if (cafe1.rate > cafe2.rate) {
                    return -1;
                } else if (cafe2.rate > cafe1.rate) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    }
</script>