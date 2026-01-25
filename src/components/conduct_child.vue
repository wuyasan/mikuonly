<template>
  <div
      class="conduct_child"
      :class="isMobile ? 'conduct_child--mobile' : 'conduct_child--desktop'"
  >
    <!-- ================= Desktop：保持原版布局 ================= -->
    <template v-if="!isMobile">
      <div style="position: absolute;height: 90vh;width: 90vh;left: 90vh;top: 5vh;">
        <div class="title">
          <img src="/nc.png" style="position: absolute;width: 42vh;top: -10vh;left: 19vh;filter: contrast(300%) brightness(752%) invert(100%);opacity: 0.5;">
          <div class="heading" style="position: absolute;bottom: 90%;left: 55%;font-family: font5;font-size: 8vh;font-weight: 900;line-height: 6.2vh;text-align:left;color: white;opacity:0.4;">
            AGE<br>POLICY
          </div>
          <div class="heading" style="position: absolute;bottom: 85%;left: 55%;font-family: font5;font-size: 1.2vh;font-weight: 900;line-height: 6.2vh;text-align:left;color: white;letter-spacing: 1.3vh;width:100%;opacity:0.4;">
            MIKU ONLY 2026
          </div>
        </div>

        <div class="floorpanel1 frosted-panel"
             style="position: absolute;height: 72%;top: 13vh;mix-blend-mode: screen;width:70vh;left: 17%;overflow:auto;">
          <horizontalttl />

          <div
              class="age-policy-text"
              style="position:absolute;inset:0;
              margin:2vh 3vh 4vh 3vh;padding:3vh 4vh 6vh 4vh;
              color:white;font-size:1.6vh;line-height:2.5vh;"
          >
            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              Admission Age Rules
            </div>
            <div style="margin-bottom:2vh;">
              This is an <span style="font-weight:900;">All Ages</span> event.
              There is <span style="font-weight:900;">no adult content</span>,
              and <span style="font-weight:900;">no alcohol</span> will be served.
            </div>

            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              Minors &amp; Supervision
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li style="margin-bottom:1vh;">
                <span style="font-weight:900;">Age 12 and under (including age 12):</span>
                Must be accompanied at all times by a parent, legal guardian,
                or responsible adult <span style="font-weight:900;">18 years or older</span>.
                The guardian must hold a valid ticket and remain reachable on-site
                (phone available).
              </li>
              <li style="margin-bottom:1vh;">
                <span style="font-weight:900;">Ages 13–17:</span>
                May attend unaccompanied
                <span style="font-weight:900;">if permitted by the Parent</span>.
                No need to be permitted by the Organizer.
                However, it is strongly recommended that a parent or guardian
                accompany the minor or remain nearby or reachable.
              </li>
              <li style="margin-bottom:1vh;">
                The Organizer <span style="font-weight:900;">does not</span> assume custodial
                responsibility for minors. Parents or guardians are fully responsible
                for the minor’s conduct, safety, and personal belongings.
              </li>
            </ul>

            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              ID Check &amp; Wristbands
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li style="margin-bottom:1vh;">
                Attendees may be required to present a valid photo ID or other
                documentation showing date of birth upon entry.
              </li>
              <li style="margin-bottom:1vh;">
                Wristbands may be issued for age grouping/ticket group, re-entry identification,
                and general event management.
              </li>
              <li style="margin-bottom:1vh;">
                Refusal to comply with verification, providing false information,
                or misuse of IDs or wristbands may result in denied entry or
                removal from the event.
              </li>
            </ul>

            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              Safety &amp; Removal
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li>
                Disruptive behavior, harassment, unsafe conduct, or failure to follow
                staff instructions may result in
                <span style="font-weight:900;">immediate removal</span>, typically
                without refund (subject to ticketing terms).
              </li>
              <li>
                For any questions, please contact us via our official email info@ny-miku-only.com or
                official social media channels.
              </li>
            </ul>
          </div>
        </div>

        <div class="bottomline"
             style="position: absolute;width: 76.1vh;height: 0.1vh;background: rgb(255 255 255);left: 16vh;"></div>
      </div>
    </template>

    <!-- ================= Mobile / Tablet：竖排卡片文本 ================= -->
    <template v-else>
      <div class="age-mobile-card">
        <div class="age-mobile-header">
          <div class="age-mobile-title">AGE POLICY</div>
          <div class="age-mobile-sub">MIKU ONLY NYC 2026</div>
        </div>

        <div class="age-mobile-header title title--mobile">
          <img
              src="/nc.png"
              class="title__nc"
              style="filter: contrast(300%) brightness(752%) invert(100%); opacity: 0.5;"
          >
          <div class="heading title__h1">
            AGE<br>POLICY
          </div>
          <div class="heading title__h2">
            MIKU ONLY 2026
          </div>
        </div>

        <div class="age-mobile-section">
          <div class="age-mobile-h">Admission Age Rules</div>
          <p>
            This is an <strong>All Ages</strong> event. There is
            <strong>no adult content</strong>, and <strong>no alcohol</strong> will be served.
          </p>
        </div>

        <div class="age-mobile-section">
          <div class="age-mobile-h">Minors &amp; Supervision</div>
          <ul>
            <li>
              <strong>Age 12 and under (including age 12):</strong>
              Must be accompanied at all times by a parent, legal guardian, or responsible adult
              <strong>18 years or older</strong> with a valid ticket, and remain reachable on-site (phone available).
            </li>
            <li>
              <strong>Ages 13–17:</strong>
              May attend unaccompanied <strong>if permitted by the Parent</strong>.
              No organizer approval is required, but we strongly recommend a parent/guardian
              accompany the minor or stay nearby / reachable.
            </li>
            <li>
              The Organizer <strong>does not</strong> assume custodial responsibility for minors.
              Parents/guardians are fully responsible for the minor’s conduct, safety, and belongings.
            </li>
          </ul>
        </div>

        <div class="age-mobile-section">
          <div class="age-mobile-h">ID Check &amp; Wristbands</div>
          <ul>
            <li>
              Attendees may be asked to show a valid photo ID or other document with date of birth at entry.
            </li>
            <li>
              Wristbands may be used for ticket / age grouping, re-entry, and general event management.
            </li>
            <li>
              Refusing verification, giving false info, or misusing IDs / wristbands may result in denied entry
              or removal from the event.
            </li>
          </ul>
        </div>

        <div class="age-mobile-section">
          <div class="age-mobile-h">Safety &amp; Removal</div>
          <ul>
            <li>
              Disruptive, harassing, unsafe, or non-compliant behavior may lead to
              <strong>immediate removal</strong>, usually without refund (see ticket terms).
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
      // 和 conduct.vue 保持一致：1200px 以下走卡片版
      this.isMobile = window.matchMedia("(max-width: 1200px)").matches;
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
  0% {
    opacity: 0;
    bottom: 17%;
  }

  100% {
    opacity: 1;
    bottom: 12%;
  }
}

