import React, { useState } from 'react';
import styles from './AvatarCircle.module.css';
import { FaUser } from "react-icons/fa";
 
const AvatarCircle = ({ imageUrl, size = 40, alt = "Avatar" }) => {
  const [imgError, setImgError] = useState(false);
 
  const avatarContent = !imageUrl || imgError ? (
    <div className={styles.fallback}><FaUser /></div>
  ) : (
    <img
      src={imageUrl}
      alt={alt}
      className={styles.image}
      onError={() => setImgError(true)}
    />
  );
 
  const avatarStyle = { width: size, height: size };
 
  return (
    <div className={styles.avatarWrapper} style={avatarStyle}>
      
        {avatarContent}
      
    </div>
  );
};
 
export const AvatarCircleGroup = ({ avatarUrls = [], size = 24, maxVisible = 4 }) => {
    const visibleAvatars = avatarUrls.slice(0, maxVisible);
    const remaining = avatarUrls.length - maxVisible;
  
    return (
      <div className={styles.group}>
        {visibleAvatars.map((avatar, index) => (
          <div
            key={index}
            className={styles.avatarWrapper}
            style={{
              width: size,
              height: size,
              marginLeft: index > 0 ? -size/3 : 0,
              zIndex: visibleAvatars.length + index
            }}
            title={avatar.alt}
          >
            {avatar.imageUrl ? (
              <img
                src={avatar.imageUrl}
                alt={avatar.alt}
                className={styles.image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentElement.innerHTML = `
                    <div class="${styles.fallback}">
                      ${avatar.alt?.charAt(0).toUpperCase() || '?'}
                    </div>
                  `;
                }}
              />
            ) : (
              <div className={styles.fallback}>
                {avatar.alt?.charAt(0).toUpperCase() || '?'}
              </div>
            )}
          </div>
        ))}
        {remaining > 0 && (
          <div
            className={`${styles.avatarWrapper} ${styles.more}`}
            style={{
              width: size,
              height: size,
              marginLeft: visibleAvatars.length > 0 ? -size/3 : 0,
              zIndex: 10
            }}
            title={`${remaining} more`}
          >
            +{remaining}
          </div>
        )}
      </div>
    );
  };
 
export default AvatarCircle;