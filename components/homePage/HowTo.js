import React, { use } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function HowTo() {
  return (
    <div>
      <h1>locale:{locale}</h1>

      <h2>
        <Link href="/" locale={locale}>
          Go to How to
        </Link>
      </h2>
    </div>
  );
}
