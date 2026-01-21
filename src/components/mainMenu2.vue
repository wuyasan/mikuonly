<template>
  <!-- =========================
       ✅ 手机端：独立抽屉菜单（大改版）
       ========================= -->
  <template v-if="isMobile">
    <!-- 汉堡键 -->
    <button
      class="hamburger-btn"
      v-show="isMobile && !mobileMenuOpen"
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
    <!-- 遮罩 -->
    <div
      class="mobile-backdrop"
      v-show="mobileMenuOpen"
      @click="closeMobileMenu"
    ></div>

    <!-- 抽屉 -->
    <aside class="mobile-drawer" :class="{ open: mobileMenuOpen }">
      <div class="mobile-drawer-header">
        <div class="mobile-title">MIKUONLY</div>
        <button class="mobile-close" type="button" @click="closeMobileMenu">✕</button>
      </div>

    <nav class="mobile-nav">
      <!-- Info -->
      <div
        class="m-menu-btn"
        :class="{ active: currentwindow === 'info' }"
        @click="setWindowMobile('info')"
      >
        <div class="hack m-hack"></div>
        <div class="shade1 m-shade"></div>
        <div class="shade2 m-shade"></div>
        <div class="shade3 m-shade"></div>

        <div class="m-tag">
          <img src="/public/when.png" class="m-tag-icon">
          <div class="m-tag-text">DONT</div>
          <div class="m-tag-arrow"></div>
        </div>

        <div class="m-title">Info</div>

        <div class="hoverlightup m-hover">
          <div class="shade1 m-shade hl"></div>
          <div class="shade2 m-shade hl"></div>
          <div class="shade3 m-shade hl"></div>
        </div>
      </div>

      <!-- Schedule -->
      <div
        class="m-menu-btn"
        :class="{ active: currentwindow === 'schedule' }"
        @click="setWindowMobile('schedule')"
      >
        <div class="hack m-hack"></div>
        <div class="shade1 m-shade"></div>
        <div class="shade2 m-shade"></div>
        <div class="shade3 m-shade"></div>

        <div class="m-tag">
          <img src="/public/where.png" class="m-tag-icon">
          <div class="m-tag-text">FORGET</div>
          <div class="m-tag-arrow"></div>
        </div>

        <div class="m-title">Schedule</div>

        <div class="hoverlightup m-hover">
          <div class="shade1 m-shade hl"></div>
          <div class="shade2 m-shade hl"></div>
          <div class="shade3 m-shade hl"></div>
        </div>
      </div>

      <!-- Conduct -->
      <div
        class="m-menu-btn"
        :class="{ active: currentwindow === 'conduct' }"
        @click="setWindowMobile('conduct')"
      >
        <div class="hack m-hack"></div>
        <div class="shade1 m-shade"></div>
        <div class="shade2 m-shade"></div>
        <div class="shade3 m-shade"></div>

        <div class="m-tag">
          <img src="/public/rules.png" class="m-tag-icon">
          <div class="m-tag-text">PLEASE</div>
          <div class="m-tag-arrow"></div>
        </div>

        <div class="m-title">CONDUCT</div>

        <div class="hoverlightup m-hover">
          <div class="shade1 m-shade hl"></div>
          <div class="shade2 m-shade hl"></div>
          <div class="shade3 m-shade hl"></div>
        </div>
      </div>

      <!-- Conduct 两个小按钮：也做成票券感 -->
      <div class="m-subrow">
        <div class="m-subbtn" @click="openConductLinkMobile('general')">
          <div class="hack m-hack"></div>
          <div class="shade1 m-shade"></div>
          <div class="shade2 m-shade"></div>
          <div class="shade3 m-shade"></div>

          <div class="m-subtitle">Ticket<br>Info</div>

          <div class="hoverlightup m-hover">
            <div class="shade1 m-shade hl"></div>
            <div class="shade2 m-shade hl"></div>
            <div class="shade3 m-shade hl"></div>
          </div>
        </div>

        <div class="m-subbtn" @click="openConductLinkMobile('prop')">
          <div class="hack m-hack"></div>
          <div class="shade1 m-shade"></div>
          <div class="shade2 m-shade"></div>
          <div class="shade3 m-shade"></div>

          <div class="m-subtitle">Link<br>Tree</div>

          <div class="hoverlightup m-hover">
            <div class="shade1 m-shade hl"></div>
            <div class="shade2 m-shade hl"></div>
            <div class="shade3 m-shade hl"></div>
          </div>
        </div>
      </div>
    </nav>

      <div class="mobile-drawer-footer">
        <img src="/public/logo_c.png" class="mobile-logo" alt="logo">
      </div>
    </aside>
  </template>

  <!-- =========================
       ✅ 电脑端：原样保留你的旧菜单（不改）
       ========================= -->
  <template v-else>
    <div style="position:absolute;width: 28vh;height:100%;perspective: 45vh;overflow:visible;">
      <div class="infomenu_bg" style="position:absolute;width:100%;left:0%;transform:rotateY(6deg);top: 0%;height:110%;top:5%">
        <div class="ttlblock1" style="width:1vh;height:1vh;border-top:70vh solid transparent;border-bottom:70vh solid transparent;top:-20vh;position:absolute;backdrop-filter:blur(10px);"></div>
        <div class="ttlblock2" style="width:1vh;height:1vh;border-top:50vh solid transparent;top:50%;position:absolute;transform:rotatez(180deg);backdrop-filter:blur(10px);"></div>
        <div class="ttlblock3" style="width:1vh;height:1vh;border-top:50vh solid transparent;top:-50%;position:absolute;transform:rotatez(180deg);backdrop-filter:blur(10px);"></div>
      </div>

      <div class="infopage_menu" style="position: absolute; width:100%; left: 0%;   transform: rotateY(6deg);top: -37%;height: 143%;">
        <div style="position:absolute;top:50%;left:-172%;font-size:18vh;font-family:font2;color:#00000017;transform:rotateZ(90deg);">MIKUONLY</div>

        <div class='menu2btn_1' @click="setWindow('info')" :style="currentwindow === 'info'? 'background:#b0fff3;': 'background:#c1c1c1'" style="position:absolute;height:4%;left:14%;top:37%;filter:drop-shadow(0.7vh 1.4vh 0.7vh rgba(0,0,0,0.4));overflow:hidden;cursor: pointer;">
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

        <div style="position:absolute;width:100%;height:0.1vh;bottom:20%;background:#adadad;left:13%;"></div>
        <img src="/public/logo_c.png" style="position:absolute;bottom:3%;width:200%;left:-2%;">
      </div>
    </div>
  </template>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'

