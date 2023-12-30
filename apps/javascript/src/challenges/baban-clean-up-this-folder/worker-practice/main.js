// import "./styles.css";

const worker = new Worker("./generate.js");

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output"
  ).textContent = `Finished generating ${message.data} primes!`;
});
