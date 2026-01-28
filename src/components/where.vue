<template>
  <div class="where-wrap">
    <horizontalttl />

    <div class="where-panel">
      <!-- 顶部把手条 -->
      <div class="windowHandle-where">
        <div class="handleText">W H E R E</div>
      </div>

      <!-- ① 地址头图（你图里那块：EVENT LOCATION + 地址） -->
      <section class="where-address" aria-label="Event location header">
        <img class="where-address__img" src="/Where_Tittle.png" alt="Event location" />
      </section>

      <!-- ② Photo slide -->
      <section class="where-photo" aria-label="Venue photos">
        <!-- 背景板 -->
        <img class="where-photo__bg" src="/PHTOT 板块背景.png" alt="" aria-hidden="true" />

        <!-- 框架/组件 -->
<!--        <img class="where-photo__frame" src="/Photo 组件.png" alt="" aria-hidden="true" />-->


        <!-- 轮播内容 -->
        <div class="where-photo__content">
          <button class="where-photo__nav prev" type="button" @click="prev" aria-label="Previous photo">
            ‹
          </button>

          <div class="where-photo__strip">
            <!-- 左预览（窄屏会自动隐藏） -->
            <button class="where-photo__thumb is-left" type="button" @click="go(leftIndex)" aria-label="Left preview">
              <img :src="images[leftIndex]" alt="" />
            </button>

            <!-- 主图 -->
            <div class="where-photo__main">
              <img :src="images[index]" alt="Venue photo" />
            </div>

            <!-- 右预览（窄屏会自动隐藏） -->
            <button class="where-photo__thumb is-right" type="button" @click="go(rightIndex)" aria-label="Right preview">
              <img :src="images[rightIndex]" alt="" />
            </button>
          </div>

          <button class="where-photo__nav next" type="button" @click="next" aria-label="Next photo">
            ›
          </button>

          <!-- dots（超窄屏用） -->
          <div class="where-photo__dots" aria-hidden="true">
            <span
                v-for="(x, i) in images"
                :key="i"
                class="dot"
                :class="{ active: i === index }"
                @click="go(i)"
            />
          </div>
        </div>
      </section>

      <!-- ③ 地图 -->
      <section class="where-map" aria-label="Map">
        <img class="where-map__title" src="/地图tittle.png" alt="" aria-hidden="true" />

        <div class="where-map__box">
          <img class="where-map__frame" src="/地图板块_线框.png" alt="" aria-hidden="true" />

          <iframe
              class="where-map__iframe"
              :src="mapEmbed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              title="Melrose Ballroom map"
          />

          <!-- ✅ 透明点击层：点击整个地图跳转 Google Maps -->
          <a
              class="where-map__click"
              :href="mapUrl"
              target="_blank"
              rel="noreferrer"
              aria-label="Open in Google Maps"
          />
        </div>


        <!-- 可选：点地图打开 -->
        <a class="where-map__link" :href="mapUrl" target="_blank" rel="noreferrer">
          Open in Google Maps
        </a>
      </section>
    </div>
  </div>
</template>

<script>
import horizontalttl from "./horizontalttl.vue";

export default {
  components: { horizontalttl },

  data() {
    return {
      // 你原本的图们（也可以替换成父组件传入；这里先自带）
      images: ["/eventspace2.jpg", "/eventspace1.png", "/eventspace3.jpg"],
      index: 0,

      // 外链地图
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Melrose+Ballroom+36-08+33rd+St+Queens+NY+11106",
    };
  },

  computed: {
    leftIndex() {
      return (this.index - 1 + this.images.length) % this.images.length;
    },
    rightIndex() {
      return (this.index + 1) % this.images.length;
    },
    mapEmbed() {
      // 用 q=...&output=embed 最稳
      return "https://www.google.com/maps?q=Melrose+Ballroom+36-08+33rd+St+Queens+NY+11106&output=embed";
    },
  },

  methods: {
    prev() {
      this.index = this.leftIndex;
    },
    next() {
      this.index = this.rightIndex;
    },
    go(i) {
      this.index = i;
    },
  },
};
</script>

<style>
.where-wrap{
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
}

