import React from 'react';

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      {/* Activity Content */}
      <div className="activity-content">
        <h3>{activity.title}</h3>
        <p>{activity.description}</p>
      </div>

      {/* Participants Section */}
      <div className="participants-section">
        <h4>Participants</h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul className="participants-list">
            {activity.participants.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        ) : (
          <p className="no-participants">No participants yet.</p>
        )}
      </div>
    </div>
  );
}

export default ActivityCard;