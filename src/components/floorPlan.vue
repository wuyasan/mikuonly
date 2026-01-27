<template>
  <div v-if="isMobile" class="m-shell">
    <!-- tabs -->
    <div class="m-tabs">
      <div class="m-tab" :class="{ active: mobileTab === 'floor' }" @click="mobileTab='floor'">FLOOR</div>
      <div class="m-tab" :class="{ active: mobileTab === 'schedule' }" @click="mobileTab='schedule'">SCHEDULE</div>
      <div class="m-tab" :class="{ active: mobileTab === 'other' }" @click="mobileTab='other'">????</div>
    </div>

    <!-- panel -->
    <div class="m-panel">
      <div class="m-scroll">

        <!-- FLOOR TAB -->
        <div v-if="mobileTab==='floor'">
          <!-- floor switch 控件：同时控制两张卡片 -->
          <div class="m-floor-switch">
            <button class="m-floor-btn" @click="setfloor(false)">◀</button>

            <div class="m-floor-mid">
              <div class="m-floor-num"><span style="opacity:.4">0</span>{{ curfloor }}</div>
              <div class="m-floor-name">{{ fl2word[curfloor] }}</div>
            </div>

            <button class="m-floor-btn" @click="setfloor(true)">▶</button>
          </div>

          <!-- Card 1：图片 -->
          <div class="m-card">
            <div class="m-card-title">FLOOR PLAN</div>
            <!-- ✅ public 静态资源建议写成 /fl1.png，不要写 /public/fl1.png -->
            <img class="m-img" :src="`/fl${curfloor}.png`" alt="floor" />
          </div>

          <!-- Card 2：Amenities -->
          <div class="m-card">
            <div class="m-card-title">AMENITIES</div>

            <div class="m-amenities">
              <div class="m-amenity" v-for="(item, idx) in amenities[curfloor]" :key="idx">
                <span class="m-dot"></span>
                <span class="m-item">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- SCHEDULE TAB（占位） -->
        <div v-else-if="mobileTab==='schedule'">
          <div class="m-card">
            <div class="m-card-title">SCHEDULE</div>
            <div class="m-text">Under Construction</div>
          </div>
        </div>

        <!-- OTHER TAB（占位） -->
        <div v-else>
          <div class="m-card">
            <div class="m-card-title">????</div>
            <div class="m-text">Under Construction</div>
          </div>
        </div>

        <div style="height:24px;"></div>
      </div>
    </div>
  </div>

  <div v-else style="position: absolute; background: rgba(241, 241, 241, 0.6); height: 90vh; width: 90vh; left: 89vh; top: 5vh;">
    <horizontalttl />
    <div class="fg" style="position:absolute;width:70vh;height:100vh;left:-70vh;top:-11%;">
      <img class='flfigure' :src="`fl${curfloor}.png`" style="position: absolute;height: 61%;left: 34.5%;top: 9.8%;mix-blend-mode: multiply;filter: drop-shadow(rgba(0, 0, 118, 0.2) 4vh 4vh 1vh);">
      <div style="position:absolute;top:6%;left:27%;height:2vh;width:2vh;background:black;"></div>
      <div style="position:absolute;top:-27%;left:34.5%;height:200vh;width:0.4vh;background:black;"></div>
      <div style="position:absolute;top: 69%;left:34.5%;height: 0vh;width: 133.4vh;/* background:black; */border-top: 0.3vh dotted #0000003d;"></div>
      <div style="position:absolute;top: 10%;left: 95.5%;height: 125vh;width: 0.4vh;/* background:black; */border-left: 0.3vh dotted #0000003d;"></div>
      <div style="position:absolute;top:9.6%;left:-66.5%;height:0.4vh;width:248.4vh;background:black;"></div>
      <div style="position:absolute;bottom:-15%;font-family:font5;font-size:24vh;left:19%;font-weight:900;color:#00000008;width:236vh;">PLANS</div>
      <div class='floorAnnot' style="position: absolute;top: 119.7vh;font-family: font5;font-size: 10vh;left: -101vh;font-weight: 900;color: rgba(0, 0, 0, 0.99);width: 236vh;transform: rotateZ(-90deg);text-align:right">&gt;&gt;&gt; {{ fl2word[curfloor] }}</div>
      <div style="position: absolute;top: 10%;width: 41vh;font-family: font11;font-size: 2vh;height: 30vh;overflow: hidden;line-height: 1.5vh;transform: rotateZ(-90deg);left: 0vh;opacity:0.5;">be on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on timebe on time be on time be on time</div>
    </div>
    <div class="floorpanel" style="position:absolute;background:rgba(241, 241, 241, 0.6);height:100%;right:0;top:0;overflow:hidden;"><img src="/public/city.jpg" style="position:absolute;left:0%;bottom:0vh;width:100%;">
      <div style="position:absolute;width:100%;height:66.3%;background:#ffffff;top:15%;overflow:hidden;"></div>
      <div style="position:absolute;width:100%;height:66.3%;background:#ffffff8c;top:19%;overflow:hidden;"></div>
      <div style="position:absolute;width:100%;height:66.3%;background:#ffffff8c;top:23%;overflow:hidden;"></div><img src="/public/team.png" style="position:absolute;width:79vh;right:-15.4%;top:40%;mix-blend-mode:multiply;opacity:0.1;">
      <div class="windowHandle" style="position:absolute;width:100%;height:3%;background:white;top:0%;overflow:hidden;">
        <div style="position:absolute;top:-25%;color:#00000026;font-family:font9;font-size:2.5vh;font-weight:900;">F L O O R</div>
      </div>
      <div class="header1" style="position:absolute;width:100%;height:3%;top:4%;">
        <div style="position:absolute;top:-25%;color:#0000009e;font-family:font5;font-size:1.2vh;left:3%;">INFORMATION DISTRIBUTED BY</div>
        <div style="position:absolute;top:-25%;color:#0000009e;font-family:font5;font-size:1.2vh;right:3%;">MIKU ONLY TEAM</div>
        <div style="position:absolute;top:267%;color:#0000009e;font-family:font5;font-size:1.2vh;right:3%;">LAST UPDATED</div>
        <div style="position:absolute;top:27%;color:#717171;font-family:font9;font-size:4.3vh;left:2.8%;letter-spacing:6.5vh;width:134%;">FLOOR PLANS</div>
      </div>
      <div class="glance" style="position:absolute;width:100%;height:3%;top:20%;">
        <div style="position:absolute;top:0%;background: #ddc74f;font-family:font5;font-size:1.2vh;left:3%;width:6%;height:146%;filter:drop-shadow(0.6vh 6px 5.7px rgba(100,100,100.01));"></div>
        <div style="position:absolute;top:-66%;color:#717171;font-family:font9;font-size:4.3vh;left:10.8%;width:105%;">LAUNCHED VIEW RENDER</div>
      </div>
      <div class="auxInfo" style="position:absolute;width:100%;height:3%;top:36%;">
        <div style="position:absolute;top: -3vh;left:15%;width:24vh;height:24vh;background-image:radial-gradient(rgba(0,0,0,0.2) 0.2vh, transparent 0);background-size:6vh 6vh;background-position:-19px -19px;"></div>
        <div class="floor" style="position:absolute;left:13vh;top:-2vh;height:18vh;width:41vh;perspective:51vh;">

          <div
              class="floorDia3"
              :style="{ background: curfloor === 3 ? '#ff000078' : '#654c4c78' }"
              style="position:absolute;transform:rotateX(60deg);width:10vh;height:10vh;left:2vh;cursor:pointer;"
              @click="selectFloor(3)"
          ></div>

          <div
              class="floorDia2"
              :style="{ background: curfloor === 2 ? '#ff000078' : '#654c4c78' }"
              style="position:absolute;transform:rotateX(60deg) translateZ(-4vh);width:10vh;height:10vh;left:2vh;cursor:pointer;"
              @click="selectFloor(2)"
          ></div>

          <div
              class="floorDia1"
              :style="{ background: curfloor === 1 ? '#ff000078' : '#654c4c78' }"
              style="position:absolute;transform:rotateX(60deg) translateZ(-8vh);width:10vh;height:10vh;left:2vh;cursor:pointer;"
              @click="selectFloor(1)"
          ></div>

          <div
              class="floorDia0"
              :style="{ background: curfloor === 0 ? '#ff000078' : '#654c4c78' }"
              style="position:absolute;transform:rotateX(60deg) translateZ(-12vh);width:10vh;height:10vh;left:2vh;cursor:pointer;"
              @click="selectFloor(0)"
          >
            <div style="position:absolute;background:black;width:23vh;height:0.4vh;left:-7vh;top:0vh;"></div>
            <div style="position:absolute;background:black;width:0.2vh;height:34.7vh;left:0vh;top:-16vh;"></div>
            <div style="position:absolute;bottom:-51%;left:-1%;width:59vh;font-size:4vh;color:black;font-family:font10;font-weight:900;">
              {{ fl2word[curfloor] }}
            </div>
          </div>

          <div style="position:absolute;background:black;transform:rotateX(-32deg) translateZ(-12vh);width:0.2vh;height:34.7vh;left:2vh;top:1vh;"></div>
        </div>

        <div class='eleNum' style="position:absolute;bottom: -4.8vh;color: #000000bf;font-family: font4;font-size: 7vh;right: 58.4%;/* letter-spacing:0.9vh; */letter-spacing: -1.2vh;"><span style="color: grey">0</span>{{ curfloor }}</div>
        <div style="position: absolute;bottom: -4.8vh;color: rgba(0, 0, 0, 0.75);font-family: font5;font-size: 7vh;left: 44.4%;font-weight: 900;width: 100vh;">FLOOR SELECT</div>
        <div style="position:absolute;bottom: -4.8vh;color: #000000bf;font-family: font8;font-size: 1.7vh;right: 3.4%;font-weight:900;">Click on arrows to change floor</div>
        <div class='eleUp' @click='setfloor(true)' style="cursor: pointer;width: 0;height: 0;border-left: 4vh solid transparent;border-right: 4vh solid transparent;left: 31vh;top: -5vh;position: absolute;">
          <gem v-if='unvisited["upel"]' />
        </div>
        <div class='eleDown' @click='setfloor(false)' style="cursor: pointer; width: 0;height: 0;border-left: 4vh solid transparent;border-right: 4vh solid transparent;left: 31vh;top: 5vh;position: absolute;transform: rotatez(180deg)">
          <gem v-if='unvisited["dnel"]' />
        </div>
      </div>
      <div class="img-txt-expand" style="position:absolute;top:62%;width:100%;right:-13%;filter: drop-shadow(0.7vh 1.4vh 0.7vh rgba(0,0,0,0.5));">
        <div style="position:absolute;top:1%;width:17%;height:3vh;line-height:1.5vh;background: #fff700;">
          <div style="position:absolute;top:46%;width:73%;font-family:font2;font-size:1.3vh;height:30vh;overflow:auto;line-height:1.5vh;color: #000000;left:36%;">Amentities</div>
        </div>
        <div style="position:absolute;top:1%;width:2%;font-family:font1;font-size:2vh;height:3vh;line-height:1.5vh;background:#00000038;"></div>
        <div style="position:absolute;top:1%;width:4%;font-family:font1;font-size:2vh;height:3vh;line-height:1.5vh;background:#00000038;"></div>
        <div style="position:absolute;top:-23%;width:0;font-family:font1;font-size:2vh;height:0;line-height:1.5vh;border-top:1.6vh solid transparent;border-bottom:1.6vh solid transparent;border-right: 1.6vh solid #fff700;transform:rotateZ(180deg);right:80.4%;"></div>
        <div style="position:absolute;top:-23%;width:0;font-family:font1;font-size:2vh;height:0;line-height:1.5vh;border-top:1.6vh solid transparent;border-bottom:1.6vh solid transparent;border-right: 1.6vh solid #fff700;transform:rotateZ(180deg);right:78%;"></div>
      </div>
      <div
          class="img-txt-expand-floor-amentities"
          style="position:absolute;top: 67%;width: 75%;right: 12%;filter:drop-shadow(0.7vh 1.4vh 0.7vh #4444dd);background: #ff000000;height: 12vh;">
        <div
            v-for="(item, idx) in amenities[curfloor]"
            :key="idx"
            class="single-amentity"
            style="position: relative;width: 10vh;height: 21%;overflow: hidden;display: inline-block;margin-right:2vh"
        >
          <div style="position:absolute;top:1%;width: 100%;height: 100%;line-height:1.5vh;background: #afafaf99;">
            <div
                style="position:absolute;top: -12%;width:73%;font-family:font2;font-size:1.3vh;height:30vh;overflow:hidden;line-height:1.5vh;color: #000000;left: 1%;"
            >
              {{ item }}
            </div>
          </div>

          <div
              style="position:absolute;top: 48%;width:0;font-family:font1;font-size:2vh;height:0;line-height:1.5vh;border-top: 1vh solid transparent;border-bottom: 1vh solid transparent;border-right: 1vh solid #ffffff;transform: rotateZ(225deg);left: 91.2%;filter: drop-shadow(0vh 0vh 0.5vh #46c3ff);"
          ></div>
        </div>
      </div>
      <div class='bottomline' style="position:absolute;width:100%;height: 0.2%;background:white;bottom: -30%;"></div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'
