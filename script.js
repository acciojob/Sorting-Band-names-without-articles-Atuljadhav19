//your code here

let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Red Hot Chili Peppers', 'AC/DC'];

function sortBandNames(names) {
  const articles = ['a', 'an', 'the'];

  // Function to remove articles from a band name
  function removeArticles(name) {
    const words = name.split(' ');
    const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
    return filteredWords.join(' ');
  }

  // Sorting the band names without articles
  const sortedNames = names.sort((a, b) => {
    const nameA = removeArticles(a);
    const nameB = removeArticles(b);
    return nameA.localeCompare(nameB);
  });

  // Generating the unordered list
  const ulElement = document.getElementById('bands');
  sortedNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
  });
}

sortBandNames(bandNames);