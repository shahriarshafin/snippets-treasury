// const onloadFunction = () => {
// 	const path = window.location.pathname;
// 	const page = path.split("/").pop();

// 	if (page == "index.html") {
// 		mainDiv = document.getElementById("root");
// 	}
// 	if (page == "features.html") {
// 		mainDiv = document.getElementById("features-root");
// 	}
// 	if (page == "cards.html") {
// 		mainDiv = document.getElementById("cards-root");
// 	}
// 	if (page == "pricing.html") {
// 		mainDiv = document.getElementById("pricing-root");
// 	}
// 	if (page == "signup-login.html") {
// 		mainDiv = document.getElementById("signup-login-root");
// 	}
// 	if (page == "modal.html") {
// 		mainDiv = document.getElementById("modal-root");
// 	}
// };

async function getCardAPI() {
	const getjson = await fetch("../assets/cardAPI.json");
	const snippet = await getjson.json();

	const path = window.location.pathname;
	const page = path.split("/").pop();

	if (page == "index.html") {
		shuffle(snippet.features);
		deploySnipCard(snippet.features);
		shuffle(snippet.cards);
		deploySnipCard(snippet.cards);
		shuffle(snippet.pricing);
		deploySnipCard(snippet.pricing);
		shuffle(snippet.signupLogin);
		deploySnipCard(snippet.signupLogin);
		shuffle(snippet.modal);
		deploySnipCard(snippet.modal);
	}
	if (page == "features.html") {
		shuffle(snippet.features);
		deploySnipCard(snippet.features);
	}
	if (page == "cards.html") {
		shuffle(snippet.cards);
		deploySnipCard(snippet.cards);
	}
	if (page == "pricing.html") {
		shuffle(snippet.pricing);
		deploySnipCard(snippet.pricing);
	}
	if (page == "signup-login.html") {
		shuffle(snippet.signupLogin);
		deploySnipCard(snippet.signupLogin);
	}
	if (page == "modal.html") {
		shuffle(snippet.modal);
		deploySnipCard(snippet.modal);
	}
}

const shuffle = (array) => {
	var currentIndex = array.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
};

const deploySnipCard = (getSnip) => {
	for (x in getSnip) {
		const tech = getSnip[x].tech;
		const tags = getSnip[x].tags;
		const tagsUrl = getSnip[x].tagsUrl;
		const status = getSnip[x].status;
		const imgSrc = getSnip[x].imgSrc;
		const imgUrl = getSnip[x].imgUrl;
		const caption = getSnip[x].caption;
		appendCard(tech, tags, tagsUrl, status, imgSrc, imgUrl, caption);
	}
};

const appendCard = (tech, tags, tagsUrl, status, imgSrc, imgUrl, caption) => {
	console.table(caption);

	const mainDiv = document.getElementById("root");
	mainDiv.classList.add("row");

	const col_12_6_4 = document.createElement("div");
	col_12_6_4.classList.add("col-12", "col-lg-4", "col-md-6");

	const snipCard = document.createElement("div");
	snipCard.classList.add("snip-card", "mt-5", "p-2");

	const cardTop = document.createElement("div");
	cardTop.classList.add("d-flex", "justify-content-between");

	const cardTopLeft = document.createElement("div");

	const cardTopleftSpan = document.createElement("span");
	cardTopleftSpan.classList.add("badge", "bg-primary", "mb-2");
	cardTopleftSpan.innerHTML = tech;

	const cardTopleftA = document.createElement("a");
	cardTopleftA.href = tagsUrl;

	const cardTopleft_a_span = document.createElement("span");
	cardTopleft_a_span.classList.add("badge", "bg-danger", "mb-2", "mx-1");
	cardTopleft_a_span.innerHTML = tags;

	const cardTopRight = document.createElement("div");

	const cardTopRightSpan = document.createElement("span");
	cardTopRightSpan.classList.add("badge", "bg-success", "mb-2");
	cardTopRightSpan.innerHTML = status;

	const cardMid_a = document.createElement("a");
	cardMid_a.href = imgUrl;

	const cardMid_a_div = document.createElement("div");
	cardMid_a_div.classList.add("bg-dark");

	const cardMid_img = document.createElement("img");
	cardMid_img.classList.add("card-img", "img-fluid");
	cardMid_img.alt = "image not found";
	cardMid_img.loading = "lazy";
	cardMid_img.src = imgSrc;

	const cardCaption = document.createElement("p");
	cardCaption.classList.add("snip-card-cap", "my-2");
	cardCaption.innerHTML = caption;

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
// onloadFunction();
