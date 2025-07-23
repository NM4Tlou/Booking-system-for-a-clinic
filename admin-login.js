firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    window.location.href = "admin.html";
  })
  .catch((error) => {
    alert("Login failed: " + error.message);
  });
