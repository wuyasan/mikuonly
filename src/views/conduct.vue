<template>
  <!-- ======================= Desktop / Tablet ======================= -->
  <div
      v-if="!isMobile"
      class="conductpage conductpage--desktop"
      style="overflow: hidden; position: absolute; width: 100vw; height: 100vh; left: 0%; top: 0%; background: rgb(255, 255, 255);"
  >
    <!-- 背景层 -->
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image: linear-gradient(rgb(255, 255, 255), rgb(0 0 0));height:48vh;bottom:0px;"></div>
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image: linear-gradient(rgb(255 100 100 / 33%), rgb(255 255 255));height: 13vh;top:0px;"></div>
    <div class="bg" style="position:absolute;right:0%;background: linear-gradient(251deg, rgba(0, 0, 0, 1) 0%, rgb(255 255 255 / 0%) 73%);height:101vh;top:0px;width: 71%;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;"></div>
    <div class="bg" style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;transform:rotateY(180deg);"></div>

    <!-- 内容容器 -->
    <div
        ref="xscroll"
        class="contentpanel"
        style="
        position: absolute;
        height: 100%;
        top: 0vh;
        width: 100vw;
        background: rgba(128, 128, 128, 0.08);
        overflow: auto;
        overflow-y: auto;
        overflow-x: hidden;
      "
    >
      <div class="scrollablecontentplate" style="position: relative;width: 100%; height: 100%;overflow: hidden;">
        <!-- 底部线和侧边线 -->
        <div class="bottomline1" style="position: absolute; width: 389vh; height: 0.3vh; background: rgb(0, 0, 0); bottom: 14%; left: 0%;"></div>
        <div class="bottomline2" style="position: absolute;width: 0.3vh;height: 116vh;background: rgb(0, 0, 0);bottom: 0%;left: 80vh;"></div>
        <div class="bottomline3" style="position: absolute;bottom: 72%;left: 65vh;font-family: font2;font-size: 6vh;font-weight: 900;transform: rotateZ(-90deg);color: black;">ATTENTION</div>

        <!-- 左侧 miku + wave 装饰 -->
        <div class="fg" style="position: absolute;width: 100vw;height: 100vh;left: 0vh;top: 1%;">
          <div class="wavewrapper" style="position: absolute; height: 40vh; overflow: hidden; left: 22vh; width: 100%;bottom: 1vh;filter: drop-shadow(rgb(255, 255, 255) 0vh 0vh 1vh);">
            <wave :period-vw="140" :amplitude-vh="6" :thickness-vw="0.20" :speed-vw-per-sec="11" :opacity-pct="100" color="#ffffff" />
          </div>
          <div class="wavewrapper" style="position: absolute; height: 40vh; overflow: hidden; left: 22vh; width: 100%;bottom: 1vh;filter: drop-shadow(rgb(255, 255, 255) 0vh 0vh 1vh);opacity:0.3">
            <wave :period-vw="160" :amplitude-vh="3" :thickness-vw="0.30" :speed-vw-per-sec="15" :opacity-pct="100" color="#ffffff" />
          </div>
          <div class="wavewrapper" style="position: absolute; height: 40vh; overflow: hidden; left: 22vh; width: 100%;bottom: 5vh;filter: drop-shadow(rgb(255, 255, 255) 0vh 0vh 1vh);">
            <wave :period-vw="190" :amplitude-vh="4" :thickness-vw="0.80" :speed-vw-per-sec="11" :opacity-pct="100" color="#ffffff" />
          </div>
          <div class="wavewrapper" style="position: absolute; height: 40vh; overflow: hidden; left: 22vh; width: 100%;bottom: 5vh;filter: drop-shadow(rgb(255, 255, 255) 0vh 0vh 1vh); opacity:0.1">
            <wave :period-vw="290" :amplitude-vh="2" :thickness-vw="10" :speed-vw-per-sec="11" :opacity-pct="100" color="#ffffff" />
          </div>
          <div style="position: absolute;height: 102vh;width: 84vh;top: -2vh;left: 21vh;border-bottom-right-radius: 48vh;overflow: hidden;">
            <img src="/public/transparent_miku_angry.png" style="filter: drop-shadow(rgba(0, 0, 118, 0.2) 4vh 4vh 1vh);position: absolute;height: 100%;left: -3%;" />
          </div>
        </div>

        <!-- 右侧内容子面板 -->
        <conduct_child v-if="currentSubpanel === 'child'" />
        <conduct_cos v-if="currentSubpanel === 'cosplay'" />
        <conduct_refund v-if="currentSubpanel === 'refund'" />

        <!-- 右侧竖向 tab 切换（Desktop 保持原设计） -->
        <div class="switchpanel" style="position: absolute; left: 102vh; width: 3vw; top: 5vh;">
          <div style="position:absolute;height:100%;width: 0.2vh;background-image: linear-gradient(to bottom,rgba(255, 255, 255, 0) 1%,rgba(255, 255, 255, 1) 20%,rgba(255, 255, 255, 1) 80%,rgba(255, 255, 255, 0) 100%);top:1%;left: 43%;"></div>

          <!-- AGE -->
          <div
              class="submenubtn"
              @click="switchSubpanel('child')"
              :style="{ background: currentSubpanel === 'child' ? 'white' : 'grey' }"
              style="position:absolute;width:2vh;height:2vh;top: 10%;left: 28%; filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer;"
          >
            <div v-if="currentSubpanel !== 'child'" style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5;"></div>
            <div v-if="currentSubpanel === 'child'" class="childselect" style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip" style=" position: absolute;right: 140%;top: -47%;color: white;opacity:1;font-size: 2.6vh;text-align: right;">AGE</div>
            <div class="submenubtn" style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if="unexplored['child']" />
          </div>

          <!-- PROP -->
          <div
              class="submenubtn"
              @click="switchSubpanel('cosplay')"
              :style="{ background: currentSubpanel === 'cosplay' ? 'white' : 'grey' }"
              style="position:absolute;width:2vh;height:2vh;top: 53%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer;"
          >
            <div v-if="currentSubpanel !== 'cosplay'" style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5;"></div>
            <div v-if="currentSubpanel === 'cosplay'" class="cosplayselect" style="position:absolute;width: 3.6vh;height: 3.6vh;top:-0.8vh;border: solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip" style=" position: absolute;right: 140%;top: -47%;color: white;opacity:1;font-size: 2.6vh;text-align: right;">PROP</div>
            <div class="submenubtn" style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if="unexplored['cosplay']" />
          </div>

          <!-- TICKET -->
          <div
              class="submenubtn"
              @click="switchSubpanel('refund')"
              :style="{ background: currentSubpanel === 'refund' ? 'white' : 'grey' }"
              style="position:absolute;width:2vh;height:2vh;top: 88%;left: 28%;filter: drop-shadow(0vh 0vh 1vh black);cursor: pointer;"
          >
            <div v-if="currentSubpanel !== 'refund'" style="position:absolute;width:2vh;height:2vh;top: 0.5vh;left: 0.5vh;border: solid white 0.2vh;opacity:0.5;"></div>
            <div v-if="currentSubpanel === 'refund'" class="refundselect" style="position:absolute;width: 3.6vh;height: 3.6vh;left: -0.8vh;border: solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip" style=" position: absolute;right: 140%;top: -47%;color: white;opacity:1;font-size: 2.6vh;text-align: right;">TICKET</div>
            <div class="submenubtn" style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if="unexplored['refund']" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ======================= Mobile ======================= -->
  <div
      v-else
      class="conductpage conductpage--mobile"
      style="overflow:hidden; position:absolute; width:100vw; height:100vh; left:0%; top:0%; background: rgb(255, 255, 255);"
  >
    <!-- 背景层 -->
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image: linear-gradient(rgb(255, 255, 255), rgb(0 0 0));height:48vh;bottom:0px;"></div>
    <div class="bg" style="position:absolute;left:0%;right:0%;background-image: linear-gradient(rgb(255 100 100 / 33%), rgb(255 255 255));height: 13vh;top:0px;"></div>
    <div class="bg" style="position:absolute;right:0%;background: linear-gradient(251deg, rgba(0, 0, 0, 1) 0%, rgb(255 255 255 / 0%) 73%);height:101vh;top:0px;width: 71%;"></div>
    <div class="bg" style="position:absolute;right: 0%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;"></div>
    <div class="bg" style="position:absolute;left: -46%;background:linear-gradient(251deg, rgb(0 0 0 / 5%) 31%, rgb(255 255 255 / 0%) 32%);height:101vh;top:0px;width:209%;transform:rotateY(180deg);"></div>

    <!-- 立绘 -->
    <div class="fg">
      <img src="/public/transparent_miku_angry.png" />
    </div>

    <!-- Mobile 信息壳 -->
    <div class="m-shell">
      <!-- 这里保留 pill 风格，只是内部加 gem -->
      <div class="m-tabs">
        <!-- AGE -->
        <button
            class="m-tab"
            :class="{ active: currentSubpanel === 'child' }"
            @click="switchSubpanel('child')"
        >
          <span class="m-tab-label">AGE</span>
          <span v-if="unexplored['child']" class="m-gem m-gem--mobile">
            <gem />
          </span>
        </button>

        <!-- PROP -->
        <button
            class="m-tab"
            :class="{ active: currentSubpanel === 'cosplay' }"
            @click="switchSubpanel('cosplay')"
        >
          <span class="m-tab-label">PROP</span>
          <span v-if="unexplored['cosplay']" class="m-gem m-gem--mobile">
            <gem />
          </span>
        </button>

        <!-- TICKET -->
        <button
            class="m-tab"
            :class="{ active: currentSubpanel === 'refund' }"
            @click="switchSubpanel('refund')"
        >
          <span class="m-tab-label">TICKET</span>
          <span v-if="unexplored['refund']" class="m-gem m-gem--mobile">
            <gem />
          </span>
        </button>
      </div>

      <div class="m-panel frosted-panel">
        <div class="m-scroll">
          <conduct_child v-if="mTab === 'child'" />
          <conduct_cos v-else-if="mTab === 'cosplay'" />
          <conduct_refund v-else />
          <div style="height: 16px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/store";
