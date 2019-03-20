<template>
  <route-left :key="renderReact"></route-left>
</template>

<script>
import { RouteLeft } from '../components/route-left.jsx'

export default {
  name: 'RouteLeftVue',
  components: {
    RouteLeft
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
