<template>
  <!-- MOBILE -->
  <div v-if="isMobile" class="schedule-mobile">
    <!-- page background (keep) -->
    <div
      class="schedule-bg"
      :style="{ backgroundImage: `url(${desktopAssets.pageBg})` }"
      aria-hidden="true"
    ></div>

  <!-- ✅ MOBILE STAGE -->
  <div class="m-stage">
    <!-- ✅ 白底封底（两种 tab 共用） -->
    <div class="m-panel">
      <!-- ===== TAB: SLOTS ===== -->
      <div v-if="mobileTab === 'slots'" class="m-slots">
        <div class="m-slots-head">
          <!-- 可选标题图 -->
          <div class="m-slots-title" v-if="desktopAssets.timeSlotsTitle">
            <img :src="desktopAssets.timeSlotsTitle" alt="" />
          </div>
        </div>

        <!-- ✅ 列表滚动区 -->
        <div class="m-slots-list" role="list">
          <button
            v-for="slot in slots"
            :key="slot.id"
            class="m-slot-btn"
            type="button"
            role="listitem"
            @click="openDetail(slot.id)"
          >
            <img
              class="m-slot-img"
              :src="selectedSlotId === slot.id ? desktopAssets.slotSelected : desktopAssets.slotNormal"
              alt=""
              draggable="false"
            />

            <!-- 文字叠层：如果 tag 图自带字，就删掉这块 -->
            <div class="m-slot-overlay">
              <div class="m-slot-name">{{ slot.name }}</div>
              <div class="m-slot-time">{{ slot.time }}</div>
            </div>
          </button>
        </div>
      </div>

      <!-- ===== TAB: DETAIL ===== -->
      <div v-else class="m-detail" v-if="activeSlot">
        <div class="m-detail-card">
          <img class="m-detail-img" :src="activeSlot.detailImg" alt="" />

          <div class="m-detail-title">{{ activeSlot.title }}</div>

          <!-- ✅ desc 滚动区 -->
          <div class="m-detail-scroll">
            <div class="m-detail-desc">{{ activeSlot.desc }}</div>
          </div>

          <!-- ✅ Back 固定在卡片内部底部（不会飘到外面） -->
          <button class="m-back" type="button" @click="mobileTab='slots'">
            ← Back
          </button>
        </div>
      </div>
    </div>
  </div>

  </div>

  <!-- DESKTOP -->
  <div v-else class="schedule-desktop2">
    <!-- page background (keep) -->
    <div
      class="schedule-bg"
      :style="{ backgroundImage: `url(${desktopAssets.pageBg})` }"
      aria-hidden="true"
    ></div>
    <div
      class="schedule-bgw"
      :style="{ backgroundImage: `url(${desktopAssets.pageBgw})` }"
      aria-hidden="true"
    ></div>

    <!-- key visual overlay (desktop only) -->
    <img
      v-if="desktopAssets.keyVisual"
      class="schedule-kv"
      :src="desktopAssets.keyVisual"
      alt=""
      aria-hidden="true"
    />

    <!-- ✅ desktop 基本内容容器（空） -->
    <div class="schedule-desktop-content" :style="stageStyle">
      <div class="intro">
        <div class="intro-bg">
          <img :src="desktopAssets.introBg" />
        </div>

        <!-- ✅ 选中后显示：图片 + 文本（叠在 introBg 上面） -->
        <div class="intro-detail" v-if="activeSlot">
          <img class="intro-detail-img" :src="activeSlot.detailImg" alt="" />
          <div class="intro-detail-text">
            <div class="intro-detail-title">{{ activeSlot.title }}</div>
    <!-- ✅ 文字滚动层 -->
            <div class="intro-detail-scroll"> 
              <div class="intro-detail-desc">{{ activeSlot.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeslots">
        <div class="timeslots-bg">
          <img :src="desktopAssets.timeSlotsBg" />
        </div>
        <div class="timeslots-title">
          <img :src="desktopAssets.timeSlotsTitle" />
        </div>

        <!-- ✅ 列表层：盖在白底上 -->
        <div class="timeslots-list" role="list">
          <button
            v-for="(slot, idx) in slots"
            :key="slot.id"
            class="timeslot-btn"
            type="button"
            role="listitem"
            :class="{ active: selectedSlotId === slot.id }"
            @click="selectSlot(slot.id)"
          >
            <img
              class="timeslot-img"
              :src="selectedSlotId === slot.id ? desktopAssets.slotSelected : desktopAssets.slotNormal"
              alt=""
              draggable="false"
            />

            <!-- ✅ 如果你想让“文字/时间”也可控（不用写在图片里），就保留这层 -->
            <div class="timeslot-overlay">
              <div class="timeslot-name">{{ slot.name }}</div>
              <div class="timeslot-time">{{ slot.time }}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia"
import { useUserStore } from "../stores/store"
import horizontalttl from "../components/horizontalttl.vue"
import gem from "../components/gem.vue"

export default {
  components: { horizontalttl, gem },

  data() {
    return {
      isMobile: false,
      _onResize: null,
      stageScale: 1,
      mobileTab: "slots",

      // ✅ keep desktopAssets (as requested)
      desktopAssets: {
        pageBg: "/背景_Schedule.png",
        pageBgw: "/纯白背景透图.png",
        keyVisual: "/渐变miku.png",
        introBg: "/介绍切换.png",
        timeSlotsBg: "/白底_Schedule.png",       
        timeSlotsTitle: "/Tittle.png",
        slotNormal: "/tag_Normal.png",
        slotSelected: "/tag_selected.png",
      },

      selectedSlotId: "s1", // 默认选中第一条（你想默认选中哪条就改）

      slots: [
        {
          id: "s1",
          name: "Miku Themed Music Band",
          time: "12:00-12:20",
          title: "Miku Themed Music Band",
          desc: "List:\n World is Mine\n Kokoronashi\n 猛独が襲う\n 六兆年と一夜物語 \n アスノヨゾラ哨戒班",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s2",
          name: "Opening Ceremony",
          time: "12:20-12:30",
          title: "Opening Ceremony",
          desc: "Welcome to the opening ceremony of our event! We are thrilled to have you here as we kick off an exciting day filled with music, performances, and unforgettable moments. Get ready to be amazed and inspired as we set the stage for an incredible experience. Let the festivities begin!",
          detailImg: "/mikuonly2026.png",
        },
        {
          id: "s3",
          name: "Game: Kahoot Challenge - Vocaloid",
          time: "12:30-12:55",
          title: "Game: Kahoot Challenge - Vocaloid",
          desc: "Join us for an exciting Kahoot challenge featuring your favorite Vocaloid songs! Test your knowledge and compete with other fans for the top spot. Get ready for a fun and interactive experience!",
          detailImg: "/kahoot_vocaloid.jpg",
        },
        {
          id: "s4",
          name: "Third Prize Draw：Button Badge*9",
          time: "12:55-13:10",
          title: "Third Prize Draw：Button Badge*9",
          desc: "Congratulations to our third prize winners! A total of nine prizes will be given out, and each winner will receive one random button badge selected from two available designs featuring our beloved characters. Thank you to everyone who participated in the draw, and stay tuned for more exciting prizes in the future!",
          detailImg: "/现场抽奖三等奖.JPG",
        },
        {
          id: "s5",
          name: "Miraidol",
          time: "13:10-13:25",
          title: "Miraidol",
          desc: "Song List: \n 1.Magnet \n 2.Patchwork Staccato \n 3.CandyCookieChocolate \n 4.Monitoring",
          detailImg: "/miraidol_official.jpg",
        },
        {
          id: "s6",
          name: "VVBV",
          time: "13:25-13:40",
          title: "VVBV",
          desc: "Song List:\n 1.Magical Cure Love Shot\n 2.六兆年と一夜物語\n 3.Monitoring\n 4.Secret Performance\n 5.39music\n 6.Hand in Hand",
          detailImg: "/vvbv_anwei.jpg",
        },
        {
          id: "s7",
          name: "i:RεS",
          time: "13:40-13:55",
          title: "i:RεS",
          desc: "Song List:\n 1.Empurple\n 2.ロミオとシンデレラ\n 3.Secret Performance\n 4.気まぐれメルシィ",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s8",
          name: "Yume Showtime☆! ",
          time: "13:55-14:15",
          title: "Yume Showtime☆! ",
          desc: "Song List:\n 1.Tell Your World\n 2.Deep Sea Girl\n 3.TONDEMO-WONDERZ\n 4.God-ish\n 5.Monitoring\n 6.Miku\n 7.Taiyoukei Disco",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s9",
          name: "Vocaloid Themed Music Band",
          time: "14:15-15:00",
          title: "Human Wannabes",
          desc: "Song List:\n 1.Lost One no Goukoku\n 2.Kyoufuu All Back\n 3.Normal Discord\n 4.Unknown Mother Goose\n 5.アスノヨゾラ哨戒班\n 6.Blusher \n 7.Meltdown \n 8.Roki \n 9.Jigoku",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s10",
          name: "Second Prize Draw：Fufu Plush ×3",
          time: "15:00-15:10",
          title: "Second Prize Draw：Fufu Plush ×3",
          desc: "Congratulations to our second prize winners! Each winner will receive a Fufu Plush. Thank you to everyone who participated in the draw, and stay tuned for more exciting prizes in the future!",
          detailImg: "现场抽奖二等奖fufu2.JPG",
        },
        {
          id: "s11",
          name: "Guess the Song Challenge",
          time: "15:10-15:25",
          title: "Guess the Song Challenge",
          desc: "Test your knowledge of Vocaloid songs in our exciting Guess the Song Challenge! Compete with other fans and see who can identify the most songs correctly. Get ready for a fun and interactive experience!",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s12",
          name: "Mesmerizing Triple Threat",
          time: "15:35-15:40",
          title: "Mesmerizing Triple Threat",
          desc: "Performing By Cosmic Tide",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s13",
          name: "Telepop",
          time: "15:40-15:45",
          title: "Telepop",
          desc: "Performing By Eby亦白",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s14",
          name: "Ai Dee!",
          time: "15:45-15:50",
          title: "Ai Dee!",
          desc: "Performing By Sweet Eyes Cosplay",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s15",
          name: "Gimme X Gimme",
          time: "15:50-15:55",
          title: "Gimme X Gimme",
          desc: "Performing By Ad Astra",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s16",
          name: "Vampire - MORE MORE JUMP!",
          time: "15:55-16:00",
          title: "Vampire - MORE MORE JUMP!",
          desc: "Performing By Parfait Soleil",
          detailImg: "ParfaitSoleil.png",
        },
        {
          id: "s17",
          name: "Happy Synthesizer",
          time: "16:00-16:05",
          title: "Happy Synthesizer",
          desc: "Performing By C.ma.moves",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s18",
          name: "Love Avoidance",
          time: "16:05-16:10",
          title: "Love Avoidance",
          desc: "Performing By Karen Chen",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s19",
          name: "CUPID’s Loving Tragedy",
          time: "16:10-16:15",
          title: "CUPID’s Loving Tragedy",
          desc: "Performing By CUPID",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s20",
          name: "Unknown Mother Goose",
          time: "16:20-16:25",
          title: "Unknown Mother Goose",
          desc: "Performing By Kikako",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s21",
          name: "Mikustic!",
          time: "16:25-16:30",
          title: "Mikustic!",
          desc: "Performing By MonochroMenace x Pomegranola",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s22",
          name: "Fire*Flower Re:ReRec",
          time: "16:35-16:40",
          title: "Fire*Flower Re:ReRec",
          desc: "Performing By Mi•Do•Ri",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s23",
          name: "Romeo and Cinderlla",
          time: "16:40-16:45",
          title: "Romeo and Cinderlla",
          desc: "Performing By Tapikyoka",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s24",
          name: "Drag Queen Hatsune Miku is Canon",
          time: "16:45-16:51",
          title: "Drag Queen Hatsune Miku is Canon",
          desc: "Performing By Boxa Crayonz",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s25",
          name: "Ifuudoudou by Vivid BAD SQUAD",
          time: "16:51-16:55",
          title: "Ifuudoudou by Vivid BAD SQUAD",
          desc: "Performing By ANG3LZ",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s26",
          name: "The Snow White Princess is... - MORE MORE JUMP!",
          time: "16:55-16:59",
          title: "The Snow White Princess is... - MORE MORE JUMP!",
          desc: "Performing By CloverCure",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s27",
          name: "Kira Kira ☆ Comet",
          time: "16:59-17:03",
          title: "Kira Kira ☆ Comet",
          desc: "Performing By Kira Kira ☆ Comet",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s28",
          name: "First Prize Draw: “MUSE” Figure ×1",
          time: "17:05-17:15",
          title: "First Prize Draw: “MUSE” Figure ×1",
          desc: "Congratulations to our first prize winner! The winner will receive an exclusive “MUSE” figure. Thank you to everyone who participated in the draw, and stay tuned for more exciting prizes in the future!",
          detailImg: "现场抽奖一等奖.png",
        },
        {
          id: "s29",
          name: "Photo Ops",
          time: "17:15-17:20",
          title: "Photo Ops",
          desc: "Take memorable photos with your favorite characters and scenes from the event. Capture the moments and share your experience with friends!",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s30",
          name: "Random Dance Chanllenge",
          time: "17:25-17:55",
          title: "Random Dance Chanllenge",
          desc: "Join the fun and show off your dance moves in our Random Dance Challenge! Compete with other participants and enjoy the lively atmosphere.",
          detailImg: "/赛车miku.jpg",
        },
        {
          id: "s31",
          name: "Ending Ceremony",
          time: "17:58-18:05",
          title: "Ending Ceremony",
          desc: "Join us for the grand finale as we wrap up the event with a memorable ending ceremony. Celebrate the highlights and enjoy the final moments with fellow attendees.",
          detailImg: "/mikuonly2026.png",
        },
        // ...你继续加
      ],
    }
  },

  computed: {
    ...mapState(useUserStore, ["stateDump"]),
    stageStyle() {
      return {
        transform: `translate(-50%, -50%) scale(${this.stageScale})`,
      }
    },
    activeSlot() {
      return this.slots.find(s => s.id === this.selectedSlotId) || null
    },
  },

  methods: {
    ...mapActions(useUserStore, ["sendchat", "getUsername"]),

    selectSlot(id) {
      this.selectedSlotId = id
    },

    updateIsMobile() {
      this.isMobile = window.matchMedia("(max-width: 1025px)").matches
    },
    updateStageScale() {
      const w = window.innerWidth
      const h = window.innerHeight

      const baseW = 1920
      const baseH = 1080

      const s = Math.min(w / baseW, h / baseH)
      this.stageScale = Math.max(0.65, s)
    },

    openDetail(id) {
      this.selectedSlotId = id
      this.mobileTab = "detail"
    },
  },

  mounted() {
    this.updateIsMobile()
    this.updateStageScale()

    this._onResize = () => {
      this.updateIsMobile()
      this.updateStageScale()
    }

    window.addEventListener("resize", this._onResize, { passive: true })
  },

  beforeUnmount() {
    if (this._onResize) window.removeEventListener("resize", this._onResize)
  },
}
</script>

<style>
/* =========================
   BASE WRAPPERS (keep)
   ========================= */
.schedule-mobile,
.schedule-desktop2 {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

/* page background (keep) */
.schedule-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(1.02);
  z-index: 0;
}

.schedule-bgw {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;
  pointer-events: none;
}

/* key visual overlay (desktop only, keep) */
.schedule-kv {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  width: 100%;
  height: 100%;
  object-fit: contain;

  transform: translate(-15%, 2%);
  opacity: 0.85;
  filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.25));
}

