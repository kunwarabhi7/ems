import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function StatsCard({ title, value,link}) {
const router = useRouter();

  return (
    <Card onClick={()=>router.push(link)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <h2 className="text-4xl font-bold">
          {value}
        </h2>
      </CardContent>
    </Card>
  );
}