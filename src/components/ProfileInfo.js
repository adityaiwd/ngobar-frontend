import React, { useState } from "react";
import profpic from "../assets/tommy.jpg";
import ProfileStats from "./ProfileStats";

const ProfileInfo = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  console.log(isFollowed);
  return (
    <div className="ui two column grid" style={{ paddingTop: 100 }}>
      <div className="column">
        <img
          className="ui centered image"
          src={profpic}
          alt="profpic"
          style={{
            height: 200,
            width: 200,
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />
      </div>
      <div className="column">
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ marginRight: 20 }}>John Doe</h1>
          <button
            className={"ui button "+ (!isFollowed && "primary" )}
            onClick={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Followed" : "Follow"}
          </button>
        </div>
        <div className="row" style={{ display: "flex" }}>
          <ProfileStats count="500" desc="Post" />
          <ProfileStats count="1000" desc="Following" />
          <ProfileStats count="1000" desc="Followers" />
        </div>
        <div className="row">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            efficitur commodo ipsum vitae aliquet. Mauris vitae tincidunt arcu.
            In luctus, ligula id dignissim pretium, turpis ipsum sagittis
            turpis, vestibulum porttitor arcu nulla sed mauris. Fusce risus leo,
            pretium eu congue nec, maximus sed mi. Proin et neque erat. In
            accumsan auctor tristique. Fusce fermentum cursus elementum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
