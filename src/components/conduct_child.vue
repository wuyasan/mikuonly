<template>
  <div class='conduct_child' style="position: absolute;height: 90vh;width: 90vh;left: 90vh;top: 5vh;">
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
          class="age-policy-text "
          style="position:absolute;inset:0;
              top:0;
              left:0;
              right:0;
              bottom:0;
              margin:2vh 3vh 4vh 3vh;padding:3vh 4vh 6vh 4vh;
               color:white;font-size:1.6vh;line-height:2.5vh;">

        <!-- Admission Age Rules -->
        <div style="font-family:font5;font-size:2vh;font-weight:900;margin-bottom:1vh;">
          Admission Age Rules
        </div>
        <div style="margin-bottom:2vh;">
          This is an <span style="font-weight:900;">All Ages</span> event.
          There is <span style="font-weight:900;">no adult content</span>,
          and <span style="font-weight:900;">no alcohol</span> will be served.
        </div>

        <!-- Minors & Supervision -->
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
            <span style="font-weight:900;">if permitted by the Parent</span>. No need to be permitted by the Organizer. .
            However, it is strongly recommended that a parent or guardian
            accompany the minor or remain nearby or reachable.
          </li>
          <li style="margin-bottom:1vh;">
            The Organizer <span style="font-weight:900;">does not</span> assume custodial
            responsibility for minors. Parents or guardians are fully responsible
            for the minor’s conduct, safety, and personal belongings.
          </li>
        </ul>

        <!-- ID Check & Wristbands -->
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

        <!-- Safety & Removal -->
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

      <!-- 之前给苹果设备的 hack 可以保留，也可以删掉 -->
      <!-- <div style="position:absolute; height: 200%; width:2px;" /> -->
    </div>

    <div class="bottomline"
         style="position: absolute;width: 76.1vh;height: 0.1vh;background: rgb(255 255 255);left: 16vh;">
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'
import horizontalttl from './horizontalttl.vue'
import wave from './wave.vue'

//const text = ref('# Hello Editor');

export default {
  components: { horizontalttl, wave },

  data() {
    return {
      shownQAID: false,
      isReadQuestion: false,
    }
  },

  computed: {
    ...mapState(useUserStore, ['stateDump']),

    compileLastTurns() { },
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
