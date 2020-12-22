import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/UserSlice'

import '../styles/Sidebar.css'

function Sidebar() {

  const user = useSelector(selectUser);


  const recentItem = (topic) => {
    return (<div className="sidebar__recentItem">
      <span className="sidebar__hasgtag">#</span>
      <p> {topic} </p>
    </div>)
  } 

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1513628253939-010e64ac66cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG5pZ2h0JTIwc2t5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        <Avatar src={user.photoUrl} alt="" className="sidebar_avatar">
          {
            user.email[0]
          }
        </Avatar>
        <h2 > {user.displayName} </h2>
        <h4> {user.email} </h4>

      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p > Who viewed you </p>
          <p className="sidebar_statNumber"> 2,543 </p>
        </div>
        <div className="sidebar_stat">
          <p > Views on post </p>
          <p className="sidebar_statNumber"> 2,448 </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <h6>Recent</h6>
        {recentItem('ReactJs')}
        {recentItem('Programming')}
        {recentItem('Softwaredevelopment')}
        {recentItem('C#')}
        {recentItem('Reactnative')}
        {recentItem('Ionic')}
      </div>

    </div>
  )
}

export default Sidebar
