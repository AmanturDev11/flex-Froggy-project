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
	img4?: string;
	img5?: string;
	img6?: string;
	img7?: string;
	img8?: string;
	img9?: string;
	img10?: string;
	img11?: string;
	img12?: string;
	img13?: string;
	img14?: string;
	img15?: string;
	img16?: string;
	img17?: string;
	img18?: string;
	img19?: string;
	img20?: string;
	img21?: string;
	img22?: string;
	img23?: string;
	img24?: string;
	img25?: string;
	img26?: string;
	img27?: string;
	img28?: string;
	img29?: string;
	img30?: string;
	img31?: string;
	img32?: string;
	img33?: string;
	icon3?: string;
	icon4?: string;
	icon5?: string;
	icon6?: string;
	icon7?: string;
	icon8?: string;
	icon9?: string;
	icon10?: string;
	icon11?: string;
	icon12?: string;
	icon13?: string;
	icon14?: string;
	icon15?: string;
	icon16?: string;
	icon17?: string;
	icon18?: string;
	icon19?: string;
	icon20?: string;
	icon21?: string;
	icon22?: string;
	icon23?: string;
	icon24?: string;
	icon25?: string;
	icon26?: string;
	icon27?: string;
	icon28?: string;
	icon29?: string;
	icon30?: string;
	icon31?: string;
	icon32?: string;
	icon33?: string;
};

interface DataFroggyTypes {
	id: number;
	level: number;
	text: string;
	instruction: Instruction[];
	example?: string;
}

