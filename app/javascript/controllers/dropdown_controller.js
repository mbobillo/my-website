import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]

  connect() {
    console.log("Dropdown controller connected")
  }

  toggle() {
    console.log("check")
    if (this.menuTarget) {
      this.menuTarget.classList.toggle("show")
    } else {
      console.error("menuTarget is not found")
    }
  }
}
