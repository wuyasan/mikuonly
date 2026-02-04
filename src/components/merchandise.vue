<template>
  <div class="merch-root" ref="root">
    <!-- 背景层（共用） -->
    <img class="bg1" src="/背景.png" alt="" aria-hidden="true" />
    <img class="bg2" src="/纯白背景透图.png" alt="" aria-hidden="true" />

    <!-- =========================
         Desktop / Tablet（完全保留你现有版本）
         ========================= -->
    <div v-if="!isMobile" class="stage" :style="stageStyle">
      <!-- 标题（仍然独立在上方） -->
      <img class="title" src="/Merchandise tittle.png" alt="Merchandise" />

      <!-- ✅ merchBlock：白底商品 + 商品内容 = 一个整体 -->
      <div class="merchBlock" aria-label="Merchandise block">
        <!-- 白底_商品（背景） -->
        <img class="panelBase" src="/白底_商品.png" alt="" aria-hidden="true" />

        <!-- 商品内容区域（在白底内部定位） -->
        <section class="shopArea" aria-label="Merchandise items">
          <!-- ✅ 可视窗口：裁切商品，不超出白底 -->
          <!-- ✅ pointer 拖拽滚动（曲面/超宽屏也能按住拖动） -->
          <div
            class="railViewport"
            @wheel.passive="onWheel"
            @pointerdown="startGrab"
            @pointermove="onGrabMove"
            @pointerup="endGrab"
            @pointercancel="endGrab"
            @pointerleave="endGrab"
          >
            <!-- ✅ 原生横向滚动条（网页 bar） -->
            <div class="rail" ref="rail">
              <div class="railInner">
                <button
                  v-for="item in items"
                  :key="item.id"
                  class="card"
                  type="button"
                  @click="open(item)"
                  :aria-label="`Open ${item.name}`"
                >
                  <img class="cardFrame" src="/商品卡片.png" alt="" aria-hidden="true" />
                  <!-- sample 以后启用 -->
                  <!-- <img class="sample" :src="item.img" alt="" /> -->
                </button>
              </div>
            </div>

            <!-- ✅ 最前边缘滤网遮罩：只覆盖卡片区域（不遮滚动条） -->
            <img class="frontMask" src="/最前边缘滤网遮罩.png" alt="" aria-hidden="true" />
          </div>
        </section>
      </div>
    </div>

    <!-- =========================
         Mobile（全新独立，不进 stage，不影响桌面）
         一屏一张卡：左右滑动切换
         ========================= -->
    <div v-else class="m-shell" aria-label="Merchandise mobile">
      <!-- 手机端标题（你说可以重写，不要沿用桌面定位） -->
      <img class="m-title" src="/Merchandise tittle.png" alt="Merchandise" />

      <!-- 手机端卡片轮播 -->
      <div class="m-viewport" ref="mViewport">
        <div class="m-rail" ref="mRail">
          <button
            v-for="item in items"
            :key="item.id"
            class="m-card"
            type="button"
            @click="open(item)"
            :aria-label="`Open ${item.name}`"
          >
            <img class="m-cardFrame" src="/商品卡片.png" alt="" aria-hidden="true" />
          </button>
        </div>

        <!-- 遮罩（只盖卡片区） -->
        <img class="m-frontMask" src="/最前边缘滤网遮罩.png" alt="" aria-hidden="true" />
      </div>

      <!-- 可选提示（不想要就删） -->
      <div class="m-hint" aria-hidden="true">Swipe ◀ ▶</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "merchandise",

  data() {
    return {
      // 设计稿基准（桌面端用）
      designW: 1920,
      designH: 1080,
      scale: 1,

      // 断点
      isMobile: false,
      _onResize: null,

      items: [
        { id: "p1", name: "ZHE SHI MING ZI", price: 99.99, img: "/sample.png", link: "" },
        { id: "p2", name: "ZHE SHI MING ZI", price: 99.99, img: "/sample.png", link: "" },
        { id: "p3", name: "ZHE SHI MING ZI", price: 99.99, img: "/sample.png", link: "" },
        { id: "p4", name: "ZHE SHI MING ZI", price: 99.99, img: "/sample.png", link: "" },
        { id: "p5", name: "ZHE SHI MING ZI", price: 99.99, img: "/sample.png", link: "" },
        { id: "p6", name: "ZHE SHI MING ZI", price: 99.99, img: "/sample.png", link: "" },
      ],

      // 桌面端拖拽滚动状态（保留你现有逻辑）
      grabbing: false,
      grabStartX: 0,
      grabStartScrollLeft: 0,
      didDrag: false,
      _suppressClickUntil: 0,
    };
  },

  computed: {
    stageStyle() {
      return {
        width: this.designW + "px",
        height: this.designH + "px",
        transform: `scale(${this.scale})`,
        transformOrigin: "top left",
      };
    },
  },

  methods: {
    open(item) {
      // ✅ 如果刚刚在拖拽，避免被当成点击打开
      if (this._suppressClickUntil && performance.now() < this._suppressClickUntil) return;
      if (item.link) window.open(item.link, "_blank", "noreferrer");
    },

    updateIsMobile() {
      this.isMobile = window.matchMedia("(max-width: 1300px)").matches;
    },

    fit() {
      // ✅ 桌面端仍用 root 的可视尺寸来算 scale（完全遵循你原来的策略）
      const root = this.$refs.root;
      if (!root) return;

      const vw = root.clientWidth;
      const vh = root.clientHeight;

      this.scale = Math.min(vw / this.designW, vh / this.designH);
      this.updateIsMobile();
    },

    // ===== 桌面端：鼠标滚轮横滚（保留）=====
    onWheel(e) {
      if (this.isMobile) return;
      const rail = this.$refs.rail;
      if (!rail) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      rail.scrollLeft += delta;
    },

    // ===== 桌面端：按住拖拽滚动（保留）=====
    startGrab(e) {
      if (this.isMobile) return;

      // 仅左键（鼠标）
      if (e.pointerType === "mouse" && e.button !== 0) return;

      const rail = this.$refs.rail;
      if (!rail) return;

      this.grabbing = true;
      this.didDrag = false;
      this.grabStartX = e.clientX;
      this.grabStartScrollLeft = rail.scrollLeft;

      e.currentTarget.setPointerCapture?.(e.pointerId);
    },

    onGrabMove(e) {
      if (this.isMobile) return;
      if (!this.grabbing) return;

      const rail = this.$refs.rail;
      if (!rail) return;

      const dx = e.clientX - this.grabStartX;
      if (Math.abs(dx) > 4) this.didDrag = true;

      rail.scrollLeft = this.grabStartScrollLeft - dx;
      e.preventDefault();
    },

    endGrab(e) {
      if (this.isMobile) return;
      if (!this.grabbing) return;

      this.grabbing = false;

      if (this.didDrag) {
        this._suppressClickUntil = performance.now() + 250;
      }

      e.currentTarget.releasePointerCapture?.(e.pointerId);
    },
  },

  mounted() {
    this.fit();
    this._onResize = () => this.fit();
    window.addEventListener("resize", this._onResize, { passive: true });
  },

  beforeUnmount() {
    if (this._onResize) window.removeEventListener("resize", this._onResize);
  },
};
</script>

