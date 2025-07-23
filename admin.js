firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("appointments")
  .orderBy("createdAt", "desc")
  .get()
  .then((snapshot) => {
    let html = "";
    snapshot.forEach((doc) => {
      const data = doc.data();
      html += `
        <div class="booking-card">
          <strong>${data.fullname}</strong><br>
          📞 ${data.phone}<br>
          📅 ${data.date} at ${data.time}<br>
          Service: ${data.service}
        </div>
      `;
    });
    document.getElementById("bookingList").innerHTML = html;
  });
