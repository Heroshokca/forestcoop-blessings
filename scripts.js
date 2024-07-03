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

    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCwU2HJ-W6cMUEfGjhydboxZIcg70Pxosc",
        authDomain: "testlinebot-a6dec.firebaseapp.com",
        databaseURL: "https://testlinebot-a6dec.firebaseio.com",
        projectId: "testlinebot-a6dec",
        storageBucket: "testlinebot-a6dec.appspot.com",
        messagingSenderId: "504580392883",
        appId: "1:504580392883:web:ad395aa890187aeb492dc6"
    };

    firebase.initializeApp(firebaseConfig);

    // Get a reference to the database service
    const database = firebase.database();

    // Define a path and push the data
    const blessingsRef = database.ref('signedBlessings');
    blessingsRef.push({
        blessing: blessing,
        name: name,
        position: position,
        organization: organization
    })
    .then(() => {
        console.log("Data successfully sent to Firebase!");
    })
    .catch((error) => {
        console.error("Error sending data: ", error);
    });
}
