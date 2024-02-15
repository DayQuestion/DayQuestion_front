import React, { useState } from "react";
import styles from "./FriendsPage.module.css";
import Search from "../../components/common/Search";
import Nav from "../../components/common/Nav";
import UserContainer from "../../components/common/UserContainer";
import FriendInfo from "./FriendInfo";
import FriendData from "./FriendData";
import FriendFeed from "./FriendFeed";

import ModalContainer from "../../components/common/ModalContainer";
interface User {
  id: number;
  name: string;
  email: string;
  image: string;
  nickName: string;
  note: string;
  todayUpdate: boolean;
}

function FriendsPage() {
  // 선택된 사용자 정보를 저장할 상태
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // 모듈 상태 저장
  const [isOpenModal, setIsOpenModal] = useState(false);

  // UserContainer에서 호출할 함수: 선택된 사용자 정보를 업데이트
  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  return (
    <section className={styles.feed}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Search />
          <div className={styles.leftUsers}>
            <UserContainer onSelectUser={handleSelectUser} />
          </div>
          <div className={styles.leftFooter}>
            <Nav />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightHeader}>
            <ModalContainer
              selectedUser={selectedUser}
              openModal={isOpenModal}
              closeModal={() => setIsOpenModal(false)}
            />
            <div className={styles.friendsInfo} onClick={handleOpenModal}>
              <FriendInfo friendInfo={selectedUser} />
            </div>
            <div className={styles.friendsData}>
              <FriendData userId={selectedUser?.id} />
            </div>
          </div>
          <div className={styles.rightContent}>
            <FriendFeed userId={selectedUser?.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FriendsPage;
