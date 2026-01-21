<template>
  <!-- ✅ 手机端汉堡键：放在菜单容器外面，避免跟着抽屉一起被移走 -->
  <button
    class="hamburger-btn"
    v-show="isMobile"
    type="button"
    @click="toggleMobileMenu"
    aria-label="Toggle menu"
  >
    <span></span><span></span><span></span>
  </button>

  <!-- ✅ 手机端遮罩：点一下关闭 -->
  <div
    class="mobile-backdrop"
    v-show="isMobile && mobileMenuOpen"
    @click="closeMobileMenu"
  ></div>

  <!-- ✅ 原本最外层：只加 class 和 :class，不改你原 style -->
  <div
    class="info-menu-root"
    :class="{ 'mobile-open': mobileMenuOpen }"
    style="position:absolute;width: 28vh;height:100%;perspective: 45vh;overflow:visible;"
  >
    <div class="infomenu_bg" style="position:absolute;width:100%;left:0%;transform:rotateY(6deg);top: 0%;height:110%;top:5%">
      <div class="ttlblock1" style="width:1vh;height:1vh;border-top:70vh solid transparent;border-bottom:70vh solid transparent;top:-20vh;position:absolute;backdrop-filter:blur(10px);"></div>
      <div class="ttlblock2" style="width:1vh;height:1vh;border-top:50vh solid transparent;top:50%;position:absolute;transform:rotatez(180deg);backdrop-filter:blur(10px);"></div>
      <div class="ttlblock3" style="width:1vh;height:1vh;border-top:50vh solid transparent;top:-50%;position:absolute;transform:rotatez(180deg);backdrop-filter:blur(10px);"></div>
    </div>

    <div class="infopage_menu" style="position: absolute; width:100%; left: 0%;   transform: rotateY(6deg);top: -37%;height: 143%;">
      <div style="position:absolute;top:50%;left:-172%;font-size:18vh;font-family:font2;color:#00000017;transform:rotateZ(90deg);">MIKUONLY</div>

      <div class='menu2btn_1' @click="setWindow('info')" :style="currentwindow === 'info'? 'background:#b0fff3;': 'background:#c1c1c1'" style="position:absolute;height:4%;left:14%;top:37%;filter:drop-shadow(0.7vh 1.4vh 0.7vh rgba(0,0,0,0.4));overflow:hidden;cursor: pointer;">
        <!-- only needed by apple due to inferior performance -->
        <div class='hack' style="position:absolute;width:300%;height:538%;top:-135%;background:rgba(0,0,0,0.01);transform:rotateZ(-38deg);"></div>
        <div class='shade1' style="position:absolute;width:30%;height:538%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
        <div class='shade2' style="position:absolute;width:30%;height:538%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
        <div class='shade3' style="position:absolute;width:30%;height:538%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
        <div style="position:absolute;height:2vh;width:10.3vh;background:#494949;top:6%;right:30%;mix-blend-mode:multiply;"><img src="/public/when.png" style="position:absolute;left:-67%;top:1%;height:258%;mix-blend-mode:multiply;">
          <div style="position:absolute;right:0;bottom:-0.8vh;font-size:1.9vh;font-family:'font11';color:white;">DONT</div>
          <div style="width:0;height:0;border-top:1vh solid transparent;border-bottom:1.1vh solid transparent;border-left:1.1vh solid #4d4d4d;position:absolute;right:-12%;top:0.2%;"></div>
        </div>
        <div style="position:absolute;right:1%;bottom:-1.9vh;font-size:4vh;font-family:font1;color:white;">Info</div>
        <div class="hoverlightup" style="position:absolute;width:100%;height:100%;">
          <div class="shade1" style="position:absolute;width:30%;height:538%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
          <div class="shade2" style="position:absolute;width:30%;height:538%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
          <div class="shade3" style="position:absolute;width:30%;height:538%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
        </div>
      </div>

      <div class='menu2btn_2' @click="setWindow('schedule')" :style="currentwindow === 'schedule'? 'background:#b0fff3;': 'background:#c1c1c1'" style="position:absolute;height:4%;left:14%;top:47%; filter:drop-shadow(0.7vh 1.4vh 0.7vh rgba(0,0,0,0.4));overflow:hidden;cursor: pointer;">
        <!-- only needed by apple due to inferior performance -->
        <div class='hack' style="position:absolute;width:300%;height:538%;top:-135%;background:rgba(0,0,0,0.01);transform:rotateZ(-38deg);"></div>
        <div class='shade1' style="position:absolute;width:30%;height:538%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
        <div class='shade2' style="position:absolute;width:30%;height:538%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
        <div class='shade3' style="position:absolute;width:30%;height:538%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
        <div style="position:absolute;height:2vh;width:10.3vh;background:#494949;top:6%;right:30%;mix-blend-mode:multiply;"><img src="/public/where.png" style="position:absolute;left:-67%;top:1%;height:258%;mix-blend-mode:multiply;">
          <div style="position:absolute;right:0;bottom:-0.8vh;font-size:1.9vh;;font-family:'font11';color:white;">FORGET</div>
          <div style="width:0;height:0;border-top:1vh solid transparent;border-bottom:1.1vh solid transparent;border-left:1.1vh solid #4d4d4d;position:absolute;right:-12%;top:0.2%;"></div>
        </div>
        <div style="position:absolute;right:1%;bottom:-1.9vh;font-size:4vh;font-family:font1;color:white;">Schedule</div>
        <div class="hoverlightup" style="position:absolute;width:100%;height:100%;">
          <div class="shade1" style="position:absolute;width:30%;height:538%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
          <div class="shade2" style="position:absolute;width:30%;height:538%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
          <div class="shade3" style="position:absolute;width:30%;height:538%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
        </div>
      </div>

      <div class='menu2btn_3' @click="setWindow('conduct')" :style="currentwindow === 'conduct'? 'background:#b0fff3;': 'background:#c1c1c1'" style="position:absolute;height:4%;left:14%;top: 57%; filter:drop-shadow(0.7vh 1.4vh 0.7vh rgba(0,0,0,0.4));overflow:hidden;cursor: pointer;">
        <!-- only needed by apple due to inferior performance -->
        <div class='hack' style="position:absolute;width:300%;height:538%;top:-135%;background:rgba(0,0,0,0.01);transform:rotateZ(-38deg);"></div>
        <div class='shade1' style="position:absolute;width:30%;height:538%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
        <div class='shade2' style="position:absolute;width:30%;height:538%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
        <div class='shade3' style="position:absolute;width:30%;height:538%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
        <div style="position:absolute;height:2vh;width:10.3vh;background:#494949;top:6%;right:30%;mix-blend-mode:multiply;"><img src="/public/rules.png" style="position:absolute;left:-67%;top:1%;height:258%;mix-blend-mode:multiply;">
          <div style="position:absolute;right:0;bottom:-0.8vh;font-size:1.9vh;font-family:'font11';color:white;">PLEASE</div>
          <div style="width:0;height:0;border-top:1vh solid transparent;border-bottom:1.1vh solid transparent;border-left:1.1vh solid #4d4d4d;position:absolute;right:-12%;top:0.2%;"></div>
        </div>
        <div style="position:absolute;right:1%;bottom:-1.9vh;font-size:4vh;font-family:font1;color:white;">CONDUCT</div>
        <div class="hoverlightup" style="position:absolute;width:100%;height:100%;">
          <div class="shade1" style="position:absolute;width:30%;height:538%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
          <div class="shade2" style="position:absolute;width:30%;height:538%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
          <div class="shade3" style="position:absolute;width:30%;height:538%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
        </div>
      </div>

      <!-- CONDUCT 下方两个并排跳转选项（小号 CONDUCT 按钮） -->
      <div class="conduct-sub-links">
        <div class="conduct-sub-btn" @click="openConductLink('general')" style="background:#FFEDA4;">
          <div class='hack' style="position:absolute;width:300%;height:480%;top:-135%;background:rgba(0,0,0,0.01);transform:rotateZ(-38deg);"></div>
          <div class='shade1' style="position:absolute;width:30%;height:480%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
          <div class='shade2' style="position:absolute;width:30%;height:480%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
          <div class='shade3' style="position:absolute;width:30%;height:480%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
          <div style="position:absolute;height:2vh;width:10.3vh;background:#494949;top:6%;right:30%;mix-blend-mode:multiply;">
            <div style="position:absolute;right:0;bottom:-0.8vh;font-size:1.9vh;font-family:'font11';color:white;">Waiting</div>
            <div style="width:0;height:0;border-top:1vh solid transparent;border-bottom:1.1vh solid transparent;border-left:1.1vh solid #4d4d4d;position:absolute;right:-12%;top:0.2%;"></div>
          </div>
          <div style="position:absolute;right:25%;bottom:20%;font-size:3vh;font-family:font1;color:black;">
            Ticket<br>Info
          </div>
          <div class="hoverlightup" style="position:absolute;width:100%;height:100%;">
            <div class="shade1" style="position:absolute;width:30%;height:480%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
            <div class="shade2" style="position:absolute;width:30%;height:480%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
            <div class="shade3" style="position:absolute;width:30%;height:480%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
          </div>
        </div>

        <div class="conduct-sub-btn" @click="openConductLink('prop')" style="background:#FFEDA4;">
          <div class='hack' style="position:absolute;width:300%;height:480%;top:-135%;background:rgba(0,0,0,0.01);transform:rotateZ(-38deg);"></div>
          <div class='shade1' style="position:absolute;width:30%;height:480%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
          <div class='shade2' style="position:absolute;width:30%;height:480%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
          <div class='shade3' style="position:absolute;width:30%;height:480%;top:-135%;background:#0000001c;transform:rotateZ(-38deg);"></div>
          <div style="position:absolute;height:2vh;width:10.3vh;background:#494949;top:6%;right:30%;mix-blend-mode:multiply;">
            <img src="/public/rules.png" style="position:absolute;left:-67%;top:1%;height:258%;mix-blend-mode:multiply;">
            <div style="position:absolute;right:0;bottom:-0.8vh;font-size:1.9vh;font-family:'font11';color:white;">FOR YOU</div>
            <div style="width:0;height:0;border-top:1vh solid transparent;border-bottom:1.1vh solid transparent;border-left:1.1vh solid #4d4d4d;position:absolute;right:-12%;top:0.2%;"></div>
          </div>
          <div style="position:absolute;right:50%;bottom:20%;font-size:3vh;font-family:font1;color:black;">
            Link<br>Tree
          </div>
          <div class="hoverlightup" style="position:absolute;width:100%;height:100%;">
            <div class="shade1" style="position:absolute;width:30%;height:480%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
            <div class="shade2" style="position:absolute;width:30%;height:480%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
            <div class="shade3" style="position:absolute;width:30%;height:480%;top:-135%;background: #b0fff373;transform:rotateZ(-38deg);"></div>
          </div>
        </div>
      </div>

      <div style="position:absolute;width:100%;height:0.1vh;bottom:20%;background:#adadad;left:13%;"></div>
      <img src="/public/logo_c.png" style="position:absolute;bottom:3%;width:200%;left:-2%;">

      <!-- 原样保留重复部分（按你要求尽量不动） -->
      <div style="position:absolute;width:100%;height:0.1vh;bottom:20%;background:#adadad;left:13%;"></div>
      <img src="/public/logo_c.png" style="position:absolute;bottom:3%;width:200%;left:-2%;">
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'

