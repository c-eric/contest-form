    let left_armAnim = gsap.to("#left_arm", {
    duration: 0.8,
    rotation: 1,
    svgOrigin: "100 100",
    repeat: -1,
    ease: Linear.easeNone,
    yoyo: true,
  }
);
    let right_armAnim = gsap.to("#right_arm", {
    duration: 0.8,
    rotation: -0.8,
    svgOrigin: "20 50",
    repeat: -1,
    ease: Linear.easeNone,
    yoyo: true,
  }
);
    let left_legAnim = gsap.to("#left_leg", {
    duration: 0.8,
    rotation: 10,
    svgOrigin: "199 266",
    repeat: -1,
    ease: Linear.easeNone,
    yoyo: true,
  }
);
    let right_legAnim = gsap.to("#right_leg", {
    duration: 0.8,
    rotation: 10,
    svgOrigin: "240 264",
    repeat: -1,
    ease: Linear.easeNone,
    yoyo: true,
  }
);
    let antennaAnim = gsap.to("#antenna", {
    duration: 0.6,
    rotation: 1,
    svgOrigin: "240 264",
    repeat: -1,
    ease: Linear.easeNone,
    yoyo: true,
  }
);
