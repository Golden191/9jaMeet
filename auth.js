console.log("✅ auth.js loaded");

import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider
} from './firebase.js';

import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔹 Sign Up
document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) return alert("All fields are required.");

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    alert("✅ Signup successful!");
    window.location.href = "profile-setup.html";
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      alert("⚠️ Email already in use. Please sign in.");
    } else {
      alert("❌ Signup error: " + err.message);
    }
  }
});

// 🔸 Sign In
document.getElementById("signinForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signinEmail").value.trim();
  const password = document.getElementById("signinPassword").value;

  if (!email || !password) return alert("Email and password are required.");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Login successful!");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert("❌ Login error: " + err.message);
  }
});

// 🟦 Google Login
document.getElementById("googleLogin")?.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signInWithPopup(auth, googleProvider);
    alert("✅ Google login successful!");
    window.location.href = "profile-setup.html";
  } catch (err) {
    alert("❌ Google login failed: " + err.message);
  }
});

// 🟦 Facebook Login
document.getElementById("facebookLogin")?.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signInWithPopup(auth, facebookProvider);
    alert("✅ Facebook login successful!");
    window.location.href = "profile-setup.html";
  } catch (err) {
    alert("❌ Facebook login failed: " + err.message);
  }
});

// 🟦 Twitter Login
document.getElementById("twitterLogin")?.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signInWithPopup(auth, twitterProvider);
    alert("✅ Twitter login successful!");
    window.location.href = "profile-setup.html";
  } catch (err) {
    alert("❌ Twitter login failed: " + err.message);
  }
});
