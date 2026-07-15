import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StatsCard({
  title,
  value,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">
          {value}
        </p>
      </CardContent>
    </Card>
  );
}