export default {
  data() {
    return {
      shownQAID: false,
      isReadQuestion: false,

      // ✅ 是否手机端
      isMobile: window.innerWidth <= 768,

      // ✅ 手机端默认关闭；电脑端强制打开（不改变电脑端效果）
      mobileMenuOpen: window.innerWidth > 768
    }
  },
  computed: {
    ...mapState(useUserStore, ['stateDump', 'currentwindow']),
    compileLastTurns() {},
  },
  watch: {
    // ✅ 手机端点击任何菜单按钮切换页面后自动收起（不用改你每个 @click）
    currentwindow() {
      if (this.isMobile) this.mobileMenuOpen = false
    }
  },
  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername', 'setWindow']),

    toggleMobileMenu() {
      if (!this.isMobile) return
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      if (!this.isMobile) return
      this.mobileMenuOpen = false
    },

    _handleResize() {
      const mobile = window.innerWidth <= 768
      this.isMobile = mobile

      // ✅ 电脑端永远保持打开（完全不改变电脑端体验）
      if (!mobile) this.mobileMenuOpen = true

      // ✅ 从电脑缩到手机：默认收起（你想默认展开就把 false 改 true）
      if (mobile) this.mobileMenuOpen = false
    },

    openConductLink(type) {
      let url = ''
      if (type === 'general') url = 'https://www.ny-miku-only.com/ticket-1'
      else if (type === 'prop') url = 'https://linktr.ee/mikuonly_nyc'
      if (url) window.open(url, '_blank')
      if (this.isMobile) this.mobileMenuOpen = false
    },
  },
  mounted() {
    this._handleResize()
    window.addEventListener('resize', this._handleResize, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this._handleResize)
  },
  updated() {}
}
</script>

