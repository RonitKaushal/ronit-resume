
const glowDivs = document.querySelectorAll(".experi-card");

function isElementInRange(el) {
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const topPosition = rect.top;
  const bottomPosition = rect.bottom;
  return topPosition >= 0.6 * viewportHeight && bottomPosition <= 1 * viewportHeight;
}

function handleScroll() {
  glowDivs.forEach((div) => {
    div.classList.remove("glow"); // Remove glow class from all divs
  });
  
  // Find the div within the range and add glow class to it
  const divInRange = Array.from(glowDivs).find(isElementInRange);
  if (divInRange) {
    divInRange.classList.add("glow");
  }
}

window.addEventListener("scroll", handleScroll);










document.getElementById("secB-close").addEventListener("click", function() {
  var element = document.getElementById("sectionB");
  if (element.classList.contains("close")) {
    element.classList.remove("close");
  } else {
    element.classList.add("close");
  }
});





        document.getElementById("secB-open").addEventListener("click", function() {
          var element = document.getElementById("sectionB");
          window.scrollTo({
top: 0,
behavior: "smooth"
});
          if (element.classList.contains("close")) {
            element.classList.remove("close");
          } else {
            element.classList.add("close");
          }

        });






        document.getElementById("overlay-close").addEventListener("click", function() {
          var element = document.getElementById("connect-overlay");
          if (element.classList.contains("close")) {
            element.classList.remove("close");
          } else {
            element.classList.add("close");
          }
        });

        

                      document.getElementById("overlay-open").addEventListener("click", function() {
                        var element = document.getElementById("connect-overlay");
                        if (element.classList.contains("close")) {
                          element.classList.remove("close");
                        } else {
                          element.classList.add("close");
                        }
                      });
