import { AppContext } from "@/ContextProvider";
import Form from "@/components/Form";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function Success() {
  const { paid } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    if (!paid) {
      router.push("/");
    }
  }, [paid]);

  return <Form />;
}
