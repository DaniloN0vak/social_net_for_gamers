import React from 'react';
import '../styles/CustomScrollbar.module.css'

const CustomScrollbar = React.forwardRef(({ style, ...props }, ref) => {
  // style приходит с параметрами left/top/width/height/position
  alert("allo");
  return (
    <div
      ref={ref}
      style={{
        ...style,
        width: 20,           // ширина ползунка
        borderRadius: 4,
        backgroundColor: '#bbb',
        cursor: 'pointer',
        right: 20,          // отступ от правого края
        position: 'absolute',
        transition: 'background-color 0.3s',
      }}
      className="custom-scrollbar-thumb"
      {...props}
    />
  );
});

export default CustomScrollbar;
