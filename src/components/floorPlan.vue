<template>
  <div v-if="isMobile" class="m-shell">
    <div class="fp2-bg" :style="{ backgroundImage: `url(${desktopAssets.pageBg})` }" aria-hidden="true"></div>

    <!-- panel -->
    <div class="m-panel">
      <div class="m-scroll">

        <!-- FLOOR ONLY -->
        <div class="m-floor-switch">
          <button class="m-floor-btn" @click="setfloor(false)">◀</button>

          <div class="m-floor-mid">
            <div class="m-floor-num"><span style="opacity:.4">0</span>{{ curfloor }}</div>
            <div class="m-floor-name">{{ fl2word[curfloor] }}</div>
          </div>

          <button class="m-floor-btn" @click="setfloor(true)">▶</button>
        </div>

        <!-- Card 1：图片 -->
        <div class="m-card">
          <div class="m-card-title">FLOOR PLAN</div>
          <img class="m-img" :src="`/fl${curfloor}.png`" alt="floor" />
        </div>

        <!-- Card 2：Amenities -->
        <div class="m-card">
          <div class="m-card-title">AMENITIES</div>

          <div class="m-amenities">
            <div class="m-amenity" v-for="(item, idx) in amenities[curfloor]" :key="idx">
              <span class="m-dot"></span>
              <span class="m-item">{{ item }}</span>
            </div>
          </div>
        </div>

        <div style="height:24px;"></div>
      </div>
    </div>
  </div>

  <!-- =========================
      DESKTOP ONLY (replace your v-else block)
      ========================= -->
  <div v-else class="fp-desktop2">
    <!-- page bg -->
    <div class="fp2-bg" :style="{ backgroundImage: `url(${desktopAssets.pageBg})` }" aria-hidden="true"></div>
    <div class="fp2-bgw" :style="{ backgroundImage: `url(${desktopAssets.pageBgw})` }" aria-hidden="true"></div>

        <!-- ✅ 在这里插入立绘层 -->
    <img
      v-if="desktopAssets.keyVisual"
      class="fp2-kv"
      :src="desktopAssets.keyVisual"
      alt=""
      aria-hidden="true"
    />

    <!-- centered board -->
    <div class="fp2-board">
      <!-- LEFT (has its own background image, no manual texts) -->
      <section class="fp2-left">
        <div class="fp2-leftInner">
          <div
            class="fp2-leftBg"
            :style="{ backgroundImage: `url(${desktopAssets.leftPanelBg})` }"
            aria-hidden="true"
          ></div>

          <div class="fp2-planSlot">
            <img class="fp2-planImg" :src="`/fl${curfloor}_h.png`" alt="floor plan" />
          </div>
        </div>
      </section>

      <!-- RIGHT (has its own background image, no manual texts) -->
      <aside class="fp2-right">
        <div
          class="fp2-rightBg"
          :style="{ backgroundImage: `url(${desktopAssets.rightPanelBg})` }"
          aria-hidden="true"
        ></div>

        <!-- ✅ 右侧面板最顶部标题（固定） -->
        <div class="fp2-rightTitle" aria-hidden="true">
          <img
            class="fp2-rightTitleImg"
            :src="desktopAssets.floorPlanTitleImg"
            alt=""
          />
        </div>

        <!-- amenities: each item is its own image -->
        <div class="fp2-amenList">
          <button
            class="fp2-amenBtn"
            v-for="(label, idx) in amenities[curfloor]"
            :key="idx"
            type="button"
          >
            <img
              class="fp2-amenImg"
              :src="(desktopAssets.amenityImgByFloor?.[curfloor]?.[idx]) || desktopAssets.amenityFallback"
              :alt="label"
            />
          </button>
        </div>

        <!-- floor selector -->
        <div class="fp2-selector">
          <div class="fp2-selectorTop" :class="{ 'is-floor1': curfloor === 1 }">
            <!-- 顶部两行标题图 -->
            <div class="fp2-selHeader" aria-hidden="true">
              <!-- 上：固定 FLOOR PLAN -->
              <img
                class="fp2-selHeaderTop"
                :src="desktopAssets.floorPlanTitleImg"
                alt=""
              />

              <!-- 下：楼层名字（按 curfloor 切换） -->
              <img
                class="fp2-selHeaderSub"
                :src="desktopAssets.floorNameImg[curfloor]"
                alt=""
              />
            </div>
            <!-- Up -->
            <button
              class="fp2-arrowBtn fp2-arrowUp"
              @mousedown="arrowPress('up', true)"
              @mouseup="arrowPress('up', false)"
              @mouseleave="arrowPress('up', false)"
              @touchstart.passive="arrowPress('up', true)"
              @touchend="arrowPress('up', false)"
              @click="setfloor(true)"
              aria-label="Floor up"
            >
              <img
                class="fp2-arrowImg"
                :class="{ 'is-white': arrowDown.up }"
                :src="arrowDown.up ? desktopAssets.arrowWhite : desktopAssets.arrowPink"
                alt=""
              />
            </button>

            <!-- 数字 -->
            <div class="fp2-floorBadge" aria-hidden="true">
              <img
                class="fp2-floorBadgeImg"
                :src="desktopAssets.floorNumImg[curfloor]"
                alt=""
              />
            </div>

            <!-- Down -->
            <button
              class="fp2-arrowBtn fp2-arrowDown"
              @mousedown="arrowPress('down', true)"
              @mouseup="arrowPress('down', false)"
              @mouseleave="arrowPress('down', false)"
              @touchstart.passive="arrowPress('down', true)"
              @touchend="arrowPress('down', false)"
              @click="setfloor(false)"
              aria-label="Floor down"
            >
              <img
                class="fp2-arrowImg"
                :class="{ 'is-pink': !arrowDown.down }"
                :src="arrowDown.down ? desktopAssets.arrowWhite : desktopAssets.arrowPink"
                alt=""
              />
            </button>
          </div>

          <div class="fp2-stack">
            <button
              v-for="n in layerOrder"
              :key="n"
              class="fp2-layer"
              :class="{ active: curfloor === n }"
              type="button"
              @click="selectFloor(n)"
              :style="layerStyle(n)"
            >
              <img
                class="fp2-layerImg"
                :src="curfloor === n ? desktopAssets.layerPinkImg : desktopAssets.layerBaseImg"
                :alt="`floor ${n}`"
              />
            </button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'
