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

    <!-- 覆盖层 -->
    <div class="bk03-overlay"></div>
    <div class="white-overlay"></div>

    <!-- ✅ 人物层（在背景上面） -->
    <div class="fg fg--conduct" aria-hidden="true">
      <div
          class="wavewrapper"
          style="position:absolute;height:40vh;overflow:hidden;left:22vh;width:100%;bottom:1vh;filter:drop-shadow(rgb(255,255,255) 0vh 0vh 1vh);"
      >
        <wave :period-vw="140" :amplitude-vh="6" :thickness-vw="0.20" :speed-vw-per-sec="11" :opacity-pct="100" color="#ffffff" />
      </div>
      <div
          class="wavewrapper"
          style="position:absolute;height:40vh;overflow:hidden;left:22vh;width:100%;bottom:1vh;filter:drop-shadow(rgb(255,255,255) 0vh 0vh 1vh);opacity:0.3"
      >
        <wave :period-vw="160" :amplitude-vh="3" :thickness-vw="0.30" :speed-vw-per-sec="15" :opacity-pct="100" color="#ffffff" />
      </div>
      <div
          class="wavewrapper"
          style="position:absolute;height:40vh;overflow:hidden;left:22vh;width:100%;bottom:5vh;filter:drop-shadow(rgb(255,255,255) 0vh 0vh 1vh);"
      >
        <wave :period-vw="190" :amplitude-vh="4" :thickness-vw="0.80" :speed-vw-per-sec="11" :opacity-pct="100" color="#ffffff" />
      </div>
      <div
          class="wavewrapper"
          style="position:absolute;height:40vh;overflow:hidden;left:22vh;width:100%;bottom:5vh;filter:drop-shadow(rgb(255,255,255) 0vh 0vh 1vh);opacity:0.1"
      >
        <wave :period-vw="290" :amplitude-vh="2" :thickness-vw="10" :speed-vw-per-sec="11" :opacity-pct="100" color="#ffffff" />
      </div>

      <div class="miku-wrap">
        <img class="miku-img" src="/transparent_miku_angry.png" />
        <!-- ✅ 人物遮罩（在人物上面，但仍在模块下面） -->
        <img class="miku-mask" src="/Page3角色白色遮罩.png" />
      </div>
    </div>

    <!-- ✅ 模块层（最上） -->
    <div
        ref="xscroll"
        class="contentpanel"
        style="position:absolute;height:100%;top:0vh;width:100vw;background:rgba(128,128,128,0.08);overflow:auto;overflow-y:auto;overflow-x:hidden;"
    >
      <div class="scrollablecontentplate conduct-desktop-stage">
        <!-- ✅ 固定右上角标题：跟着 contentpanel，不随 tab 变化 -->
        <div class="conduct-title" aria-hidden="true">
          <img class="conduct-title__img" src="/attention_Tittle.png" alt="" />
        </div>

        <!-- ✅ currentSubpanel：放到“舞台”里（更靠左） -->
        <div class="subpanel-stage">
          <conduct_child v-if="currentSubpanel === 'child'" />
          <conduct_cos v-if="currentSubpanel === 'cosplay'" />
          <conduct_refund v-if="currentSubpanel === 'refund'" />
        </div>

        <!-- ✅ switchpanel：贴右侧（对齐 infopage） -->
        <div class="switchpanel conduct-switchpanel">
          <div style="position:absolute;height:100%;width:0.2vh;background-image:linear-gradient(to bottom,rgba(255,255,255,0) 1%,rgba(255,255,255,1) 20%,rgba(255,255,255,1) 80%,rgba(255,255,255,0) 100%);top:1%;left:43%;"></div>

          <!-- AGE -->
          <div
              class="submenubtn"
              @click="switchSubpanel('child')"
              :style="{ background: currentSubpanel === 'child' ? 'white' : 'grey' }"
              style="position:absolute;width:2vh;height:2vh;top:10%;left:28%;filter:drop-shadow(0vh 0vh 1vh black);cursor:pointer;"
          >
            <div v-if="currentSubpanel !== 'child'" style="position:absolute;width:2vh;height:2vh;top:0.5vh;left:0.5vh;border:solid white 0.2vh;opacity:0.5;"></div>
            <div v-if="currentSubpanel === 'child'" class="childselect" style="position:absolute;width:3.6vh;height:3.6vh;left:-0.8vh;border:solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip" style="position:absolute;right:140%;top:-47%;color:white;opacity:1;font-size:2.6vh;text-align:right;">AGE</div>
            <div class="submenubtn" style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if="unexplored['child']" />
          </div>

          <!-- PROP -->
          <div
              class="submenubtn"
              @click="switchSubpanel('cosplay')"
              :style="{ background: currentSubpanel === 'cosplay' ? 'white' : 'grey' }"
              style="position:absolute;width:2vh;height:2vh;top:53%;left:28%;filter:drop-shadow(0vh 0vh 1vh black);cursor:pointer;"
          >
            <div v-if="currentSubpanel !== 'cosplay'" style="position:absolute;width:2vh;height:2vh;top:0.5vh;left:0.5vh;border:solid white 0.2vh;opacity:0.5;"></div>
            <div v-if="currentSubpanel === 'cosplay'" class="cosplayselect" style="position:absolute;width:3.6vh;height:3.6vh;top:-0.8vh;border:solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip" style="position:absolute;right:140%;top:-47%;color:white;opacity:1;font-size:2.6vh;text-align:right;">PROP</div>
            <div class="submenubtn" style="position:absolute;top:0%;left:0%;height:100%;width:100%;"></div>
            <gem v-if="unexplored['cosplay']" />
          </div>

          <!-- TICKET -->
          <div
              class="submenubtn"
              @click="switchSubpanel('refund')"
              :style="{ background: currentSubpanel === 'refund' ? 'white' : 'grey' }"
              style="position:absolute;width:2vh;height:2vh;top:88%;left:28%;filter:drop-shadow(0vh 0vh 1vh black);cursor:pointer;"
          >
            <div v-if="currentSubpanel !== 'refund'" style="position:absolute;width:2vh;height:2vh;top:0.5vh;left:0.5vh;border:solid white 0.2vh;opacity:0.5;"></div>
            <div v-if="currentSubpanel === 'refund'" class="refundselect" style="position:absolute;width:3.6vh;height:3.6vh;left:-0.8vh;border:solid white 0.2vh;"></div>
            <div class="frosted-panel frosted-chip" style="position:absolute;right:140%;top:-47%;color:white;opacity:1;font-size:2.6vh;text-align:right;">TICKET</div>
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

    <div class="bk03-overlay"></div>
    <div class="white-overlay"></div>

    <!-- 立绘（移动端你之前单独写的，可以继续用；这里也能加遮罩如果你要） -->
    <div class="fg">
      <img src="/transparent_miku_angry.png" style="scale: 1.5"/>
    </div>

    <!-- Mobile 信息壳 -->
    <div class="m-shell">
      <div class="m-tabs">
        <!-- AGE -->
        <button class="m-tab" :class="{ active: currentSubpanel === 'child' }" @click="switchSubpanel('child')">
          <span class="m-tab-label">AGE</span>
          <span v-if="unexplored['child']" class="m-gem-wrap" aria-hidden="true">
  <gem class="m-gem-inner" />
