// function analyze(text) {
//   var xhr = new XMLHttpRequest();
//   var url = "https://secure.local:5001/api/analyze";
//   xhr.open("POST", url, true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       var json = JSON.parse(xhr.responseText);
//       console.log(json);
//     }
//   };
//   var data = JSON.stringify({
//     project: "gpt-2-small",
//     text: text
//   });
//   xhr.send(data);
// }

// var contentTabId;

// chrome.runtime.onMessage.addListener(function(msg, sender) {
//   if (msg.from == "content") {
//     //get content scripts tab id
//     contentTabId = sender.tab.id;
//     chrome.tabs.sendMessage({ text: "analyze" }, analyze);
//   }
// });