import horizontalttl from './horizontalttl.vue'
import gem from '../components/gem.vue'

export default {
  components: { horizontalttl, gem },

  data() {
    return {
      // ✅ mobile
      isMobile: false,
      _onResize: null,

      // 你原来的
      curfloor: 1,
      fl2word: ['BASEMENT', 'FIRST FLOOR', 'SECOND FLOOR', 'THIRD FLOOR', 'gem'],
      unvisited: { 'upel': true, 'dnel': true },

      amenities: {
        0: ['Stage Preparation Room', 'Coat Check', 'Restroom/Change room'],
        1: ['Main Stage', 'Food/Drink Bar', 'Gift Booth', 'Photo Booth 1', 'Huge Fufu Figure', 'Premium Booth Area'],
        2: ['Exhibit Booth 2&3', 'Official Booth', 'Guest Room', 'Restroom'],
        3: ['Maid Cafe', 'Rooftop Lounge', 'VIP Rest Area', 'Photo Booth 4'],
      },

      layerOrder: [3,2,1,0],

      arrowDown: {
        up: false,
        down: false,
      },

      desktopAssets: {
        pageBg: "/background02.png",
        pageBgw: "/纯白背景透图.png",
        keyVisual: "/角色灰白渐变.png",

        // ✅ 左右底板（包含小标题条/文字/装饰）
        leftPanelBg: "/平面图背景.png",
        rightPanelBg: "/BEIjingban_R.png",

        // ✅ amenities：每层一个数组，每条一张图（按顺序）
        amenityFallback: "/amen_fallback.png",
        amenityImgByFloor: {
          0: ["/STAGE PREPAR.png", "/COAT CHECK.png", "/REST ROOM.png"],
          1: ["/MAIN STAGE.png", "/FOOD BAR.png", "/GIFT BOOTH.png", "/PHOTO BOOTH.png", "/HUGE FUFU.png", "/PREMIUM BOOTH.png"],
          2: ["/EXHIBIT BOOTH.png", "/OFFICAL BOOTH.png", "/GUEST ROOM.png", "/REST ROOM.png"],
          3: ["/MAID CAFE.png", "/ROOF.png", "/vip rest.png", "/PHOTO booth4.png"],
        },

        floorPlanTitle: "/FloorPlanTittle1.png",

        floorPlanTitleImg: "/FloorPlanTittle2.png",   // 你的“FLOOR PLAN”图片路径

        floorNameImg: [
          "/平面名称Basement.png", // 对应 curfloor = 0
          "/FirstFloortittle.png", // 对应 curfloor = 1
          "/平面名称SecondFloor.png", // 对应 curfloor = 2
          "/平面名称ThirdFloor.png", // 对应 curfloor = 3
        ],

        // ✅ 分层：同一张 base + 当前层用 pink
        layerBaseImg: "/切层平面_OFF.png",
        layerPinkImg: "/切层平面_ON.png",

        arrowPink: "/箭头常态.png",
        arrowWhite: "/箭头_点击.png",

        // ✅ 楼层数字牌
        floorNumImg: [
          "/文字数字00.png",
          "/文字数字01.png",
          "/文字数字02.png",
          "/文字数字03.png",
        ],
      },
    }
  },
  
  computed: {
    ...mapState(useUserStore, ['stateDump']),
  },

  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername']),

    // ✅ desktop 那些菱形点击用的（你原来 template 里有 @click="selectFloor(x)"，但 script 里没定义，会报错）
    selectFloor(n) {
      if (n < 0 || n > 3) return
      this.curfloor = n
      // 同步一下 unvisited（可选）
      this.unvisited.upel = false
      this.unvisited.dnel = false
    },

    // ✅ 你原来的切楼层逻辑（我只改了上限下限，让 0~3 都可切）
    setfloor(isInc) {
      if (!isInc && this.curfloor <= 0) return
      if (isInc && this.curfloor >= 3) return

      if (isInc) {
        this.curfloor += 1
        this.unvisited['upel'] = false
      } else {
        this.curfloor -= 1
        this.unvisited['dnel'] = false
      }
    },

    // ✅ mobile 判断
    updateIsMobile() {
      this.isMobile = window.matchMedia("(max-width: 1025px)").matches
    },

    layerStyle(n) {
      const idx = this.layerOrder.indexOf(n) // 0..3 (上面那张 idx=0)

      // 叠层的偏移/缩放/旋转：你可以微调这些数值来更像示例图
      const x = 46 + idx * 8          // 每层向右偏移
      const y = idx * 70;         // 每层向下偏移（决定“叠”的感觉）
      const s = 1 - idx * 0.03    // 越往下越小一点点

      // 默认 zIndex：越上层越大
      let z = 20 - idx

      // 当前层（粉色那张）永远在最上面
      if (this.curfloor === n) z = 999

      return {
        transform: `translate(${x}px, ${y}px) scale(${s})`,
        zIndex: z,
      }
    },
    arrowPress(which, isDown) {
      if (which !== 'up' && which !== 'down') return
      this.arrowDown[which] = isDown
    },
  },

  mounted() {
    this.updateIsMobile()
    this._onResize = () => this.updateIsMobile()
    window.addEventListener("resize", this._onResize, { passive: true })
  },

  beforeUnmount() {
    if (this._onResize) window.removeEventListener("resize", this._onResize)
  },
}
</script>
<style>
/* =========================
   DESKTOP 2 (screenshot style)
   ========================= */
