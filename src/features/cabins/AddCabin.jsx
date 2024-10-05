import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setisOpenModalModal] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setisOpenModalModal((isOpenModal) => !isOpenModal)}
      >
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setisOpenModalModal(false)}>
          <CreateCabinForm onCloseModal={() => setisOpenModalModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
