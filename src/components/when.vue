<template>
  <div class="when-wrap">
    <horizontalttl />

    <div class="when-panel">
      <!-- 顶部把手条 -->
      <div class="windowHandle-when">
        <div class="handleText">W H E N</div>
      </div>

      <!-- 顶部 meta（你原本那条） -->
<!--      <div class="time-board__meta">-->
<!--        <div class="meta-left">-->
<!--          <div class="meta-sub">INFORMATION DISTRIBUTED BY</div>-->
<!--        </div>-->
<!--        <div class="meta-right">-->
<!--          <div class="meta-team">MIKU ONLY TEAM</div>-->
<!--        </div>-->
<!--      </div>-->

      <!-- 时间板块（保留你的图层） -->
      <section class="time-board" aria-label="Meeting time board">
        <img class="time-board__bg" src="/时间板块.png" alt="" aria-hidden="true" />
      </section>

      <!-- 售票区域（grid 内稳定布局） -->
      <section class="ticket-area" aria-label="Ticketing">
        <img
            class="ticketing-card__frame"
            src="/Tiket选框.png"
            alt=""
            aria-hidden="true"
        />
        <div class="ticketing-box">
          <div class="ticketing-cards">
            <a
                class="ticketing-card"
                :class="{ active: activeTicket === 'entry' }"
                :href="ticketLinks.entry"
                target="_blank"
                rel="noreferrer"
                @mouseenter="activeTicket='entry'"
                @mouseleave="activeTicket=null"
            >
              <img class="ticketing-card__img" src="/entry.png" alt="Entry Admission" />
            </a>

            <a
                class="ticketing-card"
                :class="{ active: activeTicket === 'general' }"
                :href="ticketLinks.general"
                target="_blank"
                rel="noreferrer"
                @mouseenter="activeTicket='general'"
                @mouseleave="activeTicket=null"
            >
              <img class="ticketing-card__img" src="/General.png" alt="General Admission" />
            </a>

            <a
                class="ticketing-card"
                :class="{ active: activeTicket === 'vip' }"
                :href="ticketLinks.vip"
                target="_blank"
                rel="noreferrer"
                @mouseenter="activeTicket='vip'"
                @mouseleave="activeTicket=null"
            >
              <img class="ticketing-card__img" src="/VIP.png" alt="VIP Admission" />

            </a>
          </div>
          <a
              class="ticketing-banner"
              :href="ticketLinks.tickets"
              target="_blank"
              rel="noreferrer"
              @mouseenter="bannerHover=true"
              @mouseleave="bannerHover=false"
          >
            <img
                class="ticketing-banner__img"
                :src="bannerHover ? '/Tiket_SELECTED.png' : '/Tiket_normal.png'"
                alt="Ticketing"
            />
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/store";
import horizontalttl from "./horizontalttl.vue";

export default {
  components: { horizontalttl },

  data() {
    return {
      ticketLinks: {
        tickets: "https://www.ny-miku-only.com/ticket-1",
        entry: "https://www.ny-miku-only.com/event-details/miku-only-ny-2026-entry-admission",
        general: "https://www.ny-miku-only.com/event-details/miku-only-ny-2026-general-admission",
        vip: "https://www.ny-miku-only.com/event-details/miku-only-ny-2026-vip-admission",
      },

      activeTicket: null, // 'entry' | 'general' | 'vip'
      bannerHover: false,
    };
  },

  computed: {
    ...mapState(useUserStore, ["stateDump"]),
  },

  methods: {
    ...mapActions(useUserStore, ["sendchat", "getUsername"]),
  },
};
</script>

<style>
/* ✅ 外壳：不再用 top:-64% / height:200% / vh 无限放大 */
.when-wrap{
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
}


