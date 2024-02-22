import React, { useState } from "react";
import style from "./ModalContainer.module.css";
import Modal from "react-modal";
import { MdFiberManualRecord } from "react-icons/md";
import FriendData from "../../pages/FriendsPage/FriendData";

type Props = {
  id?: number;
  image?: string;
  nickName?: string;
  note?: string;
};
interface userProps {
  selectedUser: Props | null;
  closeModal?: () => void;
  openModal: boolean;
}

const ModalContainer = ({ selectedUser, openModal, closeModal }: userProps) => {
  const [subtitle, setSubtitle] = useState("modal");
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  function afterOpenModal() {
    setSubtitle("Updated Subtitle After Modal Opens"); // Example update
  }

  return (
    <Modal
      isOpen={openModal}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className={style.content}
      contentLabel="User Modal"
    >
      <div className={style.header}>
        {/* 오늘 글을 올렸을 경우 */}
        <MdFiberManualRecord className={style.recordIcon} />
        <text className={style.nickNameText}>{selectedUser?.nickName}</text>
      </div>
      <div className={style.contents}>
        <img
          src={selectedUser?.image}
          className={style.userImage}
          alt={selectedUser?.nickName}
        />
        <div className={style.rightContent}>
          <div className={style.userTexts}>
            <FriendData userId={selectedUser?.id} />
            <div className={isFollowing ? style.following_un : style.following}>
              <button onClick={toggleFollow}>
                {isFollowing ? "팔로잉" : "팔로우"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <text className={style.noteText}>{selectedUser?.note}</text>
      </div>
    </Modal>
  );
};
export default ModalContainer;
