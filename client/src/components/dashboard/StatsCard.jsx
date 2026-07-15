import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StatsCard({ title, value }) {
  return (
    <Card>
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