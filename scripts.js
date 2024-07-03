// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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

    // Save data to Firebase
    var newSignRef = ref(database, 'signatures');
    push(newSignRef, {
        blessing: blessing,
        name: name,
        position: position,
        organization: organization
    });
}

function exportCSV() {
    const signaturesRef = ref(database, 'signatures');
    get(signaturesRef).then((snapshot) => {
        const data = snapshot.val();
        let csvContent = "data:text/csv;charset=utf-8,คำถวายพระพร,ชื่อ,ตำแหน่ง,หน่วยงาน\n";

        for (let id in data) {
            const row = data[id];
            csvContent += `${row.blessing},${row.name},${row.position},${row.organization}\n`;
        }

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "signatures.csv");
        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);
    });
}
