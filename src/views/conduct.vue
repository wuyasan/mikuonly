<template>
  <div class="conductpage" style="overflow: hidden; position: absolute; width: 100vw; height: 100vh; left: 0%; top: 0%; background: rgb(255, 255, 255); ">
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image: linear-gradient(rgb(255, 255, 255), rgb(0 0 0));height:48vh;bottom:0px;"></div>
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image: linear-gradient(rgb(255 100 100 / 33%), rgb(255 255 255));height: 13vh;top:0px;"></div>
    <div class="bg" style="position:absolute;right:0%;background: linear-gradient(251deg, rgba(0, 0, 0, 1) 0%, rgb(255 255 255 / 0%) 73%);height:101vh;top:0px;width: 71%;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;"></div>
    <div class="bg" style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;transform:rotateY(180deg);"></div>
    <div ref="xscroll" class="contentpanel" style="position: absolute;height: 100%;top: 0vh;width: 100vw;background: rgba(128, 128, 128, 0.08);overflow:auto; overflow-y: auto;overflow-x: hidden;" >
      <div class='scrollablecontentplate' style="position: relative;width: 100%; height: 100%;overflow: hidden;">
        <div class="bottomline1" style="position: absolute; width: 389vh; height: 0.3vh; background: rgb(0, 0, 0); bottom: 14%; left: 0%;"></div>
        <div class="bottomline2" style="position: absolute;width: 0.3vh;height: 116vh;background: rgb(0, 0, 0);bottom: 0%;left: 80vh;"></div>
        <div class="bottomline3" style="position: absolute;bottom: 72%;left: 65vh;font-family: font2;font-size: 6vh;font-weight: 900;transform: rotateZ(-90deg);color: black;">ATTENTION</div>
        <div class="fg" style="position: absolute;width: 100vw;height: 100vh;left: 0vh;top: 1%;">
          <div class='wavewrapper' style="position: absolute; height: 40vh; overflow: hidden; left: 22vh; width: 100%;bottom: 1vh;filter: drop-shadow(30px 10px 4px #4444dd);filter: drop-shadow(rgb(255, 255, 255) 0vh 0vh 1vh);">
            <wave
              :period-vw="140"
              :amplitude-vh="6"
              :thickness-vw="0.20"
              :speed-vw-per-sec="11"
              :opacity-pct="100"
              color="#ffffff" />
          </div>
          <div class='wavewrapper' style="position: absolute; height: 40vh; overflow: hidden; left: 22vh; width: 100%;bottom: 1vh;filter: drop-shadow(30px 10px 4px #4444dd);filter: drop-shadow(rgb(255, 255, 255) 0vh 0vh 1vh);opacity:0.3">
            <wave
              :period-vw="160"
              :amplitude-vh="3"
              :thickness-vw="0.30"
              :speed-vw-per-sec="15"
              :opacity-pct="100"
              color="#ffffff" />
          </div>
          <div class='wavewrapper' style="position: absolute; height: 40vh; overflow: hidden; left: 22vh; width: 100%;bottom: 5vh;filter: drop-shadow(rgb(255, 255, 255) 0vh 0vh 1vh);">
            <wave
              :period-vw="190"
              :amplitude-vh="4"
              :thickness-vw="0.80"
              :speed-vw-per-sec="11"
              :opacity-pct="100"
              color="#ffffff" />
          </div>
          <div class='wavewrapper' style="position: absolute; height: 40vh; overflow: hidden; left: 22vh; width: 100%;bottom: 5vh;filter: drop-shadow(rgb(255, 255, 255) 0vh 0vh 1vh); opacity:0.1">
            <wave
              :period-vw="290"
              :amplitude-vh="2"
              :thickness-vw="10"
              :speed-vw-per-sec="11"
              :opacity-pct="100"
              color="#ffffff" />
          </div>
          <div style="position: absolute;height: 102vh;width: 84vh;top: -2vh;left: 21vh;border-bottom-right-radius: 48vh;overflow: hidden;"><img src="/public/transparent_miku_angry.png" style="filter: drop-shadow(rgba(0, 0, 118, 0.2) 4vh 4vh 1vh);position: absolute;height: 100%;left: -3%;"></div>
        </div>
        <conduct_child v-if='currentSubpanel == "child"' />
        <conduct_cos v-if='currentSubpanel == "cosplay"' />
        <conduct_refund v-if='currentSubpanel == "refund"' />
        <div class="switchpanel" style="position: absolute; left: 102vh; width: 3vw; top: 5vh;">
          <div style="position:absolute;height:100%;width: 0.2vh;/* background-color:white; */background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0) 1%,   rgba(255, 255, 255, 1) 20%,rgba(255, 255, 255, 1) 80%,rgba(255, 255, 255, 0) 100%);top:1%;left: 43%;"> </div>
          <div class='submenubtn ' @click='switchSubpanel("child")' :style="{ background: currentSubpanel === 'child' ? 'white' : 'grey' }" style="position:absolute;width:2vh;height:2vh;top: 10%;left: 28%; filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
            <div v-if='currentSubpanel != "child"' style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5"></div>
            <div v-if='currentSubpanel == "child"' class='childselect' style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip" style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2.6vh;text-align: right;">AGE</div>
            <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if='unexplored["child"]' />
          </div>
          <div class='submenubtn ' @click='switchSubpanel("cosplay")' :style="{ background: currentSubpanel === 'cosplay' ? 'white' : 'grey' }" style="position:absolute;width:2vh;height:2vh;top: 53%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
            <div v-if='currentSubpanel != "cosplay"' style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5"></div>
            <div v-if='currentSubpanel == "cosplay"' class='cosplayselect' style="position:absolute;width: 3.6vh;height: 3.6vh;top:-0.8vh;border: solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip" style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2.6vh;text-align: right;">PROP</div>

            <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if='unexplored["cosplay"]' />
          </div>
          <div @click='switchSubpanel("refund")' :style="{ background: currentSubpanel === 'refund' ? 'white' : 'grey' }" style="position:absolute;width:2vh;height:2vh;top: 88%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
            <div v-if='currentSubpanel != "refund"' style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5"></div>
            <div v-if='currentSubpanel == "refund"' class='refundselect' style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip" style=" position: absolute;right: 140%;top: -47%;color: white;opacity:1;font-size: 2.6vh;text-align: right;">TICKET</div>
            <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if='unexplored["wrefundo"]' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useUserStore } from "../stores/store";
