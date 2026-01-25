<template>
  <!-- Desktop / Tablet template：保持你原来的 when/where/who -->
  <div
    v-if="!isMobile"
    class="infopage infopage--desktop"
    style="overflow: hidden; position: absolute; width: 100vw; height: 100vh; left: 0%; top: 0%; background: rgb(255, 255, 255);"
  >
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255, 255, 255), rgb(190, 254, 255));height:48vh;bottom:0px;"></div>
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255 164 251), rgb(255 255 255));height:48vh;top:0px;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgba(0, 0, 0, 1) 0%, rgb(255 255 255 / 0%) 50%);height:101vh;top:0px;width: 54%;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;"></div>
    <div class="bg" style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;transform:rotateY(180deg);"></div>

    <div class="contentpanel" style="position:absolute;height:40%;top:35vh;width:100%;background:#80808014;z-index:2">
      <div class="switchpanel" style="position:absolute;right: -0.8vh;width: 7vh;height: 77vh;top: -25vh;">
        <div style="position:absolute;height:100%;width: 0.2vh;background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0) 1%, rgba(255, 255, 255, 1) 20%,rgba(255, 255, 255, 1) 80%,rgba(255, 255, 255, 0) 100%);top:1%;left: 43%;"> </div>

        <div
          class="submenubtn"
          @click="switchSubpanel('when')"
          :style="{ background: currentSubpanel === 'when' ? 'white' : 'grey' }"
          style="position:absolute;width:2vh;height:2vh;top: 10%;left: 28%; filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer"
        >
          <div v-if="currentSubpanel != 'when'" style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5"></div>
          <div v-if="currentSubpanel == 'when'" class="whenselect" style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
          <div class="frosted-panel_info frosted-chip_info" style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2vh;text-align: center;">WHEN</div>
          <div class="submenubtn" style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
          <gem v-if="unexplored['when']" />
        </div>

        <div
          class="submenubtn"
          @click="switchSubpanel('where')"
          :style="{ background: currentSubpanel === 'where' ? 'white' : 'grey' }"
          style="position:absolute;width:2vh;height:2vh;top: 53%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer"
        >
          <div v-if="currentSubpanel != 'where'" style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5"></div>
          <div v-if="currentSubpanel == 'where'" class="whereselect" style="position:absolute;width: 3.6vh;height: 3.6vh;top:-0.8vh;border: solid white 0.2vh;"></div>
          <div class="frosted-panel_info frosted-chip_info" style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2vh;text-align: center;">WHERE</div>
          <div class="submenubtn" style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
          <gem v-if="unexplored['where']" />
        </div>

        <div
          @click="switchSubpanel('who')"
          :style="{ background: currentSubpanel === 'who' ? 'white' : 'grey' }"
          style="position:absolute;width:2vh;height:2vh;top: 88%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer"
        >
          <div v-if="currentSubpanel != 'who'" style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5"></div>
          <div v-if="currentSubpanel == 'who'" class="whoselect" style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
          <div class="frosted-panel_info frosted-chip_info" style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2vh;text-align:center;" >WHO<br><span style="font-size:1vh; opacity:0.8; letter-spacing:0.2vh;">(GUESTS)</span></div>
          <div class="submenubtn" style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
          <gem v-if="unexplored['who']" />
        </div>
      </div>

      <when v-if="currentSubpanel == 'when'" />
      <where v-if="currentSubpanel == 'where'" />
      <who v-if="currentSubpanel == 'who'" />
    </div>

    <div class="fg">
      <img
        src="/public/mikuonly2026.png"
        style="filter:drop-shadow(4vh 4vh 1vh rgba(0,0,118,0.2));position:absolute;height:100%;left:18%;z-index:1;"
      />
    </div>
  </div>

  <!-- Mobile template：信息区完全重写（卡片流式布局） -->
  <div
    v-else
    class="infopage infopage--mobile"
    style="overflow:hidden; position:absolute; width:100vw; height:100vh; left:0%; top:0%; background: rgb(255, 255, 255);"
  >
    <!-- 背景：和 desktop 一样 -->
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255, 255, 255), rgb(190, 254, 255));height:48vh;bottom:0px;"></div>
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255 164 251), rgb(255 255 255));height:48vh;top:0px;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgba(0, 0, 0, 1) 0%, rgb(255 255 255 / 0%) 50%);height:101vh;top:0px;width: 54%;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;"></div>
    <div class="bg" style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;transform:rotateY(180deg);"></div>

    <!-- 立绘：背景层 -->
    <div class="fg">
      <img src="/public/mikuonly2026.png" />
    </div>

    <!-- 手机信息区 -->
    <div class="m-shell">
      <div class="m-tabs">
        <button class="m-tab" :class="{ active: mTab === 'when' }" @click="mTab='when'">WHEN</button>
        <button class="m-tab" :class="{ active: mTab === 'where' }" @click="mTab='where'">WHERE</button>
        <button class="m-tab" :class="{ active: mTab === 'who' }" @click="mTab='who'">
          WHO <span class="m-tab-sub">(GUESTS)</span>
        </button>
      </div>

      <div class="m-panel frosted-panel_info">
        <div class="m-scroll">
          <!-- WHEN -->
          <div v-if="mTab==='when'" class="m-stack">
            <div class="m-card">
              <div class="m-title">MEETING TIME</div>
              <div class="m-kv">
                <div class="m-kv-label">Date</div>
                <div class="m-kv-value">07 March, 2026</div>
              </div>
            </div>

            <div class="m-card">
              <div class="m-title">TIME REMAINING</div>
              <div class="m-count">
                <div class="m-big">{{ countdown.days }}</div><div class="m-unit">DAYS</div>
              </div>
              <div class="m-count-row">
                <div class="m-pill"><span class="m-pill-n">{{ countdown.hours }}</span> hr</div>
                <div class="m-pill"><span class="m-pill-n">{{ countdown.minutes }}</span> min</div>
                <div class="m-pill"><span class="m-pill-n">{{ countdown.seconds }}</span> sec</div>
              </div>
              <div class="m-note" v-if="countdown.over">Event time reached ✅</div>
            </div>

            <div class="m-card">
              <div class="m-title">TICKETING</div>
              <div class="m-actions m-actions--3">
                <a class="m-btn" :href="ticketing.entry" target="_blank" rel="noreferrer">ENTRY</a>
                <a class="m-btn" :href="ticketing.general" target="_blank" rel="noreferrer">GENERAL</a>
                <a class="m-btn" :href="ticketing.vip" target="_blank" rel="noreferrer">VIP</a>
              </div>
            </div>

            <!-- ✅ 再放 ANNOUNCEMENT（与上面互换位置） -->
            <div class="m-card">
              <div class="m-title">ANNOUNCEMENT</div>
              <div class="m-text">
                MikuOnly NYC 2026 is officially starting!<br />
                Cross the screen and step into the spotlight, where your performance brings the virtual world to life.<br />
                Kick off your year on our stage with melodies of magic and symphonies of dreams.
              </div>
            </div>
          </div>

          <!-- WHERE -->
          <div v-else-if="mTab==='where'" class="m-stack">
            <div class="m-card">
              <div class="m-title">VENUE</div>

              <div class="m-kv">
                <div class="m-kv-label">Name</div>
                <div class="m-kv-value">Melrose Ballroom</div>
              </div>
              <div class="m-kv">
                <div class="m-kv-label">Address</div>
                <div class="m-kv-value">36-08 33rd St, Long Island City, NY 11106</div>
              </div>

              <div class="m-actions">
                <a class="m-btn" :href="mapUrl" target="_blank" rel="noreferrer">OPEN MAP</a>
              </div>
            </div>

            <div class="m-card">
              <div class="m-title">ABOUT THE VENUE</div>
              <div class="m-text">
                Melrose Ballroom is a modern, upscale event venue in the heart of Long Island City, Queens (36-08 33rd St, Long Island City, NY 11106).
                Anchored by a dramatic, high-ceiling Main Ballroom, it also offers a mezzanine overlooking the main floor plus rooftop lounge/deck options—
                naturally creating a premium, multi-level layout for smooth guest flow, VIP separation, and elevated social moments.
                Designed for high-impact productions, the venue is known for its 30-foot video wall for immersive visuals and branding,
                paired with a hydraulic/adjustable stage and performance-forward lighting/audio capabilities.
                On the operations side, it’s built for professional execution with amenities such as built-in bar service, coat check,
                and back-of-house support that can accommodate catering needs—helping your event feel polished from arrival to finale.
              </div>
            </div>

            <div class="m-card">
              <div class="m-title">SPACE PHOTOS</div>

              <div class="m-photo-main">
                <img :src="curWhereImage" alt="venue" />
              </div>

              <div class="m-photo-strip">
                <button
                  v-for="(img, i) in whereImages"
                  :key="img"
                  class="m-photo-thumb"
                  :class="{ active: i === whereImageIndex }"
                  @click="whereImageIndex = i"
                >
                  <img :src="img" alt="thumb" />
                </button>
              </div>
            </div>
          </div>

          <!-- WHO -->
          <div v-else class="m-stack">
            <div class="m-card">
              <div class="m-title">GUEST LIST</div>

              <div class="m-grid">
                <div class="m-guest" v-for="g in guests" :key="g.id">
                  <div class="m-guest-avatar">
                    <img :src="g.avatar" :alt="g.name" />
                  </div>
                  <div class="m-guest-name">{{ g.name }}</div>
                  <div class="m-guest-role">{{ g.role }}</div>
                  <a class="m-guest-link" :href="`https://www.instagram.com/${g.insta}/`" target="_blank" rel="noreferrer">
                    @{{ g.insta }}
                  </a>
                </div>
              </div>
            </div>

            <div class="m-card">
              <div class="m-title">NOTE</div>
              <div class="m-text">
                Guest list is subject to updates. Follow official channels for the latest info.
              </div>
            </div>
          </div>

          <div style="height: 16px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/store";

