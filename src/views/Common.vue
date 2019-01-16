<template>
    <my-page title="常用电话号码">
        <div class="tool-box">
            <div class="search-box">
                <input class="input" v-model="keyword" placeholder="输入电话号码或关键词查询">
                <ui-icon-button class="icon" icon="search" @click="search" />
            </div>
            <div class="ui-loading" v-if="loading">
                <ui-circular-progress :size="24"/>
            </div>
            <ui-article class="result" v-if="result">
                <p v-if="!result.length">搜索不到结果</p>
                <table v-if="result.length">
                    <tr v-for="item in result">
                        <td>{{ item.title }}</td>
                        <td>{{ item.phone }}</td>
                    </tr>
                </table>
                <!-- 查询结果：{{ result }} -->
            </ui-article>
        </div>
        <ui-article>
            <table class="tel" cellpadding="0" cellspacing="0">
                <tbody><tr>
                    <th>
                        <a name="tz">特种服务</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">匪警</a>
                    </td>
                    <td>
                        110
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">火警</a>
                    </td>
                    <td>
                        119
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">急救中心</a>
                    </td>
                    <td>
                        120
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">道路交通事故报警</a>
                    </td>
                    <td>
                        122
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">水上求救专用电话</a>
                    </td>
                    <td>
                        12395
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">天气预报</a>
                    </td>
                    <td>
                        12121
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">报时服务</a>
                    </td>
                    <td>
                        12117
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">森林火警</a>
                    </td>
                    <td>
                        12119
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">电力服务</a>
                    </td>
                    <td>
                        95598
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">红十字会急救台</a>
                    </td>
                    <td>
                        999
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">公安短信报警</a>
                    </td>
                    <td>
                        12110
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">通用紧急求救</a>
                    </td>
                    <td>
                        112
                    </td>
                </tr>
                <tr>
                    <th>
                        <a name="dz">中央党政部门、公益团体</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">信产部IP/网站备案</a>
                    </td>
                    <td>
                        010-66411166
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">文化部</a>
                    </td>
                    <td>
                        010-65551114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">教育部</a>
                    </td>
                    <td>
                        010-66096114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">农业部</a>
                    </td>
                    <td>
                        010-64193366
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">建设部</a>
                    </td>
                    <td>
                        010-58934114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">劳动部</a>
                    </td>
                    <td>
                        010-84201114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">交通部</a>
                    </td>
                    <td>
                        010-65292114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">民政部</a>
                    </td>
                    <td>
                        010-58160600
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">水利部</a>
                    </td>
                    <td>
                        010-63202114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">海关总署</a>
                    </td>
                    <td>
                        010-65194114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">外交部</a>
                    </td>
                    <td>
                        010-65961114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">财政部</a>
                    </td>
                    <td>
                        010-68551114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">壹基金</a>
                    </td>
                    <td>
                        021-52504617
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">红十字会</a>
                    </td>
                    <td>
                        010-84025890
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中华慈善总会</a>
                    </td>
                    <td>
                        010-66083260
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国扶贫基金会</a>
                    </td>
                    <td>
                        010-82872688
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国青少年发展基金会</a>
                    </td>
                    <td>
                        010-64035547
                    </td>
                </tr>
                <tr>
                    <th>
                        <a name="bx">保险公司</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国人寿保险</a>
                    </td>
                    <td>
                        95519
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国人保保险</a>
                    </td>
                    <td>
                        95518
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中华联合保险</a>
                    </td>
                    <td>
                        95585
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">泰康人寿保险</a>
                    </td>
                    <td>
                        95522
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">太平洋保险</a>
                    </td>
                    <td>
                        95500
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">天安保险</a>
                    </td>
                    <td>
                        95505
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">华安财险</a>
                    </td>
                    <td>
                        95556
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">新华人寿保险</a>
                    </td>
                    <td>
                        95567
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">平安保险</a>
                    </td>
                    <td>
                        95511
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">大众保险</a>
                    </td>
                    <td>
                        95507
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国大地保险</a>
                    </td>
                    <td>
                        95590
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">太平人寿保险</a>
                    </td>
                    <td>
                        95589
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">华泰财险</a>
                    </td>
                    <td>
                        95509
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">安邦财险</a>
                    </td>
                    <td>
                        95569
                    </td>
                </tr>
                <tr>
                    <th>
                        <a name="qc">汽车公司</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">吉利汽车</a>
                    </td>
                    <td>
                        4008869888
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">长春一汽</a>
                    </td>
                    <td>
                        8008468680
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">一汽马自达</a>
                    </td>
                    <td>
                        8008468680
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">宝马汽车</a>
                    </td>
                    <td>
                        4008006666
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">广汽丰田</a>
                    </td>
                    <td>
                        8008308888
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">BUICK别克</a>
                    </td>
                    <td>
                        8008202020
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">东南汽车</a>
                    </td>
                    <td>
                        8008581666
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">奇瑞汽车</a>
                    </td>
                    <td>
                        4008838888
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">一汽大众</a>
                    </td>
                    <td>
                        4008171888
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">东风日产</a>
                    </td>
                    <td>
                        8008308899
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">奔驰汽车</a>
                    </td>
                    <td>
                        4008181188
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">上海大众咨询</a>
                    </td>
                    <td>
                        8008201111
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">沃尔沃轿车</a>
                    </td>
                    <td>
                        8009881200
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">北京吉普</a>
                    </td>
                    <td>
                        8008108880
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">上海华普汽车</a>
                    </td>
                    <td>
                        8008205598
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">昌河汽车</a>
                    </td>
                    <td>
                        4008879988
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">东风本田</a>
                    </td>
                    <td>
                        8008809899
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">比亚迪汽车</a>
                    </td>
                    <td>
                        4008303666
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">凯迪拉克咨询</a>
                    </td>
                    <td>
                        8008201902
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">Ford福特</a>
                    </td>
                    <td>
                        8008108168
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">北京现代</a>
                    </td>
                    <td>
                        8008101100
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">江铃汽车</a>
                    </td>
                    <td>
                        8008691099
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">东风雪铁龙</a>
                    </td>
                    <td>
                        4008866688
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">广州本田</a>
                    </td>
                    <td>
                        8008308999
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">一汽丰田</a>
                    </td>
                    <td>
                        8008101210
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">雪佛兰</a>
                    </td>
                    <td>
                        8008201912
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">北汽福田</a>
                    </td>
                    <td>
                        4008199199
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">南京依维柯</a>
                    </td>
                    <td>
                        8008281892
                    </td>
                </tr>
            </tbody></table>
            <table class="tel" cellpadding="0" border="1" cellspacing="0">
                <tbody><tr>
                    <th>
                        <a name="tx">通信服务机构</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国电信综合服务</a>
                    </td>
                    <td>
                        10000
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国电信手机服务</a>
                    </td>
                    <td>
                        10001
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国联通客服热线</a>
                    </td>
                    <td>
                        10010
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国移动客服热线</a>
                    </td>
                    <td>
                        10086
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国电信IP电话卡</a>
                    </td>
                    <td>
                        17900、17901
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国联通IP号码</a>
                    </td>
                    <td>
                        17910、17911
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国移动IP号码</a>
                    </td>
                    <td>
                        17950、17951
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国铁通服务电话</a>
                    </td>
                    <td>
                        10050
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">电话号码查询</a>
                    </td>
                    <td>
                        114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">查号台（电信）</a>
                    </td>
                    <td>
                        118114
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">查号台（联通）</a>
                    </td>
                    <td>
                        116114
                    </td>
                </tr>
                <tr>
                    <th>
                        <a name="hk">铁路航空</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">铁路</a>
                    </td>
                    <td>
                        12306
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">国航</a>
                    </td>
                    <td>
                        95583
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">海航</a>
                    </td>
                    <td>
                        950718
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">南航</a>
                    </td>
                    <td>
                        4006695539
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">东航</a>
                    </td>
                    <td>
                        95530
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">深航</a>
                    </td>
                    <td>
                        95080
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">厦航</a>
                    </td>
                    <td>
                        95557
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">山航</a>
                    </td>
                    <td>
                        4006096777
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">川航</a>
                    </td>
                    <td>
                        4008300999
                    </td>
                </tr>
                <tr>
                    <th>
                        <a name="yh">银行机构</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国银行</a>
                    </td>
                    <td>
                        95566
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">交通银行</a>
                    </td>
                    <td>
                        95559
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中国银联</a>
                    </td>
                    <td>
                        95516
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">招商银行</a>
                    </td>
                    <td>
                        95555
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">农业银行</a>
                    </td>
                    <td>
                        95599
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">民生银行</a>
                    </td>
                    <td>
                        95568
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">上海浦东发展银行</a>
                    </td>
                    <td>
                        95528
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">汇丰银行</a>
                    </td>
                    <td>
                        8008302880
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">东亚银行</a>
                    </td>
                    <td>
                        8008303811
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">兴业银行</a>
                    </td>
                    <td>
                        95561
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">工商银行</a>
                    </td>
                    <td>
                        95588
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">光大银行</a>
                    </td>
                    <td>
                        95595
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">广东发展银行</a>
                    </td>
                    <td>
                        95508
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">华夏银行</a>
                    </td>
                    <td>
                        95577
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">花旗银行</a>
                    </td>
                    <td>
                        8008301880
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">上海银行</a>
                    </td>
                    <td>
                        021-962888
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">中信银行</a>
                    </td>
                    <td>
                        95558
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">建设银行</a>
                    </td>
                    <td>
                        95533
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">邮政储蓄</a>
                    </td>
                    <td>
                        95580
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">深圳发展银行</a>
                    </td>
                    <td>
                        95501
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">北京银行</a>
                    </td>
                    <td>
                        010-96169
                    </td>
                </tr>
                <tr>
                    <th>
                        <a name="qy">常用企业</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        联想
                    </td>
                    <td>
                        8008-108-888
                    </td>
                </tr>
                <tr>
                    <td>
                        惠普
                    </td>
                    <td>
                        8008-202-255
                    </td>
                </tr>
                <tr>
                    <td>
                        戴尔
                    </td>
                    <td>
                        8008-580-888
                    </td>
                </tr>
                <tr>
                    <td>
                        索尼
                    </td>
                    <td>
                        4008-109-000
                    </td>
                </tr>
                <tr>
                    <td>
                        飞利浦
                    </td>
                    <td>
                        8008-201-201
                    </td>
                </tr>
                <tr>
                    <td>
                        松下
                    </td>
                    <td>
                        8008-100-781
                    </td>
                </tr>
                <tr>
                    <td>
                        爱普生
                    </td>
                    <td>
                        8008-109-977
                    </td>
                </tr>
                <tr>
                    <td>
                        东芝
                    </td>
                    <td>
                        8008-108-208
                    </td>
                </tr>
                <tr>
                    <td>
                        NEC
                    </td>
                    <td>
                        8008-207-007
                    </td>
                </tr>
                <tr>
                    <td>
                        TCL
                    </td>
                    <td>
                        4008-123-456
                    </td>
                </tr>
                <tr>
                    <td>
                        方正
                    </td>
                    <td>
                        8008-101-992
                    </td>
                </tr>
                <tr>
                    <td>
                        七喜
                    </td>
                    <td>
                        020-82253777
                    </td>
                </tr>
                <tr>
                    <td>
                        长城
                    </td>
                    <td>
                        8008-100-285
                    </td>
                </tr>
                <tr>
                    <td>
                        明基(BENQ)
                    </td>
                    <td>
                        020-38900009
                    </td>
                </tr>
                <tr>
                    <td>
                        清华同方
                    </td>
                    <td>
                        010-62789888
                    </td>
                </tr>
                <tr>
                    <td>
                        诺基亚
                    </td>
                    <td>
                        4008-800-123
                    </td>
                </tr>
                <tr>
                    <td>
                        三星
                    </td>
                    <td>
                        4008-105-858
                    </td>
                </tr>
                <tr>
                    <td>
                        摩托罗拉
                    </td>
                    <td>
                        8008-105-050
                    </td>
                </tr>
                <tr>
                    <td>
                        索爱
                    </td>
                    <td>
                        4008-100-000
                    </td>
                </tr>
                <tr>
                    <td>
                        LG
                    </td>
                    <td>
                        4008-199-999
                    </td>
                </tr>
                <tr>
                    <td>
                        多普达
                    </td>
                    <td>
                        4008-201-668
                    </td>
                </tr>
                <tr>
                    <td>
                        华硕
                    </td>
                    <td>
                        4006-006-655
                    </td>
                </tr>
                <tr>
                    <td>
                        大中电器
                    </td>
                    <td>
                        8008-109-110
                    </td>
                </tr>
                <tr>
                    <td>
                        国美电器
                    </td>
                    <td>
                        8009-906-600
                    </td>
                </tr>
                <tr>
                    <td>
                        海尔
                    </td>
                    <td>
                        4006-999-999
                    </td>
                </tr>
                <tr>
                    <td>
                        长虹
                    </td>
                    <td>
                        4008-111-666
                    </td>
                </tr>
                <tr>
                    <td>
                        老板
                    </td>
                    <td>
                        8008-571-616
                    </td>
                </tr>
                <tr>
                    <td>
                        苏泊尔
                    </td>
                    <td>
                        8008-576-717
                    </td>
                </tr>
            </tbody></table>
            <table class="tel" cellpadding="0" border="1" cellspacing="0">
                <tbody><tr>
                    <th>
                        <a name="ts">投诉、维权、举报</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">消费者申诉举报
                    </a>
                    </td>
                    <td>
                        12315
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">价格监督</a>
                    </td>
                    <td>
                        12358
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">质量监督</a>
                    </td>
                    <td>
                        12365
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">环保监督</a>
                    </td>
                    <td>
                        12369
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">税务</a>
                    </td>
                    <td>
                        12366
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">市长热线</a>
                    </td>
                    <td>
                        12345
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">公共卫生</a>
                    </td>
                    <td>
                        12320
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">电信投诉</a>
                    </td>
                    <td>
                        12300
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">妇女维权</a>
                    </td>
                    <td>
                        12338
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">法律援助</a>
                    </td>
                    <td>
                        12351
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">劳动保障</a>
                    </td>
                    <td>
                        12333
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">机构编制违规举报</a>
                    </td>
                    <td>
                        12310
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">文化市场综合执法</a>
                    </td>
                    <td>
                        12318
                    </td>
                </tr>
                <tr>
                    <th>
                        <a name="wm">外卖订餐</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">麦当劳</a>
                    </td>
                    <td>
                        4008517517
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">肯德基</a>
                    </td>
                    <td>
                        4008823823
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">必胜客</a>
                    </td>
                    <td>
                        4008123123
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">真功夫</a>
                    </td>
                    <td>
                        4006927927
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">丽华快餐</a>
                    </td>
                    <td>
                        4008800400
                    </td>
                </tr>
                <tr>
                    <th>
                        <a name="wl">快递物流</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        申通快递
                    </td>
                    <td>
                        4008-895-543
                    </td>
                </tr>
                <tr>
                    <td>
                        EMS特快专递
                    </td>
                    <td>
                        11185
                    </td>
                </tr>
                <tr>
                    <td>
                        顺丰速运
                    </td>
                    <td>
                        4008-111-111
                    </td>
                </tr>
                <tr>
                    <td>
                        圆通速递
                    </td>
                    <td>
                        021-69777888
                    </td>
                </tr>
                <tr>
                    <td>
                        中通速递
                    </td>
                    <td>
                        021-39777777
                    </td>
                </tr>
                <tr>
                    <td>
                        韵达快运
                    </td>
                    <td>
                        021-39207888
                    </td>
                </tr>
                <tr>
                    <td>
                        天天快递
                    </td>
                    <td>
                        021-67662333
                    </td>
                </tr>
                <tr>
                    <td>
                        汇通快运
                    </td>
                    <td>
                        021-62963636
                    </td>
                </tr>
                <tr>
                    <td>
                        速尔快递
                    </td>
                    <td>
                        4008822168
                    </td>
                </tr>
                <tr>
                    <td>
                        德邦物流
                    </td>
                    <td>
                        4008305555
                    </td>
                </tr>
                <tr>
                    <td>
                        宅急送
                    </td>
                    <td>
                        4006789000
                    </td>
                </tr>
                <tr>
                    <td>
                        中铁快运
                    </td>
                    <td>
                        95572
                    </td>
                </tr>
                <tr>
                    <td>
                        鑫飞鸿快递
                    </td>
                    <td>
                        021-69781999
                    </td>
                </tr>
                <tr>
                    <td>
                        UPS
                    </td>
                    <td>
                        4008-208-388
                    </td>
                </tr>
                <tr>
                    <td>
                        FedEx(联邦快递)
                    </td>
                    <td>
                        4008-861-888
                    </td>
                </tr>
                <tr>
                    <td>
                        DHL
                    </td>
                    <td>
                        4008-108-000
                    </td>
                </tr>
                <tr>
                    <td>
                        新邦物流
                    </td>
                    <td>
                        4008-000-222
                    </td>
                </tr>
                <tr>
                    <td>
                        TNT
                    </td>
                    <td>
                        4008-209-868
                    </td>
                </tr>
                <tr>
                    <td>
                        民航快递
                    </td>
                    <td>
                        4008-174-008
                    </td>
                </tr>
                <tr>
                    <th>
                        <a name="xx">常用大学</a>
                    </th>
                    <th>
                        电话号码
                    </th>
                </tr>
                <tr>
                    <td>
                        北京大学
                    </td>
                    <td>
                        010-62752114
                    </td>
                </tr>
                <tr>
                    <td>
                        南京大学
                    </td>
                    <td>
                        025-83593186
                    </td>
                </tr>
                <tr>
                    <td>
                        华中科技大学
                    </td>
                    <td>
                        027-87541114
                    </td>
                </tr>
                <tr>
                    <td>
                        北京师范大学
                    </td>
                    <td>
                        010-58800260
                    </td>
                </tr>
                <tr>
                    <td>
                        中国农业大学
                    </td>
                    <td>
                        010-62896811
                    </td>
                </tr>
                <tr>
                    <td>
                        天津大学
                    </td>
                    <td>
                        022-27403536
                    </td>
                </tr>
                <tr>
                    <td>
                        兰州大学
                    </td>
                    <td>
                        0931-8911114
                    </td>
                </tr>
                <tr>
                    <td>
                        哈尔滨工业大学
                    </td>
                    <td>
                        0451-86414060
                    </td>
                </tr>
                <tr>
                    <td>
                        北京航空航天大学
                    </td>
                    <td>
                        010-82317114
                    </td>
                </tr>
                <tr>
                    <td>
                        清华大学
                    </td>
                    <td>
                        010-62782165
                    </td>
                </tr>
                <tr>
                    <td>
                        上海交通大学
                    </td>
                    <td>
                        021-34206500
                    </td>
                </tr>
                <tr>
                    <td>
                        中山大学
                    </td>
                    <td>
                        020-84113480
                    </td>
                </tr>
                <tr>
                    <td>
                        南开大学
                    </td>
                    <td>
                        022-23508219
                    </td>
                </tr>
                <tr>
                    <td>
                        中国科技大学
                    </td>
                    <td>
                        0551-3601000
                    </td>
                </tr>
                <tr>
                    <td>
                        华东师范大学
                    </td>
                    <td>
                        021-62233333
                    </td>
                </tr>
                <tr>
                    <td>
                        东北大学
                    </td>
                    <td>
                        024-83679262
                    </td>
                </tr>
                <tr>
                    <td>
                        浙江大学
                    </td>
                    <td>
                        0571-85172244
                    </td>
                </tr>
                <tr>
                    <td>
                        武汉大学
                    </td>
                    <td>
                        027-68755114
                    </td>
                </tr>
                <tr>
                    <td>
                        吉林大学
                    </td>
                    <td>
                        0431-85166420
                    </td>
                </tr>
                <tr>
                    <td>
                        中南大学
                    </td>
                    <td>
                        0731-88876834
                    </td>
                </tr>
                <tr>
                    <td>
                        西安交通大学
                    </td>
                    <td>
                        029-82668888
                    </td>
                </tr>
                <tr>
                    <td>
                        同济大学
                    </td>
                    <td>
                        021-65982200
                    </td>
                </tr>
                <tr>
                    <td>
                        香港大学
                    </td>
                    <td>
                        00852-28592111
                    </td>
                </tr>
                <tr>
                    <td>
                        复旦大学
                    </td>
                    <td>
                        021-65642222
                    </td>
                </tr>
                <tr>
                    <td>
                        中国人民大学
                    </td>
                    <td>
                        010-62511601
                    </td>
                </tr>
                <tr>
                    <td>
                        四川大学
                    </td>
                    <td>
                        028-85406437
                    </td>
                </tr>
                <tr>
                    <td>
                        山东大学
                    </td>
                    <td>
                        0531-88564774
                    </td>
                </tr>
                <tr>
                    <td>
                        厦门大学
                    </td>
                    <td>
                        0592-2186110
                    </td>
                </tr>
                <tr>
                    <td>
                        华南理工大学
                    </td>
                    <td>
                        020-87110000
                    </td>
                </tr>
                <tr>
                    <td>
                        暨南大学
                    </td>
                    <td>
                        020-85220114
                    </td>
                </tr>
            </tbody></table>
        </ui-article>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                loading: false,
                keyword: '119',
                result: null
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
            search() {
                if (!this.keyword) {
                    this.$message({
                        type: 'danger',
                        text: '请输入电话号码或关键词'
                    })
                    return
                }
                this.loading = true
                this.result = null
                this.$http.get('/common_phones?keyword=' + this.keyword).then(
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
    .tool-box {
        max-width: 320px;
        margin: 0 auto 24px auto;
    }
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
