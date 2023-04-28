import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div>Yandex function</div>
      <div>
        <Link href="/a">a</Link>
      </div>
      <div>
        <Link href="/b">b</Link>
      </div>
    </>
  );
};

export default HomePage;
