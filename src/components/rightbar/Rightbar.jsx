import "./rightbar.css"

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
            <li className="rightbarFriend">
               <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
                  <span className="rightbarOnline"></span>
               </div>
               <span className="rightbarUsername"> Kavita P</span>
            </li>
            <li className="rightbarFriend">
               <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
                  <span className="rightbarOnline"></span>
               </div>
               <span className="rightbarUsername"> Kavita P</span>
            </li>
            <li className="rightbarFriend">
               <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
                  <span className="rightbarOnline"></span>
               </div>
               <span className="rightbarUsername"> Kavita P</span>
            </li>
            <li className="rightbarFriend">
               <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
                  <span className="rightbarOnline"></span>
               </div>
               <span className="rightbarUsername"> Kavita P</span>
            </li>
            <li className="rightbarFriend">
               <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
                  <span className="rightbarOnline"></span>
               </div>
               <span className="rightbarUsername"> Kavita P</span>
            </li>
            <li className="rightbarFriend">
               <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
                  <span className="rightbarOnline"></span>
               </div>
               <span className="rightbarUsername"> Kavita P</span>
            </li>
            <li className="rightbarFriend">
               <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
                  <span className="rightbarOnline"></span>
               </div>
               <span className="rightbarUsername"> Kavita P</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
