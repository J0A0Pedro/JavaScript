
let box = $(".box");

box.width(600); //alterei meu width e ignorou nosso box-sizing. Isso pq modificamos a largura de dentro

box.innerWidth(600);//Esse consideraria a borda 

box.outerWidth(600); //Largura mais o padding mais a borda

box.append("largura:", box.width(), "<br>",
"largura + padding + borda:", box.innerWidth(), "<br>",
"largura + padding + borda:", box.outerWidth(), "<br>",
"largura + padding + borda + margem:", box.outerWidth(true));