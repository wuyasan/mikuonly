<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/store";
import mainMenu from '../components/mainMenu.vue'; // Adjust the path if necessary
import mainMenu2 from '../components/mainMenu2.vue'; // Adjust the path if necessary
import home from './home.vue'; // Adjust the path if necessary
import infopage from './infopage.vue';
import schedulepage from './schedulePage.vue';
import conduct from './conduct.vue';

//const text = ref('# Hello Editor');

export default {
  components: {
    mainMenu, home, infopage, mainMenu2, schedulepage, conduct
  },

  data() {
    return {
      
      
    };
  },

  computed: {
    ...mapState(useUserStore, ["stateDump", 'currentwindow']),


  },

  methods: {
    ...mapActions(useUserStore, ["login"]),
    setwindow() {
      this.currentWindow='schedule'
  },




  },

  mounted() {




  },

  updated() {
  },


};
</script>
<style>

</style>
<template>
  <div class='main' style="position:absolute;height:100%;width:100%;overflow:hidden; ">
    <div v-if='false' class="init">
      <div class="webinit" style="font-family: monospace; background: rgb(255, 255, 255); padding: 2%; width: 80%;">
        <div style="font-size:160%;font-weight:bold;margin-bottom:2%;"> Index of /mikuOnly </div>
        <hr>
        <table style="width:100%;border-collapse:collapse;font-size:90%;">
          <tbody>
            <tr>
              <th style="text-align:left;padding-bottom:1%;">Name</th>
              <th style="text-align:left;padding-bottom:1%;">Last modified</th>
              <th style="text-align:left;padding-bottom:1%;">Size</th>
              <th style="text-align:left;padding-bottom:1%;">Description</th>
            </tr><!-- Parent Directory -->
            <tr>
              <td style="padding:0.5% 0%;"><a href="#" style="text-decoration:none;color:#0000ee;">📁 Parent Directory</a></td>
              <td>-</td>
              <td>-</td>
              <td></td>
            </tr><!-- cake.prts -->
            <tr>
              <td style="padding:0.5% 0%;"><a href="#" style="text-decoration:none;color:#0000ee;">cake.prts</a></td>
              <td>06-Dec-2016 16:15</td>
              <td>4.2K</td>
              <td></td>
            </tr><!-- main.efi -->
            <tr>
              <td style="padding:0.5% 0%;"><a href="#" style="text-decoration:none;color:#0000ee;">main.efi</a></td>
              <td>06-Dec-2016 16:15</td>
              <td>18K</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div style="position:absolute;bottom:7%;width:77.6%;">
          <hr style="position:relative;top:-10%;width:100%;"> mikuOnly PRTS 6.5.0-35-generic #35~22.04.1-PRTS SMP PREEMPT_DYNAMIC Tue May 7 09:00:52 UTC 2 x86_64 x86_64 x86_64 MikuOnly/PRTS
        </div>
      </div>
      <div class="transitionInit">
        <div style="position: absolute; font-size: 5vw; color: black; bottom: 27%; right: 21%; font-weight: 800; font-family: font4;">Initialising _</div>
        <div style="position: absolute; left: 4%; top: 45%; color: black; width: 40%; font-size: 0.3vw; font-family: font1;"> "Miku only" likely refers to the virtual pop star Hatsune Miku, a 16-year-old turquoise-haired anime character who is actually a Vocaloid software voicebank, a digital persona for fan-created music and concerts (Miku Expo) featuring her iconic dancing avatar on screens, allowing fans to imagine her as anything, creating a vast, adaptable canon of songs, games (Colorful Stage!), and media. Key Aspects of Hatsune Miku: Virtual Idol: She's a digital persona, a 16-year-old girl with long turquoise pigtails, developed by Crypton Future Media. Vocaloid Software: She's a voicebank for the Vocaloid synthesis software, letting users create songs with her voice. Fan-Driven Universe: Her "canon" is incredibly broad, encompassing countless fan-made songs, games, and appearances, making her highly customizable. Concerts (Miku Expo): She performs live, projected as a 2D animation on glass screens, singing popular user-created songs. "39" (Miku): The number 39 (san-kyu) is often associated with her as a "thank you" (san-kyu) in Japanese internet slang, notes Wikipedia, which is clever wordplay on her name. "Miku only" likely refers to the virtual pop star Hatsune Miku, a 16-year-old turquoise-haired anime character who is actually a Vocaloid software voicebank, a digital persona for fan-created music and concerts (Miku Expo) featuring her iconic dancing avatar on screens, allowing fans to imagine her as anything, creating a vast, adaptable canon of songs, games (Colorful Stage!), and media. Key Aspects of Hatsune Miku: Virtual Idol: She's a digital persona, a 16-year-old girl with long turquoise pigtails, developed by Crypton Future Media. Vocaloid Software: She's a voicebank for the Vocaloid synthesis software, letting users create songs with her voice. Fan-Driven Universe: Her "canon" is incredibly broad, encompassing countless fan-made songs, games, and appearances, making her highly customizable. Concerts (Miku Expo): She performs live, projected as a 2D animation on glass screens, singing popular user-created songs. "39" (Miku): The number 39 (san-kyu) is often associated with her as a "thank you" (san-kyu) in Japanese internet slang, notes Wikipedia, which is clever wordplay on her name.</div>
        <div style="position: absolute; right: 4%; top: 63%; color: black; width: 21%; font-size: 0.3vw; font-family: font1;"> "Miku only" likely refers to the virtual pop star Hatsune Miku, a 16-year-old turquoise-haired anime character who is actually a Vocaloid software voicebank, a digital persona for fan-created music and concerts (Miku Expo) featuring her iconic dancing avatar on screens, allowing fans to imagine her as anything, creating a vast, adaptable canon of songs, games (Colorful Stage!), and media. Key Aspects of Hatsune Miku: Virtual Idol: She's a digital persona, a 16-year-old girl with long turquoise pigtails, developed by Crypton Future Media. Vocaloid Software: She's a voicebank for the Vocaloid synthesis software, letting users create songs with her voice. Fan-Driven Universe: Her "canon" is incredibly broad, encompassing countless fan-made songs, games, and appearances, making her highly customizable. Concerts (Miku Expo): She performs live, projected as a 2D animation on glass screens, singing popular user-created songs. "39" (Miku): The number 39 (san-kyu) is often associated with her as a "thank you" (san-kyu) in Japanese internet slang, notes Wikipedia, which is clever wordplay on her name. "Miku only" likely refers to the virtual pop star Hatsune Miku, a 16-year-old turquoise-haired anime character who is actually a Vocaloid software voicebank, a digital persona for fan-created music and concerts (Miku Expo) featuring her iconic dancing avatar on screens, allowing fans to imagine her as anything, creating a vast, adaptable canon of songs, games (Colorful Stage!), and media. Key Aspects of Hatsune Miku: Virtual Idol: She's a digital persona, a 16-year-old girl with long turquoise pigtails, developed by Crypton Future Media. Vocaloid Software: She's a voicebank for the Vocaloid synthesis software, letting users create songs with her voice. Fan-Driven Universe: Her "canon" is incredibly broad, encompassing countless fan-made songs, games, and appearances, making her highly customizable. Concerts (Miku Expo): She performs live, projected as a 2D animation on glass screens, singing popular user-created songs. "39" (Miku): The number 39 (san-kyu) is often associated with her as a "thank you" (san-kyu) in Japanese internet slang, notes Wikipedia, which is clever wordplay on her name.</div>
      </div>
      <div class="prtsBootUp" style="background: rgba(0, 0, 0, 0.79); position: absolute; width: 100%; height: 100%; top: 0px; backdrop-filter: blur(10px);">
        <div v-if='false' class='title' style="position: absolute;width: 39%;height: 12.3vw;background: white;left: 40%;top: 8.8vw;filter: drop-shadow(rgb(100, 100, 100) 16px 14px 8px);">
          <div v-if="false" style="position: absolute;width: 39%;height: 30%;color: rgb(0, 0, 0);left: 41.1%;top: 5.3vw;font-size: 5vw;font-family: font4;">Initing</div>
          <div style="position: absolute;width: 39%;height: 8vw;color: rgb(0, 0, 0);left: 37.5%;top: -2.1vw;font-size: 7vw;font-family: font2;">MIKU</div>
          <div v-if="false" style="position: absolute;width: 39%;height: 2vw;color: rgb(255, 254, 254);left: 65.1%;top: 9.5vw;font-size: 6vw;font-family: font5;">MIKU</div>
          <div style="position: absolute;width: 39%;height: 30%;color: rgb(0, 0, 0);left: 38%;top: 3.1vw;font-size: 6.6vw;font-family: font2;">ONLY</div>
          <div v-if="false" style="position: absolute;width: 39%;height: 30%;color: rgb(255, 251, 251);left: 22.4%;top: 13.7vw;font-size: 6.6vw;font-family: font5;">ONLY</div>
          <div style="position: absolute;width: 39%;height: 30%;color: rgb(0, 0, 0);left: 3%;top: -4.8vw;font-size: 13.4vw;font-family: font5;">01</div>
          <div style="position: absolute;width: 95%;height: 30%;color: rgb(0, 0, 0);left: 5.5%;top: 10.6vw;font-size: 1.2vw;font-family: font5;letter-spacing: 1.1vw;">N E W Y O R K 2 0 2 6</div>
          <div style="position: absolute;width: 9%;height: 1vw;background: rgb(0, 0, 0);left: 2.2%;top: 9.6vw;font-size: 13.4vw;font-family: font5;color: white;overflow: hidden;">
            <div style="position: absolute; top: -1434%; left: 10%;">0</div>
          </div>
        </div>
        <div class="progressbar" style="position:absolute;height:4vw;width:100vw;bottom:23vh;font-size:0.8vw;">
          <div class="txtDesc" style="position:absolute;left:1.6%;bottom:80%;font-family:font2;color:#ffffff29;">Loading: </div>
          <div class="txtDesc" style="position:absolute;left:1.6%;bottom:66%;font-family:font2;color:#ffffff29;">Loading: </div>
          <div class="txtDesc" style="position:absolute;left:6.6%;bottom:66.8%;font-family:font11;color:#ffffff;font-size:1.1vw;">INFORMATION</div>
          <div class="txtDesc" style="position:absolute;left: 1.8%;bottom:30.8%;font-family:font5;color:#ffffffd4;font-size:7.6vw;">98</div>
          <div class="txtDesc" style="position:absolute;left: 10.2%;bottom:49.8%;font-family:font5;color:#ffffff6b;font-size:5.6vw;">%</div>
          <div class="txtDesc" style="position:absolute;left:1.6%;bottom:73%;font-family:font2;color:white;">Loading: </div>
          <div style="position:absolute;width:96.3vw;height:0.1vw;top:45%;background:white;left:1.6%;filter:drop-shadow(rgb(100, 100, 100) 8px 9px 2.2px);"></div>
        </div>
      </div>
    </div>
    
    <home v-if="false" />
    
    <infopage v-if='currentwindow=="info" ' />
    <schedulepage v-if='currentwindow=="schedule" ' />
    <conduct v-if='currentwindow=="conduct" ' />
    <mainMenu v-if="false" />
    <mainMenu2/>
  </div>
</template>