/* ✅ Grid 主容器 + 整体背景图替换 */
.when-panel{
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: grid;
  grid-template-rows:
     6%
        35%         /* time-board 自己按比例撑开 */
        2%         /* ✅ divider 行高度 */
        50%        /* ticket */
        5%
        2%;

  row-gap: 0;
  background-image: url("/白底_文字.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size:95%;


  animation-name: when;
  animation-delay: 0.2s;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

/* 顶部把手条 */
.windowHandle-when{
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

/* meta bar */
.time-board__meta{
  grid-row: 2;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 14px;
  z-index: 4;
  pointer-events: none;
}
.meta-left .meta-sub,
.meta-right .meta-team{
  font-family: font5;
  font-size: 14px;
  color: rgba(0,0,0,0.45);
  letter-spacing: 0.06em;
}

/* ✅ time-board 高度跟随背景图比例（推荐） */
.time-board{
  grid-row: 2;
  position: relative;
  width: 100%;
  aspect-ratio: 2048 / 640;
  overflow: hidden;

  margin-top: 2vw;     /* ✅ 用 margin 控距离 */
  margin-bottom: 0.8vw;  /* ✅ 给 divider 留空间 */
}

.when-divider{
  grid-row: 3;
  align-self: center;
  width: 100%;
  height: 2px;
  background: rgba(255,255,255,0.9);
  box-shadow: 0 1px 0 rgba(0,0,0,0.06);
  opacity: 0.9;
}

/* ✅ 背景图始终铺满容器，容器多高它就多高 */
.time-board__bg{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;         /* cover=铺满不留白；想完整显示用 contain */
}


/* ticket area */
.ticket-area{
  grid-row: 4;
  position: relative;
  z-index: 3;
}

.ticketing-box{
  position: relative;
  padding-top: 3vw;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}

/* 三张票卡 */
.ticketing-cards{
  display: flex;
  justify-content: center;
  gap: clamp(14px, 2vh, 22px);
  flex-wrap: wrap;             /* ✅ 允许换行 */
  align-items: flex-start;
}

.ticketing-card{
  position: relative;
  display: block;
  width: 20vh;
  aspect-ratio: 3 / 4;
  text-decoration: none;

  transform: translateY(0);
  transition: transform .18s ease, filter .18s ease;
}
.ticketing-card:hover{
  transform: translateY(-4px);
}

.ticketing-card__img{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* ✅ 票卡不要裁切，保持完整 */
}

.ticketing-card__frame{
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1vw 3vw 2vw;
}

.ticketing-banner{
  position: relative;          /* ✅ 不压在票卡上 */
  flex: 0 0 100%;              /* ✅ 强制单独一行 */
  display: flex;
  justify-content: flex-end;   /* ✅ 靠右 */
  padding-right: 3vw;
  width: 100%;
}

.ticketing-banner:hover{
  transform: translateY(-2px);
  filter: drop-shadow(0 12px 18px rgba(0,0,0,0.18));
}

.ticketing-banner__img{
  position: relative;
  width: 20vw;
  height: auto;
  object-fit: contain;
}

/* bottom line */
.bottomline1{
  grid-row: 5;
  width: 100%;
  height: 2px;
  background: white;
  align-self: end;

  animation-name: bottomline1;
  animation-delay: 0s;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

/* 动画 */
@keyframes when{
  0% { opacity: 0; transform: translateY(6px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes bottomline1{
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* ✅ 1300 以下（移动/窄屏）：整体转为相对布局更稳 */
@media (max-width: 1300px){
  .when-wrap{
    position: relative;
    right: auto;
    top: auto;
    margin: 12px auto;
    width: min(92vw, 560px);
    height: auto;
  }

  .when-panel{
    background-size: cover;
    background-image: url("/白底.png");
    grid-template-rows:
      6%
        35%         /* time-board 自己按比例撑开 */
        2%         /* ✅ divider 行高度 */
        50%        /* ticket */
        5%
        2%
  }

  .handleText{
    position: absolute;
    color: #00000066;
    font-family: font9;
    font-size: 26px;
    font-weight: 900;
  }

  .ticketing-card__frame{
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1vw 3vw 2vw;
  }

  .ticketing-cards{
    flex-wrap: wrap;
  }

  .ticketing-card{
    width: min(42vw, 180px);
  }

  .ticketing-banner{
    width: min(68vw, 340px);
  }

  @media (max-width: 1300px){
    .when-wrap{
      position: relative;
      margin: 0 auto;
      width: min(92vw, 560px);
      height: auto;              /* ✅ 不要 100% */
    }

    .when-panel{
      height: auto;              /* ✅ 关键：别撑满整屏 */
      overflow: visible;         /* ✅ 让内容自然撑开 */

      display: grid;
      grid-template-rows:
        6%
        35%         /* time-board 自己按比例撑开 */
        2%         /* ✅ divider 行高度 */
        50%        /* ticket */
        5%
        2%;

      row-gap: 10px;             /* ✅ 用 gap 控间距，不用 vw 行高 */

      background-size: 95%;
      background-position: center top;
    }

    .time-board{
      width: 100%;
      aspect-ratio: 2048 / 640;
      margin: 0;                 /* ✅ 清掉你之前的 vw margin */
    }

    .ticket-area{
      position: relative;     /* ✅ 票区留一点呼吸 */
    }

    .ticketing-box{
      padding-top: 5vw;
    }

    .ticketing-cards{
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
    }

    .ticketing-card{
      width: min(42vw, 180px);
    }

    /* ✅ 横条放到底下一行（你之前也要这个） */
    .ticketing-banner{
      position: relative;
      flex: 0 0 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding-left: -6px;
      margin-top: 8px;
      right: auto;
      bottom: auto;
    }

    .ticketing-banner__img{
      position: relative;
      width: 40vw;
      height: auto;
    }
  }

  /* =========================
   iPad / Tablet（769~1300）：铺满页面
   ========================= */
  /* =========================
     iPad / Tablet（769~1300）：正常排版 + 可向下滑动
     ========================= */
  @media (min-width: 769px) and (max-width: 1300px){

    .when-wrap{
      width: 100%;
      height: 100%;
      margin: 0;
    }

    /* ✅ 关键：不要用百分比行高，改成 auto + 滚动 */
    .when-panel{
      width: 100%;
      height: 100%;
      overflow-y: auto;            /* ✅ 向下滑动 */
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;

      display: grid;
      grid-template-rows: auto auto auto auto auto;  /* ✅ 自适应 */
      row-gap: 18px;               /* ✅ 正常间距 */

      padding: 18px 18px 26px;     /* ✅ 给内容呼吸空间 */
      box-sizing: border-box;

      background-size: cover;
      background-position: center;
      background-image: url("/白底.png");
    }

    /* 顶部把手条别占 grid 压缩空间 */
    .windowHandle-when{
      margin-top: 0;
      left: 0;
    }

    /* ✅ 时间板：保持比例，但允许变高，不挤票区 */
    .time-board{
      position: relative;
      height: auto;
      align-content: end;
      aspect-ratio: 2048 / 640;
      min-height: 160px;           /* ✅ 防止太扁 */
      max-height: 20vh;           /* ✅ 不要占满屏 */
      margin: 0;
    }

    .time-board__bg {
      position: absolute;
      align-content: end;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20vh;
      object-fit: contain;
      object-position: right center;
    }


    /* ✅ 票区：正常流式布局，不再被 grid 压缩 */
    .ticket-area{
      position: relative;
      padding-bottom: 10px;
    }

    .ticketing-box{
      padding-top: 12px;
    }

    .ticketing-cards{
      justify-content: center;
      gap: 18px;
      flex-wrap: nowrap;          /* ✅ 平板宽度够，先不换行 */
    }

    /* 三张卡在平板更大一点，但不会挤爆 */
    .ticketing-card{
      width: min(22vw, 220px);
    }

    /* ✅ banner 永远在下一行，不压票卡 */
    .ticketing-banner{
      position: relative;
      flex: 0 0 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 12px;
      padding-right: 10px;
    }

    .ticketing-banner__img{
      width: min(40vw, 360px);
      height: auto;
    }

    /* frame 如果盖住内容，给它 pointer-events none */
    .ticketing-card__frame{
      pointer-events: none;
    }
  }


  /* =========================
     Phone（<=768）：保持你之前的窄卡片
     ========================= */
  @media (max-width: 768px){
    .when-wrap{
      margin: 0 auto;
      width: min(92vw, 560px);
      height: auto;
    }

    .when-panel{
      height: auto;
      overflow: visible;

      grid-template-rows:
        6%
        35%         /* time-board 自己按比例撑开 */
        2%         /* ✅ divider 行高度 */
        50%        /* ticket */
        5%
        2%;
      row-gap: 10px;
      background-size: 95%;
      background-position: center top;
    }

    .ticketing-card{
      width: 22vw;
    }

    .ticketing-banner{
      position: relative;
      flex: 0 0 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 8px;
      margin-right: 2vw;
      right: auto;
      bottom: auto;
    }

    .ticketing-banner__img{
      position: relative;
      width: 40vw;
      height: auto;
    }
  }


}
</style>
