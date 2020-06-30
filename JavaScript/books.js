let setUPToolTip=function(){
    let tooltip="Before you download the content we would like you to fill out a simple form.";
    let toolTipElements=Array.from(document.querySelectorAll(".download-button"))
    let toolTipDiv= document.querySelector('.div-tooltip');
    let timer;
    let displayTooltip=function(e){
        toolTipDiv.innerHTML=tooltip;
        toolTipDiv.style.top=e.pageY + 'px';
        toolTipDiv.style.left=e.pageX + 'px';
        fadein(toolTipDiv);
    };
    let fadeout=function(elem){
        let op=1;
        if(!timer){
            timer=setInterval(function(){
                if(op<=0.1){
                    clearInterval(timer);
                    timer=null;
                    elem.style.opacity=0;
                    elem.style.display='none';
                }
                elem.style.opacity=op;
                op-=op*0.1;
            },10);
        }  
    };
    let fadein=function(elem){
        let op=0.1;
        elem.style.display='block';
        let timer=setInterval(function(){
            if(op>=1){
                clearInterval(timer);
            }
            elem.style.opacity=op;
            op+=op*0.1;
        },10);
    }
    toolTipElements.forEach(function(element){
        let timeout
        element.addEventListener('mouseenter',function(e){
            timeout=setTimeout(function(){
                displayTooltip(e);
            },400)
        });
        element.addEventListener('mouseleave',function(e){
            clearTimeout(timeout)
            fadeout(toolTipDiv);
        })
    })
}
setUPToolTip();