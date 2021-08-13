window.addEventListener('keydown',function(e){
        let hello=document.querySelector(`audio[data-key=${e.key}`);
        let cont=document.querySelector(`div[data-key=${e.key}`);
        if(hello == null) return;
        console.log(cont);
        hello.currentTime=0;
        hello.play();
        cont.classList.add("over");
        setTimeout(function(){
            cont.classList.remove("over");
        }, 40);
        
})
//if(hello == null) return;
        //console.log(hello);
        //

        //console.log(e.key);