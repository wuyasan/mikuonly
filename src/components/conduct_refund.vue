<template>
  <div
      class="conduct_refund"
      :class="isMobile ? 'conduct_refund--mobile' : 'conduct_refund--desktop'"
  >
    <!-- ================= Desktop：自适应（跟 conduct_child 同逻辑） ================= -->
    <template v-if="!isMobile">
      <div class="refund-desktop-wrap">
        <div class="refund-panel frosted-panel">
          <horizontalttl />

          <div class="refund-policy-text">
            <div class="ttl">Ticket Policy</div>

            <ul class="ul">
              <li class="li">All ticket sales are final.</li>

              <li class="li">
                Once purchased, tickets are
                <span class="strong">non-refundable and non-transferable</span>
                under any circumstances, including but not limited to scheduling
                conflicts, illness, or personal emergencies.
              </li>

              <li class="li">
                Please review all event details carefully (including date, location,
                admission rules, and policies) before completing your purchase.
              </li>

              <li class="li">
                In the unlikely event that the event is canceled by the Organizer,
                further instructions regarding refunds or rescheduling will be
                announced separately.
              </li>

              <li class="li">
                By purchasing a ticket, you acknowledge that you have read,
                understood, and agreed to this policy.
              </li>

              <li class="li">
                For any questions, please contact us via our official email info@ny-miku-only.com or
                official social media channels.
              </li>
            </ul>
          </div>
        </div>

        <div class="bottomline"></div>
      </div>
    </template>

    <!-- ================= Mobile / Tablet：卡片版 + fixed title ================= -->
    <template v-else>
      <div class="title title--mobile">
        <img
            src="/nc.png"
            class="title__nc"
            style="filter: contrast(300%) brightness(752%) invert(100%); opacity: 0.5;"
        />
        <div class="heading title__h1">TICKET<br />POLICY</div>
        <div class="heading title__h2">MIKU ONLY 2026</div>
      </div>

      <div class="refund-mobile-card">
        <div class="refund-mobile-header">
          <div class="refund-mobile-title">TICKET POLICY</div>
          <div class="refund-mobile-sub">MIKU ONLY NYC 2026</div>
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
import horizontalttl from "./horizontalttl.vue";

export default {
  components: { horizontalttl },
  data() {
    return {
      isMobile: false,
      _onResize: null,
    };
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
      this.isMobile = window.matchMedia("(max-width: 1300px)").matches;
    },
  },
};
</script>

<style>
/* ===== Desktop 自适应舞台（关键） ===== */
.conduct_refund--desktop {
  position: absolute;
  inset: 0;
}

.refund-desktop-wrap {
  position: absolute;
  inset: 0;
}

.refund-panel {
  position: absolute;
  top: clamp(3vh, 4vh, 6vh);
  left: clamp(2vh, 3vh, 4vh);
  right: clamp(2vh, 3vh, 4vh);
  bottom: clamp(8vh, 10vh, 12vh);

  overflow: auto;
  mix-blend-mode: screen;
}

.refund-policy-text {
  position: absolute;
  inset: 0;
  margin: 2vh 3vh 4vh 3vh;
  padding: 3vh 4vh 6vh 4vh;
  color: white;
  font-size: 1.6vh;
  line-height: 2.5vh;
}

.refund-policy-text .ttl {
  font-family: font5;
  font-size: 2vh;
  font-weight: 900;
  margin-bottom: 1vh;
}

.refund-policy-text .strong {
  font-weight: 900;
}

.refund-policy-text .ul {
  margin: 0 0 2vh 2.5vh;
  padding: 0;
}

.refund-policy-text .li {
  margin-bottom: 1vh;
}

.bottomline {
  position: absolute;
  left: clamp(2vh, 3vh, 4vh);
  right: clamp(2vh, 3vh, 4vh);
  height: 0.1vh;
  bottom: clamp(3vh, 4vh, 6vh);
  background: rgb(255 255 255);
  animation: bottomline 0.3s cubic-bezier(1, 0.02, 0.17, 1) forwards;
}

@keyframes bottomline {
  0% { opacity: 0; transform: translateY(2vh); }
  100% { opacity: 1; transform: translateY(0); }
}

.frosted-panel {
  background: rgba(0, 0, 0, 0.45);
  border-radius: 1.5vh;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0.8vh 2vh rgba(0, 0, 0, 0.4);
}

/* ===== Mobile / Tablet 卡片 ===== */
.conduct_refund--mobile{
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

.refund-mobile-card{
  background: rgba(255,255,255,0.78);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.16);
}

.refund-mobile-header{ margin-bottom: 12px; }

.refund-mobile-title{
  font-size: 15px;
  letter-spacing: 0.20em;
  font-weight: 800;
  opacity: 0.82;
  text-transform: uppercase;
}

.refund-mobile-sub{
  font-size: 13px;
  letter-spacing: 0.16em;
  opacity: 0.72;
  margin-top: 5px;
}

.refund-mobile-section{
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.65;
}

.refund-mobile-h{
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.86;
  margin-bottom: 8px;
}

/* ===== fixed title（同 conduct_child） ===== */
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

@media (min-width: 768px) and (max-width: 1300px){
  .title--mobile{
    top: 16px;
    right: 18px;
    width: 360px;
    height: 140px;
  }
  .title--mobile .title__nc{ width: 240px; left: 20px; top: -34px; }
  .title--mobile .title__h1{ top: 26px; font-size: 36px; }
  .title--mobile .title__h2{ top: 108px; font-size: 14px; letter-spacing: 0.46em; }
}
</style>
