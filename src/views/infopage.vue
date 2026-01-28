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

    <div class="left-ui-bg" aria-hidden="true"></div>
    <div class="right-mask" aria-hidden="true"></div>

    <div class="contentpanel" style="position:absolute;height:40%;top:35vh;width:100%;z-index:4;">
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
          src="/mikuonly2026.png"
          style="filter:drop-shadow(4vh 4vh 1vh rgba(0,0,118,0.2));position:absolute;height:100%;left:18%;z-index:3;scale: 1.9; margin-top: 5.5vw;"
      />
      <img
          src="/角色遮罩.png"
          style="position:absolute;height:100%;left:4.5%;z-index:3; opacity: 0.6"
      />
    </div>
  </div>

  <!-- Mobile template -->
  <div
      v-else
      class="infopage infopage--mobile"
      style="position:absolute; width:100vw; height:100vh; left:0%; top:0%; background: rgb(255, 255, 255);"
  >
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255, 255, 255), rgb(190, 254, 255));height:48vh;bottom:0px;"></div>
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image:linear-gradient(rgb(255 164 251), rgb(255 255 255));height:48vh;top:0px;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgba(0, 0, 0, 1) 0%, rgb(255 255 255 / 0%) 50%);height:101vh;top:0px;width: 54%;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;"></div>
    <div class="bg" style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;transform:rotateY(180deg);"></div>

    <!-- ✅ 背景层同 desktop -->
    <div class="left-ui-bg" aria-hidden="true"></div>
    <div class="right-mask" aria-hidden="true"></div>

    <div class="fg">
      <!-- ✅ /public 改成 / -->
      <img src="/mikuonly2026.png" />
    </div>

    <!-- ✅ tabs + 同一套 when/where/who 模块 -->
    <div class="m-shell">
      <div class="m-tabs">
        <!-- WHEN -->
        <button class="m-tab" :class="{ active: mTab === 'when' }" @click="switchSubpanel('when')">
          <span class="m-tab-label">WHEN</span>
          <span v-if="unexplored.when" class="m-gem-wrap" aria-hidden="true">
    <gem class="m-gem-inner" />
  </span>
        </button>

        <!-- WHERE -->
        <button class="m-tab" :class="{ active: mTab === 'where' }" @click="switchSubpanel('where')">
          <span class="m-tab-label">WHERE</span>
          <span v-if="unexplored.where" class="m-gem-wrap" aria-hidden="true">
    <gem class="m-gem-inner" />
  </span>
        </button>

        <!-- WHO -->
        <button class="m-tab" :class="{ active: mTab === 'who' }" @click="switchSubpanel('who')">
          <span class="m-tab-label">WHO <span class="m-tab-sub">(GUESTS)</span></span>
          <span v-if="unexplored.who" class="m-gem-wrap" aria-hidden="true">
    <gem class="m-gem-inner" />
  </span>
        </button>

      </div>


      <div class="m-panel frosted-panel_info">
        <div class="m-scroll">
          <when v-if="mTab==='when'" />
          <where v-else-if="mTab==='where'" />
          <who v-else />
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
/* =========================
   Base / Z-Index system
   ========================= */