import horizontalttl from './horizontalttl.vue'
import gem from '../components/gem.vue'

export default {
  components: { horizontalttl, gem },

  data() {
    return {
      // ✅ mobile
      isMobile: false,
      mobileTab: 'floor',
      _onResize: null,

      // 你原来的
      curfloor: 1,
      fl2word: ['BASEMENT', 'FIRST FLOOR', 'SECOND FLOOR', 'THIRD FLOOR', 'gem'],
      unvisited: { 'upel': true, 'dnel': true },

      amenities: {
        0: ['Stage Preparation Room', 'Coat Check', 'Restroom/Change room'],
        1: ['Main Stage', 'Food/Drink Bar', 'Gift Booth', 'Photo Booth 1', 'Huge Fufu Figure', 'Premium Booth Area'],
        2: ['Exhibit Booth 2&3', 'Official Booth', 'Guest Room', 'Restroom'],
        3: ['Maid Cafe', 'Rooftop Lounge', 'VIP Rest Area', 'Photo Booth 4'],
      },
    }
  },

  computed: {
    ...mapState(useUserStore, ['stateDump']),
  },

  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername']),

    // ✅ desktop 那些菱形点击用的（你原来 template 里有 @click="selectFloor(x)"，但 script 里没定义，会报错）
    selectFloor(n) {
      if (n < 0 || n > 3) return
      this.curfloor = n
      // 同步一下 unvisited（可选）
      this.unvisited.upel = false
      this.unvisited.dnel = false
    },

    // ✅ 你原来的切楼层逻辑（我只改了上限下限，让 0~3 都可切）
    setfloor(isInc) {
      if (!isInc && this.curfloor <= 0) return
      if (isInc && this.curfloor >= 3) return

      if (isInc) {
        this.curfloor += 1
        this.unvisited['upel'] = false
      } else {
        this.curfloor -= 1
        this.unvisited['dnel'] = false
      }
    },

    // ✅ mobile 判断
    updateIsMobile() {
      this.isMobile = window.matchMedia("(max-width: 1025px)").matches
    },
  },

  mounted() {
    this.updateIsMobile()
    this._onResize = () => this.updateIsMobile()
    window.addEventListener("resize", this._onResize, { passive: true })
  },

  beforeUnmount() {
    if (this._onResize) window.removeEventListener("resize", this._onResize)
  },
}
</script>
<style>
.eleUp,
.eleDown {
  border-bottom: 3vh solid #979797;
}

