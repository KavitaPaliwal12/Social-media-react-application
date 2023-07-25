import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";


export default function Rightbar() {
  return (
    <div className="rightbar"> 
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src = "assets/gift.png" className="birthdayImg" alt=""/>
            <span className="birthdatText"> 
              <b>Pola Foaster</b> and <b>3 other friends </b>have a birthday today.
            </span>
          </div>
          <img src = "assets/ad.png" className="rightbarAd" alt=""/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="onlineFriendsList">
             {Users.map((u)=> (
                <Online key = {u.id} user ={u}/>
             ) )}
          </ul>
        </div>
    </div>
  )
}
