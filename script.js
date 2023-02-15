
const encuesta = {
    pregunta: '¿Clase que jugas?',
    opciones: ['0: Mago', '1: Guerrero', '2: Sacerdote', '3: Paladin', '4: Cazador', '5: Pícaro', '6: Chamán', '7: Brujo', '8: Druida', '9: Caballero de la Muerte'  ],

    respuestas: new Array(10).fill(0),
    //obtener respuesta
    registrarNuevaRespuesta() {
        const registrar = Number(
            prompt(` ${this.pregunta}\n\n${this.opciones.join('\n')}
        \n(Escriba el numero de opcion)`)
        );

        typeof registrar === `number` &&
        registrar < this.respuestas.length &&
        this.respuestas[registrar]++;

        return this.respuestas;
    },
};

const captureOn = function () {
    const confirmacion = confirm(
        ` Clases mas usadas en WOW:WOTLK\n\n${encuesta.opciones.join(
            '\n'
        )}\n\n(Participas) `
    );

    if (confirmacion === true) {
        const memory = encuesta.registrarNuevaRespuesta();
        const a = [];
        encuesta.opciones.map((element, index, array) => {
            const recibirConteo = `${element.padEnd(30, ' -')} ${memory[index]}`;
            a.push(recibirConteo);
        });
        alert(` Conteo de votos:\n\n${a.join('\n')}`);
        console.log(a);
        llamada();
    } else if (confirmacion === false) {
        alert('Encuesta realiza por la Guild Ascend-Sulfuras Horda');
    }
};

const llamada = function () {
    captureOn();
    const memory = encuesta.registrarNuevaRespuesta();
    console.log(memory);
};

captureOn();




