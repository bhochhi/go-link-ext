

// Update the suggestions whenever the input is changed.
chrome.omnibox.onInputChanged.addListener(function(text, addSuggestions) {
    repositories.search(text, function(success, content) {
      if (!success) {
        addSuggestions([
          {
            content: "https://github.com/search?q=" + text,
            description: "An error occurred while fetching data from Algolia"
          }
        ]);
        return;
      }
  
      if (content.hits.length === 0) {
        addSuggestions([
          {
            content: "http//github.com/search?q=" + text,
            description: "No results found, search on GitHub by pressing [ENTER]"
          }
        ]);
        return;
      }

      var hits = content.hits;
      var suggestions = [];
  
      for (var index in hits) {
        if (isFirefox) {
          suggestions.push(formatFirefoxSuggestion(hits[index]));
        } else {
          suggestions.push(formatSuggestion(hits[index]));
        }
      }
      addSuggestions(suggestions);
    });
  });
  