export const DataFroggy: DataFroggyTypes[] = [
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
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
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
				img3: "https://flexboxfroggy.com/favicon.ico",
				img5: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img4: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				icon3:
					"https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch.jpg",
				icon5:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon4:
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
				img6: "https://flexboxfroggy.com/favicon.ico",
				img7: "https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img8: "https://avatars.yandex.net/get-music-content/4387391/1ae22049.a.15938843-1/m1000x1000?webp=false",
				icon6:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				icon7:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon8:
					"https://catherineasquithgallery.com/uploads/posts/2021-02/1612890067_59-p-krasnii-odnotonnii-fon-64.jpg",
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
				img9: "https://flexboxfroggy.com/favicon.ico",
				img10:
					"https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img11:
					"https://avatars.yandex.net/get-music-content/4387391/1ae22049.a.15938843-1/m1000x1000?webp=false",
				icon9:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				icon10:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon11:
					"https://catherineasquithgallery.com/uploads/posts/2021-02/1612890067_59-p-krasnii-odnotonnii-fon-64.jpg",
			},
		],
		example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 6,
		level: 6,
		text: "Направь лягушонка в центр пруда, используя justify-content и align-items вместе.",
		instruction: [
			{
				img12: "https://flexboxfroggy.com/favicon.ico",
				icon12:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
			},
		],
		// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 7,
		level: 7,
		text: "Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию justify-content и align-items.",
		instruction: [
			{
				img13: "https://flexboxfroggy.com/favicon.ico",
				img14:
					"https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img15:
					"https://avatars.yandex.net/get-music-content/4387391/1ae22049.a.15938843-1/m1000x1000?webp=false",
				icon13:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				icon14:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon15:
					"https://catherineasquithgallery.com/uploads/posts/2021-02/1612890067_59-p-krasnii-odnotonnii-fon-64.jpg",
			},
		],
		// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 8,
		level: 8,
		text: "Лягушатам нужно выстроиться в том же порядке, что и лилии, используя flex-direction. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:",
		instruction: [
			{
				condition1: "row: элементы размещаются по направлению текста.",
				condition2:
					"row-reverse: элементы отображаются в обратном порядке к направлению текста.",
				condition3: "column: элементы располагаются сверху вниз.",
				condition4: "column-reverse: элементы располагаются снизу вверх.",
				img16: "https://flexboxfroggy.com/favicon.ico",
				img17:
					"https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img18:
					"https://avatars.yandex.net/get-music-content/4387391/1ae22049.a.15938843-1/m1000x1000?webp=false",
				icon18:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				icon17:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon16:
					"https://catherineasquithgallery.com/uploads/posts/2021-02/1612890067_59-p-krasnii-odnotonnii-fon-64.jpg",
			},
		],
		// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 9,
		level: 9,
		text: "Помоги лягушатам расположиться на своих лилиях, используя flex-direction. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:",
		instruction: [
			{
				condition1: "row: элементы размещаются по направлению текста.",
				condition2:
					"row-reverse: элементы отображаются в обратном порядке к направлению текста.",
				condition3: "column: элементы распологаются сверху вниз.",
				condition4: "column-reverse: элементы распологаются снизу вверх.",
				img19: "https://flexboxfroggy.com/favicon.ico",
				img20:
					"https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img21:
					"https://avatars.yandex.net/get-music-content/4387391/1ae22049.a.15938843-1/m1000x1000?webp=false",
				icon19:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				icon20:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon21:
					"https://catherineasquithgallery.com/uploads/posts/2021-02/1612890067_59-p-krasnii-odnotonnii-fon-64.jpg",
			},
		],
		// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 10,
		level: 10,
		text: "Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, всё же придётся применить и flex-direction, и justify-content, чтобы поместить их на свои лилии.",
		instruction: [
			{
				condition1:
					"Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.",
				img22: "https://flexboxfroggy.com/favicon.ico",
				img23:
					"https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img24:
					"https://avatars.yandex.net/get-music-content/4387391/1ae22049.a.15938843-1/m1000x1000?webp=false",
				icon22:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				icon23:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon24:
					"https://catherineasquithgallery.com/uploads/posts/2021-02/1612890067_59-p-krasnii-odnotonnii-fon-64.jpg",
			},
		],
		// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 11,
		level: 11,
		text: "Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.",
		instruction: [
			{
				condition1:
					"Заметь, когда в качестве направления выбрана колонка, то justify-content влияет на вертикальное выравнивание, а align-items — на горизонтальное.",
				img25: "https://flexboxfroggy.com/favicon.ico",
				img26:
					"https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img27:
					"https://avatars.yandex.net/get-music-content/4387391/1ae22049.a.15938843-1/m1000x1000?webp=false",
				icon25:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				icon26:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon27:
					"https://catherineasquithgallery.com/uploads/posts/2021-02/1612890067_59-p-krasnii-odnotonnii-fon-64.jpg",
			},
		],
		// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 12,
		level: 12,
		text: "Помоги лягушатам найти их лилии с помощью flex-direction и justify-content.",
		instruction: [
			{
				img28: "https://flexboxfroggy.com/favicon.ico",
				img29:
					"https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img30:
					"https://avatars.yandex.net/get-music-content/4387391/1ae22049.a.15938843-1/m1000x1000?webp=false",
				icon28:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				icon29:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon30:
					"https://catherineasquithgallery.com/uploads/posts/2021-02/1612890067_59-p-krasnii-odnotonnii-fon-64.jpg",
			},
		],
		// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 13,
		level: 13,
		text: "Помоги лягушатам найти их лилии с помощью flex-direction, justify-content и align-items.",
		instruction: [
			{
				img31: "https://flexboxfroggy.com/favicon.ico",
				img32:
					"https://i.pinimg.com/originals/17/c5/45/17c545d994ff3fec519c9e2b522da4c3.jpg",
				img33:
					"https://avatars.yandex.net/get-music-content/4387391/1ae22049.a.15938843-1/m1000x1000?webp=false",
				icon31:
					"https://st3.depositphotos.com/4124697/14252/i/450/depositphotos_142522847-stock-photo-abstract-composition-color.jpg",
				icon32:
					"https://upload.wikimedia.org/wikipedia/commons/d/d0/Color-yellow.JPG",
				icon33:
					"https://catherineasquithgallery.com/uploads/posts/2021-02/1612890067_59-p-krasnii-odnotonnii-fon-64.jpg",
			},
		],
		// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
	{
		id: 14,
		level: 14,
		text: "Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство order для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.",
		instruction: [
			{
				condition1:
					"Используй свойство order, чтобы разместить лягушат на своих лилиях.",
			},
		],
		// example: "Например, justify-content: flex-end; сдвинет лягушонка вправо.",
	},
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