<style scoped>
/* 根容器 */
.merch-root {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 背景 */
.bg1,
.bg2 {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.bg2 {
  opacity: 1;
}

/* =========================
   Desktop（你现有 CSS：原样保留）
   ========================= */
.stage {
  position: absolute;
  left: 0;
  top: 0;
}

.title {
  position: absolute;
  left: 1000px;
  top: 17%;
  width: 640px;
  height: auto;
  z-index: 6;
  pointer-events: none;
  transform: scale(1.3);
}

.merchBlock {
  position: absolute;
  left: 27%;
  top: 8%;
  width: 1180px;
  height: 760px;
  z-index: 4;
  transform: scale(1.2);
  transform-origin: top left;
}

.panelBase {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  z-index: 1;
}

.shopArea {
  position: absolute;
  left: 120px;
  right: 80px;
  top: 150px;
  bottom: 90px;
  z-index: 2;
}

.railViewport {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
  padding: 0 40px;
  box-sizing: border-box;

  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  touch-action: pan-y;
}
.railViewport:active {
  cursor: grabbing;
}

.rail {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  scroll-padding-left: 40px;
  scroll-padding-right: 40px;

  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.65) rgba(255, 255, 255, 0.18);
}

.rail::-webkit-scrollbar {
  height: 10px;
}
.rail::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.18);
  border-radius: 999px;
}
.rail::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.65);
  border-radius: 999px;
}
.rail::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.82);
}

.railInner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 34px;
  padding: 0 40px;
  width: max-content;
}

.card {
  position: relative;
  width: 250px;
  height: 420px;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  flex: 0 0 auto;
}

.cardFrame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
  -webkit-user-drag: none;
  user-drag: none;
}

.frontMask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 420px;
  object-fit: cover;
  pointer-events: none;
  z-index: 3;
}

/* =========================
   Mobile（全新独立：m- 前缀，避免影响别的页面）
   ========================= */
.m-shell {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10vh;
  gap: 14px;
}

.m-title {
  width: min(78vw, 560px);
  height: auto;
  pointer-events: none;
  transform: scale(1.2);
}

.m-viewport {
  position: relative;
  width: min(92vw, 720px);
  height: 72vh;
  overflow: hidden;
}

.m-rail {
  height: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  /* ✅ 一张一张吸附 */
  scroll-snap-type: x mandatory;

  /* ✅ 两边留点 padding，让第一张不会贴边 */
  padding: 0 10px;
  box-sizing: border-box;

  /* 隐藏滚动条（更像轮播） */
  scrollbar-width: none;
}
.m-rail::-webkit-scrollbar {
  display: none;
}

.m-card {
  flex: 0 0 100%;
  scroll-snap-align: center;
  display: grid;
  place-items: center;

  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
}

.m-cardFrame {
  width: min(78vw, 420px);
  max-height: 100%;
  object-fit: contain;
  pointer-events: none;
  -webkit-user-drag: none;
  user-drag: none;
}

.m-frontMask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 86%;
  object-fit: cover;
  pointer-events: none;
}

.m-hint {
  font-size: 14px;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

/* 小屏兜底 */
@media (max-width: 1300px) {
  .merch-root {
    height: 100vh;
  }
}
</style>
