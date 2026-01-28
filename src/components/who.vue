<template>
  <div class="who-wrap">
    <horizontalttl />

    <div class="who-panel">
      <div class="windowHandle">
        <div class="handleText">W H O</div>
      </div>

      <!-- 顶部图（你原来 city + team 叠加的感觉） -->
      <section class="who-hero" aria-label="Guests header">
        <img class="who-hero__title" src="/guest_Tittle.png" alt="Special Guests" />
      </section>

      <!-- guests grid -->
      <section class="who-grid" aria-label="Guest list">
        <a
            v-for="g in guests"
            :key="g.id"
            class="guest-card"
            :href="`https://instagram.com/${g.insta}`"
            target="_blank"
            rel="noreferrer"
        >
          <div class="guest-avatar">
            <img :src="g.avatar" :alt="g.name" />
          </div>

          <div class="guest-info">
            <div class="guest-name">{{ g.name }}</div>
            <div class="guest-meta">
              <span class="guest-role">{{ g.role }}</span>
              <span class="guest-insta">@{{ g.insta }}</span>
            </div>
          </div>
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
};
</script>

<style>
.who-wrap{
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
}

.who-panel{
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: grid;
  grid-template-rows:
    3%      /* handle */
    15%     /* hero */
    56%     /* grid */
    4%;     /* bottom */

  background-image: url("/白底_文字.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95%;

  animation: whoIn .45s cubic-bezier(1, 0.02, 0.17, 1) forwards;
}

@keyframes whoIn{
  0% { opacity: 0; transform: translateY(6px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* handle */
.windowHandle{
  grid-row: 1;
  margin-top: 1vw;
  left: 1.5vw;
  position: relative;
  z-index: 5;
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

/* hero */
.who-hero{
  grid-row: 2;
  position: relative;
  box-sizing: border-box;
  left: 30%;
}
.who-hero__bg{
  position: absolute;
  inset: clamp(10px, 1.6vw, 22px);
  width: auto;
  height: auto;
  border-radius: 18px;
  object-fit: cover;
  opacity: 0.9;
}

/* grid */
.who-grid{
  grid-row: 3;
  position: relative;
  padding: 3vw;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(10px, 1.4vw, 18px);

  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.guest-card{
  display: flex;
  align-items: center;
  gap: 12px;

  padding: clamp(10px, 1.4vw, 16px);
  border-radius: 18px;
  text-decoration: none;

  background: rgba(255,255,255,0.35);
  border: 1px solid rgba(255,255,255,0.35);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  transition: transform .15s ease, box-shadow .15s ease;
  color: rgba(0,0,0,0.8);
}
.guest-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.12);
}

.guest-avatar{
  width: clamp(48px, 5vw, 68px);
  height: clamp(48px, 5vw, 68px);
  border-radius: 999px;
  overflow: hidden;
  flex: 0 0 auto;
  border: 1px solid rgba(255,255,255,0.5);
}
.guest-avatar img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.guest-info{
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.guest-name{
  font-family: font5;
  font-size: clamp(14px, 1.6vw, 18px);
  letter-spacing: .06em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.guest-meta{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: font5;
  font-size: 12px;
  letter-spacing: .05em;
  opacity: 0.85;
}
.guest-role{
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(0,0,0,0.06);
}
.guest-insta{
  opacity: 0.9;
}

/* 1300 以下 */
/* ===== WHO mobile fix（对你当前类名生效） ===== */
@media (max-width: 1300px){

  /* 1) 面板不要固定 height:100% + overflow hidden，否则内容被裁/出现大片空白 */
  .who-wrap{ height: auto; }
  .who-panel{
    width: 100%;
    height: 100%;
    overflow: hidden;

    display: grid;
    grid-template-rows:
    3%      /* handle */
    15%     /* hero */
    56%     /* grid */
    4%;     /* bottom */

    background-image: url("/白底_文字.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;   /* ✅ 铺满 */


    animation: whoIn .45s cubic-bezier(1, 0.02, 0.17, 1) forwards;
  }


  /* 3) hero：别用 left:30%，移动端直接居中/撑满 */
  .who-hero{
    left: 0 !important;
    display: flex;
    justify-content: center;
  }
  .who-hero__title{
    height: auto;
    object-fit: contain;
    display: block;
  }

  /* 4) grid：移动端单列 + 不要在 grid 内再 overflow（交给页面滚动） */
  .who-grid{
    grid-template-columns: 1fr !important;
    gap: 12px !important;
    padding: 14px !important;

    overflow: visible !important;
    max-height: none !important;
  }

  /* 5) 卡片：行内布局，头像缩小，文字不溢出 */
  .guest-card{
    width: 100%;
    box-sizing: border-box;

    padding: 12px 12px !important;
    border-radius: 16px;

    display: flex !important;
    align-items: center;
    gap: 12px;
  }

  .guest-avatar{
    width: 52px !important;
    height: 52px !important;
    flex: 0 0 auto;
  }

  .guest-name{
    font-size: 16px !important;
  }

  /* meta 换行更自然，避免挤到右侧 */
  .guest-meta{
    font-size: 12px !important;
    gap: 6px !important;
  }
  .guest-insta{
    word-break: break-word;
  }
}

/* 手机更窄再缩一点 */
@media (max-width: 420px){
  .who-hero__title{ width: 94vw; }
  .guest-avatar{ width: 46px !important; height: 46px !important; }
  .guest-name{ font-size: 15px !important; }
}

</style>
