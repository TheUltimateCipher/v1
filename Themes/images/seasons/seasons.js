// Function to reorder the options
function reorderOptions(themeSelector) {
    const enabledOptions = [];
    const disabledOptions = [];
  
    // Loop through each option and sort them into enabled/disabled arrays
    for (let option of themeSelector.options) {
      if (option.disabled) {
        disabledOptions.push(option);
      } else {
        enabledOptions.push(option);
      }
    }
  
    // Clear the current options
    themeSelector.innerHTML = '';
  
    // Append enabled options first, followed by disabled options
    enabledOptions.forEach(option => themeSelector.add(option));
    disabledOptions.forEach(option => themeSelector.add(option));
  }
  
  // Get the user's current date
  const currentDate = new Date();
  const month = currentDate.getMonth(); // 0 = January, 11 = December
  const day = currentDate.getDate();
  
  // Function to determine the season
  function getSeason(month, day, isNorthernHemisphere = true) {
    if (isNorthernHemisphere) {
      if ((month === 11 && day >= 21) || (month === 0) || (month === 1) || (month === 2 && day < 20)) {
        return "winter";
      } else if ((month === 2 && day >= 20) || (month === 3) || (month === 4) || (month === 5 && day < 21)) {
        return "spring";
      } else if ((month === 5 && day >= 21) || (month === 6) || (month === 7) || (month === 8 && day < 23)) {
        return "summer";
      } else {
        return "fall";
      }
    } else {
      if ((month === 11 && day >= 21) || (month === 0) || (month === 1) || (month === 2 && day < 20)) {
        return "summer";
      } else if ((month === 2 && day >= 20) || (month === 3) || (month === 4) || (month === 5 && day < 21)) {
        return "fall";
      } else if ((month === 5 && day >= 21) || (month === 6) || (month === 7) || (month === 8 && day < 23)) {
        return "winter";
      } else {
        return "spring";
      }
    }
  }
  
  // Get the current season (assuming northern hemisphere)
  const currentSeason = getSeason(month, day, true);
  
  // Select the dropdown
  const themeSelector = document.getElementById('theme-selector');
  
  // Enable or disable options based on the current season
  for (let option of themeSelector.options) {
    const value = option.value;
  
    // Only apply logic to seasonal options
    if (["winter", "spring", "summer", "fall"].includes(value)) {
      if (value === currentSeason) {
        option.disabled = false; // Enable the current season
      } else {
        option.disabled = true;  // Disable other seasons
      }
    }
  }
  
  // Reorder the options after enabling/disabling them
  reorderOptions(themeSelector);
  