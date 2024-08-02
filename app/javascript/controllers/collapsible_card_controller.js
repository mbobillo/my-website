import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["text", "button"];

  connect() {
    this.collapsedHeight = "6em";
    this.expanded = false;
    this.textTargets.forEach(text => {
      text.style.maxHeight = this.collapsedHeight;
      text.style.overflow = "hidden";
      text.style.transition = "max-height 0.3s ease";
    });
  }

  toggle() {
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.expandAll();
    } else {
      this.collapseAll();
    }
  }

  expandAll() {
    this.textTargets.forEach(text => {
      text.style.maxHeight = "none";
      text.style.overflow = "visible";
    });
    this.buttonTargets.forEach(button => {
      button.textContent = "Lire moins";
    });
  }

  collapseAll() {
    this.textTargets.forEach(text => {
      text.style.maxHeight = this.collapsedHeight;
      text.style.overflow = "hidden"; 
    });
    this.buttonTargets.forEach(button => {
      button.textContent = "Lire la suite";
    });
  }
}
