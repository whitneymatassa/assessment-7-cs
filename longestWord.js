function longestString(strs) {
    let longest = '';
    for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longest.length)
    longest = strs[i];
    }
    return longest.length;
    }

    console.log(longestString(["hi", "hello"]))

    // O(n)