.fp-desktop2{
  position:absolute;
  inset:0;
  overflow:hidden;
}

/* page background */
.fp2-bg{
  position:absolute;
  inset:0;
  background-size: cover;
  background-position: center;
  filter: saturate(1.02);
}

.fp2-bgw{
  position:absolute;
  inset:0;
  background-size: cover;      /* 如果你想保持不拉伸，用 contain */
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;                  /* 在 bg 上面 */
  pointer-events: none;
}

.fp2-kv{
  position:absolute;
  inset:0;
  z-index:0;              /* bg 是默认更底；board 是 1；立绘在中间 */
  pointer-events:none;

  /* 下面是“默认呈现方式”，你可以随便调 */
  width: 100%;
  height: 100%;
  object-fit: contain;

  /* ✅ 控制位置：比如偏左一点、偏下 */
  transform: translate(-10%, 6%) scale(1.05);
  opacity: 0.85;

  /* 可选：立绘太抢眼就稍微柔和 */
  filter: drop-shadow(0 18px 40px rgba(0,0,0,0.25));
}

/* board layout */
.fp2-board{
  position:relative;
  z-index:1;
  height: calc(100vh - 6vh);
  width: min(1360px, 92vw);
  margin: 3vh auto;
  box-sizing:border-box;
  display:grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
  padding: 0;                 /* ✅ 底板图自己带边距/装饰 */
  background: transparent;     /* ✅ 不要再给玻璃底色 */
  box-shadow: none;            /* ✅ 让底板图自己表现 */
  overflow: visible;
}