import { mapActions, mapState } from 'pinia'
import wave from '../components/wave.vue';
import where from '../components/where.vue';
import when from '../components/when.vue';

import who from '../components/who.vue';
import gem from '../components/gem.vue';
import conduct_child from '../components/conduct_child.vue';
import conduct_cos from '../components/conduct_cos.vue';
import conduct_refund from '../components/conduct_refund.vue';

//const text = ref('# Hello Editor');

export default {
  components: {
    when, where, who, gem, conduct_child, wave, conduct_cos, conduct_refund
  },

  data() {
    return {
      currentSubpanel: 'child',
      unexplored: { 'child': true, 'refund': true, 'cosplay': true }
    }
  },

  computed: {
    ...mapState(useUserStore, ['stateDump']),

    compileLastTurns() { },
  },

  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername']),
    switchSubpanel(subp) {
      this.unexplored[subp] = false
      this.currentSubpanel = subp
      console.log('selecting' + subp)
    },
    wheelToX(e) {
      if (e.ctrlKey) return;

      const parent = this.$refs.xscroll;
      if (!parent) return;

      // If the wheel started over a vertically scrollable element that can
      // actually scroll in this direction, let it handle the scroll.
      if (this._wheelShouldLetChildScrollY(e, parent)) {
        return; // DO NOT preventDefault
      }

      // Otherwise, hijack wheel and use it for horizontal scrolling on parent
      e.preventDefault();
      e.stopPropagation();

      const dx = e.deltaX || 0;
      const dy = e.deltaY || 0;

      // natural: if it's mostly vertical wheel, map dy -> x
      const delta = Math.abs(dy) >= Math.abs(dx) ? dy : dx;
      parent.scrollLeft += delta;
    },

    _wheelShouldLetChildScrollY(e, stopEl) {
      // Walk up from the event target toward the parent container.
      // If we find an element that is vertically scrollable and not "at the edge"
      // for this wheel direction, we let it scroll.
      let el = e.target;

      // Wheel direction: positive dy means scrolling "down"
      const dy = e.deltaY || 0;
      if (dy === 0) return false; // if no vertical intent, treat as horizontal case

      while (el && el !== stopEl && el.nodeType === 1) {
        const style = window.getComputedStyle(el);

        // Only consider elements that could scroll vertically
        const overflowY = style.overflowY;
        const canScrollY =
          (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") &&
          el.scrollHeight > el.clientHeight + 1; // +1 for rounding

        if (canScrollY) {
          const atTop = el.scrollTop <= 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

          // If scrolling down and NOT at bottom -> child can consume
          if (dy > 0 && !atBottom) return true;

          // If scrolling up and NOT at top -> child can consume
          if (dy < 0 && !atTop) return true;

          // Otherwise child is at edge in that direction; keep searching upward
          // so maybe an outer scrollable child (or parent) can consume.
        }

        el = el.parentElement;
      }

      return false;
    },

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

@keyframes switchpanel {
  0% {
    height: 0vh;
  }



  100% {
    height: 77vh;
  }
}

.childselect {
  animation-name: childselect;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}

@keyframes childselect {
  0% {
    top: 1vh;
    opacity: 0;
  }



  100% {
    top: -0.8vh;
    opacity: 1;
  }
}

.cosplayselect {
  animation-name: cosplayselect;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}

@keyframes cosplayselect {
  0% {
    left: -1.8vh;
    opacity: 0;
  }



  100% {
    left: -0.8vh;
    opacity: 1;

  }
}

.refundselect {
  animation-name: refundselect;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}

.frosted-panel {
  background: rgba(0, 0, 0,0.1);
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


@keyframes refundselect {
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