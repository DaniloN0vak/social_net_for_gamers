import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';
import HeaderItem from './HeaderItem';
import { useModal } from '../../../../contexts/ModalContext';

const Header = ({ companion }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isAttached, setIsAttached] = useState(true);
    const timeoutRef = useRef(null);

    const handleMouseEnter = useCallback(() => {
        clearTimeout(timeoutRef.current);
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 1500);
    }, []);

    const handleAttachClick = useCallback(() => {
        setIsAttached(prev => !prev);
    }, []);

    const { isModalOpen } = useModal();

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <header
            className={`${styles.header} ${isModalOpen ? styles.hidden : ''}`}
            onMouseEnter={!isAttached ? handleMouseEnter : undefined}
            onMouseLeave={!isAttached ? handleMouseLeave : undefined}
        >
            <HeaderItem
                handleAttachClick={handleAttachClick}
                companion={companion}
                isAttached={isAttached}
                isHovered={isHovered}
            />
        </header>
    );
};

Header.propTypes = {
    companion: PropTypes.object.isRequired,
};

export default React.memo(Header);
