document.getElementById('searchButton').addEventListener('click', search);
              
              function search() {
                  const searchTerm = encodeURIComponent(document.getElementById('searchInput').value);
                  let baseURL = "https://api.api-ninjas.com/v1/cocktail";
                  let myKey = "Fvgwx0GoSoc8O88Lryedl5EJyfpvRtdh9Zlbjr1k";
                  let url = `${baseURL}?name=${searchTerm}&X-Api-Key=${myKey}`;

                  fetch(url)
                      .then(response => {
                          if (!response.ok) {
                              throw new Error('Network response was not ok');
                          }
                          return response.json();
                      })
                      .then(data => {
                          displayRecipes(data); 
                      })
                      .catch(error => {
                          console.error('There was a problem with the fetch operation:', error);
                      });
              }

              function displayRecipes(data) {
                  const searchResultsDiv = document.getElementById('searchResults');
                  searchResultsDiv.innerHTML = ""; 
                  data.forEach(recipe => {
                      const recipeDiv = document.createElement('div');
                      recipeDiv.innerHTML = `<u>Name:</u> ${recipe.name}<br><u>Ingredients:</u> ${recipe.ingredients}<br><u>Instructions:</u> ${recipe.instructions}<br><br>`; ;
                      searchResultsDiv.appendChild(recipeDiv);
                  });
              };