/* =========================
   EMPTY CONTENT SLOTS
   ========================= */
.schedule-mobile-content {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  /* 你之后要放内容就从这里开始写 */
}

/* =========================
   DESKTOP CENTER LAYOUT (LEFT / RIGHT)
   ========================= */

.schedule-desktop-content{
  position: absolute;
  left: 57%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 14px;               /* ✅ 间距明显变小（原来 56） */
}

/* ---------- INTRO (LEFT, smaller) ---------- */
.intro{
  position: relative;
  flex: 0 0 auto;
  top: -90px;
}

.intro-bg img{
  display: block;
  width: 100%;            /* ✅ 左边变小 */
  height: auto;
}

/* ---------- TIMESLOTS (RIGHT, bigger) ---------- */
.timeslots{
  position: relative;
  flex: 0 0 auto;
}

/* 白底主体 */
.timeslots-bg img{
  display: block;
  width: 100%;            /* ✅ 右边明显更大 */
  height: auto;
}

/* 标题叠在白底上方 */
.timeslots-title{
  position: absolute;
  left: 50%;
  top: 40px;              /* 稍微抬高一点，配合变大后的白底 */
  transform: translateX(-50%) scale(2.3);
  pointer-events: none;
}

.timeslots-title img{
  display: block;
  width: 380px;            /* 标题略微放大一点 */
  max-width: 36vw;
  height: auto;
}

