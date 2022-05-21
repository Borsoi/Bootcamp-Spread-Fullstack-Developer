function verificarPalindromo(string) {
    if (!string) {
        return "Favor, insera uma palavra/frase válida";

    } else {
        const palavraInvertida = string.split("").reverse().join("");

        if (string === palavraInvertida) {
            return `A palavra '${string}' é um palindromo, invertida fica '${palavraInvertida}'`;
        }
        return `A palavra '${string}' não é um palindromo, invertida fica '${palavraInvertida}'`;
    }
}

function verificarPalindromoFrase(frase) {
    if (!frase) {
        return "Favor, insera uma palavra/frase válida";
    } else {
        const fraseTudoMinusculoEJunta = frase.toLowerCase().replace(/ /g, "");
        const fraseInvertida = fraseTudoMinusculoEJunta.split("").reverse().join("");

        const retorno = fraseTudoMinusculoEJunta === fraseInvertida ? "é" : "não é";

        return `A frase ${frase} ${retorno} palindromo`
    }
}

console.log(verificarPalindromo("gato"))
console.log(verificarPalindromo("ovo"))
console.log(verificarPalindromoFrase("A gorda ama a droga"))


