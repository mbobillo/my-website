import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "tab", "content" ]

  connect() {
    this.showContent(this.contentTargets[0])
    this.setActiveTab(this.tabTargets[0])
  }

  showContent(target) {
    this.contentTargets.forEach(content => {
      content.classList.remove('active')
    })
    target.classList.add('active')
  }

  setActiveTab(tab) {
    this.tabTargets.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
  }

  changeTab(event) {
    event.preventDefault()
    const targetId = event.currentTarget.dataset.target
    const targetContent = this.contentTargets.find(content => content.id === targetId)
    this.showContent(targetContent)
    this.setActiveTab(event.currentTarget)
  }
}