<style>
.hack {
  opacity: 0;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
  animation-name: hack;
  animation-delay: 0s;
}

@keyframes hack {
  0% {
    left: -20%;
    opacity: 0;
  }

  100% {
    left: -10%;
    opacity: 1;
  }
}

.hoverlightup{
  opacity:0;
}

.hoverlightup:hover{
  opacity:1;
}
.shade1,
.shade2,
.shade3 {
  opacity: 0;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

.shade1 {
  animation-name: shade1;
  animation-delay: 2.25s;
}

.shade2 {
  animation-name: shade2;
  animation-delay: 2.35s;
}

.shade3 {
  animation-name: shade3;
  animation-delay: 2.45s;
}

@keyframes shade1 {
  0% {
    left: -20%;
    opacity: 0;
  }

  100% {
    left: -10%;
    opacity: 1;
  }
}

@keyframes shade2 {
  0% {
    left: -10%;
    opacity: 0;
  }

  100% {
    left: 1%;
    opacity: 1;
  }
}

@keyframes shade3 {
  0% {
    left: 0%;
    opacity: 0;
  }

  100% {
    left: 12%;
    opacity: 1;
  }
}

@keyframes ttlblock1 {
  0% {
    border-right: 27.9vh solid transparent;
  }

  25% {
    border-right: 27.9vh solid rgba(255, 255, 255, 0.74);
  }

  50% {
    border-right: 27.9vh solid transparent;
  }

  100% {
    border-right: 27.9vh solid rgba(255, 255, 255, 0.74);
  }
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

.ttlblock1 {
  animation-name: ttlblock1;
  animation-delay: 0.25s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

@keyframes ttlblock1 {
  0% {
    border-right: 27.9vh solid transparent;
  }

  25% {
    border-right: 27.9vh solid rgba(255, 255, 255, 0.74);
  }

  50% {
    border-right: 27.9vh solid transparent;
  }

  100% {
    border-right: 27.9vh solid rgba(255, 255, 255, 0.74);
  }
}

.ttlblock2,
.ttlblock3 {
  animation-name: ttlblock2;
  animation-delay: 0s;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

@keyframes ttlblock2 {
  0% {
    border-bottom: 50vh solid transparent;
    border-right: 27.9vh solid transparent;
  }

  25% {
    border-bottom: 50vh solid transparent;
    border-right: 27.9vh solid rgba(255, 255, 255, 0.74);
  }

  50% {
    border-bottom: 50vh solid transparent;
    border-right: 27.9vh solid transparent;
  }

  100% {
    border-bottom: 50vh solid transparent;
    border-right: 27.9vh solid rgba(255, 255, 255, 0.74);
  }
}

.menu2btn_1,
.menu2btn_2,
.menu2btn_3 {
  animation-name: menu2btn;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

.menu2btn_1 {
  animation-delay: 1.25s;
}

.menu2btn_2 {
  animation-delay: 1.35s;
}

.menu2btn_3 {
  animation-delay: 1.45s;
}

@keyframes menu2btn {
  0% {
    width: 0%;
    opacity: 0;
  }

  100% {
    width: 96%;
    opacity: 1;
    filter:drop-shadow(0.7vh 1.4vh 0.7vh rgba(0,0,0,0.4));
  }
}

.btn:hover {
  border: solid white 0.1vw;
  filter: contrast(1.25);
}
.conduct-sub-link {
  flex: 1;
  text-align: center;
  font-family: font1;
  font-size: 1.4vh;
  padding: 0.7vh 0;
  border-radius: 1vh;
  background: rgba(255, 255, 255, 0.75);
  color: #000;
  text-decoration: none;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 0.6vh 1.2vh rgba(0, 0, 0, 0.35);
  letter-spacing: 0.3vh;
  text-transform: uppercase;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.conduct-sub-link:hover {
  background: rgba(176, 255, 243, 0.9);
  transform: translateY(-0.3vh);
  box-shadow: 0 1vh 1.8vh rgba(0, 0, 0, 0.5);
}

.conduct-sub-links {
  position: absolute;
  top: 64%;
  left: 14%;
  width: 96%;
  display: flex;
  gap: 1vh;
  justify-content: space-between;
}

.conduct-sub-btn {
  position: relative;
  flex: 1;
  height: 20vh;
  overflow: hidden;
  cursor: pointer;
  filter: drop-shadow(0.7vh 1.4vh 0.7vh rgba(0,0,0,0.4));
  animation-name: menu2btn;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

/* =========================
   ✅ 手机端抽屉 + 汉堡键（不影响电脑端）
   ========================= */
@media (max-width: 768px) {
  /* 菜单容器变抽屉：覆盖你 inline 的 width:28vh */
  .info-menu-root {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    height: 100vh !important;

    width: 78vw !important;
    max-width: 360px;

    z-index: 9999;
    transform: translateX(-105%);
    transition: transform 0.25s ease;
  }

  .info-menu-root.mobile-open {
    transform: translateX(0%);
  }

  /* 遮罩 */
  .mobile-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9998;
    background: rgba(0,0,0,0.35);
  }

  /* 汉堡键：永远在最上层，不会跟菜单一起移走 */
  .hamburger-btn {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 10000;

    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 12px;
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 10px 22px rgba(0,0,0,0.25);

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 10px;
    cursor: pointer;
  }

  .hamburger-btn span {
    display: block;
    width: 100%;
    height: 2px;
    background: rgba(0,0,0,0.75);
    border-radius: 2px;
  }

  /* 可选：手机端整体稍微缩一点（不改你内部vh布局，只是整体scale） */
  .info-menu-root .infopage_menu {
    transform: rotateY(6deg) scale(0.92) !important;
    transform-origin: top left;
  }
}

/* 电脑端明确隐藏汉堡/遮罩（保险） */
@media (min-width: 769px) {
  .hamburger-btn,
  .mobile-backdrop {
    display: none !important;
  }
}
</style>