.infopage{
  position: absolute;
  inset: 0;
  overflow: hidden;
  isolation: isolate;
  font-family:
      "Avenir Next", Avenir, "Helvetica Neue", Helvetica,
      -apple-system, BlinkMacSystemFont,
      "SF Pro Display", "SF Pro Text",
      "Segoe UI", Roboto, Arial,
      "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}

/* gradient bg always bottom */
.infopage .bg{
  position: absolute;
  z-index: 0;
}

/* ✅ pattern overlay: desktop + mobile */
.infopage::before{
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;

  background-image: url("/背景图案透图.png");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: contain;
  opacity: 0.5;
}

/* Left UI layer */
.infopage .left-ui-bg{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: min(52vw, 720px);
  z-index: 2;
  pointer-events: none;
  user-select: none;

  background-image: url("/L_左侧UI组合.png");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: auto 100%;
}

/* Right mask layer */
.infopage .right-mask{
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: min(40vw, 720px);
  z-index: 2;
  pointer-events: none;
  user-select: none;

  background-image: url("/黑色遮罩.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: auto 100%;
}

/* =========================
   Desktop
   ========================= */
.infopage--desktop .fg{
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
}

/* ✅ Make contentpanel a stable full-screen stage */
.infopage--desktop .contentpanel{
  position: absolute !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 4 !important;
}

/* switchpanel fixed */
.infopage--desktop .contentpanel > .switchpanel{
  position: absolute !important;
  right: -0.8vh !important;
  top: 10vh !important;
  width: 7vh !important;
  height: 77vh !important;
  z-index: 6 !important;
}

/* right side module stage (when/where/who) */
.infopage--desktop .contentpanel > *:not(.switchpanel){
  position: absolute !important;
  right: 16vh !important;
  top: 6vh !important;

  width: 84vh !important;
  height: 88vh !important;

  max-width: 58vw !important;
  max-height: 90vh !important;

  z-index: 5 !important;
}

/* switchpanel animation keep */
.switchpanel{
  animation-name: switchpanel;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}
@keyframes switchpanel { 0% { height: 0vh; } 100% { height: 77vh; } }

/* frosted styles (shared) */
.frosted-panel_info{
  background: rgba(0,0,0,0.10);
  backdrop-filter: blur(6px) saturate(1.1);
  -webkit-backdrop-filter: blur(6px) saturate(1.1);
  box-shadow: 0 1vh 2vh rgba(0,0,0,0.35);
}
.frosted-chip_info{
  background: rgba(255,255,255,0.12);
  padding: 0.4vh 1.6vh;
  backdrop-filter: blur(18px) saturate(1.3);
  -webkit-backdrop-filter: blur(18px) saturate(1.3);
  border: none;
  box-shadow: 0 0.4vh 1.2vh rgba(0,0,0,0.35);
}

/* =========================
   Mobile Layout (<=1300):
   Top 1/4: character
   Bottom 3/4: tabs + panel
   ========================= */
.infopage--mobile{
  height: 100dvh;
  overflow: hidden;
}

/* mobile fg on top */
.infopage--mobile .fg{
  position: absolute;
  inset: 0;
  z-index: 3; /* above pattern(1) and below content(4) */
  pointer-events: none;
}

/* ✅ default: mobile shell full */
.infopage--mobile .m-shell{
  position: absolute;
  inset: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
}

/* tabs */
.infopage--mobile .m-tabs{
  position: relative;     /* ✅ 新增：让 gem 以按钮为参照 */
  overflow: visible;      /* ✅ 新增：防止 gem 被裁掉 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* ✅ allow wrap on narrow devices */
  gap: clamp(12px, 3.2vw, 40px);
  padding: clamp(10px, 2.5vw, 14px) clamp(10px, 3vw, 16px) 6px;
  z-index: 6;
}

/* ✅ bigger, responsive m-tab */
.infopage--mobile .m-tab{
  appearance: none;
  border: 0;
  cursor: pointer;

  font-family: font5;
  font-size: clamp(16px, 2.4vw, 22px);
  letter-spacing: 0.08em;

  padding: clamp(10px, 1.6vw, 14px) clamp(14px, 2.2vw, 20px);
  border-radius: 999px;

  color: rgba(255,255,255,0.95);
  background: rgba(90,90,90,0.75);

  box-shadow: 0 10px 18px rgba(0,0,0,0.12);
}

.infopage--mobile .m-tab.active{
  color: rgba(0,0,0,0.92);
  background: rgba(255,255,255,0.85);
  box-shadow: 0 12px 22px rgba(0,0,0,0.18);
}

/* label 层级 */
.infopage--mobile .m-tab-label{
  position: relative;
  z-index: 1;
}

/* gem：默认大小 */
.infopage--mobile .m-gem--mobile{
  position: absolute;
  top: -10px;          /* ✅ 贴右上角 */
  right: -10px;        /* ✅ 贴右上角 */
  pointer-events: none;
  transform: scale(2.2);
  transform-origin: center;
  z-index: 3;
}


.infopage--mobile .m-tab-sub{
  font-size: 1.6vw;
  opacity: 0.9;
  letter-spacing: 0.06em;
}

/* panel (transparent so character can be seen behind) */
.infopage--mobile .m-panel.frosted-panel_info{
  background: rgba(255,255,255,0.06) !important;
  backdrop-filter: blur(6px) saturate(1.15) !important;
  -webkit-backdrop-filter: blur(6px) saturate(1.15) !important;
  box-shadow: none !important;
  border: 1px solid rgba(255,255,255,0.10);
}

/* panel area */
.infopage--mobile .m-panel{
  flex: 1;
  margin: 0 12px 14px;
  border-radius: 22px;
  overflow: hidden;
}

/* scroll area */
.infopage--mobile .m-scroll{
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  box-sizing: border-box;
  padding-bottom: 14px;
}
.infopage--mobile .m-scroll > *{
  width: 100%;
}

/* =========================
   <=1300: split 25vh / 75vh
   ========================= */
@media (max-width: 1300px){
  /* ✅ mobile: hide UI overlays so character visible */
  .infopage--mobile .left-ui-bg,
  .infopage--mobile .right-mask{
    display: none;
  }

  /* top 1/4 fg window */
  .infopage--mobile .fg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 3;
  }

  /* ✅ character image: cover so it won't look "cut wrong" */
  .infopage--mobile .fg img{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: 30% 20%;  /* ✅ show more head area */
    transform: none;
  }

  /* bottom 3/4 content */
  .infopage--mobile .m-shell{
    position: absolute;
    left: 0;
    right: 0;
    top: 25vh;
    bottom: 0;        /* ✅ 用 bottom 代替 height，适配各种屏 */
    z-index: 4;

    display: flex;    /* ✅ tabs + panel 垂直排 */
    flex-direction: column;
    min-height: 0;    /* ✅ 允许内部滚动 */
  }

  /* tabs stick inside bottom area */
  .infopage--mobile .m-tabs{
    position: relative;
    top: 0;
    z-index: 6;
    padding-top: 10px;
  }

  /* panel fills remaining space */
  .infopage--mobile .m-panel{
    position: relative;   /* ✅ 不再 absolute */
    flex: 1 1 auto;       /* ✅ 吃掉剩余高度 */
    min-height: 0;        /* ✅ 让内部滚动生效 */

    margin: 0 12px 12px;
    border-radius: 22px;
    overflow: hidden;
  }

}

/* =========================
   iPad / tablet fine-tune (769~1300)
   ========================= */
@media (min-width: 769px) and (max-width: 1300px){
  .infopage--mobile .fg{
    height: 50vh;              /* ✅ iPad give more character */
  }
  .infopage--mobile .m-shell{
    top: 28vh;
    height: 72vh;
  }
  .infopage--mobile .fg img{
    position: absolute;
    margin-bottom: 50vh;
  }
}

/* =========================
   Phone (<=768)
   ========================= */
@media (max-width: 768px){
  .when-panel {
    height: auto;
    overflow: visible;
    grid-template-rows:
        6%
        35% /* time-board 自己按比例撑开 */
        2% /* ✅ divider 行高度 */
        50% /* ticket */
        5%
        2%;
    row-gap: 10px;
    background-size: 95%;
    background-position: center top;
  }
  .infopage--mobile .fg{
    height: 60vh;
  }
  .infopage--mobile .m-shell{
    top: 23vh;
    bottom: 0;
    height: auto;
    min-height: 0; 
  }
  .infopage--mobile .fg img{
    object-position: 50% 18%;
  }
}

/* =========================
   Ultra narrow screens (<=420)
   ========================= */
@media (max-width: 420px){
  .infopage--mobile .m-tabs{
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .infopage--mobile .m-tab{
    font-size: 16px;
    padding: 10px 14px;
  }
  .infopage--mobile .m-panel{
    left: 10px;
    right: 10px;
    padding-bottom: 14px;
  }
}

/* ===== Force gem visible on infopage mobile tabs ===== */
.infopage--mobile .m-tab{
  position: relative !important;
  overflow: visible !important;
}

.infopage--mobile .m-tabs{
  overflow: visible !important;
}

.infopage--mobile .m-gem-wrap{
  position: absolute !important;
  top: -12px !important;
  right: -12px !important;
  width: 28px !important;     /* ✅ 给一个确定尺寸 */
  height: 28px !important;
  z-index: 999 !important;    /* ✅ 直接顶到最上 */
  pointer-events: none !important;

  display: grid !important;   /* ✅ 保证子元素有布局 */
  place-items: center !important;
}

/* 不管 gem 内部怎么写，强制它占满容器 */
.infopage--mobile .m-gem-wrap .m-gem-inner,
.infopage--mobile .m-gem-wrap svg,
.infopage--mobile .m-gem-wrap img{
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}

</style>