/* LEFT panel as an image background */
.fp2-left{
  position:relative;
  min-width:0;
  min-height:0;
  z-index: 1;
}

.fp2-leftInner{
  position:absolute;
  inset:0;

  transform-origin: left center;
  transform: translateX(20%) scale(1.15)translateY(2%);  /* ✅ 右移 + 整体缩小 */
}

.fp2-leftBg{
  position:absolute;
  inset:0;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events:none;
}

/* ✅ floor plan image slot: 你需要根据底板粉框位置微调 */
.fp2-planSlot{
  position:absolute;
  left: 50%;
  top: 50%;

  /* 粉框的“有效绘图区尺寸” */
  width: 82%;
  height: 72%;

  transform: translate(-50%, -50%);
  display:flex;
  align-items:center;
  justify-content:center;
  pointer-events:auto;
}

.fp2-planImg{
  width:100%;
  height:100%;
  object-fit: contain;

  transform: rotate(-90deg)scale(0.9)translateX(3%);
}

/* RIGHT panel as an image background */
.fp2-right{
  position:relative;
  min-width:0;
  min-height:0;
  transform-origin: right center;             /* 从右边为锚点缩放 */
  transform: translateX(40%) scale(1.5);   /* ✅ 左移 + 放大（你可以调数值） */
  z-index: 2;
}
.fp2-rightBg{
  position:absolute;
  inset:0;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events:none;
}

/* ✅ 右侧背景板最顶上的 FLOOR PLAN 标题 */
.fp2-rightTitle{
  position: absolute;
  top: 6%;          /* ✅ 往上/往下调这里 */
  left: 50%;
  transform: translateX(-50%);
  width: 56%;       /* ✅ 标题宽度，按你的素材调 */
  z-index: 5;       /* ✅ 盖在 rightBg 上面 */
  pointer-events: none;
  line-height: 0;
}

.fp2-rightTitleImg{
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}

/* amenities list positioned on the right bg */
.fp2-amenList{
  position:absolute;
  left: 40%;
  top: 38%;
  width: 48%;
  height: 48%;
  display:flex;
  flex-direction:column;
  gap: 20px;
  overflow:hidden;
}
.fp2-amenBtn{
  border:0;
  padding:0;
  background: transparent;
  cursor:pointer;
  display:block;
  margin:0;
  line-height: 0;
}
.fp2-amenImg{
  width:40%;
  height:auto;
  display:block;
}

/* selectorTop 顶部两张标题图 */
.fp2-selHeader{
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 15px;            /* 上下间距，小一点 */
  margin-bottom: 6px;  /* 和箭头的距离 */
  line-height: 0;
}

.fp2-selHeaderTop{
  width: 130%;          /* 调大小：70%~90% */
  height: auto;
  display:block;
  object-fit: contain;
  margin-right: 40%;
}

.fp2-selHeaderSub{
  width: 100%;          /* 楼层名通常可以稍微宽一点 */
  height: auto;
  display:block;
  object-fit: contain;
  margin-right: 30%;
}


/* selector positioned bottom-right */
.fp2-selector{
  position:absolute;
  right: 12%;
  bottom: 27%;
  width: 36%;
  display:flex;
  flex-direction:column;
  gap: 10px;
  
}

/* ===== 顶部三件套：同一条中线 ===== */
.fp2-selectorTop{
  position: absolute;

  /* ✅ 关键：用 clamp 做自适应横向偏移（越大屏越往右一点） */
  left: clamp(8px, 1.5vw, 28px);

  /* ✅ 关键：用 clamp 做自适应纵向位置（不会跑到特别上面） */
  top: clamp(-100px, -0.6vw, 6px);

  width: clamp(170px, 14vw, 220px);

  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 2px;

  transform: translateY(-65%)scale(0.65);
  transform-origin: center top;

  margin-left: 30%; /* 只推箭头+数字往右 */
}

