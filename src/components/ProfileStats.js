import React from "react";

const ProfileStats = (props) => {
  return (
    <div style={{ display: "flex", marginRight: 20 }}>
      <h3 style={{ marginRight: 5 }}>{props.count}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default ProfileStats;