.eleUp:hover,
.eleDown:hover {
  border-bottom: 3vh solid rgb(0, 162, 255);
}

.bottomline {
  animation-name: bottomline;
  animation-delay: 0s;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

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

.floorpanel {
  animation-name: floorpanel;
  animation-delay: 0.8s;
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;

}



@keyframes floorpanel {

  0% {
    opacity: 0;
    width: 90%;
  }


  100% {
    opacity: 1;
    width: 100%;
  }

}

.m-shell{
  position:absolute;
  inset:0;
  padding: 12px;
  box-sizing: border-box;
}

.m-tabs{
  display:flex;
  gap:10px;
  margin-bottom:12px;
}

.m-tab{
  flex:1;
  text-align:center;
  padding:10px 0;
  border-radius:999px;
  background: rgba(0,0,0,0.12);
  color:#111;
  font-family: font5;
  font-weight:900;
  letter-spacing: 0.2vh;
  cursor:pointer;
  user-select:none;
}

.m-tab.active{
  background: rgba(255,255,255,0.7);
  box-shadow: 0 8px 18px rgba(0,0,0,0.18);
}

.m-panel{
  position:relative;
  height: calc(100vh - 70px);
  border-radius: 16px;
  background: rgba(241,241,241,0.65);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  overflow:hidden;
}

.m-scroll{
  height:100%;
  overflow:auto;
  padding: 14px;
  box-sizing:border-box;
}

.m-floor-switch{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 10px;
  margin-bottom: 12px;
}

.m-floor-btn{
  width:44px;
  height:44px;
  border-radius: 12px;
  border:none;
  background: rgba(0,0,0,0.15);
  font-size: 18px;
  cursor:pointer;
}

.m-floor-mid{
  flex:1;
  text-align:center;
}

.m-floor-num{
  font-family: font4;
  font-size: 28px;
  font-weight:900;
  line-height: 1;
}

.m-floor-name{
  font-family: font5;
  font-size: 14px;
  font-weight:900;
  opacity: 0.8;
  margin-top: 2px;
}

.m-card{
  background: rgba(255,255,255,0.75);
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 10px 22px rgba(0,0,0,0.12);
  margin-bottom: 12px;
}

.m-card-title{
  font-family: font5;
  font-weight: 900;
  letter-spacing: 0.25vh;
  margin-bottom: 10px;
  color:#333;
}

.m-img{
  width:100%;
  border-radius: 12px;
  display:block;
}

.m-amenities{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.m-amenity{
  display:flex;
  align-items:flex-start;
  gap:10px;
  padding: 10px;
  border-radius: 12px;
  background: rgba(175,175,175,0.35);
}

.m-dot{
  width:10px;
  height:10px;
  border-radius:999px;
  background: rgba(0,162,255,0.9);
  margin-top:4px;
  flex: 0 0 auto;
}

.m-item{
  font-family: font2;
  font-size: 14px;
  line-height: 18px;
  color:#111;
}

.m-text{
  font-family: font2;
  font-size: 14px;
  line-height: 18px;
  opacity: 0.8;
}
</style>
