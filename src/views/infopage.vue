<template>
  <!-- Desktop / Tablet template -->
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

    <div class="contentpanel" style="position:absolute;height:40%;top:35vh;width:100%;background:#80808014;z-index:4;">
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
          <div class="frosted-panel_info frosted-chip_info" style=" position: absolute;right: 140%;top: -47%;color: white;opacity: 1;font-size: 2vh;text-align:center;" >
            WHO<br><span style="font-size:1vh; opacity:0.8; letter-spacing:0.2vh;">(GUESTS)</span>
          </div>
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
          style="filter:drop-shadow(4vh 4vh 1vh rgba(0,0,118,0.2));position:absolute;height:100%;left:18%;z-index:3;scale: 1.5"
      />
    </div>
  </div>

  <!-- Mobile template -->
  <div
      v-else
      class="infopage infopage--mobile"
      style="overflow:hidden; position:absolute; width:100vw; height:100vh; left:0%; top:0%; background: rgb(255, 255, 255);"
  >
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255, 255, 255), rgb(190, 254, 255));height:48vh;bottom:0px;"></div>
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255 164 251), rgb(255 255 255));height:48vh;top:0px;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgba(0, 0, 0, 1) 0%, rgb(255 255 255 / 0%) 50%);height:101vh;top:0px;width: 54%;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;"></div>
    <div class="bg" style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;transform:rotateY(180deg);"></div>

    <div class="fg">
      <img src="/public/mikuonly2026.png" />
    </div>

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

            <!-- ✅ Mobile：用 时间板块.png 替代倒计时 -->
            <div class="m-card">
              <div class="m-title">TIME REMAINING</div>

              <div class="m-timeboard">
                <img class="m-timeboard__img" src="/时间板块.png" alt="timeboard" />

                <div class="m-timeboard__eta">ETA</div>
                <div class="m-timeboard__sub">TIME REMAINING</div>

                <div class="m-timeboard__hh">{{ etaTotalHours }}</div>
                <div class="m-timeboard__hr">HR</div>

                <div class="m-timeboard__mm">{{ etaMM }}</div>
                <div class="m-timeboard__min">MIN</div>

                <div class="m-timeboard__ss">{{ etaSS }}</div>
                <div class="m-timeboard__sec">SEC</div>

                <div class="m-timeboard__until">Until</div>
                <div class="m-timeboard__start">START</div>
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

import when from "../components/when.vue";
import where from "../components/where.vue";
import who from "../components/who.vue";
import gem from "../components/gem.vue";

