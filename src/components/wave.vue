<template>
  <div
    :style="{
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      ...cssVars,
    }"
  >
    <svg
      viewBox="0 0 2000 100"
      preserveAspectRatio="none"
      shape-rendering="auto"
      :style="{
        position: 'absolute',
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'calc(var(--period) * 2)',
        height: 'calc(2 * var(--amp))',
        overflow: 'visible',
        pointerEvents: 'none',
      }"
    >
      <g
        :style="{
          fill: 'none',
          stroke: 'var(--waveColor)',
          opacity: 'var(--waveOpacity)',
          strokeWidth: 'var(--stroke)',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          vectorEffect: 'non-scaling-stroke', // constant thickness on screen
        }"
      >
        <!-- This inner <g> is what we translate. Two copies => seamless loop. -->
        <g>
          <path :d="pathD"></path>
          <path :d="pathD" transform="translate(1000 0)"></path>

          <!-- Move by exactly 1 period in viewBox units (1000) forever -->
          <animateTransform
            v-if="durationSec"
            attributeName="transform"
            type="translate"
            :dur="durationSec + 's'"
            repeatCount="indefinite"
            values="0 0; -1000 0"
            keyTimes="0;1"
            calcMode="linear"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "InfiniteSineWave",

  props: {
    periodVw: { type: Number, default: 140 },        // >=100 => 100vw shows < 1 period
    amplitudeVh: { type: Number, default: 6 },       // peak offset from center in vh
    thicknessVw: { type: Number, default: 0.18 },    // stroke thickness in vw
    speedVwPerSec: { type: Number, default: 18 },    // horizontal speed (vw/sec)
    opacityPct: { type: Number, default: 70 },       // 0..100 (opacity)
    color: { type: String, default: "#ffffff" },     // optional
    samples: { type: Number, default: 220 },         // more = smoother
  },

  data() {
    return {
      pathD: "",
    };
  },

  computed: {
    durationSec() {
      const p = Number(this.periodVw);
      const s = Number(this.speedVwPerSec);
      if (!isFinite(p) || !isFinite(s) || p <= 0 || s <= 0) return null;
      // time = distance / speed, both in vw units => seconds
      return p / s;
    },

    cssVars() {
      const op = Math.max(0, Math.min(100, Number(this.opacityPct))) / 100;
      return {
        "--period": `${this.periodVw}vw`,
        "--amp": `${this.amplitudeVh}vh`,
        "--stroke": `${this.thicknessVw}vw`,
        "--waveOpacity": String(op),
        "--waveColor": this.color,
      };
    },
  },

  watch: {
    samples: {
      immediate: true,
      handler() {
        this.pathD = this.buildSinePath();
      },
    },
  },

  methods: {
    buildSinePath() {
      // One period spans x=[0..1000] in viewBox units. We'll render a sine centered at y=50 with amplitude=50.
      const W = 1000;
      const H = 100;
      const midY = H / 2;
      const amp = H / 2;

      const n = Math.max(32, Math.floor(this.samples)); // safety clamp
      const pts = [];

      for (let i = 0; i <= n; i++) {
        const t = i / n;           // 0..1
        const x = W * t;
        const y = midY - amp * Math.sin(2 * Math.PI * t);
        pts.push([x, y]);
      }

      // Use a dense polyline path (looks very smooth at typical sizes)
      let d = `M${pts[0][0].toFixed(3)},${pts[0][1].toFixed(3)}`;
      for (let i = 1; i < pts.length; i++) {
        d += ` L${pts[i][0].toFixed(3)},${pts[i][1].toFixed(3)}`;
      }
      return d;
    },
  },
};
</script>