/* 列表层：盖在白底内部 */
.timeslots-list{
  position: absolute;
  left: 6%;         /* ✅ 微调：让列表落在白底的内容区 */
  top: 16%;         /* ✅ 微调：避开 title 的区域 */
  width: 88%;
  height: 78%;
  display: flex;
  flex-direction: column;
  gap: 14px;        /* ✅ 条目间距 */
  overflow: auto;
  padding-right: 6px;
}

/* 每条按钮 */
.timeslot-btn{
  position: relative;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  line-height: 0;
}
.timeslot-img{
  display:block;
  width: 100%;
  height: auto;
  user-select: none;
}

/* 可选：文字叠在条目图上（如果你条目图本身无文字） */
.timeslot-overlay{
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 42px;
  pointer-events: none;
  line-height: 1;
}
.timeslot-name{
  font-family: font5;
  font-weight: 900;
  letter-spacing: 0.02em;
  text-align: left;
  font-size: 36px;
  opacity: 0.65;
}
.timeslot-time{
  font-family: font5;
  font-weight: 900;
  text-align: left;
  font-size: 36px;
  opacity: 0.65;
  white-space: nowrap;
}

/* 选中态：如果你想选中后文字更亮一点 */
.timeslot-btn.active .timeslot-name,
.timeslot-btn.active .timeslot-time{
  opacity: 1;
}

