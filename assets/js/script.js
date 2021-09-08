getCardAPI();

// functions
async function getCardAPI() {
	const jsondata = await fetch("../cardAPI.json");
	const jsdata = await jsondata.json();

	for (x in jsdata.card) {
		// console.table(jsdata.card[x]);
		const tech = jsdata.card[x].tech;
		const tags = jsdata.card[x].tags;
		const tagsUrl = jsdata.card[x].tagsUrl;
		const status = jsdata.card[x].status;
		const imgSrc = jsdata.card[x].imgSrc;
		const imgUrl = jsdata.card[x].imgUrl;
		const caption = jsdata.card[x].caption;
		appendCard(tech, tags, tagsUrl, status, imgSrc, imgUrl, caption);
	}
}

const appendCard = (tech, tags, tagsUrl, status, imgSrc, imgUrl, caption) => {
	// console.table(tags);
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
	cardMid_img.alt = "i am alt";
	cardMid_img.loading = "lazy";
	cardMid_img.src = imgSrc;

	const cardCaption = document.createElement("p");
	cardCaption.classList.add("snip-card-cap", "my-2");
	cardCaption.innerHTML = caption;

	// Append
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
