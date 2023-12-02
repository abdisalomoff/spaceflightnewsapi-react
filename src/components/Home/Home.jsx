import "./Home.scss"

import Feed from "./Feed/Feed"
import Sidebar from "./Sidebar/Sidebar"
import Widgets from "./Widgets/Widgets"

const Home = () => {
  return (
    <div className="container home">
        <Sidebar/>
        <Feed/>
        <Widgets/>
    </div>
  )
}

export default Home