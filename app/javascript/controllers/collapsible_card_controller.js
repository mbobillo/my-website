import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["text", "button"];

  connect() {
    this.collapsedHeight = this.textTarget.scrollHeight;
    this.textTarget.style.maxHeight = "6em";
  }

  toggle() {
    if (this.textTarget.style.maxHeight === "6em") {
      this.textTarget.style.maxHeight = `${this.collapsedHeight}px`;
      this.buttonTarget.textContent = "Lire moins";
    } else {
      this.textTarget.style.maxHeight = "6em";
      this.buttonTarget.textContent = "Lire la suite";
    }
  }
}
