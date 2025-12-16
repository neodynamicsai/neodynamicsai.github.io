import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

interface ScheduleDemoButtonProps {
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "hero";
  size?: "default" | "sm" | "lg" | "icon" | "xl";
  children?: React.ReactNode;
  showIcon?: boolean;
}

export const ScheduleDemoButton = ({ 
  className, 
  variant = "hero", 
  size = "default", 
  children = "Schedule Demo",
  showIcon = true
}: ScheduleDemoButtonProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"demo-30-min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      data-cal-namespace="demo-30-min"
      data-cal-link="andrea-villa-k8ftoo/demo-30-min"
      data-cal-config='{"layout":"month_view"}'
    >
      {showIcon && <Calendar className="mr-2 h-4 w-4" />}
      {children}
    </Button>
  );
};
