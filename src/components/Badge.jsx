// components/Badge.js
import React from 'react';

const Badge = ({ imageUrl, link, title, awardedDate, recipient }) => {
  if (!imageUrl || !link) return null;

  return (
    <div className="badge border p-4 rounded-xl shadow-md max-w-xs text-left">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title || "Badge"} width={120} height={120} className="mb-2" />
      </a>
      {title && <p className="font-semibold text-base">{title}</p>}
      {awardedDate && (
        <p className="text-sm text-gray-600">
          <strong>Awarded:</strong> {awardedDate}
        </p>
      )}
      {recipient && (
        <p className="text-sm text-gray-600">
          <strong>Awarded To:</strong> {recipient}
        </p>
      )}
    </div>
  );
};

export default Badge;