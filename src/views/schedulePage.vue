<template>
  <div class="schedule-root">
    <!-- ================= MOBILE ================= -->
    <div v-if="isMobile" class="m-shell">
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
        style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255, 255 / 0%) 32%);height:101vh;top:0px;width:100%;">
      </div>
      <div class="bg"
        style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:100%;transform:rotateY(180deg);">
      </div>

      <!-- tabs (sticky) -->
      <div class="m-tabs">
        <div class="m-tab" :class="{ active: mobileTab === 'schedule' }" @click="mobileTab='schedule'">SCHEDULE</div>
        <div class="m-tab" :class="{ active: mobileTab === 'who' }" @click="mobileTab='who'">????</div>
      </div>

      <!-- scroll area -->
      <div class="m-panel">
        <div class="m-scroll">

          <!-- SCHEDULE TAB -->
          <div v-if="mobileTab==='schedule'">
            <div class="m-card">
              <div class="m-card-title">SCHEDULE</div>
              <div class="m-text">Under Construction</div>
            </div>
          </div>

          <!-- WHO TAB -->
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
    <!-- ================= DESKTOP ================= -->
    <div v-else class="schedulePage"
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
        style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255, 255 / 0%) 32%);height:101vh;top:0px;width:100%;">
      </div>
      <div class="bg"
        style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:100%;transform:rotateY(180deg);">
      </div>

      <div ref="xscroll" class="contentpanel"
        style="position:absolute; height:100%;top:0;width:100%;background:rgba(128,128,128,0.08);overflow-y:auto;overflow-x:hidden;">
        <div class='scrollablecontentplate' style="position: relative;width: 100%;height: 100%;overflow-y: hidden;">
          <Underconstruction/>

          <div class="switchpanel_schedule" style="position: absolute; left: 80vh; width: 7vh; top: 67vh;">
            <div
              style="position:absolute;height:100%;width: 0.2vh;background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0) 1%, rgba(255, 255, 255, 1) 20%,rgba(255, 255, 255, 1) 80%,rgba(255, 255, 255, 0) 100%);top:1%;left: 43%;">
            </div>

            <div class='submenubtn' @click="switchSubpanel('schedule')"
              :style="{ background: currentSubpanel === 'schedule' ? 'white' : 'grey' }"
              style="position:absolute;width:2vh;height:2vh;top: 10%;left: 28%; filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
              <div v-if="currentSubpanel !== 'schedule'"
                style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5">
              </div>
              <div v-if="currentSubpanel === 'schedule'" class='scheduleselect'
                style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
              <div class="frosted-panel frosted-chip"
                style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2.6vh;text-align: right;">
                SCHEDULE
              </div>
              <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
              <gem v-if="unexplored.schedule" />
            </div>

            <div @click="switchSubpanel('who')" :style="{ background: currentSubpanel === 'who' ? 'white' : 'grey' }"
              style="position:absolute;width:2vh;height:2vh;top: 88%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer">
              <div v-if="currentSubpanel !== 'who'"
                style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5">
              </div>
              <div v-if="currentSubpanel === 'who'" class='whoselect'
                style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
              <div class="frosted-panel frosted-chip"
                style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2.6vh;text-align: right;">
                ???
              </div>
              <div class='submenubtn' style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
              <gem v-if="unexplored.who" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/store"
import { mapActions, mapState } from "pinia"

import floorplan from "../components/floorPlan.vue"
import gem from "../components/gem.vue"
import Underconstruction from "../components/underconstruction.vue"

export default {
  components: { floorplan, gem, Underconstruction },

  data() {
    return {
      // desktop
      currentSubpanel: "schedule",
      unexplored: { schedule: true, who: true },

      // mobile
      isMobile: false,
      mobileTab: "schedule",
      _onResize: null,

      // mobile floor data (独立于 floorplan 组件，保证手机端不依赖 floorplan)
      curfloor: 1,
      fl2word: ["BASEMENT", "FIRST FLOOR", "SECOND FLOOR", "THIRD FLOOR"],
      amenities: {
        0: ["Stage Preparation Room", "Coat Check", "Restroom/Change room"],
        1: ["Main Stage", "Food/Drink Bar", "Gift Booth", "Photo Booth 1", "Huge Fufu Figure", "Premium Booth Area"],
        2: ["Exhibit Booth 2&3", "Official Booth", "Guest Room", "Restroom"],
        3: ["Maid Cafe", "Rooftop Lounge", "VIP Rest Area", "Photo Booth 4"],
      },
    }
  },

  computed: {
    ...mapState(useUserStore, ["stateDump"]),
  },

  methods: {
    ...mapActions(useUserStore, ["sendchat", "getUsername"]),

    switchSubpanel(subp) {
      this.unexplored[subp] = false
      this.currentSubpanel = subp
    },

    // mobile floor switch：0~3
    setfloor(isInc) {
      if (!isInc && this.curfloor <= 0) return
      if (isInc && this.curfloor >= 3) return
      this.curfloor += isInc ? 1 : -1
    },

    updateIsMobile() {
      // 你要更严格就改成 900/768
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
/* ====== keep your desktop animations ====== */
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
  0% { height: 0vh; }
  100% { height: 30vh; }
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
  0% { top: 1vh; opacity: 0; }
  100% { top: -0.8vh; opacity: 1; }
}

.floorselect {
  animation-name: floorselect;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

@keyframes floorselect {
  0% { left: -1.8vh; opacity: 0; }
  100% { left: -0.8vh; opacity: 1; }
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
  0% { top: -2.6vh; opacity: 0; }
  100% { top: -0.8vh; opacity: 1; }
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

.submenubtn:hover { background: white; }

/* ===== MOBILE (关键：防止横滑露出 desktop 元素) ===== */
.schedule-root {
  position: absolute;
  inset: 0;
  overflow: hidden;         /* ✅ 防止横向溢出看到桌面按钮 */
  max-width: 100vw;
}

.m-shell{
  position:absolute;
  inset:0;
  box-sizing: border-box;
  padding: 56px 12px 12px;  /* ✅ 给顶部 MENU 留空间 */
  overflow-x: hidden;       /* ✅ 横滑不露出别的 */
}

.m-tabs{
  position: sticky;         /* ✅ tabs 不被 menu 挡 */
  top: 0;
  z-index: 5;
  display:flex;
  gap:10px;
  margin-bottom:12px;
  padding-top: 6px;
  padding-bottom: 10px;
  background: transparent;
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
  height: calc(100vh - 56px - 12px); /* ✅ 和 m-shell padding-top 对齐 */
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

.m-floor-mid{ flex:1; text-align:center; }
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