export default {
  components: { when, where, who, gem },

  data() {
    return {
      currentSubpanel: "when",
      unexplored: { when: true, where: true, who: true },

      isMobile: false,
      mTab: "when",
      _onResize: null,

      now: Date.now(),
      _tick: null,

      ticketing: {
        entry: "https://www.ny-miku-only.com/event-details/miku-only-ny-2026-entry-admission",
        general: "https://www.ny-miku-only.com/event-details/miku-only-ny-2026-general-admission",
        vip: "https://www.ny-miku-only.com/event-details/miku-only-ny-2026-vip-admission",
      },

      mapUrl: "https://www.google.com/maps/search/?api=1&query=Melrose+Ballroom+36-08+33rd+St+Queens+NY+11106",

      whereImages: ["/eventspace2.jpg", "/eventspace1.png", "/eventspace3.jpg"],
      whereImageIndex: 0,

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

    // ✅ 给移动端时间板块用：总小时/分/秒
    etaTotalHours() {
      return this.countdown.days * 24 + this.countdown.hours;
    },
    etaMM() {
      return String(this.countdown.minutes).padStart(2, "0");
    },
    etaSS() {
      return String(this.countdown.seconds).padStart(2, "0");
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
      this.isMobile = window.matchMedia("(max-width: 1300px)").matches;
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

  position: absolute;
  inset: 0;
  overflow: hidden;
}

/* ✅ 背景图案只在 desktop 生效，避免破坏移动端 */
.infopage--desktop::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background-image: url("/背景图案.png");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: contain;
  opacity: 1;
}

/* desktop：把 fg/contentpanel 抬到图案层上面 */
.infopage--desktop .fg { position:absolute; inset:0; z-index:3; pointer-events:none; }
.infopage--desktop .contentpanel { z-index:4 !important; }

/* =========================
   原本动画/通用样式（保留）
   ========================= */
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

@keyframes switchpanel { 0% { height: 0vh; } 100% { height: 77vh; } }

.whenselect { animation: whenselect 0.5s cubic-bezier(1, 0.02, 0.17, 1) forwards; }
@keyframes whenselect { 0% { top: 1vh; opacity:0; } 100% { top: -0.8vh; opacity:1; } }

.whereselect { animation: whereselect 0.5s cubic-bezier(1, 0.02, 0.17, 1) forwards; }
@keyframes whereselect { 0% { left: -1.8vh; opacity:0; } 100% { left: -0.8vh; opacity:1; } }

.whoselect { animation: whoselect 0.5s cubic-bezier(1, 0.02, 0.17, 1) forwards; }
@keyframes whoselect { 0% { top: -2.6vh; opacity:0; } 100% { top: -0.8vh; opacity:1; } }

.submenubtn:hover { background:white; }

@media (width <= 1300px) {
  .infopage--desktop .fg img {
    left: 35% !important;
    transform: translateX(-50%) !important;
    scale: 1;
  }
}

/* =========================
   ✅ Mobile：立绘背景层（保留）
   ========================= */
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

@media (width <= 1300px) {
  .infopage--mobile .fg img {
    left: 35% !important;
    transform: translateX(-50%) !important;
    scale: 0.75;
  }
}

/* =========================
   ✅ Mobile：卡片信息区（保留）
   ========================= */
.infopage--mobile .m-shell {
  position: absolute;
  inset: 0;
  z-index: 2;

  padding: clamp(6vh, 8vh, 10vh) clamp(10px, 4vw, 18px) calc(12px + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  gap: 12px;
}

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

.infopage--mobile .m-panel {
  flex: 1 1 auto;
  min-height: 0;
  border-radius: 18px;
  overflow: hidden;
  isolation: isolate;
}

.infopage--mobile .m-scroll {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 12px;
  border-radius: 18px;
}

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

.infopage--mobile .m-title {
  font-size: 12px;
  letter-spacing: 0.22em;
  font-weight: 700;
  opacity: 0.72;
  text-transform: uppercase;

  margin: 0 0 10px 0;
  padding: 10px 0 10px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

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

.infopage--mobile .m-note {
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.75;
  letter-spacing: 0.08em;
}

/* =========================
   ✅ Mobile：时间板块.png（满宽）
   ========================= */
.infopage--mobile .m-timeboard{
  position: relative;
  width: 100%;
  aspect-ratio: 3.4 / 1; /* 不对就调比例 */
  margin-top: 8px;
}

.infopage--mobile .m-timeboard__img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit: contain;
}

.infopage--mobile .m-timeboard__eta{
  position:absolute; left:6%; top:18%;
  font-family: font9;
  color:#717171;
  font-size: clamp(12px, 3.4vw, 16px);
}
.infopage--mobile .m-timeboard__sub{
  position:absolute; left:6.3%; top:35%;
  font-family: font9;
  color:#717171;
  font-size: clamp(10px, 2.8vw, 12px);
}

.infopage--mobile .m-timeboard__hh{
  position:absolute; left:6%; top:44%;
  font-family: font9;
  color:#00adff;
  font-size: clamp(34px, 9vw, 56px);
  line-height:1;
}
.infopage--mobile .m-timeboard__hr{
  position:absolute; left:46%; top:56%;
  font-family: font9;
  color:#00adff;
  font-size: clamp(12px, 3.2vw, 16px);
}

.infopage--mobile .m-timeboard__mm{
  position:absolute; left:52%; top:60%;
  font-family: font9;
  color:#919191;
  font-size: clamp(18px, 5.4vw, 28px);
}
.infopage--mobile .m-timeboard__min{
  position:absolute; left:63%; top:72%;
  font-family: font9;
  color:#919191;
  font-size: clamp(10px, 2.8vw, 12px);
}

.infopage--mobile .m-timeboard__ss{
  position:absolute; left:70%; top:60%;
  font-family: font9;
  color:#919191;
  font-size: clamp(18px, 5.4vw, 28px);
  opacity:.9;
}
.infopage--mobile .m-timeboard__sec{
  position:absolute; left:81%; top:72%;
  font-family: font9;
  color:#919191;
  font-size: clamp(10px, 2.8vw, 12px);
  opacity:.9;
}

.infopage--mobile .m-timeboard__until{
  position:absolute; right:10%; top:66%;
  font-family: font9;
  color:#919191;
  font-size: clamp(12px, 3.2vw, 16px);
}
.infopage--mobile .m-timeboard__start{
  position:absolute; right:9%; top:78%;
  font-family: font9;
  color:#eeecee;
  background:#515151;
  padding: 0.25em 0.7em;
  font-size: clamp(11px, 3vw, 14px);
}

/* WHERE/WHO 相关你原本的样式如果还有，继续保留即可（这里略） */
</style>
