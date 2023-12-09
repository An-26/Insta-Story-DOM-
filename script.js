var arr = [
    {dp:"https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww", 
    story:"https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
     story:"https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww",
     story:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww", 
    story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1587204714992-2c93329aaa3a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF5bG9yJTIwc3dpZnR8ZW58MHx8MHx8fDA%3D", 
    story:"https://images.unsplash.com/photo-1587204714992-2c93329aaa3a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF5bG9yJTIwc3dpZnR8ZW58MHx8MHx8fDA%3D"}

 ]

var stories = document.querySelector("#stories")
var easy = ""
arr.forEach(function(elem, index){
  easy += `<div class="story">
  <img id ="${index}"  src="${elem.dp}" alt="">
</div>`
})

document.querySelector("#stories").innerHTML = easy;
stories.addEventListener("click", function (dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story
    })`


    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },2000)
})
