/* eslint-disable no-new */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const dataBase = {
  page1: [
    { id: 1, date: '20.03.2020', type: 'Food', amount: 169 },
    { id: 2, date: '21.03.2020', type: 'Navigation', amount: 50 },
    { id: 3, date: '22.03.2020', type: 'Sport', amount: 450 }
  ],
  page2: [
    { id: 4, date: '23.03.2020', type: 'Entertaiment', amount: 969 },
    { id: 5, date: '24.03.2020', type: 'Education', amount: 1500 },
    { id: 6, date: '25.03.2020', type: 'Food', amount: 200 }
  ],
  page3: [
    { id: 7, date: '23.03.2020', type: 'Entertaiment', amount: 969 },
    { id: 8, date: '24.03.2020', type: 'Education', amount: 1500 },
    { id: 9, date: '25.03.2020', type: 'Food', amount: 200 }
  ],
  page4: [
    { id: 10, date: '23.03.2020', type: 'Entertaiment', amount: 969 },
    { id: 11, date: '24.03.2020', type: 'Education', amount: 1500 },
    { id: 12, date: '25.03.2020', type: 'Food', amount: 200 }
  ]
}

export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListId: [],
    categoryList: []
  },
  mutations: {
    setPaymontListData (state, payload) {
      state.paymentsList = payload
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
    addPaymentsListData (state, payload) {
      const newUniqObjs = payload.filter(obj => {
        return state.paymentsListId.indexOf(obj.id) < 0
      })
      const uniqIds = newUniqObjs.map(obj => obj.id)
      state.paymentsListId.push(...uniqIds)
      state.paymentsList.push(...newUniqObjs)
    },
    deleteDataToPaymentlist (state, id) {
      console.log(id)
      state.paymentsList.splice(id, 1)
    },
    reditDateToPaymentList (state, id, data) {
      state.paymentsList.splice(id, 1, data)
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList.reduce((res, cur) => res + +cur.amount, 0)
    },
    getCategoryList: state => state.categoryList
  },
  actions: {
    addDate ({ commit }, payload) {
      console.log(commit, payload)
    },
    /* fetchData ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              date: '28.03.2020',
              type: 'Food',
              amount: 169
            },
            {
              id: 2,
              date: '24.03.2020',
              type: 'Transport',
              amount: 360
            },
            {
              id: 3,
              date: '24.03.2020',
              type: 'Food',
              amount: 532
            }
          ])
        }, 1000)
      }).then(res => {
        commit('setPaymontListData', res)
      })
    }, */
    fetchData ({ commit }, page) {
      return new Promise(resolve => {
        setTimeout(() => {
          const items = dataBase[`page${page}`]
          resolve(items)
        }, 0)
      }).then(res => {
        commit('addPaymentsListData', res)
      })
    },
    fetchCategoryList ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            'Food', 'Transport', 'Sport', 'Education'
          ])
        }, 1000)
      }).then(res => {
        commit('setCategoryList', res)
      })
    }
  }
})
