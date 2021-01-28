
// with a button for ajax call
const button = document.querySelector("{button selector here}")
const QueryURL = "{query url here}"

button.addEventListener('click', function () {
    let Query = `${QueryURL}+{input}` //honestly could pass QueryUrl in ajax function this is useful foradding input at end or url tho
    ajax(Query)

})

function pass(res) {
    res.json().then(function (data) {
        console.log(data) // here just returns the json object depending on what you want to do do things here
    })
}
function fail(res) {
    console.error(res)
}
function ajax(input) {
    fetch(input).then(pass, fail)
}

// without button
const queryURL =  "{url here}"
let query = `${queryURL}+{input}`
ajax(query)


function pass(res){
  res.json().then(function(data){
    console.log(data) //options with data here
  })
}
function fail(res){
  console.error(res)
}
function ajax(input){
  fetch(input).then(pass,fail)
}