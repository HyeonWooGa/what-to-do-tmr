import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>내일 할일</title>
      </Head>
      <div className="w-screen h-screen bg-blue-200">
        <nav className="flex justify-center items-center p-8">
          <div>
            <span className="text-4xl font-semibold">내일 할일</span>
          </div>
        </nav>
        <div>{children}</div>
      </div>
    </>
  );
}