// desktop-only components
import when from "../components/when.vue";
import where from "../components/where.vue";
import who from "../components/who.vue";
import gem from "../components/gem.vue";

export default {
  components: { when, where, who, gem },

  data() {
    return {
      // desktop
      currentSubpanel: "when",
      unexplored: { when: true, where: true, who: true },

      // mobile
      isMobile: false,
      mTab: "when",
      _onResize: null,

      // countdown
      now: Date.now(),
      _tick: null,

      // when.vue 里的 ticket 链接
      ticketing: {
        entry: "https://www.ny-miku-only.com/event-details/miku-only-ny-2026-entry-admission",
        general: "https://www.ny-miku-only.com/event-details/miku-only-ny-2026-general-admission",
        vip: "https://www.ny-miku-only.com/event-details/miku-only-ny-2026-vip-admission"
      },

      // where.vue 里的地图链接
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Melrose+Ballroom+36-08+33rd+St+Queens+NY+11106",

      // where.vue 里的场地图
      whereImages: ["/eventspace2.jpg", "/eventspace1.png", "/eventspace3.jpg"],
      whereImageIndex: 0,

      // who.vue 里的 guest 列表
      guests: [
        { id: "mikusagi01", name: "mikusagi01", role: "GUEST", insta: "mikusagi01", avatar: "/mikusagi01.png" },
        { id: "miraidol_official", name: "miraidol_official", role: "GUEST", insta: "miraidol_official", avatar: "/miraidol_official.jpg" },
        { id: "humanwannabes", name: "humanwannabes", role: "GUEST", insta: "humanwannabes", avatar: "/humanwannabes.jpg" },
        { id: "vvbv_anwei", name: "vvbv_anwei", role: "GUEST", insta: "vvbv_anwei", avatar: "/vvbv_anwei.jpg" },
        { id: "huluwa_orzlaplace", name: "huluwa_orzlaplace", role: "GUEST", insta: "huluwa_orzlaplace", avatar: "/huluwa_orzlaplace.jpg" },
        { id: "suyinsama", name: "suyinsama", role: "GUEST", insta: "suyinsama", avatar: "/suyinsama.jpg" },
      ],
    };
  },

  computed: {
    ...mapState(useUserStore, ["stateDump"]),

    startAtISO() {
      return "2026-03-07T00:00:00-05:00";
    },

    countdown() {
      const target = new Date(this.startAtISO).getTime();
      let diff = target - this.now;

      const over = diff <= 0;
      if (diff < 0) diff = 0;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      return { days, hours, minutes, seconds, over };
    },

    curWhereImage() {
      return this.whereImages[this.whereImageIndex];
    },
  },

  methods: {
    ...mapActions(useUserStore, ["sendchat", "getUsername"]),

    switchSubpanel(subp) {
      this.unexplored[subp] = false;
      this.currentSubpanel = subp;
      if (this.isMobile) this.mTab = subp;
    },

    updateIsMobile() {
      this.isMobile = window.matchMedia("(max-width: 1200)").matches;
      if (this.isMobile) this.mTab = this.currentSubpanel;
    },
  },

  mounted() {
    this.updateIsMobile();
    this._onResize = () => this.updateIsMobile();
    window.addEventListener("resize", this._onResize, { passive: true });

    this._tick = window.setInterval(() => {
      this.now = Date.now();
    }, 1000);
  },

  beforeUnmount() {
    if (this._onResize) window.removeEventListener("resize", this._onResize);
    if (this._tick) window.clearInterval(this._tick);
  },
};
</script>

