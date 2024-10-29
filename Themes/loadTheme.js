// Set square scaling based on screen size
function setSquareScale() {
  const screenSize = window.innerWidth;
  const squareScale = screenSize / 1200;
  document.documentElement.style.setProperty("--square-scale", squareScale);
}
setSquareScale();
window.addEventListener("resize", setSquareScale);

// Initialize VIP-CODE if it doesn't exist
if (sessionStorage.getItem("VIP-CODE") === null) {
  sessionStorage.setItem("VIP-CODE", "false");
}

// Fetch saved theme and particlesEnabled from localStorage
const savedTheme = localStorage.getItem("theme") || "dark"; // Default theme
const particlesEnabled = localStorage.getItem("particlesEnabled") === "true"; // Particles toggle
const vipCode = sessionStorage.getItem("VIP-CODE") === "true"; // VIP status

// Preload theme before the page renders
document.write(
  `<link id="theme-link" rel="stylesheet" href="Themes/${savedTheme}-theme.css">`
);
//const link = document.getElementById("theme-link");

document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "dark"; // Default theme

  const particlesEnabled = localStorage.getItem("particlesEnabled") === "true";
  const vipCode = sessionStorage.getItem("VIP-CODE");

  const particlesConfig = localStorage.getItem("particlesConfig");
  const customBackgroundImage = localStorage.getItem("customBackgroundImage");
  const hasCustomBackground = localStorage.getItem("hasCustomBackground");

  // Apply the custom theme if it's selected
  if (savedTheme === "custom") {
    //const settings = JSON.parse(customThemeSettings);

    document.documentElement.style.setProperty(
      "--bg-color",
      localStorage.getItem("--bg-color")
    );

    document.documentElement.style.setProperty(
      "--square-color",
      localStorage.getItem("--square-color")
    );

    document.documentElement.style.setProperty(
      "--main-color",
      localStorage.getItem("--main-color")
    );

    document.documentElement.style.setProperty(
      "--secondary-color",
      localStorage.getItem("--secondary-color")
    );

    document.documentElement.style.setProperty(
      "--font-color",
      localStorage.getItem("--font-color")
    );

    document.documentElement.style.setProperty(
      "--slider-color",
      localStorage.getItem("--slider-color")
    );

    if (customBackgroundImage && hasCustomBackground === "true") {
      document.body.style.backgroundImage = `url(${customBackgroundImage})`;
      applyCustomBackgroundImage();
    }

    if (hasCustomBackground === "false") {
      //const bgImage = document.getElementById("background-image");
      //bgImage.style.visibility = "hidden";
      //-----------------------------------------------------------------
      //SHOULD THIS BE ADDED BACK????
      //const savedTheme = localStorage.getItem("theme") || "dark";
      //switchImage(savedTheme);
      //-----------------------------------------------------------------
    }
  } else {
    switchImage(savedTheme);
  }
  // if (particlesEnabled && vipCode === "true") {
  //   if (customParticlesConfig) {
  //     loadParticlesFromStorage();
  //   } else {
  //     loadParticlesConfig(savedTheme);
  //   }
  // }
  // Apply the custom particles if they are enabled
});
// Function to load particles from localStorage if available
function loadParticlesFromStorage() {
  const storedConfig = localStorage.getItem("particlesConfig");
  if (storedConfig) {
    try {
      // Parse the stored configuration back into an object
      window.particlesConfig = JSON.parse(storedConfig); // Store it globally

      // Log to confirm particlesConfig is correctly retrieved
      console.log(
        "Loaded particlesConfig from localStorage:",
        window.particlesConfig
      );

      // Initialize particles with the stored configuration
      particlesJS("particles-js", window.particlesConfig); // Use the global version
    } catch (error) {
      console.error(
        "Failed to parse particlesConfig from localStorage:",
        error
      );
    }
  } else {
    console.log("No particlesConfig found in localStorage.");
  }
}

// Hide body initially
//document.body.style.visibility = "hidden";

// Create an off-screen image to preload the background
const bgImage = new Image();
const savedThemez = localStorage.getItem("theme") || "dark"; // Default theme

// Set the source for the image object without `url(...)`
if (
  savedTheme !== "dark" ||
  savedTheme !== "light" ||
  savedTheme !== "hack" ||
  savedTheme !== "custom"
) {
  bgImage.src = `Themes/images/seasons/${savedThemez}/${savedThemez}-bg.png`;
}

// When the image is fully loaded, set it as the background
bgImage.onload = () => {
  document.body.style.backgroundImage = `url(${bgImage.src})`; // Apply `url(...)` here
  document.body.style.visibility = "visible"; // Show the body
};

// Call this function when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "dark"; // Default theme

  if (
    savedTheme !== "dark" ||
    savedTheme !== "light" ||
    savedTheme !== "hack" ||
    savedTheme !== "custom"
  ) {
    document.body.style.visibility = "visible";
  }

  const particlesConfig = localStorage.getItem("particlesConfig");
  const vipCode = sessionStorage.getItem("VIP-CODE");
  const particlesEnabled = localStorage.getItem("particlesEnabled") === "true";
  const enabledCustomParticles = localStorage.getItem("enabledCustomParticles");

  if (particlesEnabled && vipCode === "true") {
    if (particlesConfig) {
      if (enabledCustomParticles === "true" && savedTheme === "custom") {
        loadParticlesFromStorage(); // Load stored particles config when the DOM is ready
      } else {
        loadParticlesConfig(savedTheme);
      }
    } else {
      loadParticlesConfig(savedTheme);
    }
  }
});

function applyCustomBackgroundImage() {
  const storedImage = localStorage.getItem("customBackgroundImage");
  //const imgElement = document.getElementById("background-image");

  if (storedImage) {
    document.body.style.backgroundImage = `url(${storedImage})`;
    //imgElement.style.visibility = "hidden"; // Hide default background
  } else {
    document.body.style.backgroundImage = "none";
    //imgElement.style.visibility = "visible"; // Restore default background
  }
}
///////////////////////////////////////////////////////////////////////////////////
//EXPERIMENTAL purposes!
function switchImage(theme) {
  //const imgElement = document.getElementById("background-image");
  //imgElement.style.display = 'none';
  document.body.style.backgroundImage = `url('Themes/images/seasons/${theme}/${theme}-bg.png')`;
  console.log("switched");
}
///////////////////////////////////////////////////////////////////////////////////
// Function to load particles for the selected theme
function loadParticlesConfig(theme) {
  const script = document.createElement("script");
  script.src = `Themes/particles-${theme}.js`; // Load particles config based on theme
  script.id = "particles-config";

  script.onload = function () {
    particlesJS.load("particles-js", script.src, function () {
      console.log("Particles.js config loaded for theme:", theme);
    });
  };

  document.head.appendChild(script);
}

// Function to destroy particles if needed
function destroyParticles() {
  const particlesContainer = document.getElementById("particles-js");
  if (particlesContainer) particlesContainer.innerHTML = ""; // Clear particles
  console.log("Particles destroyed");
}
// Check if there are custom particles saved and load them
const customParticles = sessionStorage.getItem("customParticles");
if (customParticles) {
  eval(customParticles); // Load custom particles from sessionStorage
  if (typeof particlesConfig !== "undefined") {
    particlesJS("particles-js", particlesConfig);
  }
}
// link.onload = function () {
//   document.body.style.visibility = "visible";
// };
