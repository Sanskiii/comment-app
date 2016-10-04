var body = document.getElementsByTagName('body')[0]

function getUserInput() {
  var username = document.getElementById('username').value
  var comment = document.getElementById('comment').value
  if ((username.trim != "") && (comment.trim != "")) {
    var newDiv = document.createElement('div')
    var newUser = document.createElement('h3')
    var newComment = document.createElement('p')
    newDiv.className = "content"
    newUser.className = "header"
    newComment.className = "sentence"
    newUser.textContent = username
    newComment.textContent = comment
    newDiv.appendChild(newUser)
    newDiv.appendChild(newComment)
    body.appendChild(newDiv)
  }
}