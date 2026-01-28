<template>
  <div
      class="conduct_cos"
      :class="isMobile ? 'conduct_cos--mobile' : 'conduct_cos--desktop'"
  >
    <!-- ================= Desktop：自适应（跟 conduct_child 同逻辑） ================= -->
    <template v-if="!isMobile">
      <div class="cos-desktop-wrap">
        <div class="cos-panel frosted-panel">
          <div class="title title--desktop" aria-hidden="true">
            <img src="/PROP%20POLICY.png" class="title__img" alt="" />
          </div>
          <horizontalttl />

          <div class="cos-policy-text">
            <div class="ttl">General</div>
            <ul class="ul">
              <li class="li">
                Cosplay is welcome! Safety comes first. Costumes and props must not endanger
                others or obstruct walkways.
              </li>
              <li class="li">
                The Organizer and/or Venue reserves final discretion and may require
                modifications, storage, or deny entry.
              </li>
            </ul>

            <div class="ttl">Costume Guidelines</div>
            <ul class="ul">
              <li class="li">
                Required body areas must be properly covered with opaque materials.
                Transparent substitutes are not acceptable. Explicit, sexually suggestive,
                or harassing attire or behavior is prohibited.
              </li>
              <li class="li">
                Masks and helmets are allowed but must be briefly removed upon request
                for security or ID checks.
              </li>
            </ul>

            <div class="ttl">Props &amp; Weapons Restrictions</div>

            <div class="subttl">Prohibited Items:</div>
            <ul class="ul">
              <li class="li">
                Any real weapons, sharp metal blades, piercing spikes, functioning projectile
                devices, explosives, fireworks, or flammable materials.
              </li>
            </ul>

            <div class="subttl">Allowed with Conditions:</div>
            <ul class="ul">
              <li class="li">
                Non-sharp props made of foam/EVA, plastic, wood (with no sharp edges),
                or 3D-printed materials. All edges must be rounded or safely finished.
              </li>
              <li class="li">
                No swinging, chasing, or aggressive actions. Maintain a safe distance
                when posing for photos.
              </li>
            </ul>

            <div class="ttl">Replica Guns Rules</div>
            <ul class="ul">
              <li class="li">Replica guns are not allowed.</li>
            </ul>

            <div class="ttl">Prop Check &amp; Tagging</div>
            <ul class="ul">
              <li class="li">
                Props may be inspected and tagged (e.g., sticker or zip-tie). Untagged
                props may require re-check or may not be permitted inside.
              </li>
            </ul>

            <div class="ttl">Photos &amp; Anti-Harassment</div>
            <ul class="ul">
              <li class="li">
                Always ask for consent before taking photos. Do not touch or grab costumes
                or props without permission.
              </li>
              <li class="li">
                Zero tolerance for harassment, stalking, creepshots, or any non-consensual
                physical contact. Violators will be removed and may be referred to venue
                security.
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

    <!-- ================= Mobile / Tablet：卡片版 + 右上角固定 title ================= -->
    <template v-else>
      <!-- 固定右上角标题（不要放到可滚动容器里） -->
      <div class="title title--mobile">
        <img
            src="/PROP%20POLICY.png"
            class="title__img"
            alt=""
        />
      </div>

      <div class="cos-mobile-card">
        <div class="cos-mobile-header">
          <div class="cos-mobile-title">PROP POLICY</div>
          <div class="cos-mobile-sub">MIKU ONLY NYC 2026</div>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">General</div>
          <ul>
            <li>Cosplay is welcome! Safety comes first. Costumes and props must not endanger others or obstruct walkways.</li>
            <li>The Organizer and/or Venue reserves final discretion and may require modifications, storage, or deny entry.</li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Costume Guidelines</div>
          <ul>
            <li>
              Required body areas must be properly covered with opaque materials. Transparent substitutes are not acceptable.
              Explicit, sexually suggestive, or harassing attire or behavior is prohibited.
            </li>
            <li>Masks and helmets are allowed but must be briefly removed upon request for security or ID checks.</li>
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
            <li>No swinging, chasing, or aggressive actions. Maintain a safe distance when posing for photos.</li>
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
            <li>Props may be inspected and tagged (e.g., sticker or zip-tie). Untagged props may require re-check or may not be permitted inside.</li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Photos &amp; Anti-Harassment</div>
          <ul>
            <li>Always ask for consent before taking photos. Do not touch or grab costumes or props without permission.</li>
            <li>Zero tolerance for harassment, stalking, creepshots, or any non-consensual physical contact. Violators will be removed and may be referred to venue security.</li>
            <li>Questions? Please contact us via <strong>info@ny-miku-only.com</strong> or official social media.</li>
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
.conduct_cos--desktop {
  position: absolute;
  inset: 0;
}

