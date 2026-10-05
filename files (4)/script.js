document.addEventListener("DOMContentLoaded", () => {
  const callButton = document.querySelector(".call-button");

  callButton?.addEventListener("click", () => {
    callButton.classList.add("is-pressed");

    window.setTimeout(() => {
      callButton.classList.remove("is-pressed");
    }, 180);
  });
});
