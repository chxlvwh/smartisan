<template>
  <div id="app">
  	<transition name='pickup'>
  		<new-address v-show='showNewAddress' mode="out-in"></new-address>
  	</transition>
    <!--显示是否超过最大数量-->
    <transition name="show">
      <prompt v-show="Prompt"></prompt>
    </transition>
  	<header-nav></header-nav>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import headerNav from '@/components/header-nav'
import prompt from '@/components/prompt'
import newAddress from '@/components/newAddress'
export default {
  name: 'app',
  components: {
    headerNav, prompt, newAddress
  },
  computed: {
    Prompt () {
      return this.$store.state.showPrompt
    },
    showNewAddress () {
    	return this.$store.state.showNewAddress
    }
  }
}
</script>

<style>
  .show-enter, .show-leave-to{
    opacity: 0;
  }
  .show-leave, .show-enter-to{
    opacity: 1;
  }
  .show-enter-active, .show-leave-active{
    -webkit-transition: opacity 0.2s;
    -moz-transition: opacity 0.2s;
    -ms-transition: opacity 0.2s;
    -o-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }
  .pickup-enter, .pickup-leave-to{
    opacity: 0;
  }
  .pickup-leave, .pickup-enter-to{
    opacity: 1;
  }
  .pickup-enter-active, .pickup-leave-active{
    -webkit-transition: opacity 0.2s;
    -moz-transition: opacity 0.2s;
    -ms-transition: opacity 0.2s;
    -o-transition: opacity 0.2s;
    transition: opacity 0.2s;
  }
</style>
