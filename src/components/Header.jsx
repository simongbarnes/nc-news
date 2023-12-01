export default function Header(user) {
  return (
    <>
      <section className="flex items-end flex-row bg-black p-4">
        <div className="basis-1/2">
          <h1 className="font-sans text-2xl font-black tracking-wide text-white">
            Life in Motion
          </h1>
        </div>
        <div className="basis-1/2">
          <p className="font-sans text-sm font-black tracking-wide text-white text-right">logged in as: {user.user.username}</p>
        </div>
      </section>
    </>
  );
}
