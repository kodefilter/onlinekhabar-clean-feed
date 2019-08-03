console.log("Clean Feed in action")

// Get all the div elements with id containing "-ad" part
const advertisements = document.querySelectorAll('div[id*="-ad"], div.ok_roadblock')

// Go through each of those and apply a property to hide them
advertisements.forEach(e => e.style.display = "none")

/* we can also do visibility = hidden */
/*Pradeep Ghimire*/