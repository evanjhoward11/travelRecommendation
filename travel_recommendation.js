function search() {
    const apiURL = "travel_recommendation_api.json";
    const input = document.getElementById("destinationInput").value.toLowerCase();
    const divElem = document.getElementById("results");
    divElem.innerHTML = "";

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            let results = [];
            if (input === "country" || input === "countries") {
                data.countries.forEach(country => {
                    country.cities.forEach(city => {
                        results.push(city);
                    })
                });
            }
            else if (input === "temple" || input === "temples") {
                results = data.temples;
            }
            else if (input === "beach" || input === "beaches") {
                results = data.beaches;
            }

            results.forEach((result) => {
                const ul = document.createElement("ul");
                ul.innerHTML = `
                    <li><img src=${result.imageURL}></li>
                    <li>${result.name}</li>
                    <li>${result.description}</li>
                `;

                divElem.appendChild(ul);
            });

        });
}

function clear() {
    divElem = document.getElementById("results");
    divElem.innerHTML = "";
}

btnSearch.addEventListener('click', search);
btnClear.addEventListener('click', clear)
