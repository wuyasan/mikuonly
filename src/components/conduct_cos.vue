<template>
  <div
      class="conduct_cos"
      :class="isMobile ? 'conduct_cos--mobile' : 'conduct_cos--desktop'"
  >
    <!-- ================= Desktop：保持你现在的布局 ================= -->
    <template v-if="!isMobile">
      <div class="conduct_cos-desktop-root" style="position: absolute;height: 90vh;width: 90vh;left: 90vh;top: 3vh;">
        <div class="title">
          <img
              src="/nc.png"
              style="position: absolute;width: 42vh;top: -10vh;left: 19vh;
                   filter: contrast(300%) brightness(752%) invert(100%);
                   opacity: 0.5;"
          >
          <div
              class="heading"
              style="position: absolute;bottom: 90%;left: 55%;
                   font-family: font5;font-size: 8vh;font-weight: 900;
                   line-height: 6.2vh;text-align:left;color: #ffffff6b;"
          >
            PROP<br>POLICY
          </div>
          <div
              class="heading"
              style="position: absolute;bottom: 85%;left: 55%;
                   font-family: font5;font-size: 1.2vh;font-weight: 900;
                   line-height: 6.2vh;text-align:left;color: #ffffff6b;
                   letter-spacing: 1.3vh;width:100%;"
          >
            MIKU ONLY 2026
          </div>
        </div>

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
                   font-size:1.6vh;
                   line-height:2.5vh;"
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

    <!-- ================= Mobile：竖排卡片版本 ================= -->
    <template v-else>
      <div class="cos-mobile-card">
        <div class="cos-mobile-header">
          <div class="cos-mobile-title">PROP POLICY</div>
          <div class="cos-mobile-sub">MIKU ONLY NYC 2026</div>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">General</div>
          <ul>
            <li>
              Cosplay is welcome! Safety comes first. Costumes and props must not endanger
              others or block walkways.
            </li>
            <li>
              The Organizer / Venue may require modifications, ask you to store a prop,
              or deny entry at their discretion.
            </li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Costume Guidelines</div>
          <ul>
            <li>
              Required body areas must be properly covered with opaque materials.
              Transparent substitutes are not acceptable.
            </li>
            <li>
              Explicit, sexually suggestive, or harassing attire or behavior is prohibited.
            </li>
            <li>
              Masks / helmets are allowed but must be briefly removed upon request
              for security or ID checks.
            </li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Props &amp; Weapons</div>
          <p class="cos-mobile-subtitle">Prohibited items</p>
          <ul>
            <li>
              Real weapons, sharp metal blades, piercing spikes, functioning projectile
              devices, explosives, fireworks, or flammable materials.
            </li>
          </ul>

          <p class="cos-mobile-subtitle">Allowed with conditions</p>
          <ul>
            <li>
              Non-sharp props made of foam/EVA, plastic, wood without sharp edges,
              or 3D-printed materials. All edges must be rounded or safely finished.
            </li>
            <li>
              No swinging, chasing, or aggressive actions. Keep a safe distance when
              posing for photos.
            </li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Replica Guns</div>
          <ul>
            <li>Replica guns are not allowed.</li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Prop Check &amp; Tagging</div>
          <ul>
            <li>
              Props may be inspected and tagged (for example, sticker or zip-tie).
              Untagged props may require re-check or may not be permitted inside.
            </li>
          </ul>
        </div>

        <div class="cos-mobile-section">
          <div class="cos-mobile-h">Photos &amp; Anti-Harassment</div>
          <ul>
            <li>
              Always ask for consent before taking photos. Do not touch or grab costumes
              or props without permission.
            </li>
            <li>
              Zero tolerance for harassment, stalking, creepshots, or any non-consensual
              physical contact. Violators may be removed and referred to venue security.
            </li>
            <li>
              Questions? Please contact us via <strong>info@ny-miku-only.com</strong>
              or official social media.
            </li>
          </ul>
        </div>
      </div>
    </template>
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
      shownQAID: false,
      isReadQuestion: false,

      isMobile: false,
      _onResize: null,
    };
  },

  computed: {
    ...mapState(useUserStore, ["stateDump"]),
    compileLastTurns() {},
  },

  methods: {
    ...mapActions(useUserStore, ["sendchat", "getUsername"]),

    updateIsMobile() {
      this.isMobile = window.matchMedia("(max-width: 1025px)").matches;
    },
  },

  mounted() {
    this.updateIsMobile();
    this._onResize = () => this.updateIsMobile();
    window.addEventListener("resize", this._onResize, { passive: true });
  },

  beforeUnmount() {
    if (this._onResize) window.removeEventListener("resize", this._onResize);
  },
};
</script>

<style>
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

/* Desktop 专用 class（如果以后要改，可以单独写） */
.conduct_cos--desktop {
  position: relative;
}

/* ===== Mobile：PROP 文本卡片 ===== */
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
  background: rgba(255, 255, 255, 0.75);
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}

.cos-mobile-header {
  margin-bottom: 10px;
}

.cos-mobile-title {
  font-size: 12px;
  letter-spacing: 0.2em;
  font-weight: 700;
  opacity: 0.75;
  text-transform: uppercase;
}

.cos-mobile-sub {
  font-size: 11px;
  letter-spacing: 0.16em;
  opacity: 0.65;
  margin-top: 3px;
}

.cos-mobile-section {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.5;
}

.cos-mobile-h {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 6px;
}

.cos-mobile-subtitle {
  font-size: 12px;
  font-weight: 700;
  margin: 4px 0 2px 0;
}

.cos-mobile-section p {
  margin: 0;
}

.cos-mobile-section ul {
  margin: 4px 0 0 16px;
  padding: 0;
}

.cos-mobile-section li {
  margin-bottom: 4px;
}
</style>
