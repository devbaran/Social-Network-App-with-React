import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for friend, post." className="searchInput"></input>
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span class="topbarLink">Homepage</span>
          <span class="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span class="topbarIconBadge">
              1
            </span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span class="topbarIconBadge">
              1
            </span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span class="topbarIconBadge">
              1
            </span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
