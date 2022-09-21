import Head from "next/head";

export default function Layout() {
  return (
    <div>
      <Head>
        <title>내일 뭐해?</title>
      </Head>
      <nav className="bg-green-300 h-10 pt-2">
        <ul className="flex justify-around items-center">
          <li> 오늘 뭐했어? </li>
          <li> 내일 뭐해? </li>
        </ul>
      </nav>
    </div>
  );
}
