<template>
  <div
      class="conduct_refund"
      :class="isMobile ? 'conduct_refund--mobile' : 'conduct_refund--desktop'"
  >
    <!-- ================= Desktop：保持原版布局 ================= -->
    <template v-if="!isMobile">
      <div style="position: absolute;height: 90vh;width: 90vh;left: 90vh;top: 3vh;">

        <div
            class="floorpanel1 frosted-panel"
            style="position: absolute;height: 72%;top: 13vh;
               mix-blend-mode: screen;width: 70vh;left: 17%;overflow:auto;"
        >
          <horizontalttl />

          <div
              class="refund-policy-text"
              style="position:absolute;inset:0;
                margin:2vh 3vh 4vh 3vh;
                padding:3vh 4vh 6vh 4vh;
                color:white;
                font-size:1.6vh;line-height:2.5vh;"
          >
            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              Ticket Policy
            </div>

            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li style="margin-bottom:1vh;">
                All ticket sales are final.
              </li>
              <li style="margin-bottom:1vh;">
                Once purchased, tickets are
                <span style="font-weight:900;">non-refundable and non-transferable</span>
                under any circumstances, including but not limited to scheduling
                conflicts, illness, or personal emergencies.
              </li>
              <li style="margin-bottom:1vh;">
                Please review all event details carefully (including date, location,
                admission rules, and policies) before completing your purchase.
              </li>
              <li style="margin-bottom:1vh;">
                In the unlikely event that the event is canceled by the Organizer,
                further instructions regarding refunds or rescheduling will be
                announced separately.
              </li>
              <li style="margin-bottom:1vh;">
                By purchasing a ticket, you acknowledge that you have read,
                understood, and agreed to this policy.
              </li>
              <li>
                For any questions, please contact us via our official email info@ny-miku-only.com or
                official social media channels.
              </li>
            </ul>
          </div>
        </div>

        <div
            class="bottomline"
            style="position: absolute;width: 76.1vh;height: 0.1vh;
               background: rgb(255 255 255);left: 16vh;"
        ></div>
      </div>
    </template>

    <!-- ================= Mobile / Tablet：卡片版 ================= -->
    <template v-else>
      <div class="refund-mobile-card">
        <!-- ✅ 固定在整个页面右上角：滚动卡片也不动 -->
        <div class="refund-mobile-header title title--mobile">
          <img
              src="/nc.png"
              class="title__nc"
              style="filter: contrast(300%) brightness(752%) invert(100%); opacity: 0.5;"
          >
          <div class="heading title__h1">
            REFUND<br>POLICY
          </div>
          <div class="heading title__h2">
            MIKU ONLY 2026
          </div>
        </div>

        <div class="refund-mobile-section">
          <div class="refund-mobile-h">Ticket Policy</div>
          <ul>
            <li>All ticket sales are final.</li>
            <li>
              Once purchased, tickets are <strong>non-refundable and non-transferable</strong>
              under any circumstances, including but not limited to scheduling conflicts, illness,
              or personal emergencies.
            </li>
            <li>
              Please review all event details carefully (including date, location,
              admission rules, and policies) before completing your purchase.
            </li>
            <li>
              In the unlikely event that the event is canceled by the Organizer, further
              instructions regarding refunds or rescheduling will be announced separately.
            </li>
            <li>
              By purchasing a ticket, you acknowledge that you have read, understood, and agreed to this policy.
            </li>
            <li>
              Questions? Please contact us via <strong>info@ny-miku-only.com</strong> or official social media.
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import horizontalttl from './horizontalttl.vue'

export default {
  components: { horizontalttl },

  data() {
    return {
      isMobile: false,
      _onResize: null,
    }
  },

  mounted() {
    this.updateIsMobile();
    this._onResize = () => this.updateIsMobile();
    window.addEventListener("resize", this._onResize, { passive: true });
  },

  beforeUnmount() {
    if (this._onResize) window.removeEventListener("resize", this._onResize);
  },

  methods: {
    updateIsMobile() {
      // 和 conduct.vue / conduct_child 保持一致：1300px 以下走卡片版
      this.isMobile = window.matchMedia("(max-width: 1300px)").matches;
    },
  },
}
</script>

