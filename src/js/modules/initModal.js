import { Modal } from "./Modal";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {

    },
    isClose: (modal) => {
    },
  });

  window.tatneft_api.modal = modal;
};
