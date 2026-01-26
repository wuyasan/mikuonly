<template>
  <div style="position: absolute;background: rgba(241, 241, 241, 0.6);height: 200%;width: 81vh;right: 15vh;top: -64%;">
    <horizontalttl />

    <div
        class="when"
        style="position: absolute; background: rgba(241, 241, 241, 0.6); height: 100%; right: 0; top: 0; overflow: hidden;"
    >
<!--      <div-->
<!--          class="glance"-->
<!--          style="position:absolute;height:63%;color: #ffffff;top:19%;transform:rotateZ(90deg);font-family:font9;font-size:13vh;left: -58%;"-->
<!--      >-->
<!--        BE ON TIME!-->
<!--      </div>-->

      <div class="windowHandle" style="position:absolute;width:100%;height:3%;background:white;top:0%;overflow:hidden;">
        <div style="position:absolute;top:-25%;color:#00000026;font-family:font9;font-size:2.5vh;font-weight:900;">
          W H E N
        </div>
      </div>

      <div class="header1" style="position:absolute;width:100%;height:3%;top:4%;">
        <div style="position:absolute;top:-25%;color:#0000009e;font-family:font5;font-size:1.2vh;left:3%;">
          INFORMATION DISTRIBUTED BY
        </div>
        <div style="position:absolute;top:-25%;color:#0000009e;font-family:font5;font-size:1.2vh;right:3%;">
          MIKU ONLY TEAM
        </div>
        <div class="timeboard">
          <img class="timeboard__img" src="/时间板块.png" alt="timeboard" />
        </div>
<!--        <div style="position:absolute;top:267%;color:#0000009e;font-family:font5;font-size:1.2vh;right:3%;">-->
<!--          LAST UPDATED-->
<!--        </div>-->
<!--        <div-->
<!--            style="position:absolute;top:27%;color:#717171;font-family:font9;font-size:4.3vh;left: 2.5%;letter-spacing: 4.3vh;width:100%;"-->
<!--        >-->
<!--          MEETING TIME-->
<!--        </div>-->
      </div>

<!--      <div class="glance" style="position:absolute;width:100%;height:3%;top:20%;">-->
<!--        <div-->
<!--            style="position:absolute;top:0%;background:#00adff;font-family:font5;font-size:1.2vh;left:3%;width:6%;height:146%;filter:drop-shadow(0.6vh 6px 5.7px rgba(100,100,100.01));"-->
<!--        ></div>-->

<!--        <div style="position:absolute;top:-66%;color:#717171;font-family:font9;font-size:6vh;right:-40%;width:105%;">-->
<!--          07,-->
<!--          <span-->
<!--              style="background:#454545;color:white;mix-blend-mode:multiply;filter:drop-shadow(0.6vh 6px 5.7px rgba(100,100,100.01));"-->
<!--          >-->
<!--            March,-->
<!--          </span>-->
<!--          2026-->
<!--        </div>-->
<!--      </div>-->

      <!-- ✅ 用 时间板块.png 替代倒计时区域：占满 when 宽度 -->


      <div class="img-txt-expand" style="position:absolute;top:62%;width:100%;left:4%;">
        <div
            style="position: absolute;top: 16.5vh;left: 1%;width: 70%;font-family: font5;font-size: 1.5vh;height: 30vh;overflow: auto;line-height: 1.8vh;text-align: left;"
        >
          MikuOnly NYC 2026 is officially starting!<br />
          Cross the screen and step into the spotlight, where your performance brings the virtual world to life.<br />
          Kick off your year on our stage with melodies of magic and symphonies of dreams.<br />
        </div>

        <div
            style="position:absolute;top:8vh;left:70%;width:24vh;height:24vh;background-image: radial-gradient(rgb(0 0 0 / 51%) 0.2vh, transparent 0);background-size:6vh 6vh;background-position:-19px -19px;"
        ></div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style="position:absolute;left: 61%;top: -7vh;width: 32%;opacity: 0.1;">
          <path
              d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z"
          ></path>
        </svg>
      </div>

      <div style="position:absolute;width:100%;height:0.3%;background:#ffffff;bottom:0%;overflow:hidden;"></div>

      <div @click="goTicket" class="get-ticket" style="position: absolute;width: 44%;height: 7vh;top: 64%;overflow: hidden;left: 5%;cursor: pointer;">
        <div style="position:absolute;top: -12vh;left: -51%;font-family:font1;font-size:2vh;background: #00000026;border-radius:50%;width: 32vh;height: 32vh;"></div>
        <div style="position:absolute;top: -12vh;left: -40%;font-family:font1;font-size:2vh;background: #0000001f;border-radius:50%;width: 32vh;height: 32vh;"></div>
        <div style="position:absolute;top: -12vh;left: -63%;font-family:font1;font-size:2vh;background: #00000066;border-radius:50%;width: 32vh;height: 32vh;"></div>

        <div style="position:absolute;top: 62%;left: 52%;font-family: font11;font-size:2vh;color:rgba(230,230,230,1);font-weight: 900;">
          Get Ticket
        </div>

        <div style="position:absolute;top: 17%;left: 52%;font-family: font5;font-size: 3vh;color:rgba(230,230,230,1);font-weight: 900;">
          TICKETING
        </div>

        <img
            src="/public/tickets.png"
            style="position:absolute;top: 2%;left: -1%;font-family: font5;font-size: 3vh;color:white;font-weight: 900;width: 9vh;mix-blend-mode: screen;filter: invert(100%) grayscale(100%);"
        />
      </div>
    </div>

    <div class="bottomline1" style="position:absolute;width:100%;height: 0.2%;background:white;"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/store";