<style>
/* =========================================================
   ✅ 字体：改成你截图那种“细、UI、干净”的风格（全局）
   - mac/iOS: Avenir / SF Pro / Helvetica Neue
   - win: Segoe UI / Arial
   ========================================================= */
.infopage {
  font-family:
    "Avenir Next",
    Avenir,
    "Helvetica Neue",
    Helvetica,
    -apple-system,
    BlinkMacSystemFont,
    "SF Pro Display",
    "SF Pro Text",
    "Segoe UI",
    Roboto,
    Arial,
    "PingFang SC",
    "Hiragino Sans GB",
    "Microsoft YaHei",
    sans-serif;

  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}

/* =========================================================
   原本的动画与通用样式（保持）
   ========================================================= */
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
  0% { height: 0vh; }
  100% { height: 77vh; }
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
  0% { top: 1vh; opacity:0; }
  100% { top: -0.8vh; opacity:1; }
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
  0% { left: -1.8vh; opacity:0; }
  100% { left: -0.8vh; opacity:1; }
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
  0% { top: -2.6vh; opacity:0; }
  100% { top: -0.8vh; opacity:1; }
}

.submenubtn:hover { background:white; }

/* =========================================================
   Desktop 图片 media 保留
   ========================================================= */
@media (width <= 1200px) {
  .infopage--desktop .fg img {
    left: 35% !important;
    transform: translateX(-50%) !important;
    scale: 0.75;
  }
}

