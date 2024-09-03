const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Banner
ScrollReveal().reveal(".banner h4", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".banner h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".banner p", {
  ...scrollRevealOption,
  delay: 1000,
});

// aboutUs
ScrollReveal().reveal(".aboutMe h2", {
  ...scrollRevealOption,
  delay: 500,
});
//   ScrollReveal().reveal(".aboutMe p", {
//       ...scrollRevealOption,
//       delay: 1000,
//     });
//   ScrollReveal().reveal(".aboutMe button", {
//     ...scrollRevealOption,
//     delay: 1500,
//   });

// education
ScrollReveal().reveal(".education h2", {
  ...scrollRevealOption,
  delay: 500,
});

// certificate
ScrollReveal().reveal(".certificate h2", {
  ...scrollRevealOption,
  delay: 500,
});

// skills
ScrollReveal().reveal(".skills h2", {
  ...scrollRevealOption,
  delay: 500,
});

// tools
ScrollReveal().reveal(".tools h2", {
  ...scrollRevealOption,
  delay: 500,
});

// contact
ScrollReveal().reveal(".contact h2", {
  ...scrollRevealOption,
  delay: 500,
});
