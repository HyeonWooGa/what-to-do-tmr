import Image from "next/image";

export default function Board() {
  return (
    <div className="bg-blue-200 relative w-screen h-96">
      <ul className="pl-36 pt-10">
        <li>하이</li>
        <li>하이</li>
        <li>하이</li>
        <li>하이</li>
        <li>하이</li>
        <li>하이</li>
        <li>하이</li>
      </ul>
      <Image src="/mobile.png" alt="mobile" layout="fill" />
    </div>
  );
}
