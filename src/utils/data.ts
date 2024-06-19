type Instruction = {
	condition1?: string;
	condition2?: string;
	condition3?: string;
	condition4?: string;
	condition5?: string;
	img1?: string;
	imgkh?: string;
	icon1?: string;
	iconkh?: string;
	img2?: string;
	icon2?: string;
	img3?: string;
	icon3?: string;
};

interface DataFroggyTypes {
	id: number;
	level: number;
	text: string;
	instruction: Instruction[];
	example: string;
}

export const DataFroggy: DataFroggyTypes[] = [
	// {
	// 	id: 1,
	// 	level: 1,
	// 	text: "Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям, написав CSS код! Направь этого лягушонка на лилию справа, используя свойство justify-content, которое выравнивает элементы горизонтально и принимает следующие значения:",
	// 	instruction: [
	// 		{
	// 			condition1:
	// 				"flex-start: элементы выравниваются по левой стороне контейнера.",
	// 			condition2:
	// 				"flex-end: элементы выравниваются по правой стороне контейнера.",
	// 			condition3: "center: элементы выравниваются по центру контейнера.",
	// 			condition4:
	// 				"space-between: элементы отображаются с одинаковыми отступами между ними.",
	// 			condition5:
	// 				"space-around: элементы отображаются с одинаковыми отступами вокруг них.",
	// 			img1: "https://flexboxfroggy.com/favicon.ico",
	// 			icon1:
	// 				"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
	// 		},
	// 	],
	// 	example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// // {
	// // 	id: 1,
	// // 	level: 1,
	// // 	text: "Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям, написав CSS код! Направь этого лягушонка на лилию справа, используя свойство justify-content, которое выравнивает элементы горизонтально и принимает следующие значения:",
	// // 	instruction: {
	// // 		"flex-start": "элементы выравниваются по левой стороне контейнера.",
	// // 		"flex-end": "элементы выравниваются по правой стороне контейнера.",
	// // 		center: "элементы выравниваются по центру контейнера.",
	// // 		"space-between":
	// // 			"элементы отображаются с одинаковыми отступами между ними.",
	// // 		"space-around":
	// // 			"элементы отображаются с одинаковыми отступами вокруг них.",
	// // 	},
	// // 	example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// // },
	// {
	// 	id: 2,
	// 	level: 2,
	// 	text: "Используй justify-content ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:",
	// 	instruction: [
	// 		{
	// 			condition1:
	// 				"flex-start: элементы выравниваются по левой стороне контейнера.",
	// 			condition2:
	// 				"flex-end: элементы выравниваются по правой стороне контейнера.",
	// 			condition3: "center: элементы выравниваются по центру контейнера.",
	// 			condition4:
	// 				"space-between: элементы отображаются с одинаковыми отступами между ними.",
	// 			condition5:
	// 				"space-around: элементы отображаются с одинаковыми отступами вокруг них.",
	// 			img1: "https://flexboxfroggy.com/favicon.ico",
	// 			img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
	// 			icon1:
	// 				"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
	// 			icon2:
	// 				"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
	// 		},
	// 	],
	// 	example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	{
		id: 1,
		level: 1,
		text: "Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям, написав CSS код! Направь этого лягушонка на лилию справа, используя свойство justify-content, которое выравнивает элементы горизонтально и принимает следующие значения:",
		instruction: [
			{
				condition1:
					"flex-start: элементы выравниваются по левой стороне контейнера.",
				condition2:
					"flex-end: элементы выравниваются по правой стороне контейнера.",
				condition3: "center: элементы выравниваются по центру контейнера.",
				condition4:
					"space-between: элементы отображаются с одинаковыми отступами между ними.",
				condition5:
					"space-around: элементы отображаются с одинаковыми отступами вокруг них.",
				img1: "https://flexboxfroggy.com/favicon.ico",
				icon1:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
			},
		],
		example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 2,
		level: 2,
		text: "Используй justify-content ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:",
		instruction: [
			{
				condition1:
					"flex-start: элементы выравниваются по левой стороне контейнера.",
				condition2:
					"flex-end: элементы выравниваются по правой стороне контейнера.",
				condition3: "center: элементы выравниваются по центру контейнера.",
				condition4:
					"space-between: элементы отображаются с одинаковыми отступами между ними.",
				condition5:
					"space-around: элементы отображаются с одинаковыми отступами вокруг них.",
				imgkh: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				iconkh:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
			},
		],
		example: "Например, justify-content: center; сдвинет лягушонка в центр.",
	},
	{
		id: 3,
		level: 3,
		text: "Помоги всем трём лягушатам найти их лилии, просто используя justify-content. В этот раз у лилий много пространства вокруг.",
		instruction: [
			{
				condition1:
					"Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтобы посмотреть их. Попробуй навести курсор на justify-content.",
				img1: "https://flexboxfroggy.com/favicon.ico",
				img2: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img3: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				icon1:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon2:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon3:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
			},
		],
		example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 4,
		level: 4,
		text: "Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй justify-content. В этот раз у лилий одинаковое расстояние между ними.",
		instruction: [
			{
				condition1: "",
			},
		],
		example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 5,
		level: 5,
		text: "Теперь используй align-items, чтобы помочь лягушатам добраться до нижней части пруда. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения:",
		instruction: [
			{
				condition1:
					"flex-start: элементы выравниваются по верхнему краю контейнера.",
				condition2:
					"flex-end: элементы выравниваются по нижнему краю контейнера.",
				condition3:
					"center: элементы выравниваются вертикально по центру контейнера.",
				condition4:
					"baseline: элементы отображаются на базовой линии контейнера.",
				condition5:
					"stretch: элементы растягиваются, чтобы заполнить контейнер.",
			},
		],
		example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	// {
	// 	id: 6,
	// 	level: 6,
	// 	text: "Направь лягушонка в центр пруда, используя justify-content и align-items вместе.",
	// 	instruction: [
	// 		{
	// 			сondition1: null,
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 7,
	// 	level: 7,
	// 	text: "Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию justify-content и align-items.",
	// 	instruction: [
	// 		{
	// 			сondition1: null,
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 8,
	// 	level: 8,
	// 	text: "Лягушатам нужно выстроиться в том же порядке, что и лилии, используя flex-direction. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:",
	// 	instruction: [
	// 		{
	// 			сondition1: "row: элементы размещаются по направлению текста.",
	// 			сondition2:
	// 				"row-reverse: элементы отображаются в обратном порядке к направлению текста.",
	// 			сondition3: "column: элементы располагаются сверху вниз.",
	// 			сondition4: "column-reverse: элементы располагаются снизу вверх.",
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 9,
	// 	level: 9,
	// 	text: "Помоги лягушатам расположиться на своих лилиях, используя flex-direction. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:",
	// 	instruction: [
	// 		{
	// 			сondition1: "row: элементы размещаются по направлению текста.",
	// 			сondition2:
	// 				"row-reverse: элементы отображаются в обратном порядке к направлению текста.",
	// 			сondition3: "column: элементы распологаются сверху вниз.",
	// 			сondition4: "column-reverse: элементы распологаются снизу вверх.",
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 10,
	// 	level: 10,
	// 	text: "Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, всё же придётся применить и flex-direction, и justify-content, чтобы поместить их на свои лилии.",
	// 	instruction: [
	// 		{
	// 			сondition1:
	// 				"Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.",
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 11,
	// 	level: 11,
	// 	text: "Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.",
	// 	instruction: [
	// 		{
	// 			сondition1:
	// 				"Заметь, когда в качестве направления выбрана колонка, то justify-content влияет на вертикальное выравнивание, а align-items — на горизонтальное.",
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 12,
	// 	level: 12,
	// 	text: "Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.",
	// 	instruction: [
	// 		{
	// 			сondition1: null,
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 13,
	// 	level: 13,
	// 	text: "Помоги лягушатам найти их лилии с помощью flex-direction, justify-content и align-items.",
	// 	instruction: [
	// 		{
	// 			сondition1: null,
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 14,
	// 	level: 14,
	// 	text: "Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство order для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.",
	// 	instruction: [
	// 		{
	// 			сondition1:
	// 				"Используй свойство order, чтобы разместить лягушат на своих лилиях.",
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 15,
	// 	level: 15,
	// 	text: "Используй свойство order, чтобы отправить красного лягушонка на его лилию.",
	// 	instruction: [
	// 		{
	// 			сondition1: null,
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
	// {
	// 	id: 16,
	// 	level: 16,
	// 	text: "Ещё одно свойство, которое ты можешь применить к определенному элементу — это align-self. Это свойство принимает те же значения, что и align-items.",
	// 	instruction: [
	// 		{
	// 			сondition1: null,
	// 		},
	// 	],
	// 	// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	// },
];

console.log(DataFroggy[0]);