/* 让箭头按钮本身也用同一宽度，并且内容居中 */
.fp2-arrowBtn{
  width: 100%;
  display:flex;
  justify-content:center;    /* ✅ 保证在中线上 */
  align-items:center;
  border:0;
  padding:0;
  background: transparent;
  cursor:pointer;
  line-height: 0;
}

/* 箭头图：用百分比控制大小，永远居中 */
.fp2-arrowImg{
  width: 42%;                /* ✅ 调：越大越靠近你参考图 */
  height: auto;
  display:block;
  object-fit: contain;
}


/* Up：当显示白色时（白色素材朝下），旋转变朝上 */
.fp2-arrowUp .fp2-arrowImg.is-white{
  transform: rotate(180deg);
}

/* Down：常态粉色（粉色素材朝上），旋转变朝下 */
.fp2-arrowDown .fp2-arrowImg.is-pink{
  transform: rotate(180deg);
}

/* 当前楼层数字牌（放在箭头下面、叠层上面） */
/* 数字牌：同样用 100% 宽度共享中线 */
.fp2-floorBadge{
  width: 100%;
  height: 92px;              /* ✅ 固定高度（按你的数字素材调 80~110） */
  display:flex;
  align-items:center;
  justify-content:center;
  margin: 0;                 /* ✅ 不要再用 margin 拉开 */
}


.fp2-floorBadgeImg{
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  display:block;
  pointer-events:none;
}

.fp2-selectorTop.is-floor1 .fp2-floorBadgeImg{
  transform: scale(0.92);    /* ✅ 调：0.88~0.96 之间找最舒服的 */
  transform-origin: center;
}

/* ===== 叠层区域 ===== */
.fp2-stack{
  position: relative;
  width: 100%;
  height: 320px;       /* 叠层区域高度（不够就加大） */
}

/* 每一层都是绝对定位叠在一起 */
.fp2-layer{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 150px;       /* 单张卡的高度（按你的素材比例调） */

  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;

  /* 让叠层更像“卡片” */
  filter: drop-shadow(0 18px 22px rgba(0,0,0,0.18));
  transform-origin: left top;
}

/* 图片铺满按钮 */
.fp2-layerImg{
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  pointer-events: none;
}

.fp2-layerFallback{
  width:100%;
  height:100%;
  display:grid;
  place-items:center;
  font-family: font5;
  font-weight: 900;
  letter-spacing: 0.10em;
  opacity: 0.75;
}

.m-shell{
  position:absolute;
  inset:0;
  padding: 12px;
  box-sizing: border-box;
}

.m-panel{
  position:relative;
  height: calc(100vh - 70px);
  border-radius: 16px;
  background: rgba(241,241,241,0.65);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  overflow:hidden;
  margin-top: 10px;
}

.m-scroll{
  height:100%;
  overflow:auto;
  padding: 14px;
  box-sizing:border-box;
}

.m-floor-switch{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 10px;
  margin-bottom: 12px;
}

.m-floor-btn{
  width:44px;
  height:44px;
  border-radius: 12px;
  border:none;
  background: rgba(0,0,0,0.15);
  font-size: 18px;
  cursor:pointer;
}

.m-floor-mid{
  flex:1;
  text-align:center;
}

.m-floor-num{
  font-family: font4;
  font-size: 28px;
  font-weight:900;
  line-height: 1;
}

.m-floor-name{
  font-family: font5;
  font-size: 14px;
  font-weight:900;
  opacity: 0.8;
  margin-top: 2px;
}

.m-card{
  background: rgba(255,255,255,0.75);
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 10px 22px rgba(0,0,0,0.12);
  margin-bottom: 12px;
}

.m-card-title{
  font-family: font5;
  font-weight: 900;
  letter-spacing: 0.25vh;
  margin-bottom: 10px;
  color:#333;
}

.m-img{
  width:100%;
  border-radius: 12px;
  display:block;
}

.m-amenities{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.m-amenity{
  display:flex;
  align-items:flex-start;
  gap:10px;
  padding: 10px;
  border-radius: 12px;
  background: rgba(175,175,175,0.35);
}

.m-dot{
  width:10px;
  height:10px;
  border-radius:999px;
  background: rgba(0,162,255,0.9);
  margin-top:4px;
  flex: 0 0 auto;
}

.m-item{
  font-family: font2;
  font-size: 14px;
  line-height: 18px;
  color:#111;
}

.m-text{
  font-family: font2;
  font-size: 14px;
  line-height: 18px;
  opacity: 0.8;
}
</style>
