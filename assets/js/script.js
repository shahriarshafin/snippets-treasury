async function getCardAPI() {
	const getjson = await fetch("../assets/cardAPI.json");
	const snippet = await getjson.json();

	const path = window.location.pathname;
	const page = path.split("/").pop();

	if (page === "index.html" || page === "") {
		deploySnipCard(snippet);

		// for (x in snippet) {
		// 	const getId = x + "_Badge";
		// 	console.log(getId);
		// }

		document.getElementById("features_Badge").innerHTML =
			snippet.features.length;
		document.getElementById("cards_Badge").innerHTML = snippet.cards.length;
		document.getElementById("pricing_Badge").innerHTML = snippet.pricing.length;
		document.getElementById("signupLogin_Badge").innerHTML =
			snippet.signupLogin.length;
		document.getElementById("modal_Badge").innerHTML = snippet.modal.length;
		document.getElementById("footer_Badge").innerHTML = snippet.footer.length;
		document.getElementById("tabs_Badge").innerHTML = snippet.tabs.length;
	}
	if (page === "features.html") {
		// shuffle(snippet.features);
		deploySnipCard(snippet.features);
	}
	if (page === "cards.html") {
		// shuffle(snippet.cards);
		deploySnipCard(snippet.cards);
	}
	if (page === "pricing.html") {
		// shuffle(snippet.pricing);
		deploySnipCard(snippet.pricing);
	}
	if (page === "signup-login.html") {
		// shuffle(snippet.signupLogin);
		deploySnipCard(snippet.signupLogin);
	}
	if (page === "modal.html") {
		// shuffle(snippet.modal);
		deploySnipCard(snippet.modal);
	}
	if (page === "footer.html") {
		// shuffle(snippet.footer);
		deploySnipCard(snippet.footer);
	}
	if (page === "tabs.html") {
		// shuffle(snippet.tabs);
		deploySnipCard(snippet.tabs);
	}
}

const shuffle = (array) => {
	var currentIndex = array.length,
		randomIndex;
	while (currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
};

const deploySnipCard = (snippet) => {
	const arr = Object.entries(snippet);
	arr.forEach((item) => {
		item[1].forEach((item2) => {
			// const { tech, tags, tagsUrl, status, imgSrc, imgUrl, caption } = item2;
			appendCard(item2);
		});
	});
};

const createElementAndAddingClass = (type, alternativeOptions, ...stringOfStyles) => {

	const el = document.createElement(type);

	const { innerHTML, href, imgUrl, alt, loading, src } = alternativeOptions;

	if (stringOfStyles) {
		el.classList.add(...stringOfStyles);
	}
	if (innerHTML) {
		el.innerHTML = innerHTML
	}
	if (href) {
		el.href = href
	}
	if (imgUrl) {
		el.imgUrl = imgUrl
	}
	if (alt) {
		el.alt = alt
	}
	if (loading) {
		el.loading = loading
	}
	if (src) {
		el.src = src
	}

	el.classList.add(...stringOfStyles);

	console.log(el);
	return el;
};

const appendCard = item2 => {
	const { tech, tags, tagsUrl, status, imgSrc, imgUrl, caption } = item2;
	// console.table(caption);

	const mainDiv = document.getElementById("root");
	mainDiv.classList.add("row");

	const col_12_6_4 = createElementAndAddingClass("div",
		{},
		"col-12",
		"col-lg-4",
		"col-md-6"
	);

	const snipCard = createElementAndAddingClass("div",
		{},
		"snip-card",
		"mt-5",
		"p-2"
	);

	const cardTop = createElementAndAddingClass("div",
		{},
		"d-flex",
		"justify-content-between"
	);

	const cardTopLeft = createElementAndAddingClass("div", {});

	const cardTopleftSpan = createElementAndAddingClass("span",
		{ innerHTML: tech },
		"badge",
		"btn-purple",
		"mb-2"
	)

	const cardTopleftA = createElementAndAddingClass("a",
		{ href: tagsUrl }
	)

	const cardTopleft_a_span = createElementAndAddingClass("span",
		{ innerHTML: tags },
		"badge",
		"bg-danger",
		"mb-2",
		"mx-1"
	)

	// const cardTopRight = document.createElement("div");
	const cardTopRight = createElementAndAddingClass("div", {})

	const cardTopRightSpan = createElementAndAddingClass("span",
		{ innerHTML: status },
		"badge",
		"bg-success",
		"mb-2"
	)


	// const cardMid_a = document.createElement("a");
	// cardMid_a.href = imgUrl;

	const cardMid_a = createElementAndAddingClass("a",
		{ href: imgUrl }
	)

	// const cardMid_a_div = document.createElement("div");
	// cardMid_a_div.classList.add("bg-dark");

	const cardMid_a_div = createElementAndAddingClass("div",
		{},
		"bg-dark"
	)

	const cardMid_img = createElementAndAddingClass("img",
		{ alt: "click here", loading: "lazy", src: imgSrc },
		"card-img",
		"img-fluid"
	)

	const cardCaption = createElementAndAddingClass("p",
		{ innerHTML: caption },
		"snip-card-cap",
		"my-2"
	)

	const Elements = [
		mainDiv,
		col_12_6_4,
		snipCard,
		cardTop,
		cardTopLeft,
		cardTopleftA,
		cardTopRight,
		cardMid_a,
		cardMid_a_div
	]

	Elements.reduce((acc, el) => {

		acc.appendChild(el)

		return el

	})

	// Append Elements
	mainDiv.appendChild(col_12_6_4);
	col_12_6_4.appendChild(snipCard);
	// Card Top
	snipCard.appendChild(cardTop);
	cardTop.appendChild(cardTopLeft);
	cardTopLeft.appendChild(cardTopleftSpan);
	cardTopLeft.appendChild(cardTopleftA);
	cardTopleftA.appendChild(cardTopleft_a_span);
	cardTop.appendChild(cardTopRight);
	cardTopRight.appendChild(cardTopRightSpan);
	// Card Mid
	snipCard.appendChild(cardMid_a);
	cardMid_a.appendChild(cardMid_a_div);
	cardMid_a_div.appendChild(cardMid_img);
	// Card Bottom
	snipCard.appendChild(cardCaption);

};

// const appendCard = (item2) => {

// const { tech, tags, tagsUrl, status, imgSrc, imgUrl, caption } = item2;
// console.table(caption);

// 	const mainDiv = document.getElementById("root");
// 	mainDiv.innerHTML += `
// 	<div class="col-12 col-lg-4 col-md-6">
//     	<div class="snip-card mt-5 p-2">
//         	<div class="d-flex justify-content-between">
//             	<div>
//                 	<span class="badge bg-primary mb-2">${tech}</span>
//                 	<a href="${tagsUrl}">
//                     <span class="badge bg-danger mb-2 mx-1">${tags}</span></a>
//             	</div>
//             	<div>
//                 	<span class="badge bg-success mb-2">${status}</span>
//             	</div>
//         	</div>
//         	<a href="${imgUrl}">
//             	<div class="bg-dark">
//                 	<img class="card-img img-fluid" alt="click here" loading="lazy"
//                     	src="${imgSrc}">
//             	</div>
//         	</a>
//         	<p class="snip-card-cap my-2">${caption}</p>
//     	</div>
// 	</div>`;
// };

const backTotopClicked = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

const scrollFunction = () => {
	const mybutton = document.getElementById("backtotopBtn");

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
};

window.onscroll = function () {
	scrollFunction();
};

getCardAPI();
