function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

  console.log(hasUniqueChars("tadpole"))
  console.log(hasUniqueChars("buttons"))

  // O(1), constant time