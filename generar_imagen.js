'use strict';

const btnTomarFoto = document.getElementById('btn-crear-imagen');
const divContenedorImagen = document.getElementById('cont-img');
const main = document.getElementById('main');


btnTomarFoto.addEventListener('click', () => {
	html2canvas(main).then(canvas => {
		divContenedorImagen.appendChild(canvas);
		
		const urlImagen = canvas.toDataURL('image/png');
    
		// Crear un enlace temporal <a> con el atributo download
		const enlaceTemporal = document.createElement('a');
		enlaceTemporal.href = urlImagen;
		enlaceTemporal.setAttribute('download', 'canvas_image.png');

		// Agregar el enlace temporal al cuerpo del documento (necesario para Firefox)
		document.body.appendChild(enlaceTemporal);

		// Simular un clic en el enlace temporal para iniciar la descarga
		enlaceTemporal.click();
	});
});

let can = document.createElement('canvas')