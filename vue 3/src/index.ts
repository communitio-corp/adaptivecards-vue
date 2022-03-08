import AdaptiveCards from './components/AdaptiveCards.vue'


export default {
  install (Vue : any) {
    Vue.component('adaptive-cards', AdaptiveCards)
  }
}

export { AdaptiveCards }