export default {
  data() {
    return {
      shownQAID: false,
      isReadQuestion: false,

      // ✅ 手机判定
      isMobile: window.innerWidth <= 1025,

      // ✅ 手机端菜单开关（手机默认关闭）
      mobileMenuOpen: false
    }
  },
  computed: {
    ...mapState(useUserStore, ['stateDump', 'currentwindow']),
    compileLastTurns() {},
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

    setWindowMobile(win) {
      // ✅ 切页面 + 自动收起抽屉
      this.setWindow(win)
      this.mobileMenuOpen = false
    },

    openConductLink(type) {
      let url = ''
      if (type === 'general') url = 'https://www.ny-miku-only.com/ticket-1'
      else if (type === 'prop') url = 'https://linktr.ee/mikuonly_nyc'
      if (url) window.open(url, '_blank')
      this.mobileMenuOpen = false
    },

    openConductLinkMobile(type) {
      let url = ''
      if (type === 'general') url = 'https://www.ny-miku-only.com/ticket-1'
      else if (type === 'prop') url = 'https://linktr.ee/mikuonly_nyc'
      if (url) window.open(url, '_blank')
      this.mobileMenuOpen = false
    },

    _handleResize() {
      const mobile = window.innerWidth <= 1025
      this.isMobile = mobile

      // ✅ 从电脑切到手机：默认收起
      if (mobile) this.mobileMenuOpen = false
      // ✅ 从手机切到电脑：也收起（因为电脑端不需要抽屉）
      if (!mobile) this.mobileMenuOpen = false
    },
  },
  mounted() {
    this._handleResize()
    window.addEventListener('resize', this._handleResize, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this._handleResize)
  }
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

.hamburger-btn{
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 10000;

  height: 44px;
  width: auto;
  padding: 10px 14px;

  border: 0;
  border-radius: 0 !important;
  cursor: pointer;

  background: rgba(193, 193, 193, 0.95);

  display: flex;
  align-items: center;
  gap: 10px;

  /* 如果你之前做了票券倾斜，这里保留 */
  transform: skewX(-10deg);
  transform-origin: left top;

  filter: drop-shadow(14px 16px 10px rgba(0,0,0,0.35));
  overflow: hidden;

  clip-path: polygon(
    10px 0, 100% 0,
    100% calc(100% - 10px),
    calc(100% - 12px) 100%,
    0 100%,
    0 10px
  );
}

/* 三条线容器 */
.hb-lines{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 22px;

  /* 抵消父层 skew，让线看起来是直的 */
  transform: skewX(10deg);
}

/* 三条线本体 */
.hb-line{
  display: block;
  width: 100%;
  height: 2px;
  background: rgba(0,0,0,0.78);
}

/* MENU 文本 */
.hb-text{
  font-family: font1;
  font-size: 14px;
  letter-spacing: 0.22em;
  color: rgba(0,0,0,0.82);
  white-space: nowrap;
  user-select: none;

  /* 抵消父层 skew，让字是直的 */
  transform: skewX(10deg);
}

/* 打开时换成青色（可选） */
.hamburger-btn[aria-expanded="true"]{
  background: rgba(176, 255, 243, 0.95);
}

.mobile-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9998;
  background: rgba(0,0,0,0.45);
}

