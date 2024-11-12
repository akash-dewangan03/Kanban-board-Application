import React from 'react'

import './List.css'
import Card from '../Card/Card'
import BacklogIcon from '../../Assets/icons_FEtask/Backlog.svg';
import TodoIcon from '../../Assets/icons_FEtask/To-do.svg';
import InprogressIcon from '../../Assets/icons_FEtask/in-progress.svg';
import DoneIcon from '../../Assets/icons_FEtask/Done.svg';
import CancelledIcon from '../../Assets/icons_FEtask/Cancelled.svg';
import NoPriorityIcon from '../../Assets/icons_FEtask/No-priority.svg';
import LowIcon from '../../Assets/icons_FEtask/Img - Low Priority.svg';
import MediumIcon from '../../Assets/icons_FEtask/Img - Medium Priority.svg';
import HighIcon from '../../Assets/icons_FEtask/Img - High Priority.svg';
import UrgentIcon from '../../Assets/icons_FEtask/SVG - Urgent Priority colour.svg';

let Cnt = 0;

export default function List(props) {
  return (
    <>
        <div className="custom-list-container">
            <div className="custom-list-header">
                <div className="custom-list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="custom-list-icon">
                                        <img src={BacklogIcon} alt="Backlog icon" width="22" height="22" />
                                    </div>,
                                    'Todo': <div className="custom-list-icon">
                                        <img src={TodoIcon} alt="Backlog icon" width="22" height="22" />
                                    </div>,
                                    'In progress': <div className="custom-list-icon">
                                        <img src={InprogressIcon} alt="Backlog icon" width="22" height="22" />
                                    </div>,
                                    'Done': <div className="custom-list-icon">
                                        <img src={DoneIcon} alt="Backlog icon" width="22" height="22" />
                                    </div>,
                                    'Cancelled': <div className="custom-list-icon">
                                        <img src={CancelledIcon} alt="Backlog icon" width="22" height="22" />
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: (
                                        <div className="custom-card-tag-icon">
                                          <img src={NoPriorityIcon} alt="No priority icon" width="22" height="22" />
                                        </div>
                                      ),
                                      1: (
                                        <div className="custom-card-tag-icon">
                                          <img src={LowIcon} alt="Low priority icon" width="22" height="22" />
                                        </div>
                                      ),
                                      2: (
                                        <div className="custom-card-tag-icon">
                                          <img src={MediumIcon} alt="Medium priority icon" width="22" height="22" />
                                        </div>
                                      ),
                                      3: (
                                        <div className="custom-card-tag-icon">
                                          <img src={HighIcon} alt="High priority icon" width="22" height="22" />
                                        </div>
                                      ),
                                      4: (
                                  <div className="custom-card-tag-icon">
                                          <img src={UrgentIcon} alt="Urgent priority icon" width="22" height="22" />
                                        </div>
                                      ),
                                }[props.listTitle]
                            } </> 
                        }[props.groupValue]
                    }

                    <div className="custom-list-title">
                        {
                            {
                                'priority' : <>{
                                                !props.priorityList?null
                                                    : props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority !== props.listTitle
                                                        ? null
                                                        :<>{priorityProperty.name}</>
                                                    ))
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="custom-list-sum">{Cnt}</div>
                </div>
                <div className="custom-list-header-right">
                    <div className="custom-list-add-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"/></svg>
                    </div>
                    <div className="custom-list-option-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm-7 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 3 7.8zm14 0a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 17 7.8z"/></svg>
                    </div>
                </div>
            </div>

            <div className="custom-list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.priority === props.listTitle){
                            Cnt++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.status === props.listTitle){
                            Cnt++;
                            return(<Card cardDetails={ticket} />)
                            
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            Cnt++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, Cnt = 0)
                    
                }
            </div>
        </div>
    </>
  )
}
