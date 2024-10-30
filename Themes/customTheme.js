document.getElementById("importBtn").addEventListener("click", () => {
  const fileInput = document.getElementById("importSettings");
  if (fileInput.files.length > 0) {
    const zipFile = fileInput.files[0];
    importSettings(zipFile);
  }
});

async function importSettings(file) {
  const zip = await JSZip.loadAsync(file);
  const jsonFile = await zip.file("settings.json").async("string");
  const settings = JSON.parse(jsonFile);

  // Apply colors from the custom theme settings
  document.documentElement.style.setProperty("--bg-color", settings.bgColor);
  document.documentElement.style.setProperty(
    "--square-color",
    settings.squareColor
  );
  document.documentElement.style.setProperty(
    "--main-color",
    settings.mainColor
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    settings.secondaryColor
  );
  document.documentElement.style.setProperty(
    "--font-color",
    settings.fontColor
  );
  document.documentElement.style.setProperty(
    "--slider-color",
    settings.sliderColor
  );

  localStorage.setItem("--bg-color", settings.bgColor);
  localStorage.setItem("--square-color", settings.squareColor);
  localStorage.setItem("--main-color", settings.mainColor);
  localStorage.setItem("--secondary-color", settings.secondaryColor);
  localStorage.setItem("--font-color", settings.fontColor);
  localStorage.setItem("--slider-color", settings.sliderColor);

  localStorage.setItem("hasCustomBackground", "false");
  document.body.style.backgroundImage = "none";

  // Store the uploaded image in localStorage, but only apply it for the custom theme
  if (settings.uploadedImage) {
    localStorage.setItem("hasCustomBackground", "true");
    localStorage.setItem("customBackgroundImage", settings.uploadedImage);

    // Only apply if currently in custom theme
    const themeSelector = document.getElementById("theme-selector");
    if (themeSelector.value === "custom") {
      applyCustomBackgroundImage();
    }
  } else {
    console.error("No image data found in the settings.");
  }
}

// Function to apply the stored custom background image
function applyCustomBackgroundImage() {
  const storedImage = localStorage.getItem("customBackgroundImage");

  if (!storedImage) return; // Exit the function if no custom image is in localStorage

  document.body.style.backgroundImage = `url(${storedImage})`;
  //imgElement.style.visibility = "hidden"; // Hide default background
}


// Listen for theme changes
document
  .getElementById("theme-selector")
  .addEventListener("change", function () {
    const theme = this.value;

    if (theme === "custom") {
      // Apply custom background image if the user switches to the custom theme
      applyCustomBackgroundImage();
    } else {
      // Remove custom background image if switching to another theme
      //document.body.style.backgroundImage = "none";
    }
  });

// particle import
document.getElementById("importParticlesBtn").addEventListener("click", () => {
  const fileInput = document.getElementById("importParticles");
  if (fileInput.files.length > 0) {
    const particleFile = fileInput.files[0];
    importParticles(particleFile);
  }
});

if (localStorage.getItem("enabledCustomParticles") === null) {
  localStorage.setItem("enabledCustomParticles", "false");
}
async function importParticles(file) {
  const text = await file.text();
  localStorage.setItem("enabledCustomParticles", "true");

  try {
    // Clear the current particles if they exist
    particlesJS("particles-js", {}); // Clear current particles

    // Log to confirm the content of the imported file
    console.log("Imported particles script:", text);

    // Evaluate the uploaded JavaScript code
    eval(text); // Execute the JavaScript code in the file

    // Ensure particlesConfig is in the global scope
    if (typeof particlesConfig !== "undefined") {
      window.particlesConfig = particlesConfig; // Assign it to the global scope

      // Log to confirm particlesConfig is correctly loaded
      console.log(
        "particlesConfig loaded successfully:",
        window.particlesConfig
      );

      // Serialize the particlesConfig and store it in localStorage
      localStorage.setItem(
        "particlesConfig",
        JSON.stringify(window.particlesConfig)
      );

      console.log(
        "Saved particlesConfig to localStorage:",
        window.particlesConfig
      );

      // Initialize the particles with the new configuration
      particlesJS("particles-js", window.particlesConfig);
    } else {
      console.error(
        "The particles configuration was not found in the imported file."
      );
    }
  } catch (error) {
    console.error("Failed to import particles configuration:", error);
  }
}
