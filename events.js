let card=document.querySelector("div")
card.id="card"
card.innerHTML=`<img src=" https://images.mid-day.com/images/images/2023/apr/nanani-a_d.jpg" width=300 />
<p> Telugu Actor </p> 
<button style="border:none"> Nani </button>`
card.style.display="inline-block"

let card1=document.querySelector("#card1")
card1.innerHTML=`<img src="https://imgeng.jagran.com/images/2024/jan/Untitled%20design%20(7)1704711484713.jpg" width=300/>
<p> Telugu Actor </p> 
<button style="border:none"> Jr. NTR </button>`
card1.style.display="inline-block"


// elements creating from javascript file


let head=document.createElement("h1")
head.textContent="Cards Created by Create element using javascript"
document.body.appendChild(head)

let newcard=document.createElement("div")
newcard.id="rapo"
newcard.innerHTML=`<img src="https://www.telugubulletin.com/wp-content/uploads/2023/06/RAPO-696x985.jpeg" width=300 height=500/>
<p> Telugu Actor </p> 
<button style="border:none"> RAPO </button>`
newcard.style.display="inline-block"
document.body.appendChild(newcard)

let newcard1=document.createElement("div")
newcard1.id="ssr"
newcard1.innerHTML=`<img src="https://magzentine.com/wp-content/uploads/2023/03/rajamouli-c.jpg" width=200/>
<p> Telugu Director  </p> 
<button style="border:none"> S S R </button>`
newcard1.style.display="inline-block"
newcard1.style.marginLeft="30px"
document.body.appendChild(newcard1)