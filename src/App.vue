<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState } from "pinia";
import { useUserStore } from "./stores/store";

export default {
  components: {
    //MdEditor,MdPreview
  },
  data() {
    return {
      username: null,
      isIframe: false,
      pageUrl: window.location.href,
      isRotated: false

    };
  },
  computed: {
    ...mapState(useUserStore, ["selfUsername", 'stateDump']),


  },
  methods: {
    ...mapActions(useUserStore, [
      "setUsername", "getUsername"
    ]),

    logmein() {
      this.setUsername(this.username);
    },

    handleResize() {
      
      this.isRotated = window.innerWidth < window.innerHeight;

    }

  },

  mounted() {
    // if (/MicroMessenger/i.test(navigator.userAgent))
    //   window.location.replace("/alterindex");
    if (window.self !== window.top) {
      this.isIframe = true;
    }
    this.handleResize();
    //console.log(this.pageUrl);
    window.addEventListener('resize', this.handleResize);


  },

  watch: {

  }

}

</script>

<template>
  <iframe v-if="!isIframe"
    :src="pageUrl"
    :style="{
      'transform': 'rotateZ(0deg)',
      'width':'100vw',
      'height':'100vh',
      'left':'0',
      'top':'0'
    }"
    style="background: white; margin: 0; position: absolute;border:0;" />


  <body v-if='isIframe' style="background: white;width:100%;height:100%;margin:0;position:absolute;left:0;top:0;border:0;">
    <RouterView />
  </body>

  
</template>

<style scoped></style>