<style>
/* ===== Desktop 原动画 ===== */
.bottomline {
  animation-name: bottomline;
  animation-delay: 0s;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

@keyframes bottomline {
  0% { opacity: 0; bottom: 17%; }
  100% { opacity: 1; bottom: 12%; }
}

.frosted-panel {
  background: rgba(0, 0, 0, 0.45);
  border-radius: 1.5vh;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0.8vh 2vh rgba(0, 0, 0, 0.4);
}

/* ===== Mobile / Tablet 卡片 ===== */
.conduct_refund--mobile {
  position: relative;
  width: 100%;
  height: auto;
  color: #111;
  font-family:
      "Avenir Next", Avenir, "Helvetica Neue", Helvetica,
      -apple-system, BlinkMacSystemFont,
      "SF Pro Text", "SF Pro Display",
      "Segoe UI", Roboto, Arial,
      "PingFang SC", "Microsoft YaHei", sans-serif;
}

.refund-mobile-card {
  background: rgba(255,255,255,0.78);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.16);
}

.refund-mobile-section {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.65;
}

.refund-mobile-h {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.86;
  margin-bottom: 8px;
}

.refund-mobile-section ul {
  margin: 6px 0 0 20px;
  padding: 0;
}

.refund-mobile-section li {
  margin-bottom: 8px;
}

/* ===== Phone（<=767px）：保持手机默认 ===== */
@media (max-width: 767px) {
  .refund-mobile-card {
    padding: 15px 14px;
    border-radius: 14px;
  }
}

/* ===== Tablet（768~1300px）：再放大一档 ===== */
@media (min-width: 768px) and (max-width: 1300px) {
  .refund-mobile-card {
    padding: 22px 22px;
    border-radius: 20px;
  }

  .refund-mobile-section {
    font-size: 17px;
    line-height: 1.75;
  }

  .refund-mobile-h {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .refund-mobile-section ul {
    margin-left: 24px;
  }

  .refund-mobile-section li {
    margin-bottom: 10px;
  }
}

/* ===== Mobile + Tablet：title 固定在整页右上角（m-scroll 滚动也不动）===== */
@media (max-width: 1300px){
  .title--mobile{
    position: fixed !important;
    top: 12px;
    right: 14px;
    width: 280px;
    height: 110px;
    z-index: 9999;
    pointer-events: none;
  }

  .title--mobile .title__nc{
    position: absolute;
    width: 180px;
    left: 18px;
    top: -26px;
    opacity: 0.5;
    filter: contrast(300%) brightness(752%) invert(100%);
  }

  .title--mobile .title__h1{
    position: absolute;
    right: 0;
    top: 20px;
    font-family: font5;
    font-weight: 900;
    line-height: 0.95;
    text-align: right;
    color: rgba(255,255,255,0.55);
    font-size: 28px;
  }

  .title--mobile .title__h2{
    position: absolute;
    right: 0;
    top: 82px;
    font-family: font5;
    font-weight: 900;
    line-height: 1;
    text-align: right;
    color: rgba(255,255,255,0.45);
    letter-spacing: 0.40em;
    font-size: 12px;
    white-space: nowrap;
  }
}

/* ===== iPad/Tablet：title 再放大一点 ===== */
@media (min-width: 768px) and (max-width: 1300px){
  .title--mobile{
    top: 16px;
    right: 18px;
    width: 360px;
    height: 140px;
  }
  .title--mobile .title__nc{
    width: 240px;
    left: 20px;
    top: -34px;
  }
  .title--mobile .title__h1{
    top: 26px;
    font-size: 36px;
  }
  .title--mobile .title__h2{
    top: 108px;
    font-size: 14px;
    letter-spacing: 0.46em;
  }
}
</style>