.cos-desktop-wrap {
  position: absolute;
  inset: 0;
}

/* frosted panel：跟着父级 subpanel-stage 自动缩放 */
.cos-panel {
  position: absolute;
  top: clamp(3vh, 4vh, 6vh);
  left: clamp(2vh, 3vh, 4vh);
  right: clamp(2vh, 3vh, 4vh);
  bottom: clamp(8vh, 10vh, 12vh);

  overflow: auto;
  mix-blend-mode: screen;
}

/* 文本内边距：不再写死 vh 宽高 */
.cos-policy-text {
  position: absolute;
  inset: 0;
  margin: 2vh 3vh 4vh 3vh;
  padding: 3vh 4vh 6vh 4vh;
  color: white;
  font-size: 1.6vh;
  line-height: 2.5vh;
}

.cos-policy-text .ttl {
  font-family: font5;
  font-size: 2vh;
  font-weight: 900;
  margin-bottom: 1vh;
}

.cos-policy-text .subttl {
  font-weight: 900;
  margin: 0 0 0.5vh 0;
}

.cos-policy-text .ul {
  margin: 0 0 2vh 2.5vh;
  padding: 0;
}

.cos-policy-text .li {
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

/* ===== Mobile / Tablet 卡片（沿用你 conduct_child 风格） ===== */
.conduct_cos--mobile{
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

.cos-mobile-card{
  background: rgba(255,255,255,0.78);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.16);
}

.cos-mobile-header{ margin-bottom: 12px; }

.cos-mobile-title{
  font-size: 15px;
  letter-spacing: 0.20em;
  font-weight: 800;
  opacity: 0.82;
  text-transform: uppercase;
}

.cos-mobile-sub{
  font-size: 13px;
  letter-spacing: 0.16em;
  opacity: 0.72;
  margin-top: 5px;
}

.cos-mobile-section{
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.65;
}

.cos-mobile-h{
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.86;
  margin-bottom: 8px;
}

.cos-mobile-strong{
  font-weight: 800;
  letter-spacing: 0.06em;
  opacity: 0.9;
}

/* ===== fixed title（复制 conduct_child 的思路，简化版） ===== */
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

/* ===== Title image (shared) ===== */
.title__img{
  position: absolute;
  right: 0;
  top: 1vw;
  height: auto;
  display: block;
  pointer-events: none;
}

/* ===== Desktop: 跟着当前 subpanel 容器走（不跟滚动走）===== */
.title--desktop{
  position: absolute;
  top: 0;
  right: 0;
  width: min(62vw, 980px);
  height: auto;
  z-index: 50;          /* 确保压在面板之上 */
  pointer-events: none;
}

/* ===== Mobile/Tablet: 固定在视口右上角（你原来那套逻辑）===== */
@media (max-width: 1300px){
  .title--mobile{
    position: fixed !important;
    top: 12px;
    right: 14px;
    width: min(70vw, 360px);
    height: auto;
    z-index: 9999;
    pointer-events: none;
  }

  .title--mobile .title__img{
    top: 1vw;
    position: absolute;  /* mobile 下直接当块显示 */
    width: 30vw;
    height: auto;
  }
}
</style>
