const items = [
  "okaxis",
  "BARODAMPAY",
  "rbl",
  "upi",
  "allbank",
  "aubank",
  "axisbank",
  "bandhan",
  "indus",
  "kbl",
  "federal",
  "sbi",
  "yesbank",
  "citi",
  "citigold",
  "dlb",
  "dbs",
  "freecharge",
  "hsbc",
  "icici",
  "kotak",
  "paytm",
  "ybl",
  "okhdfcbank",
  "okicici",
  "oksbi",
  "axl",
  "ibl",
  "sib",
];

async function searchProducts(searchQuery) {
  if (!searchQuery) return [];
  return items.filter((item) => {
    // const searchRegex = new RegExp(`^${searchQuery}`, "i");
    if (item.startsWith(searchQuery)) return item;
  });

  // const url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=435aa7f22d714658a0e45c1609c5e0dd&pageSize=10&language=en&searchIn=title`;
  // // : "https://newsapi.org/v2/top-headlines?country=in&apiKey=435aa7f22d714658a0e45c1609c5e0dd&pageSize=10&country=in";
  // let response = await fetch(url);
  // response = await response.json();
  // if (response.articles.length > 0) {
  //   return response.articles.map(({ source, title }) => ({
  //     id: source?.id,
  //     title,
  //   }));
  // }
  // return response.articles;
}

export function debouncedSearchProducts(onSuccess, delay) {
  // to improve callback's call
  let timeoutId = null;
  return (searchQuery) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(async () => {
      const products = await searchProducts(searchQuery);
      onSuccess({ products, searchQuery });
    }, delay);
  };
}
