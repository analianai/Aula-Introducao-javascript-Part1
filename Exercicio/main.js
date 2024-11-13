        let corOriginal = "";  // Variável para armazenar a cor original

        function mudarCor() {
            if (!corOriginal) {
                corOriginal = document.body.style.backgroundColor || "white"; // Guarda a cor original
            }

            if (document.body.style.backgroundColor === "lightblue") {
                document.body.style.backgroundColor = corOriginal; // Volta para a cor original
            } else {
                document.body.style.backgroundColor = "lightblue"; // Muda para a nova cor
            }
        }
