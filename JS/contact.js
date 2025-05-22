const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let next_prev = document.querySelectorAll(".calender_header button");

let currentDate = new Date();
function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === month && today.getFullYear() === year;

  monthYear.textContent =
    date.toLocaleString("default", { month: "long" }) + " " + year;
  daysContainer.innerHTML = "";

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    daysContainer.appendChild(empty);
  }

  // Fill actual days
  for (let day = 1; day <= lastDate; day++) {
    const dayEl = document.createElement("div");
    dayEl.textContent = day;

    if (isCurrentMonth && day === today.getDate()) {
      dayEl.classList.add("today");
    }

    // ✅ Add click event to toggle 'adding_bg_btn' class
    dayEl.addEventListener("click", () => {
      dayEl.classList.toggle("adding_bg_btn");
    });

    daysContainer.appendChild(dayEl);
  }
}

// Event listeners for navigation
prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initialize calendar
renderCalendar(currentDate);

// Add event listeners to buttons
next_prev.forEach((button) => {
  button.addEventListener("click", () => {
    next_prev.forEach((btn) => btn.classList.remove("adding_bg_btn"));
    button.classList.add("adding_bg_btn");
  });
});

const dropdown = document.getElementById("timezone-dropdown");
const selected = document.getElementById("selected-timezone");
const timezoneList = document.getElementById("timezone-list");

const timezones = [
  "UTC",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Kolkata",
  "Asia/Tokyo",
  "America/New_York",
  "America/Los_Angeles",
];

function getCurrentTimeInZone(timeZone) {
  const date = new Date();
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone,
  }).format(date);
}

dropdown.addEventListener("click", () => {
  const isVisible = timezoneList.style.display === "block";
  timezoneList.style.display = isVisible ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    timezoneList.style.display = "none";
  }
});
function populateCustomTimezones() {
  timezoneList.innerHTML = "";
  timezones.forEach((zone) => {
    const time = getCurrentTimeInZone(zone);
    const li = document.createElement("li");
    li.textContent = `${zone.replace("_", " ")} (${time})`;
    li.addEventListener("click", (e) => {
      e.stopPropagation(); // ✅ Fix to prevent dropdown from reopening
      selected.textContent = `${zone.replace("_", " ")} (${time})`;
      timezoneList.style.display = "none";
    });
    timezoneList.appendChild(li);
  });
}

populateCustomTimezones();
setInterval(populateCustomTimezones, 60000); // update every minute
// Update every minute

//header

// menu-main-menu-container

//header color changing

document.addEventListener("DOMContentLoaded", function () {
  const whitelogo = document.querySelector(".white-logo");
  const blacklogo = document.querySelector(".black-logo");
  let contect_btn = document.querySelector(".contact-btn");
  const darkSections = document.querySelectorAll(".dark-bg");
  const mainmenu = document.querySelector(".menu-main-menu-container ");
  const burgermenu = document.querySelectorAll("#menu-burger span");
  const menulist = document.querySelectorAll(".before-span span");

  const observer = new IntersectionObserver(
    (entries) => {
      // Check if any of the dark sections are in view
      const anyInView = entries.some((entry) => entry.isIntersecting);

      if (anyInView) {
        // At least one .dark-bg section is at top
        whitelogo.style.display = "block";
        blacklogo.style.display = "none";
        contect_btn.classList.add("blackside");
        mainmenu.style.marginLeft = "0px";
        mainmenu.style.transition = "none";
        burgermenu.forEach((ele) => (ele.style.background = "#fff"));
        menulist.forEach((ele) => {
          ele.style.color = "#fff";
          ele.style.fontWeight = "400";
        });
      } else {
        // No dark-bg section at top
        whitelogo.style.display = "none";
        blacklogo.style.display = "block";
        contect_btn.classList.remove("blackside");
        mainmenu.style.marginLeft = "-70px";
        mainmenu.style.transition = "none";
        burgermenu.forEach((ele) => (ele.style.background = "#000"));
        menulist.forEach((ele) => {
          ele.style.color = "black";
        });
      }
    },
    {
      root: null,
      rootMargin: "0px 0px -90% 0px",
      threshold: 0,
    }
  );

  darkSections.forEach((section) => observer.observe(section));
});
