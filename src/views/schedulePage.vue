<template>
  <div class="schedulePage"
    style="overflow: hidden; position: absolute; width: 100%; height: 100vh; left: 0%; top: 0%; background: rgb(255, 255, 255); ">
    <div class="bg"
      style="position:absolute;left:0%;right:0%;background-image: linear-gradient(rgb(255, 255, 255), rgb(189 189 189));height:48vh;bottom:0px;">
    </div>
    <div class="bg"
      style="position:absolute;left:0%;right:0%;background-image: linear-gradient(rgb(241 214 72), rgb(255 255 255));height:48vh;top:0px;">
    </div>
    <div class="bg"
      style="position:absolute;right: 0%;background:linear-gradient(251deg, rgba(0, 0, 0, 1) 0%, rgb(255 255 255 / 0%) 50%);height:101vh;top:0px;width: 54%;">
    </div>
    <div class="bg"
      style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:100%;">
    </div>
    <div class="bg"
      style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:100%;transform:rotateY(180deg);">
    </div>
    <div ref="xscroll" class="contentpanel" style="position:absolute; height:100%;top:0;width:100%;background:rgba(128,128,128,0.08);overflow-y:auto;overflow-x:hidden;">
      <div class='scrollablecontentplate' style="position: relative;width: 100%;height: 100%;overflow-y: hidden;">
        <floorplan v-if='currentSubpanel == "floor"' />
        <Underconstruction v-if='currentSubpanel != "floor"' />
        <div class="switchpanel_schedule" style="position: absolute; left: 80vh; width: 7vh; top: 67vh;">
          <div
            style="position:absolute;height:100%;width: 0.2vh;/* background-color:white; */background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0) 1%,   rgba(255, 255, 255, 1) 20%,rgba(255, 255, 255, 1) 80%,rgba(255, 255, 255, 0) 100%);top:1%;left: 43%;">
          </div>
          <div class='submenubtn ' @click='switchSubpanel("schedule")'
            :style="{ background: currentSubpanel === 'schedule' ? 'white' : 'grey' }"
            style="position:absolute;width:2vh;height:2vh;top: 10%;left: 28%; filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
            <div v-if='currentSubpanel != "schedule"'
              style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5">
            </div>
            <div v-if='currentSubpanel == "schedule"' class='scheduleselect'
              style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip"
              style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2.6vh;text-align: right;">
              SCHEDULE</div>
            <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if='unexplored["schedule"]' />
          </div>
          <div class='submenubtn' @click='switchSubpanel("floor")'
            :style="{ background: currentSubpanel === 'floor' ? 'white' : 'grey' }"
            style="position:absolute;width:2vh;height:2vh;top:50%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
            <div v-if='currentSubpanel != "floor"'
              style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5">
            </div>
            <div v-if='currentSubpanel == "floor"' class='floorselect'
              style="position:absolute;width: 3.6vh;height: 3.6vh;top:-0.8vh;border: solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip"
              style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2.6vh;text-align: right;">
              FLOOR</div>
            <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if='unexplored["floor"]' />
          </div>
          <div @click='switchSubpanel("who")' :style="{ background: currentSubpanel === 'who' ? 'white' : 'grey' }"
            style="position:absolute;width:2vh;height:2vh;top: 88%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
            <div v-if='currentSubpanel != "who"'
              style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5">
            </div>
            <div v-if='currentSubpanel == "who"' class='whoselect'
              style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip"
              style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2.6vh;text-align: right;">
              ???</div>
            <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if='unexplored["who"]' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useUserStore } from "../stores/store";
import { mapActions, mapState } from 'pinia'

import floorplan from '../components/floorPlan.vue';
import gem from '../components/gem.vue';
import Underconstruction from "../components/underconstruction.vue";
//const text = ref('# Hello Editor');

export default {
  components: {
    floorplan, gem, Underconstruction
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
    switchSubpanel(subp) {
      this.unexplored[subp] = false
      this.currentSubpanel = subp
      console.log('selecting' + subp)
    },

  },

  mounted() { },

  updated() { },
}
</script>
<style>
.switchpanel_schedule {
  animation-name: switchpanel_schedule;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
  height: 30vh;
}

@keyframes switchpanel_schedule {
  0% {
    height: 0vh;
  }

  100% {
    height: 30vh;
  }
}

.scheduleselect {
  animation-name: scheduleselect;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}

@keyframes scheduleselect {
  0% {
    top: 1vh;
    opacity: 0;
  }



  100% {
    top: -0.8vh;
    opacity: 1;
  }
}

.floorselect {
  animation-name: floorselect;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}

.frosted-panel {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.5vh;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(50px);
  box-shadow: 0 1vh 2vh rgba(0, 0, 0, 0.4);
}


.frosted-chip {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 0.4vh 1.6vh;
  backdrop-filter: blur(18px) saturate(1.3);
  -webkit-backdrop-filter: blur(18px) saturate(1.3);
  border: none;
  box-shadow: 0 0.4vh 1.2vh rgba(0, 0, 0, 0.35);
}

@keyframes floorselect {
  0% {
    left: -1.8vh;
    opacity: 0;
  }



  100% {
    left: -0.8vh;
    opacity: 1;

  }
}

.whoselect {
  animation-name: whoselect;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}

@keyframes whoselect {
  0% {
    top: -2.6vh;
    opacity: 0;
  }



  100% {
    top: -0.8vh;
    opacity: 1;
  }
}



.submenubtn:hover {
  background: white;
}
</style>