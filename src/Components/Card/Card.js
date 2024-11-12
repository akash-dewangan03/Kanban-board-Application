import React from 'react';
import './Card.css';
import NoPriorityIcon from '../../Assets/icons_FEtask/No-priority.svg';
import LowIcon from '../../Assets/icons_FEtask/Img - Low Priority.svg';
import MediumIcon from '../../Assets/icons_FEtask/Img - Medium Priority.svg';
import HighIcon from '../../Assets/icons_FEtask/Img - High Priority.svg';
import UrgentIcon from '../../Assets/icons_FEtask/SVG - Urgent Priority grey.svg';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-id">{props.cardDetails.id}</div>
        <div className="card-profile">
          <div className="profile-initials">
            {props.cardDetails.userObj.name[0]}
            {props.cardDetails.userObj.name[1]}
          </div>
          <div
            className={
              props.cardDetails.userObj.available
                ? 'profile-status profile-status-available'
                : 'profile-status'
            }
          ></div>
        </div>
      </div>
      <div className="card-title">{props.cardDetails.title}</div>
      <div className="card-tags">
        {{
          0: (
            <div className="card-tag-icon">
              <img src={NoPriorityIcon} alt="No priority icon" width="22" height="22" />
            </div>
          ),
          1: (
            <div className="card-tag-icon">
              <img src={LowIcon} alt="Low priority icon" width="22" height="22" />
            </div>
          ),
          2: (
            <div className="card-tag-icon">
              <img src={MediumIcon} alt="Medium priority icon" width="22" height="22" />
            </div>
          ),
          3: (
            <div className="card-tag-icon">
              <img src={HighIcon} alt="High priority icon" width="22" height="22" />
            </div>
          ),
          4: (
            <div className="card-tag-icon">
              <img src={UrgentIcon} alt="Urgent priority icon" width="22" height="22" />
            </div>
          ),
        }[props.cardDetails.priority]}
        {props.cardDetails.tag.map((tag, index) => (
          <div key={index} className="tag-box">
            <div className="tag-title">{tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
