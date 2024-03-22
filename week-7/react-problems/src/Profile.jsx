import "./style.scss";

export default function Profile({
  name,
  profileImage,
  age,
  location,
  followers,
  likes,
  photos,
}) {
  return (
    <div className="main">
      <div className="upper"></div>
      <div>
        <img src={profileImage} alt="profile" className="profile-image" />
      </div>
      <div className="lower">
        <div className="about">
          <span>
            <span className="name">{name}</span>
            <span className="age">{age}</span>
          </span>
          <span className="location">{location}</span>
        </div>
        <div className="stats">
          <div className="numbers">
            <span className="count">{followers}K</span>
            <span className="count-of">Followers</span>
          </div>
          <div className="numbers">
            <span className="count">{likes}K</span>
            <span className="count-of">Likes</span>
          </div>
          <div className="numbers">
            <span className="count">{photos}K</span>
            <span className="count-of">Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