import horizontalttl from "./horizontalttl.vue";
import gem from "./gem.vue";

export default {
  components: { gem, horizontalttl },

  data() {
    return {
      nowTs: Date.now(),
      _etaTimer: null,
    };
  },

  computed: {
    ...mapState(useUserStore, ["stateDump"]),

    // ✅ JS月份从0开始：3月=2
    targetTs() {
      return new Date(2026, 2, 7, 0, 0, 0, 0).getTime();
    },

    etaArr() {
      let diffMs = this.targetTs - this.nowTs;
      if (diffMs <= 0) return [0, 0, 0];

      const totalSec = Math.floor(diffMs / 1000);
      const hh = Math.floor(totalSec / 3600);
      const mm = Math.floor((totalSec % 3600) / 60);
      const ss = totalSec % 60;

      return [hh, mm, ss];
    },

    etaHH() {
      return this.etaArr[0];
    },
    etaMM() {
      return String(this.etaArr[1]).padStart(2, "0");
    },
    etaSS() {
      return String(this.etaArr[2]).padStart(2, "0");
    },
    etaGhost() {
      // 你原来用的是一个很淡的大数字，这里用总小时更合理
      return this.etaArr[0];
    },
  },

  mounted() {
    this._etaTimer = setInterval(() => {
      this.nowTs = Date.now();
    }, 250);
  },

  beforeUnmount() {
    clearInterval(this._etaTimer);
  },

  methods: {
    ...mapActions(useUserStore, ["sendchat", "getUsername"]),

    goTicket() {
      window.open("https://www.ny-miku-only.com/ticket-1");
    },
  },
};
</script>

<style>
.bottomline1 {
  animation-name: bottomline1;
  animation-delay: 0s;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

@keyframes bottomline1 {
  0% { opacity: 0; bottom: 3%; }
  100% { opacity: 1; bottom: -2.5%; }
}

.get-ticket {
  background: #2196f3;
  filter: drop-shadow(2vh 2vh 2vh rgba(0,0,0,0.5));
}
.get-ticket:hover {
  background: #ffffff;
  filter: drop-shadow(3vh 3vh 3vh #2196f3);
}

.when {
  animation-name: when;
  animation-delay: 0.8s;
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}
@keyframes when {
  0% { opacity: 0; width: 90%; }
  100% { opacity: 1; width: 100%; }
}

/* =========================
   ✅ 时间板块（满宽 + 自适应）
   ========================= */
.timeboard{
  position:absolute;
  top:36%;
  left:0;
  width:100%;
  aspect-ratio: 3.4 / 1; /* 不对就调这个比例 */
  pointer-events:none;
}

.timeboard__img{
  inset:0;
  width:100%;
  height:100%;
  object-fit: contain;
}

/* 叠字：百分比定位 + clamp 自适应 */
.timeboard__eta{
  position:absolute; left: 6%; top: 18%;
  color:#717171; font-family:font9;
  font-size: clamp(14px, 2.2vw, 4.3vh);
}
.timeboard__sub{
  position:absolute; left: 6.3%; top: 35%;
  color:#717171; font-family:font9;
  font-size: clamp(10px, 1.1vw, 1.3vh);
}

.timeboard__hh{
  position:absolute; left: 6%; top: 42%;
  color:#00adff; font-family:font9;
  font-size: clamp(42px, 6.5vw, 11.3vh);
  line-height:1;
}
.timeboard__hr{
  position:absolute; left: 46%; top: 56%;
  color:#00adff; font-family:font9;
  font-size: clamp(12px, 1.8vw, 3.1vh);
}

.timeboard__mm{
  position:absolute; left: 52%; top: 60%;
  color:#919191; font-family:font9;
  font-size: clamp(20px, 3vw, 5.4vh);
}
.timeboard__min{
  position:absolute; left: 63%; top: 72%;
  color:#919191; font-family:font9;
  font-size: clamp(10px, 1.2vw, 1.8vh);
}

.timeboard__ss{
  position:absolute; left: 70%; top: 60%;
  color:#919191; font-family:font9;
  font-size: clamp(20px, 3vw, 5.4vh);
  opacity: 0.85;
}
.timeboard__sec{
  position:absolute; left: 81%; top: 72%;
  color:#919191; font-family:font9;
  font-size: clamp(10px, 1.2vw, 1.8vh);
  opacity: 0.85;
}

.timeboard__ghost{
  position:absolute; left: 68%; top: -10%;
  color: rgba(145,145,145,0.17); font-family:font9;
  font-size: clamp(70px, 10vw, 18.4vh);
}

.timeboard__until{
  position:absolute; right: 10%; top: 66%;
  color:#919191; font-family:font9;
  font-size: clamp(14px, 2.2vw, 3.8vh);
}
.timeboard__start{
  position:absolute; right: 9%; top: 78%;
  color:#eeecee; font-family:font9;
  font-size: clamp(12px, 1.6vw, 2.4vh);
  background:#515151;
  padding: 0.3em 0.8em;
  filter:drop-shadow(0.6vh 6px 5.7px rgba(100,100,100.01));
}
</style>
