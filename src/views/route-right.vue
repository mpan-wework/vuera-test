<template>
  <route-right :key="renderReact"></route-right>
</template>

<script>
import { RouteRight } from '../components/route-right.jsx'

export default {
  name: 'RouteRightVue',
  components: {
    RouteRight
  },
  data () {
    return {
      renderReact: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.renderReact += 1
    })
  }
}
</script>
