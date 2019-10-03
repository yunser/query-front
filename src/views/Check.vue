<template>
    <my-page title="骚扰电话查询">
        <div class="common-container container">
            <ui-text-field label="电话号码（固话或手机）" v-model="phone" />
            <br>
            <ui-raised-button class="btn" label="查询" primary @click="query" />
            <div class="ui-loading" v-if="loading">
                <ui-circular-progress :size="24"/>
            </div>
            <ui-article v-if="result">
                <p v-html="result"></p>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                phone: '01053355120',
                result: null
            }
        },
        mounted() {
            let data = this.$route.query.data
            if (data) {
                this.phone = data
                this.query()
            }
        },
        methods: {
            query() {
                if (!this.phone) {
                    this.$message({
                        type: 'danger',
                        text: '请输入电话号码'
                    })
                    return
                }
                this.loading = true
                this.result = null
                this.$http.get('/phone/check?phone=' + this.phone).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.loading = false
                        this.result = data.data || data.info
                    },
                    response => {
                        this.loading = false
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>
    .btn {
        margin-bottom: 16px;
    }
</style>
<style>
.label-warning {
    color: #f0ad4e;
    font-weight: bold;
}
</style>
