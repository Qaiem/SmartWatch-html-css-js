document.addEventListener("DOMContentLoaded", function () {
  // Get the time elements
  let Hours = document.getElementById("hours");
  let Minutes = document.getElementById("minutes");
  let Seconds = document.getElementById("seconds");
  let intervalId;

  // Start the clock
  function startClock() {
    clearInterval(intervalId); // Clear any existing intervals to avoid multiple intervals running
    intervalId = setInterval(() => {
      let currentTime = new Date(); // Get current time

      // Get the current hours, minutes, and seconds
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let seconds = currentTime.getSeconds();

      // Format time to ensure two digits
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Set the formatted time back to the innerHTML of the respective elements
      Hours.innerHTML = hours;
      Minutes.innerHTML = minutes;
      Seconds.innerHTML = seconds;
    }, 1000);
  }

  // Function to update the time
  function updateTime() {
    const now = new Date();
    Hours.textContent = String(now.getHours()).padStart(2, "0");
    Minutes.textContent = String(now.getMinutes()).padStart(2, "0");
    Seconds.textContent = String(now.getSeconds()).padStart(2, "0");
  }

  // Start the clock immediately on page load
  startClock();

  // Time button event listener
  document.getElementById("timebtn").addEventListener("click", function () {
    // Clear heart rate specific styles if any
    let hrtrate = document.querySelector("#timestamp");
    hrtrate.style.backgroundImage = "none"; // Remove the background image
    hrtrate.style.backgroundColor = "black"; // Ensure background color stays consistent
    hrtrate.style.color = "whitesmoke"; // Reset text color
    hrtrate.style.fontSize = "25px"; // Reset font size

    // Clear text content and reset to initial state
    hrtrate.innerHTML =
      '<span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>';

    // Update references to the time elements
    Hours = document.getElementById("hours");
    Minutes = document.getElementById("minutes");
    Seconds = document.getElementById("seconds");

    // Show time elements
    Hours.style.display = "inline";
    Minutes.style.display = "inline";
    Seconds.style.display = "inline";

    // Restart the clock
    startClock();
  });

  // Color change code
  var straps = document.querySelectorAll(".strap");

  document.getElementById("black").addEventListener("click", function () {
    changeStrapColor("black");
  });
  document.getElementById("orange").addEventListener("click", function () {
    changeStrapColor("orange");
  });
  document.getElementById("darkblue").addEventListener("click", function () {
    changeStrapColor("darkblue");
  });
  document.getElementById("purple").addEventListener("click", function () {
    changeStrapColor("purple");
  });

  function changeStrapColor(color) {
    straps.forEach(function (strap) {
      strap.style.backgroundColor = color;
    });
  }

  // Heart Rate button event listener
  var hrtrate = document.querySelector("#timestamp");
  document.getElementById("heartrate").addEventListener("click", function () {
    // Set heart rate background color to black
    hrtrate.style.backgroundColor = "black";

    // Set heart rate background image
    hrtrate.style.backgroundImage = "url('HeartRate.png')"; // Make sure the path to your image is correct
    hrtrate.style.backgroundSize = "80px";

    // Set the background position to create margins
    hrtrate.style.backgroundPosition = "30px 20px"; // Adjust these values to create margins

    // Optionally, you can set background repeat to prevent the heart icon from repeating
    hrtrate.style.backgroundRepeat = "no-repeat";

    // Set the width and height of the element
    hrtrate.style.width = "148px"; // Adjust width as needed
    hrtrate.style.height = "158px"; // Adjust height as needed

    // Set heart rate text content to a random value between 60 and 100
    let heartratetext = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
    hrtrate.textContent = heartratetext;

    // Create a span element to wrap the text
    let textSpan = document.createElement("span");
    textSpan.textContent = heartratetext;

    // Add margin to the span element
    textSpan.style.marginTop = "60px"; // Adjust the margin as needed
    textSpan.style.marginLeft = "-10px";

    // Clear any existing content and append the span to the hrtrate element
    hrtrate.innerHTML = "";
    hrtrate.appendChild(textSpan);

    // Add animation to shrink and expand the heart
    hrtrate.style.animation = "shrinkHeart 1s infinite alternate";

    // Hide time elements
    Hours.style.display = "none";
    Minutes.style.display = "none";
    Seconds.style.display = "none";

    // Clear the interval to stop the clock
    clearInterval(intervalId);
  });

  // Buy Now button event listener
  document.getElementById("buynow").addEventListener("click", function () {
    window.location.href = "https://www.yourpurchasepage.com"; // Replace with your actual purchase page URL
  });

  // Define the keyframe animation in JavaScript
  var keyframes = `
    @keyframes shrinkHeart {
      from {
        background-size: 90px;
      }
      to {
        background-size: 50px;
      }
    }
  `;

  // Create a style element
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);

  // Initial time display
  updateTime();
  setInterval(updateTime, 1000); // Update time every second
});
