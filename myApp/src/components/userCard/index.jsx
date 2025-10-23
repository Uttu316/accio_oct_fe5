import "./usercard.css";

const UserCard = (props) => {
  const { user, index } = props;

  return (
    <article className="user_card">
      <img
        className="user_img"
        src={`https://avatar.iran.liara.run/public/${index + 1}`}
        height={100}
        width={100}
      />
      <div className="user_content">
        <h4>{`${user.fname} ${user.lname}`}</h4>
        <p>Age: {user.age} </p>
        <p>
          Address: {user.address.city} - {user.address.pincode}
        </p>
      </div>
    </article>
  );
};

export default UserCard;
