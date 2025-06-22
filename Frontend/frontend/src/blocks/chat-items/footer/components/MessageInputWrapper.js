import React, { memo } from "react";
import PropTypes from "prop-types";
import { useModal } from "contexts/ModalContext";
import styles from "../styles/MessageInputWrapper.module.css";

const MessageInputWrapper = memo(function MessageInputWrapper({ children }) {
    const { isModalOpen } = useModal();

    return (
        <div className={`${styles.messageInputContainer} ${isModalOpen ? styles.hidden : ""}`}>
            {children}
        </div>
    );
});

MessageInputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MessageInputWrapper;
