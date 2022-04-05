

$("[key=2]").click( () => {
    $("[key=2]").fadeOut(500);
});

//se nós tivermos duas listas com a mesma key, vamos acabar removendo a key2 das duas listas, então para ser mais preciso, podemos usar o find()

//EXEMPLO removendo o key3:

$("#lista1").find("[key=3]").fadeOut(3000);