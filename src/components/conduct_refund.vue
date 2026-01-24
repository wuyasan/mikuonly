<template>
  <div
      class="conduct_refund"
      :class="isMobile ? 'conduct_refund--mobile' : 'conduct_refund--desktop'"
  >
    <!-- ================= Desktop：保持原来的布局 ================= -->
    <template v-if="!isMobile">
      <div
          class="conduct_refund-desktop-root"
          style="position: absolute;height: 90vh;width: 90vh;left: 90vh;top: 3vh;"
      >
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
            REFUND<br>POLICY
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
              class="refund-policy-text"
              style="position:absolute;inset:0;
                   margin:2vh 3vh 4vh 3vh;
                   padding:3vh 4vh 6vh 4vh;
                   color:white;
                   font-size:1.6vh;
                   line-height:2.5vh;"
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
                For any questions, please contact us via our official email
                info@ny-miku-only.com or official social media channels.
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
      <div class="refund-mobile-card">
        <div class="refund-mobile-header">
          <div class="refund-mobile-title">REFUND POLICY</div>
          <div class="refund-mobile-sub">MIKU ONLY NYC 2026</div>
        </div>

        <div class="refund-mobile-section">
          <div class="refund-mobile-h">Ticket Policy</div>
          <ul>
            <li>All ticket sales are final.</li>
            <li>
              Once purchased, tickets are
              <strong>non-refundable and non-transferable</strong> under any
              circumstances, including but not limited to scheduling conflicts,
              illness, or personal emergencies.
            </li>
            <li>
              Please review all event details carefully (date, location, admission
              rules, and policies) before completing your purchase.
            </li>
            <li>
              If the event is canceled by the Organizer, instructions regarding
              refunds or rescheduling will be announced separately.
            </li>
            <li>
              By purchasing a ticket, you acknowledge that you have read,
              understood, and agreed to this policy.
            </li>
            <li>
              Questions? Please contact us via
              <strong>info@ny-miku-only.com</strong> or official social media.
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

.content {
  animation-name: content;
  animation-delay: 0.8s;
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

@keyframes content {
  0% {
    opacity: 0;
    width: 90%;
  }

  100% {
    opacity: 1;
    width: 100%;
  }
}

/* ===== Mobile：REFUND 文本卡片 ===== */
.conduct_refund--mobile {
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

.refund-mobile-card {
  background: rgba(255, 255, 255, 0.75);
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}

.refund-mobile-header {
  margin-bottom: 10px;
}

.refund-mobile-title {
  font-size: 12px;
  letter-spacing: 0.2em;
  font-weight: 700;
  opacity: 0.75;
  text-transform: uppercase;
}

.refund-mobile-sub {
  font-size: 11px;
  letter-spacing: 0.16em;
  opacity: 0.65;
  margin-top: 3px;
}

.refund-mobile-section {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.5;
}

.refund-mobile-h {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 6px;
}

.refund-mobile-section p {
  margin: 0;
}

.refund-mobile-section ul {
  margin: 4px 0 0 16px;
  padding: 0;
}

.refund-mobile-section li {
  margin-bottom: 4px;
}
</style>
