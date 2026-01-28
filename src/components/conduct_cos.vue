<template>
  <div
      class="conduct_cos"
      :class="isMobile ? 'conduct_cos--mobile' : 'conduct_cos--desktop'"
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
              class="cos-policy-text"
              style="position:absolute;inset:0;
                margin:2vh 3vh 4vh 3vh;
                padding:3vh 4vh 6vh 4vh;
                color:white;
                font-size:1.6vh;line-height:2.5vh;"
          >
            <!-- General -->
            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              General
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li style="margin-bottom:1vh;">
                Cosplay is welcome! Safety comes first. Costumes and props must not endanger
                others or obstruct walkways.
              </li>
              <li>
                The Organizer and/or Venue reserves final discretion and may require
                modifications, storage, or deny entry.
              </li>
            </ul>

            <!-- Costume Guidelines -->
            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              Costume Guidelines
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li style="margin-bottom:1vh;">
                Required body areas must be properly covered with opaque materials.
                Transparent substitutes are not acceptable. Explicit, sexually suggestive,
                or harassing attire or behavior is prohibited.
              </li>
              <li>
                Masks and helmets are allowed but must be briefly removed upon request
                for security or ID checks.
              </li>
            </ul>

            <!-- Props & Weapons Restrictions -->
            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              Props &amp; Weapons Restrictions
            </div>

            <!-- Prohibited Items -->
            <div style="font-weight:900;margin:0 0 0.5vh 0;">
              Prohibited Items:
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li>
                Any real weapons, sharp metal blades, piercing spikes, functioning projectile
                devices, explosives, fireworks, or flammable materials.
              </li>
            </ul>

            <!-- Allowed with Conditions -->
            <div style="font-weight:900;margin:0 0 0.5vh 0;">
              Allowed with Conditions:
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li style="margin-bottom:1vh;">
                Non-sharp props made of foam/EVA, plastic, wood (with no sharp edges),
                or 3D-printed materials. All edges must be rounded or safely finished.
              </li>
              <li style="margin-bottom:1vh;">
                No swinging, chasing, or aggressive actions. Maintain a safe distance
                when posing for photos.
              </li>
            </ul>

            <!-- Replica Guns Rules -->
            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              Replica Guns Rules
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li style="margin-bottom:1vh;">
                Replica guns are not allowed.
              </li>
            </ul>

            <!-- Prop Check & Tagging -->
            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              Prop Check &amp; Tagging
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li>
                Props may be inspected and tagged (e.g., sticker or zip-tie). Untagged
                props may require re-check or may not be permitted inside.
              </li>
            </ul>

            <!-- Photos & Anti-Harassment -->
            <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
              Photos &amp; Anti-Harassment
            </div>
            <ul style="margin:0 0 2vh 2.5vh;padding:0;">
              <li style="margin-bottom:1vh;">
                Always ask for consent before taking photos. Do not touch or grab costumes
                or props without permission.
              </li>
              <li>
                Zero tolerance for harassment, stalking, creepshots, or any non-consensual
                physical contact. Violators will be removed and may be referred to venue
                security.
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

    <!-- ================= Mobile / Tablet：卡片文本 + 右上角固定 title ================= -->
    <template v-else>
      <!-- 固定在整页右上角（不要放到可滚动容器里） -->
      <div class="title title--mobile">
        <img
            src="/nc.png"
            class="title__nc"
            style="filter: contrast(300%) brightness(752%) invert(100%); opacity: 0.5;"
        >
        <div class="heading title__h1">
          PROP<br>POLICY
        </div>
        <div class="heading title__h2">
          MIKU ONLY 2026
        </div>
      </div>

      <div class="cos-mobile-card">
        <div class="cos-mobile-header">
          <div class="cos-mobile-title">PROP POLICY</div>
          <div class="cos-mobile-sub">MIKU ONLY NYC 2026</div>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">General</div>
          <ul>
            <li>
              Cosplay is welcome! Safety comes first. Costumes and props must not endanger others or obstruct walkways.
            </li>
            <li>
              The Organizer and/or Venue reserves final discretion and may require modifications, storage, or deny entry.
            </li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Costume Guidelines</div>
          <ul>
            <li>
              Required body areas must be properly covered with opaque materials. Transparent substitutes are not acceptable.
              Explicit, sexually suggestive, or harassing attire or behavior is prohibited.
            </li>
            <li>
              Masks and helmets are allowed but must be briefly removed upon request for security or ID checks.
            </li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Props &amp; Weapons Restrictions</div>

          <div class="cos-mobile-strong">Prohibited Items:</div>
          <ul>
            <li>
              Any real weapons, sharp metal blades, piercing spikes, functioning projectile devices,
              explosives, fireworks, or flammable materials.
            </li>
          </ul>

          <div class="cos-mobile-strong" style="margin-top: 10px;">Allowed with Conditions:</div>
          <ul>
            <li>
              Non-sharp props made of foam/EVA, plastic, wood (with no sharp edges), or 3D-printed materials.
              All edges must be rounded or safely finished.
            </li>
            <li>
              No swinging, chasing, or aggressive actions. Maintain a safe distance when posing for photos.
            </li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Replica Guns Rules</div>
          <ul>
            <li>Replica guns are not allowed.</li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Prop Check &amp; Tagging</div>
          <ul>
            <li>
              Props may be inspected and tagged (e.g., sticker or zip-tie). Untagged props may require re-check
              or may not be permitted inside.
            </li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Photos &amp; Anti-Harassment</div>
          <ul>
            <li>Always ask for consent before taking photos. Do not touch or grab costumes or props without permission.</li>
            <li>
              Zero tolerance for harassment, stalking, creepshots, or any non-consensual physical contact.
              Violators will be removed and may be referred to venue security.
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
      // 与 conduct_child / conduct.vue 统一：<=1300 走卡片版（含 iPad）
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

/* ===== Mobile / Tablet：整体文字卡片风格（与 conduct_child 同级）===== */
.conduct_cos--mobile {
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

.cos-mobile-card {
  background: rgba(255,255,255,0.78);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.16);
}

.cos-mobile-header { margin-bottom: 12px; }

.cos-mobile-title {
  font-size: 15px;
  letter-spacing: 0.20em;
  font-weight: 800;
  opacity: 0.82;
  text-transform: uppercase;
}

.cos-mobile-sub {
  font-size: 13px;
  letter-spacing: 0.16em;
  opacity: 0.72;
  margin-top: 5px;
}

.cos-mobile-section {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.65;
}

.cos-mobile-h {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.86;
  margin-bottom: 8px;
}

.cos-mobile-strong{
  font-weight: 900;
  letter-spacing: 0.06em;
  margin: 8px 0 6px 0;
  opacity: 0.9;
}

.cos-mobile-section ul {
  margin: 6px 0 0 20px;
  padding: 0;
}

.cos-mobile-section li { margin-bottom: 8px; }

/* ===== Tablet 再放大一档（768~1300）===== */
@media (min-width: 768px) and (max-width: 1300px) {
  .cos-mobile-card { padding: 22px; border-radius: 20px; }
  .cos-mobile-title { font-size: 36px; }
  .cos-mobile-sub { font-size: 18px; }
  .cos-mobile-section { font-size: 17px; line-height: 1.75; }
  .cos-mobile-h { font-size: 18px; margin-bottom: 10px; }
  .cos-mobile-section ul { margin-left: 24px; }
  .cos-mobile-section li { margin-bottom: 10px; }
}

/* ===== 固定 Title：Mobile + Tablet 都钉在整页右上角 ===== */
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

/* iPad/Tablet title 再大一点 */
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
