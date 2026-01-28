<template>
  <!-- =========================
       ✅ Mobile / Tablet：Drawer Menu
       ========================= -->
  <template v-if="isMobile">
    <button
        class="hamburger-btn"
        v-show="!mobileMenuOpen"
        type="button"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
    >
      <span class="hb-lines" aria-hidden="true">
        <span class="hb-line"></span>
        <span class="hb-line"></span>
        <span class="hb-line"></span>
      </span>
      <span class="hb-text">MENU</span>
    </button>

    <div class="mobile-backdrop" v-show="mobileMenuOpen" @click="closeMobileMenu"></div>

    <aside class="mobile-drawer" :class="{ open: mobileMenuOpen }">
      <!-- ✅ Mobile 抽屉仍然保留背景图 -->
      <div class="drawer-bg" aria-hidden="true"></div>

      <div class="drawer-content">
        <div class="mobile-drawer-header">
          <div class="mobile-title">MIKUONLY</div>
          <button class="mobile-close" type="button" @click="closeMobileMenu">✕</button>
        </div>

        <nav class="img-nav">
          <button class="img-btn img-btn--wide" type="button" @click="setWindowMobile('info')">
            <img :src="currentwindow === 'info' ? '/INFO_ON.png' : '/INFO_OFF.png'" alt="Info" />
          </button>

          <button class="img-btn img-btn--wide" type="button" @click="setWindowMobile('schedule')">
            <img :src="currentwindow === 'schedule' ? '/SCHEDULE_ON.png' : '/SCHEDULE_OFF.png'" alt="Schedule" />
          </button>

          <button class="img-btn img-btn--wide" type="button" @click="setWindowMobile('conduct')">
            <img :src="currentwindow === 'conduct' ? '/Conduct_ON.png' : '/Conduct_OFF.png'" alt="Conduct" />
          </button>

          <div class="img-row">
            <button class="img-btn img-btn--small" type="button" @click="setWindow('floorplan')">
              <img src="/public/FLOOR%20PLAN.png" alt="Floor Plan" />
            </button>

            <button class="img-btn img-btn--small" type="button" @click="openConductLinkMobile('prop')">
              <img src="/public/LinkTree.png" alt="Link Tree" />
            </button>
          </div>
        </nav>

        <div class="mobile-drawer-footer">
          <div class="brand-lockup" aria-label="MIKUONLY logo">
            <img src="/public/LOGO选框白底.png" class="brand-lockup__plate" alt="" aria-hidden="true" />
            <img src="/public/logo_c.png" class="brand-lockup__logo" alt="logo" />
          </div>
        </div>
      </div>
    </aside>
  </template>

  <!-- =========================
       ✅ Desktop：Left Menu Panel (buttons only)
       ========================= -->
  <template v-else>
    <div class="desktop-menu">
      <div class="desk-content">
        <nav class="img-nav desk-nav">
          <button class="img-btn img-btn--wide" type="button" @click="setWindow('info')">
            <img :src="currentwindow === 'info' ? '/INFO_ON.png' : '/INFO_OFF.png'" alt="Info" />
          </button>

          <button class="img-btn img-btn--wide" type="button" @click="setWindow('schedule')">
            <img :src="currentwindow === 'schedule' ? '/SCHEDULE_ON.png' : '/SCHEDULE_OFF.png'" alt="Schedule" />
          </button>

          <button class="img-btn img-btn--wide" type="button" @click="setWindow('conduct')">
            <img :src="currentwindow === 'conduct' ? '/Conduct_ON.png' : '/Conduct_OFF.png'" alt="Conduct" />
          </button>

          <div class="img-row">
            <button class="img-btn img-btn--small" type="button" @click="setWindow('floorplan')">
              <img :src="currentwindow === 'floorplan' ? '/FLOORPLAN_SLECTED.png' : '/FLOOR%20PLAN.png'" alt="FloorPlan" />
            </button>

            <button class="img-btn img-btn--small" type="button" @click="openConductLink('prop')">
              <img src="/public/LinkTree.png" alt="Link Tree" />
            </button>
          </div>
        </nav>

        <div class="desk-footer">
          <div class="brand-lockup" aria-label="MIKUONLY logo">
            <img src="/public/LOGO选框白底.png" class="brand-lockup__plate" alt="" aria-hidden="true" />
            <img src="/public/logo_c.png" class="brand-lockup__logo" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/store";

export default {
  data() {
    return {
      isMobile: window.innerWidth <= 1300,
      mobileMenuOpen: false,
      _onResize: null,
    };
  },
  computed: {
    ...mapState(useUserStore, ["stateDump", "currentwindow"]),
  },
  methods: {
    ...mapActions(useUserStore, ["setWindow"]),

    toggleMobileMenu() {
      if (!this.isMobile) return;
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      if (!this.isMobile) return;
      this.mobileMenuOpen = false;
    },
    setWindowMobile(win) {
      this.setWindow(win);
      this.mobileMenuOpen = false;
    },

    openConductLink(type) {
      let url = "";
      if (type === "general") url = "https://www.ny-miku-only.com/ticket-1";
      else if (type === "prop") url = "https://linktr.ee/mikuonly_nyc";
      if (url) window.open(url, "_blank");
    },
    openConductLinkMobile(type) {
      this.openConductLink(type);
      this.mobileMenuOpen = false;
    },

    _handleResize() {
      const mobile = window.innerWidth <= 1300;
      this.isMobile = mobile;
      if (!mobile) this.mobileMenuOpen = false;
    },
  },
  mounted() {
    this._handleResize();
    this._onResize = () => this._handleResize();
    window.addEventListener("resize", this._onResize, { passive: true });
  },
  beforeUnmount() {
    if (this._onResize) window.removeEventListener("resize", this._onResize);
  },
};
</script>