/* =========================================================
   ✅ Mobile：立绘背景层
   ========================================================= */
.infopage--mobile {
  height: 100dvh;
  overflow: hidden;
}

.infopage--mobile .fg {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.infopage--mobile .fg img {
  position: absolute;
  height: 100%;
  top: 0;
  left: 18%;
  filter: drop-shadow(4vh 4vh 1vh rgba(0,0,118,0.2));
}

@media (width <= 1200px) {
  .infopage--mobile .fg img {
    left: 35% !important;
    transform: translateX(-50%) !important;
    scale: 0.75;
  }
}

/* =========================================================
   ✅ Mobile：卡片信息区（主布局）
   ========================================================= */
.infopage--mobile .m-shell {
  position: absolute;
  inset: 0;
  z-index: 2;

  padding: clamp(6vh, 8vh, 10vh) clamp(10px, 4vw, 18px) calc(12px + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* tabs */
.infopage--mobile .m-tabs {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.infopage--mobile .m-tab {
  border: 0;
  cursor: pointer;
  border-radius: 999px;
  padding: 10px 14px;

  background: rgba(255,255,255,0.10);
  backdrop-filter: blur(16px) saturate(1.3);
  -webkit-backdrop-filter: blur(16px) saturate(1.3);
  box-shadow: 0 8px 22px rgba(0,0,0,0.18);

  font-size: clamp(12px, 3.2vw, 15px);
  letter-spacing: 0.18em;
  font-weight: 500;
  color: rgba(0,0,0,0.78);
  min-width: 86px;
  text-align: center;
  text-transform: uppercase;
}

.infopage--mobile .m-tab-sub {
  display: block;
  font-size: 0.78em;
  opacity: 0.72;
  letter-spacing: 0.16em;
  margin-top: 2px;
}

.infopage--mobile .m-tab.active {
  background: rgba(255,255,255,0.15);
  box-shadow: 0 10px 26px rgba(0,0,0,0.22);
}

/* panel */
.infopage--mobile .m-panel {
  flex: 1 1 auto;
  min-height: 0;
  border-radius: 18px;
  overflow: hidden;
  isolation: isolate; /* ✅ 防止滤镜/阴影穿透导致视觉“出框” */
}

.infopage--mobile .m-scroll {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;

  padding: 12px;
  border-radius: 18px;
}

/* stack / card */
.infopage--mobile .m-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.infopage--mobile .m-card {
  background: rgba(255,255,255,0.52);
  backdrop-filter: blur(14px) saturate(1.2);
  -webkit-backdrop-filter: blur(14px) saturate(1.2);
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.16);
}

/* ✅ 标题：稳定版（不使用大负 margin，不会飘/重影） */
.infopage--mobile .m-title {
  font-size: 12px;
  letter-spacing: 0.22em;
  font-weight: 700;
  opacity: 0.72;
  text-transform: uppercase;

  margin: 0 0 10px 0;
  padding: 0 0 10px 0;
  border-bottom: 1px solid rgba(0,0,0,0.08);

  padding-left: 10px;
  padding-top: 10px;
}

/* key/value 行：用 grid 避免挤压重叠 */
.infopage--mobile .m-kv {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 10px;
  align-items: center;

  padding: 10px 0;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.infopage--mobile .m-kv:last-child { border-bottom: 0; }

.infopage--mobile .m-kv-label {
  font-size: 12px;
  opacity: 0.55;
  font-weight: 500;
}

.infopage--mobile .m-kv-value {
  font-size: clamp(13px, 3.7vw, 16px);
  font-weight: 700;
  text-align: right;
  opacity: 0.85;
  min-width: 0;
}

.infopage--mobile .m-text {
  font-size: clamp(13px, 3.6vw, 15px);
  line-height: 1.45;
  opacity: 0.86;
  font-weight: 500;
}

.infopage--mobile .m-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.infopage--mobile .m-btn {
  flex: 1 1 auto;
  text-decoration: none;
  text-align: center;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(0,0,0,0.78);
  color: white;

  font-size: 13px;
  letter-spacing: 0.22em;
  font-weight: 700;
  text-transform: uppercase;
}

.infopage--mobile .m-link {
  color: inherit;
  text-decoration: underline;
  opacity: 0.9;
  font-weight: 600;
}

/* countdown */
.infopage--mobile .m-count {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-top: 6px;
}
.infopage--mobile .m-big {
  font-size: clamp(40px, 12vw, 62px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.02em;
}
.infopage--mobile .m-unit {
  letter-spacing: 0.26em;
  opacity: 0.55;
  font-size: 12px;
  font-weight: 700;
}
.infopage--mobile .m-count-row {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.infopage--mobile .m-pill {
  flex: 1 1 0;
  background: rgba(255,255,255,0.65);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 999px;
  padding: 8px 10px;
  text-align: center;

  font-size: 12px;
  letter-spacing: 0.10em;
  font-weight: 600;
  opacity: 0.9;

  /* ✅ 避免 pill 内文字挤爆 */
  white-space: nowrap;
}
.infopage--mobile .m-pill-n {
  font-weight: 800;
  font-size: 14px;
}
.infopage--mobile .m-note {
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.75;
  letter-spacing: 0.08em;
}

/* =========================================================
   WHERE photos
   ========================================================= */
.infopage--mobile .m-photo-main {
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.08);
  background: rgba(255,255,255,0.6);
}
.infopage--mobile .m-photo-main img {
  width: 100%;
  display: block;
}

.infopage--mobile .m-photo-strip {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 2px;
}

.infopage--mobile .m-photo-thumb {
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  flex: 0 0 auto;
  width: 92px;
  height: 64px;
  border: 2px solid rgba(0,0,0,0.08);
}
.infopage--mobile .m-photo-thumb.active {
  border-color: rgba(0,0,0,0.35);
}
.infopage--mobile .m-photo-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* =========================================================
   WHO grid + 溢出修复
   ========================================================= */
.infopage--mobile .m-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.infopage--mobile .m-guest {
  background: rgba(255,255,255,0.6);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 14px;
  padding: 10px;

  overflow: hidden; /* ✅ 防止头像/文字/阴影跑出卡片 */
}

.infopage--mobile .m-guest-avatar {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.08);
}
.infopage--mobile .m-guest-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.infopage--mobile .m-guest-name {
  margin-top: 8px;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.04em;
  opacity: 0.88;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.infopage--mobile .m-guest-role {
  font-size: 12px;
  opacity: 0.62;
  margin-top: 2px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.infopage--mobile .m-guest-link {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  opacity: 0.9;
  text-decoration: underline;
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* =========================================================
   ✅ 关键修复：防止 desktop 的 when/where/who 全局样式污染 mobile
   - 你截图里那种 “MEETING TIME / TIME REMAINING / ACTIONS” 淡字重影
     基本都是全局 absolute / letter-spacing / opacity 样式泄漏
   ========================================================= */

/* mobile 信息区隔离 */
.infopage--mobile .m-panel,
.infopage--mobile .m-scroll {
  isolation: isolate;
}

/* 清除 mobile 卡片区里可能被外部样式“强行 absolute / 水印化”的情况 */
.infopage--mobile .m-scroll * ,
.infopage--mobile .m-scroll *::before,
.infopage--mobile .m-scroll *::after {
  /* 防“水印字” */
  text-transform: none;
  letter-spacing: normal;
  opacity: 1;

  /* 防 absolute 漂移（如果你的项目里没有全局 absolute 污染，这段也不会伤害布局） */
  position: relative;
}

/* 再把我们自己的需要的大小写/字距加回来（确保 UI 仍然是你想要的风格） */
.infopage--mobile .m-title {
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0.72;
}
.infopage--mobile .m-tab {
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 1;
}
.infopage--mobile .m-btn {
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 1;
}
</style>
