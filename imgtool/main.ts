// main.ts
import sharp from "sharp";

export interface RGB { r: number; g: number; b: number; }

export async function extractAlphaTwoPass(
  imgOnWhitePath: string,
  imgOnBlackPath: string,
  outputPath: string
): Promise<void> {
  const img1 = sharp(imgOnWhitePath);
  const img2 = sharp(imgOnBlackPath);

  // Ensure we are working with raw RGBA pixel data
  const { data: dataWhite, info: meta } = await img1
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data: dataBlack, info: meta2 } = await img2
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Sanity check dimensions match
  if (meta.width !== meta2.width || meta.height !== meta2.height || meta.channels !== meta2.channels) {
    throw new Error(
      `Dimension mismatch: white=${meta.width}x${meta.height}x${meta.channels}, ` +
      `black=${meta2.width}x${meta2.height}x${meta2.channels}`
    );
  }
  if (dataWhite.length !== dataBlack.length) {
    throw new Error(`Buffer length mismatch: white=${dataWhite.length}, black=${dataBlack.length}`);
  }

  const outputBuffer = Buffer.alloc(dataWhite.length);

  // Distance between white (255,255,255) and black (0,0,0)
  const bgDist = Math.sqrt(3 * 255 * 255);

  for (let i = 0; i < meta.width * meta.height; i++) {
    const offset = i * 4;

    const rW = dataWhite[offset];
    const gW = dataWhite[offset + 1];
    const bW = dataWhite[offset + 2];

    const rB = dataBlack[offset];
    const gB = dataBlack[offset + 1];
    const bB = dataBlack[offset + 2];

    // Distance between observed colors on white vs black background
    const pixelDist = Math.sqrt(
      (rW - rB) * (rW - rB) +
      (gW - gB) * (gW - gB) +
      (bW - bB) * (bW - bB)
    );

    // alpha = 1 - (distance / max_distance)
    let alpha = 1 - (pixelDist / bgDist);
    alpha = Math.max(0, Math.min(1, alpha));

    // Recover color from the black composite:
    // C_black = alpha * F + (1-alpha) * 0  =>  F = C_black / alpha
    let rOut = 0, gOut = 0, bOut = 0;
    if (alpha > 1e-6) {
      rOut = rB / alpha;
      gOut = gB / alpha;
      bOut = bB / alpha;
    }

    // Clamp and write
    outputBuffer[offset]     = Math.round(Math.max(0, Math.min(255, rOut)));
    outputBuffer[offset + 1] = Math.round(Math.max(0, Math.min(255, gOut)));
    outputBuffer[offset + 2] = Math.round(Math.max(0, Math.min(255, bOut)));
    outputBuffer[offset + 3] = Math.round(Math.max(0, Math.min(255, alpha * 255)));
  }

  await sharp(outputBuffer, {
    raw: { width: meta.width, height: meta.height, channels: 4 },
  })
    .png()
    .toFile(outputPath);
}

// --------------------
// CLI entrypoint
// --------------------
async function main() {
  const argv = process.argv.slice(2);
  if (argv.length < 3) {
    console.error("Usage: npx tsx main.ts <img_on_white.png> <img_on_black.png> <out.png>");
    console.error("Example: npx tsx main.ts a_miku.png b_miku.png transparent_miku_angry.png");
    process.exit(1);
  }

  const [imgOnWhite, imgOnBlack, outPath] = argv;

  // Optional: fail early with a nicer error if inputs don't exist
  try {
    await sharp(imgOnWhite).metadata();
  } catch (e) {
    console.error(`Cannot read "${imgOnWhite}" (is the path correct, and is it a valid image?)`);
    throw e;
  }
  try {
    await sharp(imgOnBlack).metadata();
  } catch (e) {
    console.error(`Cannot read "${imgOnBlack}" (is the path correct, and is it a valid image?)`);
    throw e;
  }

  await extractAlphaTwoPass(imgOnWhite, imgOnBlack, outPath);
  console.log(`Wrote: ${outPath}`);
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});

