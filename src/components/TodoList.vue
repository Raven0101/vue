<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
    "
  >
    <h1 style="">TODO LIST</h1>
    <div style="width: 100%; display: flex; justify-content: center">
      <a-input
        style="width: 200px; margin-right: 10px"
        v-model="todo"
        @keyup.enter="additem()"
      />
      <a-button type="primary" @click="additem()">ADD</a-button>
    </div>
    <div style="width: 250px; margin-top: 20px">
      <ul style="display: flex; flex-direction: column; align-content: center">
        <li
          v-for="(item, index) in todoList"
          :key="index"
          style="
            margin: 5px 0px 5px 0px;
            display: flex;
            justify-content: space-between;
          "
        >
          <a-checkbox @change="checkItem(index)">{{ item.value }}</a-checkbox
          ><a-icon @click="deleteItem(index)" type="delete" />
        </li>
      </ul>
      <p>{{ done }}/{{ total }} done,</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoList',
    props: {
      msg: String,
    },
    data() {
      return {
        url: 'https://api.it120.cc/gooking/forex/rate',
        fromCode: 'CNY',
        toCode: 'USD',
        text: '',
        todo: '',
        todoList: [
          { status: -1, value: '工作1' },
          { status: -1, value: '工作2' },
          { status: -1, value: '工作3' },
        ],
        done: 0,
        total: 0,
      }
    },
    created() {
      // alert('created')
      this.getTotal()
    },
    methods: {
      additem() {
        this.todoList.push({ status: -1, value: this.todo })
        this.todo = ''
        this.getTotal()
      },
      deleteItem(index) {
        this.todoList.pop(index)
        this.getTotal()
      },
      checkItem(index) {
        this.todoList[index].status *= -1
        this.getTotal()
      },
      getTotal() {
        this.total = this.todoList.length
        this.done = this.todoList.reduce((k, value) => {
          if (value.status == 1) {
            k++
          }
          return k
        }, 0)
      },
      getDone() {},
      ajax() {
        let _this = this
        let xhr = new XMLHttpRequest()
        // console.log('click')
        let getData = function () {
          //
          if (xhr.readyState == 4) {
            let res = JSON.parse(xhr.responseText)
            _this.text = res.data.rate
            console.log(_this)
          }
        }
        xhr.open(
          'get',
          `${this.url}?fromCode=${this.fromCode}&toCode=${this.toCode}`
        )
        xhr.onreadystatechange = getData
        xhr.send()
        // console.log(this.xhr)
      },
      // click() {
      //   this.xhr.send()
      // },
      stop() {
        console.log(this)
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
