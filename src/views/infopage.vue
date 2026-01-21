
<template>
  <div class="infopage" style="overflow: hidden; position: absolute; width: 100vw; height: 100vh; left: 0%; top: 0%; background: rgb(255, 255, 255); ">
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255, 255, 255), rgb(190, 254, 255));height:48vh;bottom:0px;"></div>
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255 164 251), rgb(255 255 255));height:48vh;top:0px;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgba(0, 0, 0, 1) 0%, rgb(255 255 255 / 0%) 50%);height:101vh;top:0px;width: 54%;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;"></div>
    <div class="bg" style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;transform:rotateY(180deg);"></div>
    <div class="contentpanel" style="position:absolute;height:40%;top:35vh;width:100%;background:#80808014;">
      <div class="switchpanel" style="position:absolute;right: -0.8vh;width: 7vh;/* background:green; */height: 77vh;top: -25vh;">
        <div style="position:absolute;height:100%;width: 0.2vh;/* background-color:white; */background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0) 1%,   rgba(255, 255, 255, 1) 20%,rgba(255, 255, 255, 1) 80%,rgba(255, 255, 255, 0) 100%);top:1%;left: 43%;"> </div>
        <div class='submenubtn' @click='switchSubpanel("when")' :style="{ background: currentSubpanel === 'when' ? 'white' : 'grey' }" style="position:absolute;width:2vh;height:2vh;top: 10%;left: 28%; filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
          <div v-if='currentSubpanel != "when"' style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5"></div>
          <div v-if='currentSubpanel == "when"' class='whenselect' style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
          <div class="frosted-panel_info frosted-chip_info" style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2vh;text-align: center;">WHEN</div>
          <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
          <gem v-if='unexplored["when"]' />
        </div>
        <div class='submenubtn' @click='switchSubpanel("where")' :style="{ background: currentSubpanel === 'where' ? 'white' : 'grey' }" style="position:absolute;width:2vh;height:2vh;top: 53%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
          <div v-if='currentSubpanel != "where"' style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5"></div>
          <div v-if='currentSubpanel == "where"' class='whereselect' style="position:absolute;width: 3.6vh;height: 3.6vh;top:-0.8vh;border: solid white 0.2vh;"></div>
          <div class="frosted-panel_info frosted-chip_info" style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2vh;text-align: center;">WHERE</div>
          <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
          <gem v-if='unexplored["where"]' />
        </div>
        <div  @click='switchSubpanel("who")' :style="{ background: currentSubpanel === 'who' ? 'white' : 'grey' }" style="position:absolute;width:2vh;height:2vh;top: 88%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
          
          <div v-if='currentSubpanel != "who"' style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5"></div>
          <div v-if='currentSubpanel== "who"' class='whoselect' style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
          <div class="frosted-panel_info frosted-chip_info" style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2vh;text-align:center;" >WHO<br><span style="font-size:1vh; opacity:0.8; letter-spacing:0.2vh;">(GUESTS)</span></div>
          <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
          <gem v-if='unexplored["who"]' />
        </div>
      </div>
      <when v-if='currentSubpanel=="when"' />
      <where v-if='currentSubpanel=="where"' />
      <who v-if="currentSubpanel=='who'" />
      
    </div>
    <div class="fg"><img src="/public/mikuonly2026.png" style="filter:drop-shadow(4vh 4vh 1vh rgba(0,0,118,0.2));position:absolute;height:100%;left:13%;z-index:1;" ></div>
  </div>
</template>
<script>
import { useUserStore } from "../stores/store";
import { mapActions, mapState } from 'pinia'
import when from '../components/when.vue';
import where from '../components/where.vue';
import who from '../components/who.vue';
import gem from '../components/gem.vue';
//const text = ref('# Hello Editor');

export default {
  components: {
    when, where, who, gem
  },

  data() {
    return {
      currentSubpanel: 'when',
      unexplored : {'when': true, 'where': true, 'who': true}
    }
  },

  computed: {
    ...mapState(useUserStore, ['stateDump']),

    compileLastTurns() { },
  },

  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername']),
    switchSubpanel(subp){
      this.unexplored[subp]=false
      this.currentSubpanel = subp
      console.log('selecting'+subp)
    }
  },

  mounted() { },

  updated() { },
}
</script>
<style>
.switchpanel {
  animation-name: switchpanel;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}

.frosted-panel_info{
  background: rgba(0, 0, 0,0.1);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(50px);
  box-shadow: 0 1vh 2vh rgba(0, 0, 0, 0.4);
}


.frosted-chip_info {
  background: rgba(255, 255, 255, 0.12);
  padding: 0.4vh 1.6vh;
  backdrop-filter: blur(18px) saturate(1.3);
  -webkit-backdrop-filter: blur(18px) saturate(1.3);
  border: none;
  box-shadow: 0 0.4vh 1.2vh rgba(0, 0, 0, 0.35);
}


@keyframes switchpanel {
  0% {
    height: 0vh;
  }



  100% {
    height: 77vh;
  }
}

.whenselect {
  animation-name: whenselect;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}

@keyframes whenselect {
  0% {
        top: 1vh;
    opacity:0;
  }



  100% {
    top: -0.8vh;
    opacity:1;
  }
}

.whereselect {
  animation-name: whereselect;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}

@keyframes whereselect {
  0% {
    left: -1.8vh;
        opacity:0;  }



  100% {
    left: -0.8vh;
        opacity:1;

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
    opacity:0;
  }



  100% {
    top: -0.8vh;
    opacity:1;
  }
}



.submenubtn:hover {
  background:white;
}
</style>