</span>

        </button>

        <!-- PROP -->
        <button class="m-tab" :class="{ active: currentSubpanel === 'cosplay' }" @click="switchSubpanel('cosplay')">
          <span class="m-tab-label">PROP</span>
          <span v-if="unexplored['cosplay']" class="m-gem-wrap" aria-hidden="true">
  <gem class="m-gem-inner" />
</span>

        </button>

        <!-- TICKET -->
        <button class="m-tab" :class="{ active: currentSubpanel === 'refund' }" @click="switchSubpanel('refund')">
          <span class="m-tab-label">TICKET</span>
          <span v-if="unexplored['refund']" class="m-gem-wrap" aria-hidden="true">
  <gem class="m-gem-inner" />
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
      currentSubpanel: "child",
      unexplored: { child: true, refund: true, cosplay: true },

      isMobile: false,
      mTab: "child",
      _onResize: null,
    };
  },

  computed: {
    ...mapState(useUserStore, ["stateDump"]),
  },

  methods: {
    ...mapActions(useUserStore, ["sendchat", "getUsername"]),

    switchSubpanel(subp) {
      this.unexplored[subp] = false; // ✅ 点哪个灭哪个
      this.currentSubpanel = subp;
      if (this.isMobile) this.mTab = subp;
    },

    updateIsMobile() {
      this.isMobile = window.matchMedia("(max-width: 1301px)").matches;
      if (this.isMobile) this.mTab = this.currentSubpanel;
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
/* 让 conductpage 自己形成 stacking context */
.conductpage{
  position: absolute;
  inset: 0;
  isolation: isolate;
}

/* 背景层 */
.conductpage .bg{ z-index: 0; }

/* 覆盖层 */
.conductpage .bk03-overlay{ z-index: 1; }
.conductpage .white-overlay{ z-index: 2; }

/* ✅ 人物层（背景之上、模块之下） */
.conductpage .fg.fg--conduct{
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
}

/* 人物 + 遮罩 */
.conductpage .fg.fg--conduct .miku-wrap{
  position: absolute;
  height: 102vh;
  width: 84vh;
  top: -2vh;
  left: 21vh;
  border-bottom-right-radius: 48vh;
  overflow: hidden;
}

.conductpage .fg.fg--conduct .miku-img{
  position: absolute;
  height: 100%;
  left: 10%;
  scale: 1.7;
  filter: drop-shadow(rgba(0, 0, 118, 0.2) 4vh 4vh 1vh);
}

/* 遮罩（在人物上） */
.conductpage .fg.fg--conduct .miku-mask{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 1;
  mix-blend-mode: screen; /* 不喜欢就删掉 */
}

/* ✅ 模块层永远在最上 */
.conductpage .contentpanel,
.conductpage .m-shell,
.conductpage .switchpanel{
  position: relative;
  z-index: 10;
}

/* ✅ 固定右上角标题：贴合 contentpanel，不随 tab 变化 */
.conduct-title{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  pointer-events: none;
}

.conduct-title__img{
  display: block;
  width: min(62vw, 980px);
  height: auto;
}

/* ===== BK03 background overlay ===== */
.bk03-overlay{
  position: absolute;
  inset: 0;
  background: url("/BK03.png") center / cover no-repeat;
  opacity: 1;
  pointer-events: none;
}

.white-overlay{
  position:absolute;
  inset:0;
  background: url("/纯白背景透图.png") center / cover no-repeat;
  opacity: 1;
  pointer-events:none;
}

/* ========== 你原本的动画/样式保留（必要的） ========== */
.switchpanel {
  animation-name: switchpanel;
  animation-delay: 0s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}
@keyframes switchpanel { 0% { height: 0vh; } 100% { height: 77vh; } }

.childselect { animation: childselect 0.5s cubic-bezier(1, 0.02, 0.17, 1) forwards; }
@keyframes childselect { 0% { top: 1vh; opacity: 0; } 100% { top: -0.8vh; opacity: 1; } }

.cosplayselect { animation: cosplayselect 0.5s cubic-bezier(1, 0.02, 0.17, 1) forwards; }
@keyframes cosplayselect { 0% { left: -1.8vh; opacity: 0; } 100% { left: -0.8vh; opacity: 1; } }

.refundselect { animation: refundselect 0.5s cubic-bezier(1, 0.02, 0.17, 1) forwards; }
@keyframes refundselect { 0% { top: -2.6vh; opacity: 0; } 100% { top: -0.8vh; opacity: 1; } }

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
.submenubtn:hover { background: white; }

/* ===== Mobile 你原本的（保留） ===== */
@media (max-width: 1300px) {

  .conductpage { position: fixed; inset: 0; width: 100vw; height: 100vh; overflow: hidden; }
  .conductpage .fg { position: absolute; inset: 0; z-index: 1; pointer-events: none; display: flex; justify-content: center; align-items: flex-start; }
  .conductpage .fg img { max-height: 55vh; width: auto; object-fit: contain; margin-top: -6vh; filter: drop-shadow(4vh 4vh 1vh rgba(0, 0, 118, 0.2)); }
  .conductpage .m-shell { position: absolute; left: 0; right: 0; top: 25vh; bottom: 0; z-index: 2; padding: 0 16px 16px; display: flex; flex-direction: column; }
  .conductpage .m-tabs { display: flex; gap: 10px; justify-content: center; margin-bottom: 8px; }
  .conductpage .m-tab { position: relative; border: 0; cursor: pointer; border-radius: 999px; padding: 10px 14px; background: rgba(255,255,255,0.1); backdrop-filter: blur(16px) saturate(1.3); -webkit-backdrop-filter: blur(16px) saturate(1.3); box-shadow: 0 8px 22px rgba(0,0,0,0.18); font-size: 13px; letter-spacing: 0.18em; font-weight: 500; color: rgba(0,0,0,0.78); min-width: 86px; text-align: center; text-transform: uppercase; }
  .conductpage .m-tab.active { background: rgba(255,255,255,0.15); box-shadow: 0 10px 26px rgba(0,0,0,0.22); }
  .conductpage .m-tab-label { position: relative; z-index: 1; }
  .conductpage .m-gem--mobile { position: absolute; top: -0.5rem; right: 1.6rem; pointer-events: none; transform: scale(4); transform-origin: center; z-index: 2; }
  .conductpage .m-panel { flex: 1 1 auto; min-height: 0; border-radius: 18px; overflow: hidden; background: rgba(0,0,0,0.3); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); }
  .conductpage .m-scroll { height: 100%; padding: 12px; border-radius: 18px; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; background: transparent !important; }
}

/* 让 contentpanel 成为绝对定位子元素的参照 */
.conductpage--desktop .contentpanel{
  position: absolute;
  inset: 0;
}

/* switchpanel 永远盖在 currentSubpanel 上 */
.conductpage--desktop .switchpanel--top{
  z-index: 20;
}

/* ===== Desktop: stage like infopage ===== */
.conductpage--desktop .contentpanel{
  position: absolute;
  inset: 0;
}

/* 整个舞台 */
.conductpage--desktop .conduct-desktop-stage{
  position: relative;
  width: 100%;
  height: 100%;
}

/* ✅ currentSubpanel 舞台：往左放（你可以按需要调 left/top/width/height） */
.conductpage--desktop .conduct-stage{
  position: absolute;
  left: 14vh;     /* ✅ 模块整体往左 */
  top: 6vh;
  width: 84vh;
  height: 88vh;

  max-width: 58vw;
  max-height: 90vh;

  z-index: 10;
}

/* ✅ switchpanel：贴右侧（完全参考 infopage） */
.conductpage--desktop .conduct-switchpanel{
  position: absolute;
  right: -0.8vh;
  top: 10vh;
  width: 7vh;
  height: 77vh;
  z-index: 20;
}

/* ✅ 右上角标题：贴 contentpanel，留出 switchpanel 的空间 */
.conductpage--desktop .conduct-title{
  position: absolute;
  top: 0;
  right: 7vh;   /* ✅ 让开右侧 switchpanel */
  z-index: 15;
  pointer-events: none;
}

.conductpage--desktop .conduct-title__img{
  display: block;
  width: min(62vw, 980px);
  height: auto;
}

/* contentpanel 做成稳定舞台 */
.conductpage--desktop .contentpanel{
  position:absolute !important;
  inset:0 !important;
  width:100vw !important;
  height:100vh !important;
  z-index:10;
}

/* switchpanel 永远贴最右 */
.conductpage--desktop .switchpanel{
  position:absolute !important;
  right:-0.8vh !important;
  top:10vh !important;
  width:7vh !important;
  height:77vh !important;
  z-index:20;
}

/* 模块舞台：在 switchpanel 左边，不压住人物 */
.conductpage--desktop .subpanel-stage{
  position:absolute !important;
  right:16vh !important;  /* 给 switchpanel 留空间 */
  top:6vh !important;
  width:84vh !important;
  height:88vh !important;

  max-width:58vw !important;
  max-height:90vh !important;
  z-index:15;
}
/* ===== gem badge (same idea as infopage) ===== */

/* Desktop switch buttons: allow overflow */
.conductpage--desktop .submenubtn{
  position: relative !important;
  overflow: visible !important;
}

/* Desktop gem badge */
.conductpage--desktop .gem-badge{
  position: absolute !important;
  top: -1.2vh !important;
  right: -1.2vh !important;
  width: 2.6vh !important;
  height: 2.6vh !important;
  z-index: 999 !important;
  pointer-events: none !important;

  display: grid !important;
  place-items: center !important;
}

.conductpage--desktop .gem-badge__inner,
.conductpage--desktop .gem-badge svg,
.conductpage--desktop .gem-badge img{
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}

/* Mobile tabs: allow overflow */
.conductpage--mobile .m-tab{
  position: relative !important;
  overflow: visible !important;
}

/* Mobile gem wrapper (infopage style) */
.conductpage--mobile .m-gem-wrap{
  position: absolute !important;
  top: -12px !important;
  right: -12px !important;
  width: 28px !important;
  height: 28px !important;
  z-index: 999 !important;
  pointer-events: none !important;

  display: grid !important;
  place-items: center !important;
}

.conductpage--mobile .m-gem-inner,
.conductpage--mobile .m-gem-wrap svg,
.conductpage--mobile .m-gem-wrap img{
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}

</style>
