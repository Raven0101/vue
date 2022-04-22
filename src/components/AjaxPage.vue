<template>
  <div>
    <div
      style="
        width: 600px;
        background-color: #eff1f4;
        border-radius: 10px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
        position: absolute;
        margin: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      "
    >
      <h1
        style="
          text-align: center;
          color: #2c3e50;
          margin: 30px 0px 20px 0px;
          font-size: 36px;
        "
      >
        每日一句
      </h1>
      <div style="align-items: center; display: flex; justify-content: center">
        <a-cascader
          :options="options"
          :default-value="['all']"
          placeholder="选择题材"
          @change="onChange"
        />
        <a-button
          type="primary"
          style="
            margin-left: 20px;
            background-color: #2c3e50;
            color: #eff1f4;
            border: 0;
          "
          @click="ajax()"
          >点击获取</a-button
        >
      </div>
      <div style="margin: 50px">
        <h1 style="text-align: center; color: #2c3e50">{{ poem }}</h1>
        <p style="text-align: right; color: #2c3e50" v-if="poem">
          {{ `——${author}《${origin}》` }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'AjaxPage',
    props: {},
    data() {
      return {
        url: 'https://v1.jinrishici.com',
        poem: '',
        author: '',
        origin: '',
        category: '',
        options: [
          {
            value: 'all',
            label: '随机',
          },
          {
            value: 'shuqing',
            label: '抒情',
            children: [
              {
                value: 'aiqing',
                label: '爱情',
              },
              {
                value: 'youqing',
                label: '友情',
              },
              {
                value: 'libie',
                label: '离别',
              },
              {
                value: 'sinian',
                label: '思念',
              },
              {
                value: 'sixiang',
                label: '思乡',
              },
              {
                value: 'shanggan',
                label: '伤感',
              },
              {
                value: 'gudu',
                label: '孤独',
              },
              {
                value: 'guiyuan',
                label: '闺怨',
              },
              {
                value: 'daowang',
                label: '悼亡',
              },
              {
                value: 'huaigu',
                label: '怀古',
              },
              {
                value: 'aiguo',
                label: '爱国',
              },
              {
                value: 'ganen',
                label: '感恩',
              },
            ],
          },
          {
            value: 'siji',
            label: '四季',
            children: [
              {
                value: 'chuntian',
                label: '春天',
              },
              {
                value: 'xiatian',
                label: '夏天',
              },
              {
                value: 'qiutian',
                label: '秋天',
              },
              {
                value: 'dongtian',
                label: '冬天',
              },
            ],
          },
          {
            value: 'shanshui',
            label: '山水',
            children: [
              {
                value: 'lushan',
                label: '庐山',
              },
              {
                value: 'taishan',
                label: '泰山',
              },
              {
                value: 'jianghe',
                label: '江河',
              },
              {
                value: 'changjiang',
                label: '长江',
              },
              {
                value: 'huanghe',
                label: '黄河',
              },
              {
                value: 'xihu',
                label: '西湖',
              },
              {
                value: 'pubu',
                label: '瀑布',
              },
            ],
          },
          {
            value: 'tianqi',
            label: '天气',
            children: [
              {
                value: 'xiefeng',
                label: '写风',
              },
              {
                value: 'xieyun',
                label: '写云',
              },
              {
                value: 'xieyu',
                label: '写雨',
              },
              {
                value: 'xiexue',
                label: '写雪',
              },
              {
                value: 'caihong',
                label: '彩虹',
              },
              {
                value: 'taiyang',
                label: '太阳',
              },
              {
                value: 'yualiang',
                label: '月亮',
              },
              {
                value: 'xingxing',
                label: '星星',
              },
            ],
          },
          {
            value: 'renwu',
            label: '人物',
            children: [
              {
                value: 'nvzi',
                label: '女子',
              },
              {
                value: 'fuqin',
                label: '父亲',
              },
              {
                value: 'muqin',
                label: '母亲',
              },
              {
                value: 'laoshi',
                label: '老师',
              },
              {
                value: 'ertong',
                label: '儿童',
              },
            ],
          },
          {
            value: 'rensheng',
            label: '人生',
            children: [
              {
                value: 'lizhi',
                label: '励志',
              },
              {
                value: 'zheli',
                label: '哲理',
              },
              {
                value: 'qingchun',
                label: '青春',
              },
              {
                value: 'shiguang',
                label: '时光',
              },
              {
                value: 'mengxiang',
                label: '梦想',
              },
              {
                value: 'dushu',
                label: '读书',
              },
              {
                value: 'zhanzheng',
                label: '战争',
              },
            ],
          },
          {
            value: 'shenghuo',
            label: '生活',
            children: [
              {
                value: 'xiangcun',
                label: '乡村',
              },
              {
                value: 'tianyuan',
                label: '田园',
              },
              {
                value: 'biansai',
                label: '边塞',
              },
              {
                value: 'xieqiao',
                label: '写桥',
              },
            ],
          },
          {
            value: 'jieri',
            label: '节日',
            children: [
              {
                value: 'chunjie',
                label: '春节',
              },
              {
                value: 'yuanxiaojie',
                label: '元宵节',
              },
              {
                value: 'hanshijie',
                label: '寒食节',
              },
              {
                value: 'qingmingjie',
                label: '清明节',
              },
              {
                value: 'duanwujie',
                label: '端午节',
              },
              {
                value: 'qixijie',
                label: '七夕节',
              },
              {
                value: 'zhongqiujie',
                label: '中秋节',
              },
              {
                value: 'chongyangjie',
                label: '重阳节',
              },
            ],
          },
          {
            value: 'dongwu',
            label: '动物',
            children: [
              {
                value: 'xieniao',
                label: '写鸟',
              },
              {
                value: 'xiema',
                label: '写马',
              },
              {
                value: 'xiemao',
                label: '写猫',
              },
            ],
          },
          {
            value: 'zhiwu',
            label: '植物',
            children: [
              { value: 'meihua', label: '梅花' },
              { value: 'lihua', label: '梨花' },
              { value: 'taohua', label: '桃花' },
              { value: 'hehua', label: '荷花' },
              { value: 'juhua', label: '菊花' },
              { value: 'liushu', label: '柳树' },
              { value: 'yezi', label: '叶子' },
              { value: 'zhuzi', label: '竹子' },
            ],
          },
          {
            value: 'shiwu',
            label: '食物',
            children: [
              {
                value: 'xiejiu',
                label: '写酒',
              },
              {
                value: 'xiecha',
                label: '写茶',
              },
              {
                value: 'lizhi',
                label: '荔枝',
              },
            ],
          },
        ],
        choice: [],
      }
    },
    created() {
      //   this.ajax()
    },
    methods: {
      onChange(value) {
        this.choice = value
        console.log(this.choice)
      },
      getUrl(choice) {
        let fullUrl = this.url
        if (choice.length == 0) {
          return fullUrl + '/all.json'
        }
        for (let i = 0; i < choice.length; i++) {
          fullUrl = fullUrl + '/' + choice[i]
        }
        return fullUrl + '.json'
      },
      ajax() {
        console.log('ajax')
        let _this = this
        let xhr = new XMLHttpRequest()
        let getData = function () {
          //   console.log(xhr)
          if (xhr.readyState == 4) {
            let data = JSON.parse(xhr.response)
            // console.log(data)
            _this.poem = data.content
            _this.author = data.author
            _this.origin = data.origin
          }
        }
        let fullUrl = this.getUrl(this.choice)
        xhr.open('get', fullUrl)
        xhr.onreadystatechange = getData
        xhr.send()
      },
      ajaxAxios() {
        console.log('axios')
        let fullUrl = this.getUrl(this.choice)
        axios({
          method: 'get',
          url: fullUrl,
        }).then((res) => {
          this.poem = res.data.content
          this.author = res.data.author
          this.origin = res.data.origin
        })
      },
    },
  }
</script>

<style scoped></style>