/* 主面板：按 when 的 grid 思路做 */
.where-panel{
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: grid;
  grid-template-rows:
    1%      /* handle */
    18%     /* address */
    36%     /* photo */
    38%;     /* map */

  background-image: url("/白底_文字.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 97%;

  animation: whereIn .45s cubic-bezier(1, 0.02, 0.17, 1) forwards;
}

@keyframes whereIn{
  0% { opacity: 0; transform: translateY(6px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* handle */
.windowHandle-where{
  grid-row: 1;
  position: relative;
  z-index: 5;
  margin-top: 0.5vw;
  left: 1vw;
}
.handleText{
  position: absolute;
  left: 10px;
  top: 2px;
  color: #00000026;
  font-family: font9;
  font-size: 18px;
  font-weight: 900;
}

.where-address{
  grid-row: 2;
  position: relative;
  padding: clamp(8px, 1.2vw, 16px) clamp(10px, 1.6vw, 22px) 0;
  box-sizing: border-box;

  display: flex;              /* ✅ 关键 */
  justify-content: flex-end;  /* ✅ 靠右 */
  align-items: center;        /* 垂直居中（可选） */
}

.where-address__img{
  width: auto;        /* ✅ 不要 100%，否则会铺满不能“靠右” */
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: right center; /* ✅ 内容靠右 */
  display: block;
}

/* ② Photo slide */
/* ② Photo slide（修复：内容层塌陷、主图消失、背景板居中） */
.where-photo{
  margin-top: 2vw;
  grid-row: 3;
  position: relative;
  box-sizing: border-box;

  /* ✅ 给 photo 区一个稳定高度（否则子元素 100% 没意义） */
  height: 100%;
  min-height: 220px;
}

.where-photo__bg {
  position: absolute;
  inset: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;   /* ✅ 填满容器（可能裁切） */
  z-index: 1;

  pointer-events: none;
  user-select: none;
  display: block;
}

/* ✅ 关键修复：content 必须有尺寸，否则里面全塌 */
.where-photo__content{
  position: absolute;
  inset: 0;                 /* ✅ 让它撑满 where-photo */
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* strip 三栏稳定布局 */
.where-photo__strip{
  width: calc(100% - 8vw);
  height: calc(100% - 4vw);
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  align-items: center;
}

/* 主图容器 */
.where-photo__main{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5;               /* ✅ 主图高于背景板 */
}

/* 主图图片填充 */
.where-photo__main img{
  position: absolute;
  inset: 0;
  width: 100%;
  object-fit: cover;
  display: block;
}

/* 侧预览 */
.where-photo__thumb{
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;

  width: 100%;
  height: 80%;
  overflow: hidden;

  opacity: 0.6;
  transition: opacity .15s ease, transform .15s ease;
}
.where-photo__thumb:hover{
  opacity: 1;
  transform: translateY(-2px);
}
.where-photo__thumb img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 左右箭头 */
.where-photo__nav{
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  z-index: 6;

  width: clamp(34px, 4vw, 52px);
  height: clamp(34px, 4vw, 52px);
  border-radius: 999px;

  border: 1px solid rgba(255,255,255,0.25);
  background: rgba(0,0,0,0.22);
  color: white;
  font-size: clamp(18px, 3vw, 28px);
  cursor: pointer;
  backdrop-filter: blur(8px);
}
.where-photo__nav.prev{ left: clamp(8px, 1.2vw, 14px); }
.where-photo__nav.next{ right: clamp(8px, 1.2vw, 14px); }

/* dots（默认隐藏，超窄屏显示） */
.where-photo__dots{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
  z-index: 6;

  display: none;
  justify-content: center;
  gap: 10px;
}
.where-photo__dots .dot{
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.45);
  cursor: pointer;
}
.where-photo__dots .dot.active{
  background: rgba(255,255,255,0.92);
}

/* ③ 地图 */
.where-map{
  grid-row: 4;
  position: relative;
  padding: 0 clamp(10px, 1.6vw, 22px) clamp(10px, 1.4vw, 18px);
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 8px;
}
.where-map__title{
  width: 100%;
  height: 2vh;
  object-fit: contain;
  display: block;
  opacity: 0.95;
}

.where-map__box{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.where-map__click{
  position: absolute;
  inset: 0;          /* 覆盖整个地图区域 */
  z-index: 10;       /* 在 iframe 上面 */
  cursor: pointer;
  background: transparent;
}

/* 地图线框：居中 */
.where-map__frame{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) !important;
  z-index: 2;
  pointer-events: none;

  width: calc(100% - 2vw);
  height: calc(100% - 2vw);
  object-fit: contain;
}

/* iframe：填充可视区域（别写死 20vh/93%） */
.where-map__iframe{
  position: absolute;
  inset: clamp(12px, 1.8vw, 18px);
  width: calc(100% - (clamp(12px, 1.8vw, 18px) * 2));
  height: calc(100% - (clamp(12px, 1.8vw, 18px) * 2));
  border: 0;
  z-index: 1;
  border-radius: 12px;
}

.where-map__link{
  justify-self: end;
  font-family: font5;
  font-size: 12px;
  letter-spacing: .06em;
  color: rgba(0,0,0,0.55);
  text-decoration: none;
}
.where-map__link:hover{
  text-decoration: underline;
}

/* bottom line */
.bottomline1{
  grid-row: 5;
  width: 100%;
  height: 2px;
  background: white;
  align-self: end;
  opacity: 0.9;
}

/* =========================
   ✅ 1300 以下：跟 when 一样（组件不要自己固定死）
   ========================= */
@media (max-width: 1300px){
  .where-wrap{
    width: 100%;
    height: auto;
  }

  .where-panel{
    height: auto;
    overflow: visible;
    background-image: url("/白底.png");
    background-size: cover;
    background-position: center top;

    /* 手机/平板都用比例行高，保证结构一致 */
    grid-template-rows:
      1%      /* handle */
      18%     /* address */
      36%     /* photo */
      38%;     /* map */
    row-gap: 10px;
  }

  .where-address{
    /* 灰色背板 */
    background: rgba(0, 0, 0, 0.08);
  }


  .handleText{
    color: #00000066;
    font-size: 24px;
  }

  .where-map{
    grid-row: 4;
    position: relative;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 3vh;
    height: 30vh;
  }
  .where-map__title{
    width: 100%;
    height: 1vh;
    object-fit: contain;
    display: block;
    opacity: 0.95;
  }

  .where-map__box{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .where-map__iframe{
    position: absolute;
    inset: clamp(12px, 1.8vw, 18px);
    width: calc(100% - (clamp(12px, 1.8vw, 18px) * 2));
    margin-top: 2vh;
    height: 100%;
    border: 0;
    z-index: 1;
    border-radius: 12px;
  }
}

/* =========================
   ✅ 超窄屏（<=420）：隐藏左右预览，用主图+dots
   ========================= */
@media (max-width: 420px){
  .where-photo__strip{
    grid-template-columns: 1fr;
  }
  .where-photo__thumb{
    display: none;
  }
  .where-photo__nav{
    width: 38px;
    height: 38px;
    font-size: 22px;
  }
  .where-photo__dots{
    display: flex;
  }

  .where-map__iframe{
    inset: 10px;
  }
}


</style>
