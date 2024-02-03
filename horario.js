'use strict';

const SALON_FIJO = "606";

const etica = {
	clase: "TALLER DE ÉTICA",
	profe: "Karla Cruz",
	salon: {av02: "AV02 - Moodle",_203: "203"}
}
const calculo = {
	clase: "CÁLCULO INTEGRAL ",
	profe: "Maria Gonzalez",
	salon: SALON_FIJO
}
const algebra = {
	clase: "ÁLGEBRA LINEAL ",
	profe: "Erick Hernandez",
	salon: SALON_FIJO
}
const	contabilidad = {
	clase: "CONTABILIDAD FINANCIERA",
	profe: "Karina Lizett",
	salon: SALON_FIJO
}
const quimica ={
	clase: "QUÍMICA",
	profe: "Dario Cruz",
	salon: {laboratorio: "Laoratorio", _410: "410"}
}
const poo = {
	clase: "PROGRAMACIÓN",
	profe: "Ulices Muñoz",
	salon: {laboratorio: "LC 2",SALON_FIJO}
}
const probabilidad = {
	clase: "PROBABILIDAD Y ESTADISTICA",
	profe: "Sergio Delgado",
	salon: SALON_FIJO
}


const HORARIO = {
	lunes: {
		7: [],
		8: [probabilidad, probabilidad.salon],
		9: [poo, poo.salon.SALON_FIJO],
		10: [poo, poo.salon.SALON_FIJO],
		11: [algebra, algebra.salon],
		12: [algebra, algebra.salon],
		13: [quimica, quimica.salon._410],
		14: [],
		15: [],
		16: [etica, etica.salon.av02],
		17: [etica, etica.salon.av02],
		18: [],
		19: [],
	},
	martes: {
		7: [probabilidad, probabilidad.salon],
		8: [probabilidad, probabilidad.salon],
		9: [contabilidad, contabilidad.salon],
		10: [poo, poo.salon.laboratorio],
		11: [calculo, calculo.salon],
		12: [algebra, algebra.salon],
		13: [quimica, quimica.salon._410],
		14: [],
		15: [],
		16: [],
		17: [],
		18: [],
		19: [],
	},
	miercoles: {
		7: [],
		8: [contabilidad, contabilidad.salon],
		9: [contabilidad, contabilidad.salon],
		10: [calculo, calculo.salon],
		11: [calculo, calculo.salon],
		12: [algebra, algebra.salon],
		13: [],
		14: [],
		15: [],
		16: [],
		17: [],
		18: [],
		19: [etica, etica.salon.av02],
	},
	jueves: {
		7: [],
		8: [probabilidad, probabilidad.salon],
		9: [contabilidad, contabilidad.salon],
		10: [calculo, calculo.salon],
		11: [calculo, calculo.salon],
		12: [],
		13: [],
		14: [],
		15: [],
		16: [],
		17: [],
		18: [],
		19: [],
	},
	viernes: {
		7: [],
		8: [probabilidad, probabilidad.salon],
		9: [poo, poo.salon.laboratorio],
		10: [poo, poo.salon.laboratorio],
		11: [quimica, quimica.salon.laboratorio],
		12: [quimica, quimica.salon.laboratorio],
		13: [algebra, algebra.salon],
		14: [],
		15: [],
		16: [],
		17: [],
		18: [etica, etica.salon._203],
		19: [],
	},
}

const contenedorClases = document.getElementsByClassName('cont-clases');
const itemMateria = contenedorClases[0].querySelectorAll('.item.materia');

function findIndexInObject(objeto, prop) {
	let keysObject = Object.keys(objeto);
	return keysObject.indexOf(prop);
}

for (const dia in HORARIO) {
	let horarioDia = HORARIO[dia];
	let indexDia = findIndexInObject(HORARIO, dia);

	for (const hora in horarioDia) {
		let clase = horarioDia[hora];

		if (Object.keys(clase).length > 0) {
			let indexHora = findIndexInObject(horarioDia, hora);
			let item = contenedorClases[indexHora].querySelectorAll('.item.materia')[indexDia];
			let spanTop = document.createElement('span');
			let spanBottom = document.createElement('span');
			let spanSalon = document.createElement('span');
			let nombreClase = clase[1];

			spanTop.setAttribute('class', 'profe');
			spanBottom.setAttribute('class', 'clase');

			spanSalon.textContent = ` [${nombreClase}]`;
			spanTop.textContent = clase[0].profe;
			spanBottom.textContent = clase[0].clase;
			spanTop.appendChild(spanSalon);

			item.append(spanTop);
			item.append(spanBottom);
		}
	}
}