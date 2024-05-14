document.getElementById('searchButton2').addEventListener('click', lookup);
              
              function lookup() {
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
                      ingDiv.innerHTML = `<u>Name:</u> ${recipe.name}<br><u>Ingredients:</u> ${recipe.ingredients}<br><u>Instructions:</u> ${recipe.instructions}<br><br>`; 
                      ResultsDiv.appendChild(ingDiv);
                  });
                };
