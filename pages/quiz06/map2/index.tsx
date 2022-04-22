import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  return (
    <Link href="/quiz06/map1">
      <a>맵으로 이동하기</a>
    </Link>
  );
}
