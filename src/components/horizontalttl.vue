<template>
  <div class="horizontalttl" style="position: absolute; width: 100%; left: 0%; height: 100%;overflow: hidden;">
    <div class="httlblock1" style="width: 1vh;height: 1vh;bottom: 1%;position: absolute;/* backdrop-filter: blur(10px); */border-left: 45vh solid transparent;border-right: 45vh solid transparent;left: 0.1%;"></div>
    <div class="httlblock2" style="left: -50%;transform: rotateZ(180deg);width: 1vh;height: 1vh;bottom: 0px;position: absolute;/* backdrop-filter: blur(10px); */border-left: 45vh solid transparent;border-right: 45vh solid transparent;"></div>
    <div class="httlblock3" style="right: -50%;transform: rotateZ(180deg);width: 1vh;height: 1vh;bottom: 0px;position: absolute;/* backdrop-filter: blur(10px); */border-left: 45vh solid transparent;border-right: 45vh solid transparent;"></div>
    <div class='finalbg' style='position:absolute;top:0;left:0;width:100%;height:100%;'></div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'

//const text = ref('# Hello Editor');

export default {
  components: {},

  data() {
    return {
      shownQAID: false,
      isReadQuestion: false,
    }
  },

  computed: {
    ...mapState(useUserStore, ['stateDump']),

    compileLastTurns() { },
  },

  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername']),
  },

  mounted() { },

  updated() { },
}
</script>
<style>
@keyframes httlblock1 {
  0% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0);
  }

  25% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0.74);
  }

  50% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0);
  }

  99% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0.74);
  }
  100% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0);
  }
}







.httlblock1 {
  animation-name: httlblock1;
  animation-delay: 0.35s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}


.httlblock2,
.httlblock3 {
  animation-name: httlblock2;
  animation-delay: 0.15s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}



@keyframes httlblock2 {

  0% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0);
  }

  25% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0.74);
  }

  50% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0);
  }

  99% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0.74);
  }
  100% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0);
  }




}







.finalbg {
  animation-name: finalbg;
  animation-delay: 0.8s;
  animation-duration: 0s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}
@keyframes finalbg {
  0% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0);
  }


  100% {
    border-bottom: 80vh solid rgba(255, 255, 255, 0);
  }

}
</style>