import { mapActions, mapState } from "pinia";
import wave from "../components/wave.vue";
import gem from "../components/gem.vue";
import conduct_child from "../components/conduct_child.vue";
import conduct_cos from "../components/conduct_cos.vue";
import conduct_refund from "../components/conduct_refund.vue";

export default {
  components: {
    gem,
    wave,
    conduct_child,
    conduct_cos,
    conduct_refund,
  },

  data() {
    return {
      currentSubpanel: "child", // desktop & mobile 当前 tab
      unexplored: { child: true, refund: true, cosplay: true },

      isMobile: false,
      mTab: "child",
      _onResize: null,
    };
  },

  computed: {
    ...mapState(useUserStore, ["stateDump"]),
    compileLastTurns() {},
  },

  methods: {
    ...mapActions(useUserStore, ["sendchat", "getUsername"]),

    switchSubpanel(subp) {
      // 点一次就熄灭 gem
      this.unexplored[subp] = false;
      this.currentSubpanel = subp;
      if (this.isMobile) this.mTab = subp;
    },

    // desktop 用的「滚轮 → 横向滚动」
    wheelToX(e) {
      if (e.ctrlKey) return;

      const parent = this.$refs.xscroll;
      if (!parent) return;

      if (this._wheelShouldLetChildScrollY(e, parent)) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      const dx = e.deltaX || 0;
      const dy = e.deltaY || 0;
      const delta = Math.abs(dy) >= Math.abs(dx) ? dy : dx;
      parent.scrollLeft += delta;
    },

    _wheelShouldLetChildScrollY(e, stopEl) {
      let el = e.target;
      const dy = e.deltaY || 0;
      if (dy === 0) return false;

      while (el && el !== stopEl && el.nodeType === 1) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        const canScrollY =
            (overflowY === "auto" ||
                overflowY === "scroll" ||
                overflowY === "overlay") &&
            el.scrollHeight > el.clientHeight + 1;

        if (canScrollY) {
          const atTop = el.scrollTop <= 0;
          const atBottom =
              el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

          if (dy > 0 && !atBottom) return true;
          if (dy < 0 && !atTop) return true;
        }
        el = el.parentElement;
      }

      return false;
    },

    updateIsMobile() {
      this.isMobile = window.matchMedia("(max-width: 1200px)").matches;
      if (this.isMobile) {
        this.mTab = this.currentSubpanel;
      }
    },
  },

  mounted() {
    this.updateIsMobile();
    this._onResize = () => this.updateIsMobile();
    window.addEventListener("resize", this._onResize, { passive: true });
  },

  beforeUnmount() {
    if (this._onResize) window.removeEventListener("resize", this._onResize);
  },
};
</script>