.mobile-drawer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: min(66.67vw, 360px);
  height: 100vh;

  background: rgba(255,255,255,0.86);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 10px 0 30px rgba(0,0,0,0.25);

  transform: translateX(-105%);
  transition: transform 0.25s ease;

  display: flex;
  flex-direction: column;
}

.mobile-drawer.open {
  transform: translateX(0%);
}

.mobile-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 14px 10px 14px;
}

.mobile-title {
  font-weight: 700;
  letter-spacing: 0.12em;
  font-size: 14px;
  opacity: 0.75;
}

.mobile-close {
  border: 0;
  background: rgba(0,0,0,0.06);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.mobile-nav {
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 大按钮（Info/Schedule/Conduct） */
.m-menu-btn {
  position: relative;
  height: 88px;
  overflow: hidden;
  cursor: pointer;

  /* ❌ 不要圆角 */
  border-radius: 0 !important;

  /* 颜色保持：默认灰，active 青 */
  background: rgba(193,193,193,0.95);

  /* ✅ 倾斜感（图二那种） */
  transform: skewX(-10deg);
  transform-origin: left top;

  /* ✅ 更像桌面 drop-shadow */
  filter: drop-shadow(14px 16px 10px rgba(0,0,0,0.35));

  /* ✅ 斜切外形（硬边） */
  clip-path: polygon(
    10px 0, 100% 0,
    100% calc(100% - 10px),
    calc(100% - 12px) 100%,
    0 100%,
    0 10px
  );
}
/* 选中状态更像桌面 */
.m-menu-btn.active {
  background: rgba(176,255,243,0.95);
}
/* 斜光条：复用 shade1/2/3，但给手机端尺寸 */
.m-hack,
.m-shade {
  position: absolute;
  width: 30%;
  height: 420%;
  top: -160%;
  transform: rotateZ(-38deg);
}
.m-hack {
  width: 300%;
  height: 420%;
  background: rgba(0,0,0,0.01);
}

/* 默认斜光：灰 */
.m-shade { background: rgba(0,0,0,0.10); }

/* hover 斜光：青色（对应你桌面 hoverlightup） */
.m-shade.hl { background: rgba(176,255,243,0.40); }
.m-hover { position:absolute; inset:0; }

/* 顶部标签条（电脑端那条黑条 + 小图标 + 小字 + 三角） */
.m-tag {
  position: absolute;
  top: 10px;
  right: 16px;
  height: 22px;
  width: 120px;

  background: #494949;
  mix-blend-mode: multiply;
  display: flex;
  align-items: center;
  padding-left: 22px;
  padding-right: 10px;
}
.m-tag-icon {
  position: absolute;
  left: -18px;
  top: -2px;
  height: 28px;
  mix-blend-mode: multiply;
}
.m-tag-text {
  margin-left: auto;
  font-size: 12px;
  font-family: 'font11';
  color: white;
  transform: translateY(1px);
}
.m-tag-arrow {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #4d4d4d;
  position: absolute;
  right: -10px;
  top: 1px;
}

/* 大标题（右下角） */
.m-title {
  position: absolute;
  right: 14px;
  bottom: 10px;
  font-size: 26px;
  font-family: font1;
  color: white;
}

/* 两个小按钮区域 */
.m-subrow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.m-subbtn {
  position: relative;
  height: 96px;
  overflow: hidden;
  cursor: pointer;

  border-radius: 0 !important;
  background: rgba(255,237,164,0.95);

  transform: skewX(-10deg);
  transform-origin: left top;

  filter: drop-shadow(14px 16px 10px rgba(0,0,0,0.35));

  clip-path: polygon(
    10px 0, 100% 0,
    100% calc(100% - 10px),
    calc(100% - 12px) 100%,
    0 100%,
    0 10px
  );
}

.m-subtitle {
  position: absolute;
  right: 16px;
  bottom: 12px;
  font-size: 18px;
  font-family: font1;
  color: #111;
  line-height: 1.05;
}

.m-subbtn .m-subtitle {
  transform: skewX(10deg);
}

/* 抽屉整体也更“电脑端玻璃感”一点 */
.mobile-drawer {
  background: rgba(255,255,255,0.65) !important;
  border-right: 1px solid rgba(255,255,255,0.35);
}

/* 标题区也更像你风格 */
.mobile-title {
  font-family: font2;
  letter-spacing: 0.18em;
  opacity: 0.35;
}

/* 让 hoverlightup 在触屏也能“看起来有光”：
   触屏没 hover，就让它在 active 时也显示一点点 */
.m-menu-btn.active .m-hover,
.m-subbtn:active .m-hover {
  opacity: 1;
}

.mobile-nav {
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mobile-nav-btn {
  border: 0;
  padding: 14px 14px;
  border-radius: 14px;
  background: rgba(0,0,0,0.06);
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
}

.mobile-nav-btn.active {
  background: rgba(176,255,243,0.55);
}

.mobile-subrow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 6px;
}

.mobile-sub-btn {
  border: 0;
  padding: 14px 12px;
  border-radius: 14px;
  background: rgba(255,237,164,0.88);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.mobile-drawer-footer {
  margin-top: auto;
  padding: 14px;
}

.mobile-logo {
  width: 100%;
  opacity: 0.9;
}

/* ✅ 只有手机端才展示抽屉相关 */
@media (min-width: 1025px) {
  .hamburger-btn,
  .mobile-backdrop,
  .mobile-drawer {
    display: none !important;
  }
}

/* ✅ 只有手机端才渲染手机模板，但这条保险 */
@media (max-width: 1025px) {
  /* 可以留空 */
}
</style>
