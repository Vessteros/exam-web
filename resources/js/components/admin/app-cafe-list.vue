<template>
    <div class="col-md-12 order-md-1">
        <div class="row">
            <div class="col-md-12 mb-3">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Наименование</th>
                        <th scope="col">Вид обьекта</th>
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
                            <button class="btn  btn-sm  bgbot" type="submit" data-toggle="modal"
                                    data-target="#updateModal" @click="loadCafeInfo(cafe.id)">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pen"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z"/>
                                    <path fill-rule="evenodd"
                                          d="M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z"/>
                                    <path d="M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z"/>
                                </svg>
                            </button>

                            <button class="btn  btn-sm  bgbot" type="submit" data-toggle="modal"
                                    data-target="#deleteModal" @click="setDeleteId(cafe.id)">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </button>

                        </td>
                    </tr>
                    </tbody>
                </table>


                <div class="container">
                    <div class="row align-items-start">
                        <div class="col-md-6 mb-3">
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
                        <div class="col-md-6 mb-3">
                            <button class="btn  btn-block bgbot" type="submit" data-toggle="modal"
                                    data-target="#createModal">Добавить предприятие
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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

        mounted() {
            this.getList();

            this.$eventBus.$on('updateCafeList', this.filterList);
            this.$eventBus.$on('reloadCafeList', this.getList);
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
                    })
                    .catch((reason) => {
                        console.warn(reason);
                    })
                    .finally();
            },

            setFilterOptions: function (data) {
                this.$eventBus.filterOptions.admArea        = new Set(data.map((cafe) => {return cafe.admArea;}));
                this.$eventBus.filterOptions.district       = new Set(data.map((cafe) => {return cafe.district;}));
                this.$eventBus.filterOptions.typeObject     = new Set(data.map((cafe) => {return cafe.typeObject;}));

                this.$eventBus.$emit('updateOptions');
            },

            filterList: function () {
                this.pageNumber = 0;
                this.cafeList = this.$eventBus.listFilter(this.wholeCafeList);
            },

            compare: function (cafe1, cafe2) {
                if (cafe1.rate > cafe2.rate) {
                    return -1;
                } else if (cafe2.rate > cafe1.rate) {
                    return 1;
                } else {
                    return 0;
                }
            },

            loadCafeInfo: function (id) {
                this.$eventBus.$emit('loadCafeInfo', id);
            },

            setDeleteId: function (id) {
                this.$eventBus.$emit('deleteCafeInfo', id);
            }
        }
    }
</script>