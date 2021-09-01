<template>
    <div id='app'>
        <router-view></router-view>
        <FooterGuider v-show='$route.meta.ShowFooter' />
    </div>
</template>

<script>
import FooterGuider from '../src/components/FooterGuide.vue'
export default {
    components:{
        FooterGuider
    }

}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
   #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
 
</style>>
