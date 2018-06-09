<template>
    <my-page title="手机归属地查询">
        <ui-text-field label="手机号码" v-model="phone" />
        <br>
        <ui-raised-button class="btn" label="查询" primary @click="query" />
        <div class="ui-loading" v-if="loading">
            <ui-circular-progress :size="24"/>
        </div>
        <ui-article v-if="result">
            <table>
                <tr>
                    <th>卡类型</th>
                    <td>{{ result.company }} {{ result.cardtype }}</td>
                </tr>
                <tr>
                    <th>归属地</th>
                    <td>{{ result.province }} · {{ result.city }}</td>
                </tr>
            </table>
        </ui-article>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                phone: '',
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
                        text: '请输入手机号码'
                    })
                    return
                }
                this.loading = true
                this.result = null
                this.$http.get('/phone?phone=' + this.phone).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.loading = false
                        this.result = data
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
    .ui-loading {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
    }
</style>
