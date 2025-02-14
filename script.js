document.getElementById("btnSi").addEventListener("click", function() {
    const respuestaDiv = document.getElementById("respuesta");
    respuestaDiv.innerHTML = `
        <div class="carta mostrar">
            <h2>💖 ¡Feliz San Valentín! 💖</h2>
            <p>Querida Dolli,
A veces la vida nos sorprende de formas inesperadas, poniendo en nuestro camino a personas que, sin previo aviso, terminan convirtiéndose en piezas fundamentales de nuestro día a día. Y eso es exactamente lo que ha sucedido contigo.
No hace tanto que nos conocemos, pero la verdad es que el tiempo no siempre es el mejor indicador de la profundidad de una amistad. En este corto pero significativo tiempo, me he dado cuenta de que eres una persona increíble, de esas que brillan con luz propia y que logran dejar una huella en la vida de quienes tienen la suerte de conocerte. Desde el primer momento supe que nuestra conexión iba a ser especial, pero jamás imaginé cuánto llegaría a valorar tu amistad.
Eres alguien con un corazón enorme, con una calidez y una energía que hacen que cualquier conversación sea un refugio, una fuente de alegría y complicidad. Es difícil explicar con palabras cuánto significas para mí, pero quiero que sepas que en este poco tiempo te has convertido en alguien muy importante en mi vida. Admiro tantas cosas de ti: tu forma de ver el mundo, tu manera de hacer sentir cómodos a los demás, tu capacidad para escuchar, para entender y para estar presente.
Agradezco cada momento compartido, cada conversación, cada risa, cada palabra de aliento. No importa si el día es bueno o malo, de alguna manera, hablar contigo siempre lo hace un poco mejor. No sé cómo lo haces, pero tienes ese don de convertir hasta lo más simple en algo especial.
Hoy, en este día de San Valentín, quiero recordarte lo valiosa que eres, no solo para mí, sino para todos los que tienen la suerte de conocerte. El mundo necesita más personas como tú: personas que inspiran, que contagian alegría, que tienen una esencia tan auténtica y tan pura.
No importa cuánto tiempo pase, quiero que sepas que aquí tienes a alguien que valora muchísimo tu amistad y que estará para ti en los momentos buenos, pero sobre todo en los difíciles. Porque la amistad no se trata solo de reír juntos, sino de sostenerse cuando sea necesario. Y yo quiero ser para ti esa persona en quien puedas confiar, así como tú has sido para mí alguien tan especial en tan poco tiempo.
Gracias por ser tú, por tu forma de ser, por la luz que transmites y por permitirme ser parte de tu vida. Espero que este sea solo el inicio de una amistad que dure por mucho tiempo, porque sinceramente, no me imagino mis días sin tu presencia.
¡Feliz San Valentín, pedazo de caca!
💕</p>
            
            <div class="img-container">
                <img src="imagen1.jpeg" alt="Imagen romántica">
                <img class="heart-balloon" src="goblo-corazon.png" alt="Globo de corazón">
            </div>

            <div class="img-container">
                <img src="imagen2.jpeg" alt="Otra imagen romántica">
                <img class="heart-balloon" src="goblo-corazon.png" alt="Globo de corazón">
            </div>
        </div>
    `;
});

document.getElementById("btnNo").addEventListener("click", function() {
    const respuestaDiv = document.getElementById("respuesta");
    respuestaDiv.innerHTML = `
        <h2>😢</h2>
        <p>No puedes rechazar ser mi San Valentín, porque si no lloro 😭</p>
    `;

    // Cambiar el texto del botón No para insistir más
    setTimeout(() => {
        document.getElementById("btnNo").innerText = "¿Seguro? 🥺";
    }, 1000);
    
    setTimeout(() => {
        document.getElementById("btnNo").innerText = "Piensa otra vez 💔";
    }, 2000);
});
