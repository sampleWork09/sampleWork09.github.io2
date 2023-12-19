var BM = new Audio('../Music/BG.mp3');

function start(){
    this.BM.play();
    document.getElementById("main").style.display="none";
    setTimeout(()=>{
        document.getElementById("message-main").style.display="flex";

        setTimeout(()=>{
            document.getElementById("message-0").style.display="flex";
            document.getElementById("message-main").style.display="none";

            setTimeout(()=>{
                document.getElementById("message-1").style.display="flex";
                document.getElementById("message-0").style.display="none";
        
                setTimeout(()=>{
                    document.getElementById("message-2").style.display="flex";
                    document.getElementById("message-1").style.display="none";

                    setTimeout(()=>{
                        document.getElementById("message-3").style.display="flex";
                        document.getElementById("message-2").style.display="none";
                
                        setTimeout(()=>{
                            document.getElementById("message-4").style.display="flex";
                            document.getElementById("message-3").style.display="none";
                
                            setTimeout(()=>{
                                document.getElementById("message-5").style.display="flex";
                                document.getElementById("message-4").style.display="none";
                        
                                setTimeout(()=>{
                                    document.getElementById("message-6").style.display="flex";
                                    document.getElementById("message-5").style.display="none";

                                    setTimeout(()=>{
                                        document.getElementById("message-7").style.display="flex";
                                        document.getElementById("message-6").style.display="none";
                                
                                        setTimeout(()=>{
                                            document.getElementById("message-8").style.display="flex";
                                            document.getElementById("message-7").style.display="none";
                                            
                                            setTimeout(() =>{
                                                 var iBG0 = document.getElementById("image-container0");
                                                 if (iBG0) {
                                                    iBG0.style.display = "flex";
                                                    iBG0.style.backgroundImage = 'url(../images/img0.jpg)';
                                                    console.log("hi");
                                                }
                                                 document.getElementById("message-8").style.display="none";

                                                 setTimeout(() =>{
                                                    var iBG1 = document.getElementById("image-container1");
                                                    if (iBG1) {
                                                       iBG1.style.display = "flex";
                                                       iBG1.style.backgroundImage = 'url(../images/img1.jpg)';
                                                       console.log("hi");
                                                   }
                                                    document.getElementById("message-8").style.display="none";
                                               },5000)
                                            },5000)
                                        },5000)
                                    },5000)
                                },5000)
                            },5000)
                        },5000)
                    },5000)
                },5000)
            },5000)
        },5000)
    },0)
}