import React from "react";

const UserCard = () => {
  const user = {
    fname: "Utarsh",
    image: "https://avatar-placeholder.iran.liara.run/logo.png",
    lname: "Gupta",
    address: {
      city: "Agra",
      pincode: "323232",
    },
  };
  return (
    <React.Fragment>
      <article>
        <img src={user.image} height={100} width={100} />
        <div>
          <h4>{`${user.fname} ${user.lname}`}</h4>
          <p>
            {user.address.city} - {user.address.pincode}
          </p>
        </div>
      </article>
      <div>Hey</div>
    </React.Fragment>
  );
};

export default UserCard;
