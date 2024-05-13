document.getElementById('searchButton').addEventListener('click', search);
              
              function search() {
                  const searchTerm = encodeURIComponent(document.getElementById('searchInput').value);
                  const ingredients = encodeURIComponent(document.getElementById('ingredientsInput').value);
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
                      recipeDiv.textContent = `Name: ${recipe.name} Ingredients: ${recipe.ingredients}
                      Instructions:${recipe.instructions}`;
                      searchResultsDiv.appendChild(recipeDiv);
                  });
              };


document.getElementById('searchButton2').addEventListener('click', lookup);
              
              function lookup() {
                  const searchTerm = encodeURIComponent(document.getElementById('searchInput').value);
                  const ingredients = encodeURIComponent(document.getElementById('ingredientsInput').value);
                  let baseURL = "https://api.api-ninjas.com/v1/cocktail";
                  let myKey = "Fvgwx0GoSoc8O88Lryedl5EJyfpvRtdh9Zlbjr1k";
                  let url = `${baseURL}?X-Api-Key=${myKey}&ingredients=${ingredients}`;

                  fetch(url)
                      .then(response => {
                          if (!response.ok) {
                              throw new Error('Network response was not ok');
                          }
                          return response.json();
                      })
                      .then(data => {
                          displayIngredients(data); 
                      })
                      .catch(error => {
                          console.error('There was a problem with the fetch operation:', error);
                      });
              }

              function displayIngredients(data) {
                  const ResultsDiv = document.getElementById('Results');
                  ResultsDiv.innerHTML = ""; 
                  data.forEach(recipe => {
                      const ingDiv = document.createElement('div');
                      ingDiv.textContent = `Name: ${recipe.name} Ingredients: ${recipe.ingredients}
                      Instructions:${recipe.instructions}`; 
                      ResultsDiv.appendChild(ingDiv);
                  });
              }
      
      

