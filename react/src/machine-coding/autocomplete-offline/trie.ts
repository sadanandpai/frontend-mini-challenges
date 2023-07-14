/* eslint-disable no-prototype-builtins */
class Trie {
  trie: { [key: string]: any };

  constructor(arr: string[] = []) {
    this.trie = {};
    this.addWordsToTrie(arr);
  }

  addWordsToTrie(arr: string[]): void {
    for (let item of arr) {
      let obj: { [key: string]: any } = this.trie;
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

  getWordsFromTrie(word: string, count: number): string[] {
    word = word.toLowerCase();
    let obj: { [key: string]: any } = this.trie;
    for (const key of word) {
      obj = obj[key];

      if (!obj) {
        return [];
      }
    }

    return this.getWordsByDFS(obj, count, word);
  }

  getWordsByDFS(
    trie: { [key: string]: any },
    count = Infinity,
    text = "",
    result: string[] = []
  ): string[] {
    if (trie.end) {
      result.push(text);

      if (result.length === count) {
        return result;
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

export default Trie;
