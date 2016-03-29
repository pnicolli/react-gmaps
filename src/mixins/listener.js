
const Listener = {

  addListeners(entity, events) {
    for (let prop in this.props) {
      if (this.props.hasOwnProperty(prop) && events[prop]) {
        const {addListener} = google.maps.event;
        const listener = addListener(entity, events[prop], this.props[prop]);
        (this.listeners = this.listeners || []).push(listener);
      }
    }
  },

  removeListeners() {
    if (window.google && this.listeners) {
      this.listeners.forEach(listener => {
        google.maps.event.removeListener(listener);
      });
    }
  }

};

export default Listener;