<style>
/* Desktop 动画（如果你项目里已经全局写过，这块可以去掉重复） */
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

.frosted-panel {
  background: rgba(0, 0, 0, 0.45);
  border-radius: 1.5vh;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0.8vh 2vh rgba(0, 0, 0, 0.4);
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

.submenubtn:hover {
  background: white;
}

/* ===== Tablet：iPad / 宽一点的平板 ===== */
@media (min-width: 768px) and (max-width: 1199px) {
  .conductpage {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .conductpage .fg {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .conductpage .fg img {
    max-height: 80vh;
    width: auto;
    object-fit: contain;
    margin-top: -10vh;
    filter: drop-shadow(4vh 4vh 1vh rgba(0,0,118,0.2));
  }

  .conductpage .m-shell {
    position: absolute;
    left: 0;
    right: 0;
    top: 28vh;             /* 卡片往下放一点 */
    bottom: 0;
    z-index: 2;
    padding: 0 48px 24px;  /* 两边留更多空白，看起来像桌面版 */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .conductpage .m-tabs {
    display: flex;
    gap: 18px;
    justify-content: center;
    margin-bottom: 12px;
  }

  .conductpage .m-tab {
    position: relative;
    border: 0;
    cursor: pointer;
    border-radius: 999px;
    padding: 12px 20px;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(18px) saturate(1.3);
    -webkit-backdrop-filter: blur(18px) saturate(1.3);
    box-shadow: 0 10px 26px rgba(0,0,0,0.22);
    font-size: 14px;              /* 字大一点 */
    letter-spacing: 0.20em;
    font-weight: 600;
    color: rgba(0,0,0,0.86);
    min-width: 120px;
    text-align: center;
    text-transform: uppercase;
  }

  .conductpage .m-tab.active {
    background: rgba(255,255,255,0.18);
  }

  /* gem：平板上再放大、对齐到正中 */
  .conductpage .m-gem--mobile {
    position: absolute;
    top: -1rem;
    right: 2.5rem;
    pointer-events: none;
    transform: scale(2);
    transform-origin: center;
    z-index: 2;
  }

  .conductpage .m-panel {
    flex: 1 1 auto;
    min-height: 0;
    border-radius: 22px;
    overflow: hidden;
    background: rgba(0,0,0,0.32);
    backdrop-filter: blur(26px);
    -webkit-backdrop-filter: blur(26px);
  }

  .conductpage .m-scroll {
    height: 100%;
    padding: 18px 20px;
    border-radius: 22px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background: transparent !important;
  }

  /* 放大文字：AGE / PROP / REFUND 三个子组件里的内容整体加大一点 */
  .conduct_child,
  .conduct_cos,
  .conduct_refund {
    font-size: 15px;
  }

  .age-mobile-card,
  .age-mobile-section,
  .age-mobile-section li,
  .cos-mobile-card,
  .cos-mobile-section,
  .cos-mobile-section li,
  .refund-mobile-card,
  .refund-mobile-section,
  .refund-mobile-section li {
    font-size: 14px;
    line-height: 1.6;
  }

  .age-mobile-title,
  .cos-mobile-title,
  .refund-mobile-title {
    font-size: 13px;
  }
}


/* ========= Mobile 布局 ========= */
@media (max-width: 768px) {
  .conductpage {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  /* 上方立绘 */
  .conductpage .fg {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .conductpage .fg img {
    max-height: 55vh;
    width: auto;
    object-fit: contain;
    margin-top: -6vh; /* 稍微往上提一点 */
    filter: drop-shadow(4vh 4vh 1vh rgba(0, 0, 118, 0.2));
  }

  /* 下方 3/4 信息区 */
  .conductpage .m-shell {
    position: absolute;
    left: 0;
    right: 0;
    top: 25vh;
    bottom: 0;
    z-index: 2;

    padding: 0 16px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  /* tabs：沿用你现在的 pill 风格 */
  .conductpage .m-tabs {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 8px;
  }

  .conductpage .m-tab {
    position: relative; /* 方便放 gem */
    border: 0;
    cursor: pointer;
    border-radius: 999px;
    padding: 10px 14px;

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px) saturate(1.3);
    -webkit-backdrop-filter: blur(16px) saturate(1.3);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);

    font-size: 13px;
    letter-spacing: 0.18em;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.78);
    min-width: 86px;
    text-align: center;
    text-transform: uppercase;
  }

  .conductpage .m-tab.active {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.22);
  }

  .conductpage .m-tab-label {
    position: relative;
    z-index: 1;
  }

  /* ✅ 手机版放大的 gem */
  .conductpage .m-gem--mobile {
    position: absolute;
    top: -0.5rem;
    right: 1.6rem;
    pointer-events: none;
    transform: scale(4);
    transform-origin: center;
    z-index: 2;
  }

  .conductpage .m-gem--mobile > * {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* 内容卡片：外层磨砂，内层滚动透明 */
  .conductpage .m-panel {
    flex: 1 1 auto;
    min-height: 0;
    border-radius: 18px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }

  .conductpage .m-scroll {
    height: 100%;
    padding: 12px;
    border-radius: 18px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background: transparent !important;
  }
}
</style>