<style scoped>
/* =========================
   Responsive System (核心自适应)
   ========================= */
.mobile-drawer,
.desktop-menu {
  --menu-w: clamp(280px, 22vw, 420px);
  --pad-x: clamp(12px, 3.2vw, 20px);
  --pad-top: clamp(14px, 2.8vw, 26px);
  --gap: clamp(18px, 3.2vw, 38px);
  --btn-wide-w: min(360px, calc(var(--menu-w) - (var(--pad-x) * 2)));
  --row-w: var(--btn-wide-w);
  --row-gap: clamp(10px, 2.2vw, 16px);
  --logo-w: min(320px, calc(var(--menu-w) - (var(--pad-x) * 2)));
}

/* =========================
   Shared buttons layout
   ========================= */
.img-nav {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  align-items: flex-start;
}

.img-btn {
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  display: block;
  width: auto;
}

.img-btn--wide {
  width: var(--btn-wide-w);
  max-width: 100%;
}

.img-row {
  width: var(--row-w);
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--row-gap);
}

.img-btn img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  filter: drop-shadow(10px 12px 10px rgba(0,0,0,0.22));
}

/* =========================
   Mobile drawer
   ========================= */
.hamburger-btn {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 10000;
  height: 44px;
  padding: 10px 14px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  background: rgba(193, 193, 193, 0.95);
  display: flex;
  align-items: center;
  gap: 10px;
  filter: drop-shadow(10px 12px 10px rgba(0,0,0,0.22));
}

.hb-lines { display:flex; flex-direction:column; justify-content:center; gap:6px; width:22px; }
.hb-line { width:100%; height:2px; background: rgba(0,0,0,0.75); }
.hb-text { font-family: font1; font-size: 14px; letter-spacing: 0.22em; color: rgba(0,0,0,0.82); white-space: nowrap; user-select:none; }

.mobile-backdrop { position: fixed; inset: 0; z-index: 9998; background: rgba(0,0,0,0.45); }

.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: var(--menu-w);
  height: 100vh;
  transform: translateX(-105%);
  transition: transform 0.25s ease;
  overflow: hidden;
  background: #fff;
}
.mobile-drawer.open { transform: translateX(0); }

.drawer-bg{
  position: absolute;
  inset: 0;
  background-image: url("/public/L_左侧UI.png");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: auto 100%;
}

.drawer-content{
  position: relative;
  z-index: 1;
  height: 100%;
  padding: var(--pad-top) var(--pad-x) 14px var(--pad-x);
  display: flex;
  flex-direction: column;
}

.mobile-drawer-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: clamp(10px, 2vw, 18px);
}
.mobile-title{
  font-family: font2;
  letter-spacing: 0.18em;
  opacity: 0.45;
  font-size: clamp(12px, 1.4vw, 14px);
}
.mobile-close{
  border:0;
  background: rgba(0,0,0,0.06);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.img-nav{
  margin-top: clamp(8px, 2vw, 18px);
  padding-left: clamp(4px, 1.2vw, 10px);
}

.mobile-drawer-footer{
  margin-top: auto;
  padding-top: 14px;
  display:flex;
  justify-content:center;
}

/* =========================
   Desktop panel (buttons only)
   ========================= */
.desktop-menu{
  position: fixed;
  left: 0;
  top: 0;
  width: var(--menu-w);
  height: 100vh;
  z-index: 200;          /* ✅ 始终在页面内容上面（按钮层） */
  pointer-events: none;  /* 外层不吃点击 */
}

.desk-content{
  pointer-events: auto;
  position: relative;
  height: 100%;
  padding: var(--pad-top) var(--pad-x) 16px var(--pad-x);
  display: flex;
  flex-direction: column;
}

.desk-nav{
  margin-top: clamp(70px, 10vh, 130px);
  padding-left: clamp(6px, 1vw, 12px);
}

.desk-footer{
  margin-top: auto;
  padding-top: 16px;
  display:flex;
  justify-content:center;
}

/* 平板 drawer 更宽 */
@media (min-width: 768px) and (max-width: 1300px) {
  .mobile-drawer {
    --menu-w: clamp(320px, 48vw, 460px);
    --gap: clamp(22px, 2.8vw, 44px);
  }
}

/* safety */
@media (min-width: 1300px) {
  .hamburger-btn,
  .mobile-backdrop,
  .mobile-drawer { display: none !important; }
}

/* ===== Footer: white plate + bigger logo ===== */
.brand-lockup{
  position: relative;
  width: min(92%, 320px);
  aspect-ratio: 3.6 / 1;
  display: grid;
  place-items: center;
}

.brand-lockup__plate{
  position: absolute;
  inset: 0;
  width: 230%;
  height: 230%;
  transform: translateY(-28%);
  object-fit: contain;
  pointer-events: none;
  opacity: 0.4;
}

.brand-lockup__logo{
  position: relative;
  margin-top: 15px;
  width: 200%;
  height: auto;
  object-fit: contain;
  transform: translateX(32%);
  filter: drop-shadow(10px 12px 10px rgba(0,0,0,0.20));
}

@media (max-width: 1300px){
  .brand-lockup{ width: 110%; }
  .brand-lockup__plate{
    margin-left: -20px;
    width: 113%;
    height: 113%;
    transform: translateY(-3%);
  }
  .brand-lockup__logo{
    transform: translateX(0%);
    width: 100%;
  }
}
</style>
