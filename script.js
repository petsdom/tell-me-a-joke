let box = document.getElementById("box")

let arr = [`Q: Why did the cell phone get glasses?<br> 
 A: Because she lost all her contacts.`, 
`Q: How did the mobile phone propose to his girlfriend?<br> 
 A: He gave her a ring.`, 
`Q: What’s the most popular video game at the bread bakery?<br>
 A: Knead for Speed.`, 
`Q: Why is Santa good at karate?<br>
 A: He has a black belt.`, 
`Q: Where do werewolves buy Christmas gifts?<br>
 A: Beast Buy.`, 
`Q: What did the snowflake say to the road?<br>
 A: Let’s stick together.`, 
`Q: Why did the turkey join a band?<br> 
 A: So he could use his drumsticks.`, 
`Q: What’s a math teacher’s favorite winter sport?<br>
 A: Figure skating.`, 
`Q: Where do werewolves buy Christmas gifts?<br> 
 A: Beast Buy.`, 
`Q: What did the snowflake say to the road?<br>
 A: Let’s stick together.`, 
`Q: Why did the turkey join a band?<br>
 A: So he could use his drumsticks.`, 
`Q: What’s a math teacher’s favorite winter sport?<br>
 A: Figure skating.`, 
`Q: What’s a firefly’s favorite dance?<br>
 A: The glitterbug.`, 
`Q: Why are eyeshadow, lipstick, and mascara never mad at each other?<br> 
 A: Because they always make-up`]

let jokes = arr[Math.floor(Math.random()*arr.length)]

box.innerHTML = jokes;
