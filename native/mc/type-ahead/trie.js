export class Trie {
  constructor(arr = []) {
    this.trie = {};
    this.addWordsToTrie(arr);
  }

  addWordsToTrie(arr) {
    for (let item of arr) {
      let obj = this.trie;
      item = item.toLowerCase();
      for (const key of item) {
        if (!obj.hasOwnProperty(key)) {
          obj[key] = {};
        }

        obj = obj[key];
      }
      obj.end = true;
    }
  }

  getWordsFromTrie(word, count) {
    word = word.toLowerCase();
    let obj = this.trie;
    for (const key of word) {
      obj = obj[key];

      if (!obj) {
        return [];
      }
    }

    return this.getWordsByDFS(obj, count, word);
  }

  getWordsByDFS(trie, count = Infinity, text = '', result = []) {
    if (trie.end) {
      result.push(text);

      if (result.length === count) {
        return;
      }
    }

    for (const key in trie) {
      if (trie.hasOwnProperty(key)) {
        this.getWordsByDFS(trie[key], count, text + key, result);
        if (result.length === count) {
          break;
        }
      }
    }

    return result;
  }
}
