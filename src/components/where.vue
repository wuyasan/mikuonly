<template>
  <div style="position: absolute;background: rgba(241, 241, 241, 0.6);height: 200%;width: 81vh;right: 15vh;top: -64%;">
    <horizontalttl />
    <div class="where" style="position: absolute; background: rgba(241, 241, 241, 0.6); height: 100%; right: 0; top: 0; overflow: hidden;"><img src="/public/city.jpg" style="position:absolute;left:0%;bottom:0vh;width:100%;">
      <div style="position:absolute;width:100%;height:66.3%;background:#ffffff;top:15%;overflow:hidden;"></div>
      <div style="position:absolute;width:100%;height:66.3%;background:#ffffff8c;top:19%;overflow:hidden;"></div>
      <div style="position:absolute;width:100%;height:66.3%;background:#ffffff8c;top:23%;overflow:hidden;"></div>
      <img class='spacebg' :src="curImage" alt="event space" style="height: 54vh;position: absolute;filter: contrast(70%) brightness(528%) grayscale(100%);mix-blend-mode: multiply;top: 12vh;left: 0%;" />
      <div class="windowHandle" style="position:absolute;width:100%;height:3%;background:white;top:0%;overflow:hidden;">
        <div style="position:absolute;top:-25%;color:#00000026;font-family:font9;font-size:2.5vh;font-weight:900;">W H E R E</div>
      </div>
      <div class="header1" style="position:absolute;width:100%;height:3%;top:4%;">
        <div style="position:absolute;top:-25%;color:#0000009e;font-family:font5;font-size:1.2vh;left:3%;">INFORMATION DISTRIBUTED BY</div>
        <div style="position:absolute;top:-25%;color:#0000009e;font-family:font5;font-size:1.2vh;right:3%;">MIKU ONLY TEAM</div>
        <div style="position:absolute;top:267%;color:#0000009e;font-family:font5;font-size:1.2vh;right:3%;">LAST UPDATED</div>
        <div style="position:absolute;top:27%;color:#717171;font-family:font9;font-size:4.3vh;left: 2.6%;letter-spacing: 3.25vh;width:100%;">EVENT LOCATION</div>
      </div>
      <div class="glance" style="position: absolute; width: 100%; height: 3%; top: 20%;">
        <div style="position:absolute;top:10vh;background:#91978d;font-family:font5;font-size:1.2vh;left:-5%;width:129%;height:146%;"></div>
        <div style="position:absolute;top: -4vh;background:#91978d;font-family:font5;font-size:1.2vh;left: 58.9%;width:1px;height: 14vh;"></div>
        <div style="position:absolute;top: 0vh;color:#717171;font-family:font9;font-size:4.3vh;right: -1%;width:41%;/* transform:rotatez(90deg); */height:29vh;line-height:4.4vh;"><a href="https://www.google.com/maps/search/?api=1&amp;query=Melrose+Ballroom+36-08+33rd+St+Queens+NY+11106" target="_blank" rel="noopener noreferrer" style="color:inherit;width:100%;text-decoration:none;">
            <div style="position: absolute;top: -3vh;right: 5.4vh;color: #000000;/* mix-blend-mode:multiply; */font-size: 1.7vh;text-align:right;font-family: font9;"> 36-08 33rd St</div><span style="background:#454545;color:white;mix-blend-mode:multiply;font-size: 3.9vh;"> Long Island City </span>
            <div style="/* background:#454545; */color: #000000;/* mix-blend-mode:multiply; */font-size: 1vh;letter-spacing: 1.7vh;">New York City</div>
          </a></div>
        <div style="position:absolute;width:39vh;height:25vh;top:1vh;left:1vh;border:solid white 2vh;"></div>
        <img class="spacebg" :src="curImage" alt="event space" style="height: 22vh; position: absolute; top: 0vh; left: 5%;">
      </div>
      <div class="photoSwitcher" style="position: absolute;width: 14vh;height: 7vh;top: 42vh;left: 66vh;font-size: 1.6vh;">
        <div @click='setPic(0)' :class="currentImageIndex != 0 ? 'figunselected' : 'figselected'" style="position: absolute;width: 64%;height: 38%;top: -26%;left: 5%;filter: drop-shadow(rgb(145, 151, 141) 0.7vh 0.7vh 0.6vh);cursor: pointer;">
          <div style="position: absolute; width: 94%; height: 38%; top: 30%; left: 19%; font-weight: 900;">Exhibit. 1</div>
        </div>
        <div @click='setPic(1)' :class="currentImageIndex != 1 ? 'figunselected' : 'figselected'" class="figunselected" style="position: absolute;width: 64%;height: 38%;top: 33%;left: 5%;filter: drop-shadow(rgb(145, 151, 141) 0.7vh 0.7vh 0.6vh);cursor: pointer;">
          <div style="position: absolute; width: 94%; height: 38%; top: 30%; left: 19%; font-weight: 900;">Exhibit. 2</div>
        </div>
        <div @click='setPic(2)' :class="currentImageIndex != 2 ? 'figunselected' : 'figselected'" class="figunselected" style="position: absolute;width: 64%;height: 38%;top: 93%;left: 5%;filter: drop-shadow(rgb(145, 151, 141) 0.7vh 0.7vh 0.6vh);cursor: pointer;">
          <div style="position: absolute; width: 94%; height: 38%; top: 30%; left: 19%; font-weight: 900;">Exhibit. 3</div>
        </div>
      </div>
      <div class="img-txt-expand" style="position:absolute;top:54%;width: 126%;right: -53%;">
        <div style="position:absolute;bottom:-2vh;color:#595959;font-family:font8;right: 59.8%;width:45vh;filter:drop-shadow(0.6vh 6px 5.7px rgba(100,100,100.01));padding-left:1vh;font-weight:900;font-size:5vh;"><a href="https://www.google.com/maps/search/?api=1&amp;query=Melrose+Ballroom+36-08+33rd+St+Queens+NY+11106" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;">“Melrose Ballroom”</a></div>
        <div class="frosted-location" style="position:absolute;top:1vh;width:61%;height:20vh;left:-21%;color:black;font-size:2vh;font-family:font5;text-align:right;overflow:auto;"> Melrose Ballroom is a modern, upscale event venue in the heart of Long Island City, Queens (36-08 33rd St, Long Island City, NY 11106). Anchored by a dramatic, high-ceiling Main Ballroom, it also offers a mezzanine overlooking the main floor plus rooftop lounge/deck options—naturally creating a premium, multi-level layout for smooth guest flow, VIP separation, and elevated social moments. Designed for high-impact productions, the venue is known for its 30-foot video wall for immersive visuals and branding, paired with a hydraulic/adjustable stage and performance-forward lighting/audio capabilities (including line-array style setup descriptions). On the operations side, it’s built for professional execution with amenities such as built-in bar service, coat check, and back-of-house support that can accommodate catering needs—helping your event feel polished from arrival to finale </div>
      </div>
      <div style="position:absolute;width:100%;height:0.3%;background:#ffffff;bottom:0%;overflow:hidden;"></div>
      <div class="glance" style="position:absolute;height:63%;color:#00000014;top:31%;transform:rotateZ(90deg);font-family:font9;font-size:13vh;left: -51%;">LOCATION</div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'
