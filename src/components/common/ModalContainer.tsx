import React, { useState } from "react";
import style from "./ModalContainer.module.css";
import Modal from "react-modal";
import { MdFiberManualRecord } from "react-icons/md";
type Props = {
  id?: number;
  image?: string;
  nickName?: string;
  note?: string;
  closeModal?: () => void;
};
const ModalContainer = ({ id, image, nickName, note }: Props) => {
  let subtitle: string = "modal";
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    subtitle = "te";
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={style.content}
        contentLabel="User Modal"
      >
        <div className={style.header}>
          {/* 오늘 글을 올렸을 경우 */}
          <MdFiberManualRecord className={style.recordIcon} />
          <text className={style.nickNameText}>{nickName}</text>
        </div>
        <div className={style.contents}>
          <img src={image} className={style.userImage} />
          <div className={style.rightContent}>
            <div className={style.userTexts}>
              <text>Answered questions: 364 / 365 (99%)</text>
              <text>Follower: 123</text>
              <text>Following: 123</text>
            </div>
            <div>
              <button className={style.button}>팔로우</button>
            </div>
          </div>
        </div>
        <div>
          <text className={style.noteText}>{note}</text>
        </div>
      </Modal>
    </div>
  );
};
export default ModalContainer;