/* ===== LEFT DETAIL LAYER (on top of intro bg) ===== */
.intro{
  position: relative;
  flex: 0 0 auto;
  top: -90px; /* 你原来的“位置高一点”保留 */
}

.intro-bg{
  position: relative;
}
.intro-bg img{
  display:block;
  width: 100%;
  height: auto;
}

/* 详情叠层：按你的 intro 框里粉色/白色区域微调 */
.intro-detail{
  position: absolute;
  left: 10%;
  top: 12%;
  width: 80%;
  height: 78%;

  display: grid;

  /* ✅ 关键：上面图片最多占 62%，下面文字至少有 1fr */
  grid-template-rows: 62% 1fr;
  gap: 14px;

  pointer-events: none;
}


.intro-detail-img{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

/* 文本区：标题 + 滚动正文 */
.intro-detail-text{
  min-height: 0;                 /* ✅ 关键：让子元素能正确滚动 */
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.intro-detail-title{
  flex: 0 0 auto;
  font-family: font5;
  font-weight: 900;
  font-size: 28px;
}

.intro-detail-scroll{
  flex: 1 1 auto;
  min-height: 0;                 /* ✅ 关键：没有它滚动经常失效 */
  overflow: auto;
  padding-right: 10px;           /* 给滚动条留空间 */
  pointer-events: auto;          /* ✅ 允许鼠标滚动/触控滚动 */
  -webkit-overflow-scrolling: touch;
}


.intro-detail-desc{
  font-family: font2;
  font-size: 18px;
  line-height: 1.35;
  opacity: 0.85;
  white-space: pre-wrap;         /* ✅ 让你 desc 里换行生效 */
}

/* =========================
   MOBILE UI
   ========================= */
.schedule-mobile{
  position:absolute;
  inset:0;
  overflow:hidden;
}

/* ✅ 手机内容舞台：整体往下（别贴顶） */
.m-stage{
  position: absolute;
  inset: 0;
  z-index: 3;

  /* 关键：让内容整体更“低一点” */
  padding-top: clamp(74px, 10vh, 120px);
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: max(16px, env(safe-area-inset-bottom));

  box-sizing: border-box;
}

/* ✅ 白底封底面板：填满剩余高度 */
.m-panel{
  height: 100%;
  width: 100%;

  background: rgba(255,255,255,0.78);
  border-radius: 20px;

  box-sizing: border-box;
  padding: 14px;

  /* 让内部滚动正确 */
  display: flex;
  flex-direction: column;
  min-height: 0;

  /* 可选：更像你图里的柔和阴影 */
  box-shadow: 0 18px 40px rgba(0,0,0,0.10);
}

/* -------- SLOTS TAB -------- */
.m-slots{
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction:column;
  min-height: 0;
}

.m-slots-head{
  flex: 0 0 auto;
  padding-bottom: 10px;
}

.m-slots-title img{
  display:block;
  width: 76%;
  height:auto;
  margin: 0 auto;
}

/* ✅ 列表滚动区：多的内容往下滑 */
.m-slots-list{
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;

  display:flex;
  flex-direction:column;
  gap: 12px;

  padding-right: 6px;
  -webkit-overflow-scrolling: touch;
}

.m-slot-btn{
  position: relative;
  border:0;
  padding:0;
  background: transparent;
  cursor:pointer;
  line-height: 0;
}

.m-slot-img{
  display:block;
  width: 100%;
  height:auto;
  user-select:none;
}

/* 文字叠层（如果 tag 图自带文字，可以删掉这块） */
.m-slot-overlay{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 18px;
  pointer-events:none;
  line-height:1;
}

.m-slot-name{
  font-family: font5;
  font-weight: 900;
  font-size: 13px;
  text-align: left;
  opacity: .75;
  letter-spacing: .02em;
}

.m-slot-time{
  font-family: font5;
  font-weight: 900;
  font-size: 15px;
  opacity: .75;
  white-space: nowrap;
}

.m-slot-btn:active .m-slot-name,
.m-slot-btn:active .m-slot-time{
  opacity: 1;
}

/* -------- DETAIL TAB -------- */
.m-detail{
  width: 100%;
  height: 100%;
  min-height: 0;
  display:flex;
}

/* ✅ detail 卡片：占满面板高度，内部可滚动 */
.m-detail-card{
  width: 100%;
  height: 100%;
  min-height: 0;

  display:flex;
  flex-direction:column;
  gap: 10px;

  /* 这里不需要再加背景了，因为 m-panel 已经是白底封底
     如果你想 detail 再有一个“内卡片”，可以把下面两行打开：
     background: rgba(255,255,255,0.35);
     border-radius: 16px;
  */
  overflow:hidden;
}

.m-detail-img{
  width: 100%;
  height: 46%;
  object-fit: contain;
  border-radius: 14px;
  background: rgba(255,255,255,0.45);
}

.m-detail-title{
  font-family: font5;
  font-weight: 900;
  font-size: 18px;
  flex: 0 0 auto;
}

/* ✅ 正文滚动区：多了就滚动 */
.m-detail-scroll{
  flex: 1 1 auto;
  min-height: 0;
  overflow:auto;
  padding-right: 8px;
  -webkit-overflow-scrolling: touch;
}

.m-detail-desc{
  font-family: font2;
  font-size: 14px;
  line-height: 1.45;
  opacity: .85;
  white-space: pre-wrap;
}

/* ✅ Back 在 detail tab 内部底部，不会跑到外面 */
.m-back{
  flex: 0 0 auto;
  align-self: flex-start;

  border:0;
  background: rgba(255,255,255,0.65);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  padding: 10px 12px;
  border-radius: 12px;

  cursor:pointer;
  font-family: font5;
  font-weight: 900;

  margin-top: 8px;
}

</style>
