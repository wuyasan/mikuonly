<template>
  <div style="position: absolute;background: rgba(241, 241, 241, 0.6);height: 200%;width: 81vh;right: 15vh;top: -64%;">
    <horizontalttl />
    <div class="whopanel" style="position: absolute; background: rgba(241, 241, 241, 0.6); height: 100%; right: 0; top: 0; overflow: hidden;">
      <!-- 背景层 -->
      <img src="/city.jpg" style="position:absolute;left:0%;bottom:0vh;width:100%;" />
      <div style="position:absolute;width:100%;height:80%;background:#ffffff;top:15%;overflow:hidden;"></div>
      <div style="position:absolute;width:100%;height:66.3%;background:#ffffff8c;top:19%;overflow:hidden;"></div>
      <div style="position:absolute;width:100%;height:66.3%;background:#ffffff8c;top:23%;overflow:hidden;"></div>
      <img src="/team.png" style="position:absolute;width:79vh;right:-15.4%;top:40%;mix-blend-mode:multiply;opacity:0.1;">

      <!-- 顶部标题条 -->
      <div class="windowHandle" style="position:absolute;width:100%;height:3%;background:white;top:0%;overflow:hidden;">
        <div style="position:absolute;top:-25%;color:#00000026;font-family:font9;font-size:2.5vh;font-weight:900;">W H O</div>
      </div>

      <div class="header1" style="position:absolute;width:100%;height:3%;top:4%;">
        <div style="position:absolute;top:-25%;color:#0000009e;font-family:font5;font-size:1.2vh;left:3%;">INFORMATION DISTRIBUTED BY</div>
        <div style="position:absolute;top:-25%;color:#0000009e;font-family:font5;font-size:1.2vh;right:3%;">MIKU ONLY TEAM</div>
        <div style="position:absolute;top:267%;color:#0000009e;font-family:font5;font-size:1.2vh;right:3%;">LAST UPDATED</div>
        <div style="position:absolute;top:27%;color:#717171;font-family:font9;font-size:4.3vh;left:2.8%;letter-spacing:5.6vh;width:134%;">GUEST LIST</div>
      </div>
      <!--      <div class="glance" style="position:absolute;width:100%;height:3%;top:20%;">-->
      <!--        <div style="position:absolute;top:0%;background:#f2a3ef;font-family:font5;font-size:1.2vh;left:3%;width:6%;height:146%;filter:drop-shadow(0.6vh 6px 5.7px rgba(100,100,100.01));"></div>-->
      <!--        <div style="position:absolute;top:-66%;color:#717171;font-family:font9;font-size:4.3vh;left:10.8%;width:105%;">???????</div>-->
      <!--      </div>-->
      <!--      <div class="auxInfo" style="position:absolute;width:100%;height:3%;top:36%;"><div class="expboard" style="position:absolute;left: 8vh;top:-2vh;height:16vh;width:37vh;">-->
      <!--        <div style="position:absolute;left:-19%;top:1%;height:7vh;width:7vh;clip-path:polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);background:#b3b3b3;margin:auto;"></div>-->
      <!--        <div style="position:absolute;left:-9%;top:35%;height:7vh;width:7vh;clip-path:polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);background:#b3b3b3;margin:auto;opacity:0.5;"></div>-->
      <!--        <div style="position:absolute;left:1%;top:1%;height:7vh;width:7vh;clip-path:polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);background:#b3b3b3;margin:auto;opacity:0.25;"></div>-->
      <!--        <div style="position:absolute;left:11%;top:35%;height:7vh;width:7vh;clip-path:polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);background:#b3b3b3;margin:auto;"></div>-->
      <!--        <div style="position:absolute;left:21%;top:1%;height:7vh;width:7vh;clip-path:polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);background:#b3b3b3;margin:auto;opacity:0.5;"></div>-->
      <!--        <div style="position:absolute;left:31%;top:35%;height:7vh;width:7vh;clip-path:polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);background:#b3b3b3;margin:auto;opacity:0.25;"></div>-->
      <!--        <div style="position:absolute;left:40.9%;top:1%;height:7vh;width:7vh;clip-path:polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);background:#b3b3b3;margin:auto;"></div>-->
      <!-
      <!-- 右侧 Guest 列表 -->
      <div
          class="auxInfo"
          style="
                  position:absolute;
                  top:16%;          /* 原来是 36% 或 26%，往上提一点 */
                  right:6vh;
                  width:48vh;
                  z-index: 5;
                "
      >
        <div
            class="guest-list"
            style="
                    display:grid;
                    grid-template-columns:repeat(3, minmax(0, 1fr));
                    column-gap:20vh;
                    row-gap:6vh;
                    justify-items:end;
                    align-items:start;
                  "
        >
          <div
              v-for="guest in guests"
              :key="guest.id"
              class="guestCard"
              style="
                      display:flex;
                      align-items:center;
                      justify-content:flex-end;
                      width:100%;
                    "
          >
            <!-- 文本 -->
            <div style="text-align:right; margin-left:2vh;">
              <!-- 头像 -->
              <img
                  :src="guest.avatar"
                  :alt="guest.name + ' avatar'"
                  style="
                        width:15vh;
                        height:15vh;
                        border-radius:50%;
                        object-fit:cover;
                        box-shadow:0 0.6vh 1.4vh rgba(0,0,0,0.45);
                        position:relative;
                        z-index: 6;
                      "
              />
              <div
                  :style="{
                              color: '#3d3d3d',
                              fontFamily: 'font9',
                              fontSize: getNameFontSize(guest.name),
                              filter: 'drop-shadow(0.4vh 0.8vh 0.8vh rgba(0,0,0,0.3))'
                            }"
              >
                {{ guest.name }}
              </div>


              <div
                  style="
                          color:#000000;
                          font-family:font9;
                          font-size:1.4vh;
                          letter-spacing:0.5vh;
                          opacity:0.9;
                        "
              >
                {{ guest.role }}
              </div>

              <div
                  style="
                          margin-top:0.4vh;
                          font-family:font9;
                          font-size:2vh;
                        "
              >
                <a
                    class="guest-link"
                    :href="`https://www.instagram.com/${guest.insta}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="color:#2b6fff; text-decoration:underline;"
                >
                  @{{ guest.insta }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div style="position:absolute;width:100%;height:0.3%;background:#ffffff;bottom:0%;overflow:hidden;"></div>
      <div class="glance" style="position:absolute;height:63%;color:#00000014;top: 22%;transform:rotateZ(90deg);font-family:font9;font-size:13vh;left: -42%;">WE ARE</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/store'
import horizontalttl from './horizontalttl.vue'

export default {
  components: { horizontalttl },

  data() {
    return {
      shownQAID: false,
      isReadQuestion: false,

      guests: [
        {
          id: 'mikusagi01',
          name: 'mikusagi01',
          role: 'GUEST',
          insta: 'mikusagi01',
          avatar: '/mikusagi01.png',
        },
        {
          id: 'miraidol_official',
          name: 'miraidol_official',
          role: 'GUEST',
          insta: 'miraidol_official',
          avatar: '/miraidol_official.jpg',
        },
        {
          id: 'humanwannabes',
          name: 'humanwannabes',
          role: 'GUEST',
          insta: 'humanwannabes',
          avatar: '/humanwannabes.jpg',
        },
        {
          id: 'vvbv_anwei',
          name: 'vvbv_anwei',
          role: 'GUEST',
          insta: 'vvbv_anwei',
          avatar: '/vvbv_anwei.jpg',
        },
        {
          id: 'huluwa_orzlaplace',
          name: 'huluwa_orzlaplace',
          role: 'GUEST',
          insta: 'huluwa_orzlaplace',
          avatar: '/huluwa_orzlaplace.jpg',
        },
        {
          id: 'suyinsama',
          name: 'suyinsama',
          role: 'GUEST',
          insta: 'suyinsama',
          avatar: '/suyinsama.jpg',
        },
      ],
    }
  },

  computed: {
    ...mapState(useUserStore, ['stateDump']),
    compileLastTurns() {},
  },

  methods: {
    ...mapActions(useUserStore, ['sendchat', 'getUsername']),

    getNameFontSize(name) {
      const len = name.length
      const size = 3.8 - len * 0.1
      return Math.max(1.5, size) + 'vh'
    }
  },
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

@keyframes bottomline {
  0% {
    opacity: 0;
    bottom: 3%;
  }
  100% {
    opacity: 1;
    bottom: -2%;
  }
}

.whopanel {
  animation-name: whopanel;
  animation-delay: 0.8s;
  animation-duration: 0.7s;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(1, 0.02, 0.17, 1);
  animation-fill-mode: forwards;
}

@keyframes whopanel {
  0% {
    opacity: 0;
    width: 90%;
  }
  100% {
    opacity: 1;
    width: 100%;
  }
}

.guest-link {
  color: #2b6fff;
  text-decoration: underline;
}

.guest-link:hover {
  color: #1a4fd9;
}
</style>
