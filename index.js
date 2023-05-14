// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let greenTree= document.createElement('img')
// greenTree.src = 'assets/pine-tree.png'
// greenTree.style.position = 'fixed'
// greenTree.style.left = '450px'
// greenTree.style.bottom = '200px'
// document.body.append(greenTree)

// function images(src,left,bottom)
// {
// let x= document.createElement(`img`)
// x.src= src
// x.style.position = 'fixed'
// x.style.left= left + 'px'
// x.style.bottom= bottom + 'px'
// document.body.append(x)
// return x
// }
// images ('assets/green-character.gif', 100, 100)
// images ('assets/pine-tree.png',450, 200)
// images ('assets/pillar.png',350, 100)
// images ('assets/crate.png',150, 200)
// images ('assets/well.png',500, 420)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })

function newitem(src,left,bottom)
{
let x= document.createElement(`img`)
x.src= src
x.style.position = 'fixed'
x.style.left= left + 'px'
x.style.bottom= bottom + 'px'
document.body.append(x)
x.addEventListener('click',function(){
    x.remove()
})
return x
}
newitem ('assets/green-character.gif', 100, 100)
newitem ('assets/pine-tree.png',450, 200)
newitem ('assets/pillar.png',350, 100)
newitem ('assets/crate.png',150, 200)
newitem ('assets/well.png',500, 420)
newitem ('assets/sword.png', 500, 405)
newitem ('assets/shield.png',165, 185)
newitem ('assets/staff.png', 600, 100)