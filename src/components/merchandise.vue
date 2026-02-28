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
                >
                  <!-- 底图：卡片框（图二） -->
                  <img class="cardFrame" src="/商品卡片.png" alt="" aria-hidden="true" />

                  <!-- 商品图：放进灰色窗口（图一） -->
                  <!-- ✅ 新增：灰窗“遮挡层 + 裁切层” -->
                  <div class="cardWindow" aria-hidden="true">
                    <img
                      class="cardArt"
                      :class="item.fit === 'contain' ? 'fit-contain' : 'fit-cover'"
                      :src="item.img"
                      :alt="item.name"
                    />
                  </div>

                  <!-- 文字（如果你想显示 ZHE SHI MING ZI） -->
                  <div class="cardMeta">
                    <div class="cardName">{{ item.name }}</div>
                    <div class="cardPrice">{{ item.price }}</div>
                  </div>
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
      <!-- 手机端标题 -->
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
            <!-- 卡片框底图 -->
            <img class="m-cardFrame" src="/商品卡片.png" alt="" aria-hidden="true" />

            <!-- ✅ 灰色窗口 + 商品图（手机端专用） -->
            <div class="m-cardWindow" aria-hidden="true">
              <img
                class="m-cardArt"
                :class="item.fit === 'contain' ? 'fit-contain' : 'fit-cover'"
                :src="item.img"
                :alt="item.name"
              />
            </div>

            <!-- ✅ 文字层（名字白底只包住名字） -->
            <div class="m-cardMeta" aria-hidden="true">
              <div class="m-cardName">{{ item.name }}</div>
              <div class="m-cardPrice">{{ item.price }}</div>
            </div>
          </button>
        </div>

        <!-- 遮罩（只盖卡片区） -->
        <img class="m-frontMask" src="/最前边缘滤网遮罩.png" alt="" aria-hidden="true" />
      </div>

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
        { id: "p1", name: "piapro - Hatsune Miku Nika◯ Keychain", price: "Pre-Order", img: "/piapro - Hatsune Miku Nika◯-keychain.png", link: "https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-nika" },
        { id: "p2", name: "piapro - Hatsune Miku DAY Keychain", price: "Pre-Order", img: "/piapro - Hatsune Miku DAY-keychain.png", link: "https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-day" },
        { id: "p3", name: " piapro - Hatsune Miku Jagabata Keychain", price: "Pre-Order", img: "/piapro - Hatsune Miku Jagabata-keychain.png", link: "https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-jagabata" },
        { id: "p4", name: "piapro - Hatsune Miku Usajimaru Keychain", price: "Pre-Order", img: "/piapro - Hatsune Miku Usajimaru-keychain.png", link: "https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-usajimaru" },
        { id: "p5", name: "piapro - Hatsune Miku Pentagon Keychain", price: "Pre-Order", img: "/piapro - Hatsune Miku Pentagon-keychain.png", link: "https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-pentagon" },
        { id: "p6", name: "piapro - Hatsune Miku Nika◯ Acrylic Stand", price: "Pre-Order", img: "/piapro - Hatsune Miku Nika◯-AcrylicStand.png", link: "https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-nika-1" },
        { id: "p7", name: "piapro - Hatsune Miku DAY Acrylic Stand", price: "Pre-Order", img: "/piapro - Hatsune Miku DAY-AcrylicStand.png", link: "https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-day-1" },
        { id: "p8", name: "piapro - Hatsune Miku Jagabata Acrylic Stand", price: "Pre-Order", img: "/piapro - Hatsune Miku Jagabata-AcrylicStand.png", link: "https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-jagabata-1" },
        { id: "p9", name: "piapro - Hatsune Miku Usajimaru Acrylic Stand", price: "Pre-Order ", img: "/piapro - Hatsune Miku Usajimaru-AcrylicStand.png", link:"https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-usajimaru-1" },
        { id: "p10", name: "piapro - Hatsune Miku Pentagon Acrylic Stand", price: "Pre-Order", img: "/piapro - Hatsune Miku Pentagon-AcrylicStand.png", link: "https://www.ny-miku-only.com/product-page/piapro-hatsune-miku-pentagon-1" },
        {
          id: "p11",
          name: "１Pac Nika◯ / DAY / Jagabata / Usajimaru / Pentagon",
          price: "Pre-Order",
          img: "/1Pac Can Badge.png",
          fit: "contain",
          link: "",
        },
        {
          id: "p12",
          name: "5PCS Can Badge piapro - Hatsune Miku …",
          price: "Pre-Order",
          img: "/Can Badge 5PCS Set A.png",
          fit: "contain",
          link: "https://www.ny-miku-only.com/product-page/can-badge-5pcs-set-a",
        },
        {
          id: "p13",
          name: "5PCS Can Badge piapro - Hatsune Miku …",
          price: "Pre-Order",
          img: "/Can Badge 5PCS Set B.png",
          fit: "contain",
          link: "https://www.ny-miku-only.com/product-page/can-badge-5pcs-set-b",
        },
        {
          id: "p14",
          name: "5PCS Can Badge piapro - Hatsune Miku …",
          price: "Pre-Order",
          img: "/Can Badge 5PCS Set C.png",
          fit: "contain",
          link: "https://www.ny-miku-only.com/product-page/can-badge-5pcs-set-c",
        },
        { id: "p15", name: "piapro - Hatsune Miku Nika◯ / M / L / XL / 2XL", price: "Pre-Order", img: "/piapro - Hatsune Miku Nika◯-Tshirt.png", link: "https://www.ny-miku-only.com/product-page/t-shirt-piapro-hatsune-miku-nika-m-l-xl-2xl" },
        { id: "p18", name: " piapro - Hatsune Miku Usajimaru / M / L / XL / 2XL", price: "Pre-Order", img: "/piapro - Hatsune Miku Usajimaru-Tshirt.png", link: "https://www.ny-miku-only.com/product-page/t-shirt-piapro-hatsune-miku-usajimaru-m-l-xl-2xl" },
        {
          id: "p19",
          name: "piapro - Hatsune Miku Nika◯ Tote Bag",
          price: "Pre-Order",
          img: "/piapro - Hatsune Miku Nika◯-ToteBag.jpg",
          fit: "contain",
          link: "https://www.ny-miku-only.com/product-page/bag-piapro-hatsune-miku-nika",
        },
        {
          id: "p20",
          name: "piapro - Hatsune Miku DAY Tote Bag",
          price: "Pre-Order",
          img: "/piapro - Hatsune Miku DAY-ToteBag.jpg",
          fit: "contain",
          link: "https://www.ny-miku-only.com/product-page/bag-piapro-hatsune-miku-day",
        },
        {
          id: "p21",
          name: "piapro - Hatsune Miku Jagabata Tote Bag",
          price: "Pre-Order",
          img: "/piapro - Hatsune Miku Jagabata-ToteBag.jpg",
          fit: "contain",
          link: "https://www.ny-miku-only.com/product-page/bag-piapro-hatsune-miku-jagabata",
        },
        {
          id: "p22",
          name: "piapro - Hatsune Miku Usajimaru Tote Bag",
          price: "Pre-Order",
          img: "/piapro - Hatsune Miku Usajimaru-ToteBag.jpg",
          fit: "contain",
          link: "https://www.ny-miku-only.com/product-page/bag-piapro-hatsune-miku-usajimaru",
        },
        {
          id: "p23",
          name: "piapro - Hatsune Miku Pentagon Tote Bag",
          price: "Pre-Order",
          img: "/piapro - Hatsune Miku Pentagon-ToteBag.jpg",
          fit: "contain",
          link: "https://www.ny-miku-only.com/product-page/bag-piapro-hatsune-miku-pentagon",
        },
      ],

    grabbing: false,
    pendingGrab: false,      // ✅ 新增：按下但还没确定是拖拽
    grabPointerId: null,     // ✅ 新增
    grabStartX: 0,
    grabStartScrollLeft: 0,
    didDrag: false,
    _suppressClickUntil: 0,  // 你也可以留着先不动
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
      if (e.pointerType === "mouse" && e.button !== 0) return;

      const rail = this.$refs.rail;
      if (!rail) return;

      // ✅ 先进入“待定状态”，不要立刻 capture
      this.pendingGrab = true;
      this.grabPointerId = e.pointerId;
      this.didDrag = false;
      this.grabStartX = e.clientX;
      this.grabStartScrollLeft = rail.scrollLeft;
    },

    onGrabMove(e) {
      if (this.isMobile) return;
      if (!this.pendingGrab && !this.grabbing) return;

      const rail = this.$refs.rail;
      if (!rail) return;

      const dx = e.clientX - this.grabStartX;

      // ✅ 只有移动超过阈值，才开始真正拖拽
      if (!this.grabbing) {
        if (Math.abs(dx) < 10) return;   // 阈值：10px（你可以改 12/15）
        this.grabbing = true;
        this.pendingGrab = false;
        this.didDrag = true;

        // ✅ 现在才 capture（只在真正拖拽时）
        e.currentTarget.setPointerCapture?.(e.pointerId);
      }

      rail.scrollLeft = this.grabStartScrollLeft - dx;
      e.preventDefault();
    },

    endGrab(e) {
      if (this.isMobile) return;

      // 没发生拖拽：直接清理，让 click 正常发生在 button 上
      if (this.pendingGrab) {
        this.pendingGrab = false;
        this.grabPointerId = null;
        return;
      }

      if (!this.grabbing) return;

      this.grabbing = false;

      // 你原来 suppress click 的逻辑可以保留（可选）
      if (this.didDrag) {
        this._suppressClickUntil = performance.now() + 150; // 也可以 0/50/150
      }

      e.currentTarget.releasePointerCapture?.(e.pointerId);
      this.grabPointerId = null;
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

.fit-cover {
  object-fit: cover;
  object-position: center;
}

.fit-contain {
  object-fit: contain;
  object-position: center;
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

.cardFrame{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit: contain;
  pointer-events:none;
  -webkit-user-drag:none;
  user-drag:none;
}

/* ✅ 灰色窗口：负责“盖掉底图占位 + 裁切” */
.cardWindow{
  position: absolute;
  left: 0%;
  top: 2.7%;
  width: 100%;
  height: 84%;

  background: #bfbfbf;
  border-radius: 10px;
  overflow: hidden;
  pointer-events: none;
}

/* ✅ 商品图：铺满灰色框（cover），多余裁掉 */
.cardArt{
  position: absolute;
  inset: 0;              /* ✅ 关键：占满窗口 */
  width: 100%;
  height: 100%;

  object-position: center; /* ✅ 默认居中 */

  /* 让边缘更干净（可选） */
  transform: scale(1.02);
}

/* ✅ 文字层（如果卡片底图本身已经画了文字区，也可以用这种叠上去） */
.cardMeta{
  position:absolute;
  left: 10%;
  right: 10%;
  bottom: 7%;

  display:flex;
  flex-direction:column;
  gap: 6px;

  text-align:left;
  pointer-events:none;
}

.cardName{
  font-weight: 900;
  font-size: 16px;
  letter-spacing: .02em;
  
  background: rgba(255,255,255,0.9);
  border-radius: 6px;
}

.cardPrice{
  font-weight: 800;
  font-size: 14px;
  opacity: .8;
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
   Mobile（独立：m- 前缀）
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

  /* 一张一张吸附 */
  scroll-snap-type: x mandatory;

  padding: 0 10px;
  box-sizing: border-box;

  scrollbar-width: none;
}
.m-rail::-webkit-scrollbar { display: none; }

.m-card {
  position: relative;      /* ✅ 关键：给内部绝对定位用 */
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

/* ✅ 手机端灰色窗口（位置/大小你可以再微调） */
.m-cardWindow{
  position: absolute;

  /* 这组数值大致对应桌面端的那块“灰窗”，
     如果你的手机卡片比例不同，就微调这四个 */
  left: 50%;
  top: 45.5%;
  width: 89%;
  height:71%;

  transform: translate(-50%, -50%);
  background: #bfbfbf;
  border-radius: 10px;
  overflow: hidden;
  pointer-events: none;
}

/* ✅ 手机端商品图：完整显示（不裁切） */
.m-cardArt{
  width: 100%;
  height: 100%;
  display: block;
}

/* ✅ 手机端文字区 */
.m-cardMeta{
  position: absolute;
  left: 50%;
  bottom: 12.5%;
  transform: translateX(-50%);
  width: 78%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  pointer-events: none;
}

/* ✅ 名字：灰字 + 名字下面白底（只包名字） */
.m-cardName{
  display: inline-block;          /* 白底只包住字 */
  padding: 4px 8px;
  background: rgba(255,255,255,0.9);
  border-radius: 6px;

  color: #7a7a7a;
  font-weight: 900;
  font-size: 14px;
}

/* 价格：保持普通，无白底 */
.m-cardPrice{
  font-weight: 800;
  font-size: 25px;
  text-shadow: 0 6px 18px rgba(0,0,0,0.35);
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

.frontMask,
.m-frontMask,
.cardFrame,
.m-cardFrame,
.panelBase,
.bg1,
.bg2,
.title {
  pointer-events: none !important;
}
</style>
