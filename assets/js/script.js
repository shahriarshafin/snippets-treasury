async function getCardAPI() {
	const getjson = await fetch('../assets/cardAPI.json');
	const snippet = await getjson.json();

	const path = window.location.pathname;
	const page = path.split('/').pop();

	if (page == 'index.html' || page == '') {
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
		shuffle(snippet.footer);
		deploySnipCard(snippet.footer);
		shuffle(snippet.tabs);
		deploySnipCard(snippet.tabs);
		shuffle(snippet.newsletter);
		deploySnipCard(snippet.newsletter);
		shuffle(snippet.message);
		deploySnipCard(snippet.message);

		// for (x in snippet) {
		// 	const getId = x + "_Badge";
		// 	console.log(getId);
		// }

		document.getElementById('features_Badge').innerHTML =
			snippet.features.length;
		document.getElementById('cards_Badge').innerHTML = snippet.cards.length;
		document.getElementById('pricing_Badge').innerHTML = snippet.pricing.length;
		document.getElementById('signupLogin_Badge').innerHTML =
			snippet.signupLogin.length;
		document.getElementById('modal_Badge').innerHTML = snippet.modal.length;
		document.getElementById('footer_Badge').innerHTML = snippet.footer.length;
		document.getElementById('tabs_Badge').innerHTML = snippet.tabs.length;
		document.getElementById('newsletter_Badge').innerHTML =
			snippet.newsletter.length;
		document.getElementById('message_Badge').innerHTML =
			snippet.newsletter.length;
	}
	if (page == 'features.html') {
		deploySnipCard(snippet.features);
	}
	if (page == 'cards.html') {
		deploySnipCard(snippet.cards);
	}
	if (page == 'pricing.html') {
		deploySnipCard(snippet.pricing);
	}
	if (page == 'signup-login.html') {
		deploySnipCard(snippet.signupLogin);
	}
	if (page == 'modal.html') {
		deploySnipCard(snippet.modal);
	}
	if (page == 'footer.html') {
		deploySnipCard(snippet.footer);
	}
	if (page == 'tabs.html') {
		deploySnipCard(snippet.tabs);
	}
	if (page == 'newsletter.html') {
		deploySnipCard(snippet.newsletter);
	}
	if (page == 'message.html') {
		deploySnipCard(snippet.message);
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
	// console.table(caption);

	const mainDiv = document.getElementById('root');
	mainDiv.classList.add('row');

	const col_12_6_4 = document.createElement('div');
	col_12_6_4.classList.add('col-12', 'col-lg-4', 'col-md-6');

	const snipCard = document.createElement('div');
	snipCard.classList.add('snip-card', 'mt-5', 'p-2');

	const cardTop = document.createElement('div');
	cardTop.classList.add('d-flex', 'justify-content-between');

	const cardTopLeft = document.createElement('div');

	const cardTopleftSpan = document.createElement('span');
	cardTopleftSpan.classList.add('badge', 'btn-purple', 'mb-2');
	cardTopleftSpan.innerHTML = tech;

	const cardTopleftA = document.createElement('a');
	cardTopleftA.href = tagsUrl;

	const cardTopleft_a_span = document.createElement('span');
	cardTopleft_a_span.classList.add('badge', 'bg-danger', 'mb-2', 'mx-1');
	cardTopleft_a_span.innerHTML = tags;

	const cardTopRight = document.createElement('div');

	const cardTopRightSpan = document.createElement('span');
	cardTopRightSpan.classList.add('badge', 'bg-success', 'mb-2');
	cardTopRightSpan.innerHTML = status;

	const cardMid_a = document.createElement('a');
	cardMid_a.href = imgUrl;

	const cardMid_a_div = document.createElement('div');
	cardMid_a_div.classList.add('bg-dark');

	const cardMid_img = document.createElement('img');
	cardMid_img.classList.add('card-img', 'img-fluid');
	cardMid_img.alt = 'click here';
	cardMid_img.loading = 'lazy';
	cardMid_img.src = imgSrc;

	const cardCaption = document.createElement('p');
	cardCaption.classList.add('snip-card-cap', 'my-2');
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

// const appendCard = (tech, tags, tagsUrl, status, imgSrc, imgUrl, caption) => {
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
	const mybutton = document.getElementById('backtotopBtn');

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
};

window.onscroll = function () {
	scrollFunction();
};

getCardAPI();
