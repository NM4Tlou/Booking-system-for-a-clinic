// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "unjani-booking.firebaseapp.com",
  projectId: "unjani-booking",
  storageBucket: "unjani-booking.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const errorMsg = document.getElementById('errorMsg');

  // Simple validation
  if (!fullname || !email || !phone || !service || !date || !time) {
    errorMsg.textContent = "⚠️ All fields are required.";
    errorMsg.classList.remove("hidden");
    return;
  }

  // Clear error
  errorMsg.textContent = "";
  errorMsg.classList.add("hidden");

  // Confirmation
  document.getElementById('confirmation').classList.remove('hidden');
  document.getElementById('bookingForm').reset();
});

db.collection("appointments").add({
  fullname,
  email,
  phone,
  service,
  date,
  time,
  createdAt: new Date()
})
.then(() => {
  console.log("Appointment saved");
  document.getElementById('confirmation').classList.remove('hidden');
  document.getElementById('bookingForm').reset();
})
.catch((error) => {
  console.error("Error saving appointment:", error);
});

