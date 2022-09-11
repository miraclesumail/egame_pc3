import React, { useEffect, useState } from "react";

interface Props {
  modalName: string;
  show: boolean;
}

const useModal = ({ modalName, show }: Props) => {
  const [state, setState] = useState(() => ({
    ...(JSON.parse(localStorage.getItem("modalShow")) || {}),
    [modalName]: show,
  }));

  const setModalShow = (name: string, show: boolean) => {
    console.log('setModalShowsetModalShow')
    setState({ ...state, [name]: show });
    localStorage.setItem(
      "modalShow",
      JSON.stringify({ ...state, [name]: show })
    );
    console.log(state, 'statestate')
  };

  useEffect(() => {
    localStorage.setItem("modalShow", JSON.stringify(state));
  }, []);

  return {
    state,
    setModalShow,
  };
};

export default useModal;