.frosted-panel {
  background: rgba(0, 0, 0, 0.45);
  border-radius: 1.5vh;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0.8vh 2vh rgba(0, 0, 0, 0.4);
}

/* ===== Mobile / Tablet：AGE 文本卡片 ===== */
.conduct_child--mobile {
  position: relative;
  width: 100%;
  height: auto;
  color: #111;
  font-family:
      "Avenir Next",
      Avenir,
      "Helvetica Neue",
      Helvetica,
      -apple-system,
      BlinkMacSystemFont,
      "SF Pro Text",
      "SF Pro Display",
      "Segoe UI",
      Roboto,
      Arial,
      "PingFang SC",
      "Microsoft YaHei",
      sans-serif;
}

.age-mobile-card {
  background: rgba(255,255,255,0.78);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.16);
}

.age-mobile-header {
  margin-bottom: 12px;
}

.age-mobile-title {
  font-size: 15px;            /* 原来 12 */
  letter-spacing: 0.20em;
  font-weight: 800;
  opacity: 0.82;
  text-transform: uppercase;
}

.age-mobile-sub {
  font-size: 13px;            /* 原来 11 */
  letter-spacing: 0.16em;
  opacity: 0.72;
  margin-top: 5px;
}

.age-mobile-section {
  margin-top: 12px;
  font-size: 15px;            /* 原来 13 */
  line-height: 1.65;          /* 原来 1.5 */
}

.age-mobile-h {
  font-size: 14px;            /* 原来 12 */
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.86;
  margin-bottom: 8px;
}

.age-mobile-section p {
  margin: 0;
}

.age-mobile-section ul {
  margin: 6px 0 0 20px;       /* 原来 16px */
  padding: 0;
}

.age-mobile-section li {
  margin-bottom: 8px;         /* 原来 4px */
}

/* ===== Phone（<=767px）：上面这套就是手机默认 ===== */
@media (max-width: 767px) {
  .age-mobile-card {
    padding: 15px 14px;
    border-radius: 14px;
  }
}

/* ===== Tablet（768~1200px）：再放大一档，给 iPad 横屏用 ===== */
@media (min-width: 768px) and (max-width: 1200px) {
  .age-mobile-card {
    padding: 22px 22px;
    border-radius: 20px;
  }

  .age-mobile-title {
    font-size: 36px;
  }

  .age-mobile-sub {
    font-size: 18px;
  }

  .age-mobile-section {
    font-size: 17px;
    line-height: 1.75;
  }

  .age-mobile-h {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .age-mobile-section ul {
    margin-left: 24px;
  }

  .age-mobile-section li {
    margin-bottom: 10px;
  }

  /* ===== Mobile/Tablet：title 固定在整个页面(视口)右上角 ===== */
  .title--mobile{
    position: fixed;           /* 关键：不是 absolute */
    top: 12px;
    right: 14px;
    width: 280px;
    height: 110px;
    z-index: 9999;             /* 盖过卡片/人物 */
    pointer-events: none;      /* 不挡点击 */
  }

  /* nc 图层 */
  .title--mobile .title__nc{
    position: absolute;
    width: 180px;
    left: 18px;                /* 你想更贴右也可以改小 */
    top: -26px;
    opacity: 0.5;
    filter: contrast(300%) brightness(752%) invert(100%);
  }

  /* 大标题（右对齐） */
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

  /* 小标题（右对齐） */
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

  /* ===== iPad/Tablet 放大一点 ===== */
  @media (min-width: 768px) and (max-width: 1200px){
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

}
/* ===== Mobile + Tablet：title 固定在整页右上角（m-scroll 滚动也不动）===== */
@media (max-width: 1200px){
  .title--mobile{
    position: fixed !important;
    top: 12px;
    right: 14px;
    width: 280px;
    height: 110px;
    z-index: 9999;
    pointer-events: none;     /* 不挡点击 */
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

/* ===== iPad/Tablet 再放大一点 ===== */
@media (min-width: 768px) and (max-width: 1200px){
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

