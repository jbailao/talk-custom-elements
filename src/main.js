class Jaspion extends HTMLElement {
  hasOpened = false;
  triggerElement;

  constructor() {
    super();
    this.triggerElement = this.querySelector('[data-trigger]');
    this.triggerElement.addEventListener('click', (event) => this.triggerEvent(event));
    document.addEventListener('click', (event) => {
      if (!this.contains(event.target) && this.hasOpened) this.triggerEvent(event)
    })
  }

  triggerEvent(event) {
    event.preventDefault();
    this.hasOpened = !this.hasOpened;
    if (this.hasOpened) return this.classList.add('dropdown--active');
    this.classList.remove('dropdown--active');
  }
}

customElements.define('el-dropdown', Jaspion);
