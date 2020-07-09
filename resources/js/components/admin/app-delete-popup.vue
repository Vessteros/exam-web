<template>
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Удаление записи</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h5>Вы уверены, что хотите удалить данное предприятие из списка?</h5>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Нет
                    </button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deleteCafeInfo">Да</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-delete-popup",
        data: function () {
            return {
                id: 0,
            };
        },
        mounted() {
            this.$eventBus.$on('deleteCafeInfo', this.setDeleteId);
        },

        methods: {
            deleteCafeInfo: function () {
                this.$axios
                    .delete(this.$config.getListRoute + '/' + this.id + this.$config.token)
                    .then((response) => {
                        if (response.data.error) {
                            this.$notify.error({
                                title: 'Ошибка',
                                message: 'Не удалось удалить заведение: ' + response.data.error,
                            });
                        } else {
                            this.$notify({
                                title: 'Успех!',
                                message: 'Данные заведения удалены',
                                type: 'success',
                            });

                            this.$eventBus.$emit('reloadCafeList');
                        }
                    })
                    .catch((reason) => {
                        console.warn(reason);
                    })
                    .finally();
            },

            setDeleteId: function (id) {
                this.id = id;
            }
        },
    }
</script>