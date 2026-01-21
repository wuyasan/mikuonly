<template>
  <div class='conduct_cos' style="position: absolute;height: 90vh;width: 90vh;left: 90vh;top: 3vh;">
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
              top:0;
              left:0;
              right:0;
              bottom:0;
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

      <!-- 原来的苹果 hack 可以删掉，也可以保留
      <div style="position:absolute; height: 200%; width:2px;" />
      -->
    </div>

    <div
        class="bottomline"
        style="position: absolute;width: 76.1vh;height: 0.1vh;
             background: rgb(255 255 255);left: 16vh;"
    ></div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'
import horizontalttl from './horizontalttl.vue'

//const text = ref('# Hello Editor');

export default {
  components: { horizontalttl },

  data() {
    return {
      shownQAID: false,
      isReadQuestion: false,
    }
  },

  computed: {
    ...mapState(useUserStore, ['stateDump']),

  },

  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername']),
  },

  mounted() { },

  updated() { },
}
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

.frosted-panel {
  background: rgba(0, 0, 0, 0.45);
  border-radius: 1.5vh;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0.8vh 2vh rgba(0, 0, 0, 0.4);
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
</style>
