<template>
  <div class="calc">
    <div class="main">
      <input
        type="number"
        v-model.number="op1"
        @input="result = ''"
        @click="swit = 'one'" name="operand1"
      />
      <input
        type="number"
        v-model.number="op2"
        @input="result = ''"
        @click="swit = 'two'" name="operand2"
      />
      ={{ result }}
    </div>
    <div class="keyboard">
      <button @click="conculate('+')" name="+">+</button>
      <button @click="conculate('-')" name="-">-</button>
      <button @click="conculate('*')" name="*">*</button>
      <button @click="conculate('/')" :disabled="op2 == 0" name="/">/</button>
      <button @click="conculate('^')" title="Степень" name="^">^</button>
      <button
        @click="conculate('//')"
        :disabled="op2 == 0"
        title="Целочисленное деление" name="//"
      >
        //
      </button>
      <div class="swich">
        <input
          type="radio"
          v-model="swit"
          id="field1"
          value="one"
          name="switch"
        />
        <label for="field1">1 поле</label>
        <input
          type="radio"
          v-model="swit"
          id="field2"
          value="two"
          name="switch"
        />
        <label for="field2">2 поле</label>
        <br />
        <input type="checkbox" v-model="showKey" id="showKey" />
        <label for="showKey">Клавиатура</label>
      </div>
      <div v-if="showKey" class="keypad">
        <button
          v-for="(item, index) in keyPad"
          :key="index"
          @click="inputCheng(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      op1: '',
      op2: '',
      result: '',
      swit: 'one',
      showKey: false,
      field: '',
      keyPad: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '<', 'c']
    }
  },
  methods: {
    inputCheng (item) {
      if (this.swit === 'one') {
        this.op1 = this.redactor(item, this.op1)
      } else {
        this.op2 = this.redactor(item, this.op2)
      }
    },
    redactor (item, field) {
      if (item >= 0 && item <= 9) {
        field = field * 10 + item
      } else if (item === '<') {
        field = Math.floor(field / 10)
      } else if (item === 'c') {
        field = ''
      }
      return field
    },
    conculate (operation) {
      switch (operation) {
        case '+':
          this.sum()
          break
        case '-':
          this.sub()
          break
        case '*':
          this.mult()
          break
        case '/':
          this.div()
          break
        case '^':
          this.deg()
          break
        case '//':
          this.divFloor()
          break
      }
    },
    sum () {
      const { op1, op2 } = this
      this.result = op1 + op2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    mult () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    div () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.result = 'На ноль делить нельзя'
      } else {
        this.result = op1 / op2
      }
    },
    deg () {
      const { op1, op2 } = this
      if (op2 > 0 || op1 === 0) {
        this.result = op1
        for (let i = 1; i < op2; i++) {
          this.result = this.result * op1
        }
      } else {
        this.result = 1
      }
    },
    divFloor () {
      const { op1, op2 } = this
      this.result = Math.floor(op1 / op2)
    }
  }
}
</script>
