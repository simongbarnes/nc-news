export default function Header(user) {
  return (
    <>
      <h1>NC News</h1>
      <p>logged in as: {user.user.username}</p>
    </>
  );
}
