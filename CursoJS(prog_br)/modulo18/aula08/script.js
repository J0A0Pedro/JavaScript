let jq = $("#lista1").slideUp(2000)
.slideDown(2000)
.fadeOut(2000)
.fadeIn(2000)
.slideUp(500);

//jq.slideDown(1000); //não preciso dessa linha, estou encadeando um monte de funções, logo quando uma finaliza eu coloco a outra


//Em js:


let objeto = {
    print10: function() {
        console.log(10);
        return this;
    },
    
    print20: function()  {
        console.log(20);
        return this;
    }
}

objeto.print10().print20().print10().print20().print20().print20().print20()


