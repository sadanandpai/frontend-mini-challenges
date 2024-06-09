var ktooltips = document.querySelectorAll(".avatar");
ktooltips.forEach(function(ktooltip, index){                // For each ktooltip
  ktooltip.addEventListener("mouseover", position_tooltip); // On hover, launch the function below
})
