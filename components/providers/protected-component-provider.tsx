import { ReactNode } from "react";
import { auth } from "@clerk/nextjs/server";

export async function ProtectedComponentProvider(
    { children }: { children: ReactNode }
) {
  await auth.protect();
  return <>{children}</>;
}
