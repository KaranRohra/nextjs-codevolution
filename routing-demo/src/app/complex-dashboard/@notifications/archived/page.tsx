import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      Archived Notification
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
