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
