<template>
  <div
    style="position: absolute; height: 90vh; width: 90vh; left: 89vh; top: 5vh;">
    <div class="fg" style="position:absolute;width:70vh;height:100vh;left:-70vh;top:-11%;">
      <div style="position:absolute;top:6%;left:27%;height:2vh;width:2vh;background:black;"></div>
      <div style="position:absolute;top: 25%;left: 101%;height:2vh;width:2vh;background:black;"></div>
      <div style="position:absolute;top: 24%;left: 101%;height: 10vh;width: 67vh;background: #efefef6b;"></div>
      <div style="position:absolute;top:-27%;left:34.5%;height:200vh;width:0.4vh;background:black;"></div>
      <div style="position:absolute;top:69%;left:34.5%;height:0vh;width:133.4vh;border-top:0.3vh dotted #0000003d;"></div>
      <div style="position:absolute;top:10%;left:95.5%;height:125vh;width:0.4vh;border-left:0.3vh dotted #0000003d;"></div>
      <div style="position:absolute;top:9.6%;left:-66.5%;height:0.4vh;width:248.4vh;background:black;"></div>
      <div style="position:absolute;bottom:-15%;font-family:font5;font-size:24vh;left:19%;font-weight:900;color:#000000;width:236vh;">Under Construction</div>
      <div style="position:absolute;top:24%;font-family:font5;font-size:5.4vh;left:104%;font-weight:900;color:#676767cc;width:63vh;line-height:4.4vh;">Please check everything after update</div>
      <div style="position:absolute;top:33%;font-family:font5;font-size:2.1vh;left:104%;font-weight:900;color:#676767cc;width:90vh;line-height:4.4vh;letter-spacing:3.5vh;">MIKU ONLY 2026</div><img class="flfigure" src="/public/Screenshot_20260110_202304.png" style="position:absolute;height:61%;left:34.5%;top:9.8%;mix-blend-mode:multiply;">
      <div style="position:absolute;top:100%;font-family:font5;font-size:5.4vh;left:104%;font-weight:900;color:#00000063;width:63vh;line-height:4.4vh;">\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</div>
      <div style="position:absolute;top:10%;width:41vh;font-family:font11;font-size:2vh;height:30vh;overflow:hidden;line-height:1.5vh;transform:rotateZ(-90deg);left:0vh;opacity:0.5;"> be on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on time</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'
import horizontalttl from './horizontalttl.vue'
import gem from '../components/gem.vue';

export default {
  components: {
  },

  data() {
    return {
      currentSubpanel: 'floor',
      unexplored: { 'floor': true, 'schedule': true, 'who': true }
    }
  },

  computed: {
    ...mapState(useUserStore, ['stateDump']),

  },

  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername']),


  },

  mounted() { },

  updated() { },
}
</script>
<style></style>
