import Image from "next/image";

function Profile() {
  return (
    <div>
      <Image
        src="/images/profile.jpg"
        alt="Profile Picture"
        width={150}
        height={150}
      />
    </div>
  );
}

export default Profile;
