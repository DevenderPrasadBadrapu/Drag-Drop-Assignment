var p = document.getElementsByTagName('p')
var boxes = document.getElementsByClassName('boxes')
var dragitem = null;
var heading = document.getElementById('heading')
var container = document.getElementsByClassName('main');  
var content = container.innerHTML;

for(var i of p){
    i.addEventListener('dragstart' , dragstart)
    i.addEventListener('dragend' , dragend)
}

// This function helps to drag elemments
function dragstart(){
    dragitem = this;
    setTimeout(()=>this.style.display = "none" , 0)
}

// This function helps to drop the elemments
function dragend(){
    setTimeout(()=>this.style.display = "block" , 0)
    dragitem = null;
}

for(var b of boxes){
    b.addEventListener('dragover' , dragover)
    b.addEventListener('dragenter' , dragenter)
    b.addEventListener('dragleave' , dragleave)
    b.addEventListener('drop' , drop)
}


// This method helps to close the action once after performed
function dragover(e){
    e.preventDefault()
    // The innerHTML tag helps to change the content present in the mentioned tag
    heading.innerHTML = 'Draging...'
    // This line helps in changing the color of the content
    heading.style.color = 'red'
    // This line helps in changing the color box while dragging the elements over the boxes as we stored the boxes in this
    this.style.boxShadow = '0 0 20px yellow'

}
// This method helps to close the action once after performed
function dragenter(e){

    e.preventDefault()
    
}

function dragleave(){
    // This line helps in stopping in changing the color after leaving the elements in boxes
    this.style.boxShadow = 'none'
    
}

// this is used to move the elements in the target place
function drop(){
    this.append(dragitem)
    // The innerHTML tag helps to change the content present in the mentioned tag
    heading.innerHTML = 'Droped'
    // This line helps in changing the color of the content
    heading.style.color = 'blue'
    
}


function reset1(){
    var container = document.getElementsByClassName("main");
    container.innerHTML= html;
}                
var html;
window.onload = function(){
	html = document.getElementsByClassName('main').innerHTML;
}  
