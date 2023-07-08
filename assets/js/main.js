function addMessage(){
    var msg = document.getElementById("text_input");
    const my_msg = document.createElement("li");
    my_msg.setAttribute("class","message")
    my_msg.innerText = msg.value;
    document.getElementById("chatt").append(my_msg);
    msg.value = "";
    const myTimeout = setTimeout(myGreeting, 1000);
}
function myGreeting() {
  let array = ["I am fine", "how r u", "Okay", "Stay Happy", "Good Bye"];
  const random = Math.floor(Math.random() * array.length);
  const my_msg = document.createElement("li");
  my_msg.setAttribute("class","random_msg")
  my_msg.innerText = array[random];
  document.getElementById("chatt").append(my_msg);
}
