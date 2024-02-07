/* eslint-disable react/prop-types */
const Avatar = ({image}) => {
  return (
    <div className="avatar">
      <div className="w-10 mask mask-squircle">
        <img src= {image} />
      </div>
    </div>
  );
};

export default Avatar;
