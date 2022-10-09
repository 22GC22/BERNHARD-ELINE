function sendMail(){
    var obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    }
    const serviceId = "service_40so1gw";
    const templateId = "template_sgpnisk";

    emailjs.send(serviceId, templateId, obj).then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            console.log(res);
            alert("SUBSCRIBED SUCCESSFULLY");
        }
    ).catch((err) => console.log(err));
}


