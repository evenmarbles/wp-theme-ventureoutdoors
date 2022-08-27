class Ubermenu {
  constructor() {
    this.ubermenuItem = document.querySelectorAll('#ubermenu-main .ubermenu-item-has-children');
    this.bodyStyle = document.body.style;

    this.transitions = {
      'transition': 'transitioned',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitioned',
      'WebkitTransition': 'webkitTransitionEnd'
    }

    this.transitionEndEventName = this.getTransitionEndEventName();

    this.events();
  }

  events() {
    this.ubermenuItem.forEach(el => {
      el.addEventListener('mouseover', e => {
        e.preventDefault();
        let target = e.currentTarget;
        if (!target.classList.contains('ubermenu-active')) {
          target.classList.add('ubermenu-active', 'ubermenu-in-transition');
          target.addEventListener(this.transitionEndEventName, e => {
            target.classList.remove('ubermenu-in-transition');
          })
        }
      });
      el.addEventListener('mouseout', e => {
        e.preventDefault();
        let target = e.currentTarget;
        target.classList.add('ubermenu-in-transition');
        target.classList.remove('ubermenu-active');
        target.addEventListener(this.transitionEndEventName, e => {
          target.classList.remove('ubermenu-in-transition');
        })
      })
    });
  }

  getTransitionEndEventName() {
    for (let transition in this.transitions) {
      if (this.bodyStyle[transition] != undefined) {
        return this.transitions[transition];
      }
    }
  }
}

export default Ubermenu;
