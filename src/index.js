
const showCourses = () => {
    var course = document.getElementById("courseModal");
    course.style.display = "block";
}

const closeCourses = () => {
    var course = document.getElementById("courseModal");
    course.style.display = "none";
}

window.onclick = function(event) {
    var course = document.getElementById("courseModal");
    var sam = document.getElementById("samModal");
    if (event.target == course) {
        course.style.display = "none";
    } else if (event.target == sam){
        sam.style.display = "none";
    }
}

const onProfileClick = () => {
    var sam = document.getElementById("samModal");
    sam.style.display = "block";
}

const onProfileClose = () => {
    var sam = document.getElementById("samModal");
    sam.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    // Array of icons in the order they should appear
    const icons = ["github", "resume", "linkedin"];

    // Create the Intersection Observer
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to the intersecting entry
                entry.target.classList.add("visible");

                // Stop observing this element (so it doesn't re-trigger)
                observer.unobserve(entry.target);

                // If there are more icons in the list, observe the next one
                const nextIconId = icons.shift();
                if (nextIconId) {
                    observer.observe(document.getElementById(nextIconId));
                }
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the element is in view
    });

    // Start observing the first icon
    const firstIconId = icons.shift();
    if (firstIconId) {
        observer.observe(document.getElementById(firstIconId));
    }
});








