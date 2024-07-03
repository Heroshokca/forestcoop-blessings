// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwU2HJ-W6cMUEfGjhydboxZIcg70Pxosc",
  authDomain: "testlinebot-a6dec.firebaseapp.com",
  databaseURL: "https://testlinebot-a6dec.firebaseio.com",
  projectId: "testlinebot-a6dec",
  storageBucket: "testlinebot-a6dec.appspot.com",
  messagingSenderId: "504580392883",
  appId: "1:504580392883:web:ad395aa890187aeb492dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




function submitForm() {
    // Get form values
    var blessing = document.getElementById("blessing").value;
    var name = document.getElementById("name").value;
    var position = document.getElementById("position").value;
    var organization = document.getElementById("organization").value;

    // Validate form
    if (!blessing || !name) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    // Show result
    document.getElementById("resultBlessing").innerText = blessing;
    document.getElementById("resultName").innerText = name;
    document.getElementById("resultPosition").innerText = position;
    document.getElementById("resultOrganization").innerText = organization;
    document.getElementById("result").style.display = "block";
}
