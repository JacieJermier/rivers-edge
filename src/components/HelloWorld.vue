<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="header" style="display: flex; justify-content: center;">
      <img src="../assets/images/Rivers-Edge-Racing-logo-white.png" alt="Rivers Edge Racing" style="position: relative; z-index: 10; max-width: 250px; top: 30px;">
    </div>
    <div class="video-container" style="margin-top: -30px;">
      <video autoplay mute playsinline loop >
        <source src="../assets/videos/rivers-edge-video.mp4" />
      </video>
    </div>

    <div class="info-container" style="margin-top :1em;">
      <div class="text-container">
        <h1>Rivers Edge Racing <br />Now Open</h1>
        <p>
          We are thrilled to announce Rivers Edge Racing has now opened it’s
          doors! Our passion for racing has driven us to curate a selection of
          unique bikes and racing gear, ensuring that every enthusiast finds
          something that resonates with their racing spirit. We invite you to
          experience this firsthand and explore our diverse range.
        </p>
        <p>
          Located in: Shops at Fallen Timbers 3100 Main St #1200, Maumee, OH
          43537
        </p>
        <div class="button-container" style="display: flex;">
          <a
            class="cta-button"
            href="https://www.google.com/maps/dir//3100+Main+St+%231200,+Maumee,+OH+43537/@41.5474407,-83.788498,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x883c71026ce0de55:0xc74663ce8f2566de!2m2!1d-83.7060972!2d41.5474701?entry=ttu"
            style="margin-right: 0.5em"
          >
            Directions
          </a>
          <a
            class="cta-button"
            href="tel:+14197753343"
            style="margin-left: 0.5em"
          >
            Contact
          </a>
        </div>
      </div>
      <div class="image-container" style="display: flex; align-items: center;">
        <img
          src="../assets//images/RER-landing-image.jpeg"
          alt="three images of motorcycles"
        />
      </div>
    </div>
    <div class="social-icons">
      <a href="https://www.facebook.com/profile.php?id=100090918243835"
        ><img src="../assets/images/facebook-white.png" alt="Facebook"
      /></a>
      <a href="https://www.instagram.com/rivers_edge_racing/"
        ><img src="../assets/images/instagram-white.png" alt="Instagram"
      /></a>
      <a href="https://www.tiktok.com/@rivers_edge_racing?_t=8dujULvjSwg&_r=1"
        ><img src="../assets/images/tiktok-white.png" alt="TikTok"
      /></a>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  margin: 0 !important;
}
.layout {
  position: relative;
  width: 100%;
  height: 100%;
}
.info-container {
  position: absolute;
  top: 50%;
  right: 0;
  width: 85%;
  max-height: 600px;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  border-left: 5px solid rgba(255, 255, 255, 0.6);
  display: flex;
  overflow: hidden;
  padding: 1em 0 1em 1em;
  height: auto;
}
.text-container {
  padding: 10px;
  flex: 1;
  /* overflow: hidden;  */
}
.image-container {
  flex: 2;
  overflow: hidden;
}
.image-container img {
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
}
.text-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em 2em 1em 1em;
  color: white;
}
h1 {
  font-size: 2rem;
  margin: 0 0 0.5em 0;
}
p {
  margin: 0 0 0.5em 0;
}
.info {
  padding: 20px;
}
.video-container {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.video-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  pointer-events: none;
  z-index: 1;
}
video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
}
.button-container {
  margin-top: 1em;
}
.cta-button {
  background: transparent;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  padding: 0.5em 3em;
}
.social-icons {
  position: absolute;
  bottom: 10px; /* Adjust as needed */
  left: 50%; 
  transform: translateX(-50%); /* Center the icons horizontally */
  z-index: 2; /* To overlay the video but can adjust if it's not above or below as required */
  display: flex;
  gap: 20px; /* Space between the icons */
  color: white;
}
.social-icons a img {
  width: 32px; /* Adjust as needed */
  height: auto;
  color: white;
}
svg path {
    fill: white;
}
@media (max-width: 900px) {
  .image-container {
    display: none !important;
  }
  .cta-button {
  padding: 0.5em 1em;
}
}

</style>