import horizontalttl from './horizontalttl.vue'
//const text = ref('# Hello Editor');

export default {
  components: { horizontalttl },

  data() {
    return {

      // 幻灯片图片列表
      currentImageIndex: 0,
    }
  },


  computed: {
    ...mapState(useUserStore, ['stateDump']),

    curImage() {
      return [
        '/eventspace2.jpg',
        '/eventspace1.png',
        '/eventspace3.jpg',
      ][this.currentImageIndex]
    },
  },

  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername']),
    setPic(i) {
      this.currentImageIndex = i
    }


  },

  mounted() { },

  updated() { },
}
</script>
<style>
.figunselected {
  background: #000000;
  color: white;
  mix-blend-mode: multiply;
}

.figselected {
  background: #fff;
  color: #000;
}



.bottomline {
  animation-name: bottomline;
  animation-delay: 0s;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

.event-slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3vh;
  height: 3vh;
  background: rgba(0, 0, 0, 0.45);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4vh;
  cursor: pointer;
  user-select: none;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.event-slider-arrow-left {
  left: 1.2vh;
}

.event-slider-arrow-right {
  right: 1.2vh;
}

.event-slider-dots {
  position: absolute;
  bottom: 1vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8vh;
}

.event-slider-dot {
  width: 0.8vh;
  height: 0.8vh;
  background: rgba(255, 255, 255, 0.45);
}

.event-slider-dot.active {
  background: #ffffff;
}




@keyframes bottomline {

  0% {
    opacity: 0;
    bottom: 3%;
  }


  100% {
    opacity: 1;
    bottom: -2%;
  }

}

.where {
  animation-name: where;
  animation-delay: 0.8s;
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}



@keyframes where {

  0% {
    opacity: 0;
    width: 90%;
  }


  100% {
    opacity: 1;
    width: 100%;
  }

}
</style>
