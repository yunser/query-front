<template>
    <my-page title="手机号码生成" :page="page">
        <div class="common-container container">
            <ui-text-field label="数量" v-model.number="number" hintText="10" />

            <div class="tool-box">
                <ui-raised-button label="生成" primary @click="make" />
            </div>
            <ui-article v-if="results">
                <p v-for="item in results">{{ item }}</p>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    // https://www.e-learn.cn/news/kejiqianyan/2529601
    // http://www.98765mm.com/index.html
    function getMoble() {
        let prefixs = ['130', '131', '132', '133', '135', '137', '138', '170', '187', '189']
        let result = ''
        result += prefixs[parseInt(prefixs.length * Math.random())]
        for (let i = 0; i < 8; i++) {
            result += Math.floor(Math.random() * 10)
        }
        return result
    }

    console.log('getMoble', getMoble())

    export default {
        data () {
            return {
                number: null,
                loading: false,
                keyword: '119',
                results: [],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/9ed8c3e0bea811e9a922f5e806e0bdb2',
                            target: '_blank'
                        }
                    ]
                }
            }
        },
        mounted() {
            let data = this.$route.query.data
            if (data) {
                this.phone = data
                this.query()
            }
            // this.result = '火警电话 119'
        },
        methods: {
            make() {
                if (!this.number) {
                    this.number = 10
                    // this.$message({
                    //     type: 'danger',
                    //     text: '请输入电话号码或关键词'
                    // })
                    // return
                }
                this.results = []
                for (let i = 0; i < this.number; i++) {
                    this.results.push(getMoble())
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
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
    // .tool-box {
    //     max-width: 320px;
    //     margin: 0 auto 24px auto;
    // }
    .search-box {
        display: flex;
        height: 48px;
        margin-bottom: 16px;
        box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        .input {
            height: 48px;
            padding-left: 16px;
            flex-grow: 1;
            border: none;
            outline: none;
        }
    }
</style>
