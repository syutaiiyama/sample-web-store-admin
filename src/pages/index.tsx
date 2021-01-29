import React, { useEffect } from "react";
import { useRouter } from "next/router";

const IndexPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/products/books");
  }, [router]);

  return <></>;
};

export default IndexPage;
