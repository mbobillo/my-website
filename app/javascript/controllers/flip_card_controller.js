import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card"];

  connect() {
    this.addAppropriateListener();
    console.log("Controller connected");
  }

  addAppropriateListener() {
    if (this.isMobile()) {
      this.cardTargets.forEach(card => card.addEventListener("click", this.flip.bind(this)));
    } else {
      this.cardTargets.forEach(card => {
        card.addEventListener("mouseover", this.flip.bind(this));
        card.addEventListener("mouseout", this.flip.bind(this));
      });
    }
  }

  isMobile() {
    return window.innerWidth <= 1024;
  }

  flip(event) {
    event.currentTarget.classList.toggle("is-flipped");
  }
}
