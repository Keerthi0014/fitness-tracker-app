let totalSteps = parseInt(localStorage.getItem("steps")) || 0;
let totalWorkout = parseInt(localStorage.getItem("workout")) || 0;
let totalCalories = parseInt(localStorage.getItem("calories")) || 0;

const stepsInput = document.getElementById("steps");
const workoutInput = document.getElementById("workout");
const caloriesInput = document.getElementById("calories");
const addEntryButton = document.getElementById("add-entry");

const summarySteps = document.getElementById("summary-steps");
const summaryWorkout = document.getElementById("summary-workout");
const summaryCalories = document.getElementById("summary-calories");
const progressFill = document.getElementById("progress-fill");

// Live clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Update dashboard
function updateDashboard() {
  summarySteps.textContent = `Steps: ${totalSteps}`;
  summaryWorkout.textContent = `Workout: ${totalWorkout} min`;
  summaryCalories.textContent = `Calories: ${totalCalories}`;

  const progress = Math.min((totalSteps / 5000) * 100, 100);
  progressFill.style.width = progress + "%";

  // Save to localStorage
  localStorage.setItem("steps", totalSteps);
  localStorage.setItem("workout", totalWorkout);
  localStorage.setItem("calories", totalCalories);
}

addEntryButton.addEventListener("click", () => {
  totalSteps += parseInt(stepsInput.value) || 0;
  totalWorkout += parseInt(workoutInput.value) || 0;
  totalCalories += parseInt(caloriesInput.value) || 0;

  updateDashboard();

  stepsInput.value = "";
  workoutInput.value = "";
  caloriesInput.value = "";
});

// Initialize
updateDashboard();
updateClock();
