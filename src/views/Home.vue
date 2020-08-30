<template>
    <my-page title="号码" :page="page">
        <div class="common-container">
            <app-list :data="groups" />
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                groups: [
                    {
                        // name: '分类',
                        apps: [
                            {
                                name: '号码归属地查询',
                                desc: '',
                                icon: 'https://life.yunser.com/static/img/phone_info.svg',
                                to: '/search',
                            },
                            {
                                name: '常用电话号码',
                                desc: '',
                                icon: 'https://life.yunser.com/static/img/phone_info.svg',
                                to: '/common',
                            },
                            {
                                name: '骚扰电话查询',
                                desc: '',
                                icon: 'https://life.yunser.com/static/img/phone_info.svg',
                                to: '/check',
                            },
                            {
                                name: '手机号码生成',
                                desc: '',
                                icon: 'https://life.yunser.com/static/img/phone_info.svg',
                                to: '/generation',
                            },
                            // {
                            //     name: '中文',
                            //     desc: '',
                            //     icon: '/static/img/chinese.svg',
                            //     to: 'xxx',
                            //     href: 'https://chinese.yunser.com/',
                            //     target: '_blank'
                            // },
                        ]
                    },
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=edu',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=edu',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
            init() {
            },
            fileChange(e) {
            },
            sizeStr: function (size) {
            }
        }
    }
</script>
