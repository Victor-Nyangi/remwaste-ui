"use Client";

import { SkipOption } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

type SkipCardProps = {
  skip: SkipOption;
  isSelected: boolean;
  onSelectSkip: (skip: SkipOption) => void;
};
/**
 * The SkipCard displays skips as well as any relevant information
 */
export const SkipCard = ({ skip, isSelected, onSelectSkip }: SkipCardProps) => (
  <Card
    className={`pt-0 group cursor-pointer transition-all duration-300 ${
      skip.forbidden ? "" : "hover:shadow-lg hover:scale-105"
    } border-2 ${
      isSelected
        ? "border-blue-500 shadow-lg ring-2 ring-blue-500/20"
        : skip.forbidden
        ? "border-border border-red-400"
        : "border-border hover:border-blue-300"
    }`}
    onClick={() => onSelectSkip(skip)}
  >
    <CardContent className="p-0">
      <div className="relative">
        {/* Using a static image since api does not provide any */}
        <img
          src="/images/skip.jpeg"
          alt={skip.size + " Yard Skip"}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge
          variant="default"
          className="absolute top-3 right-3 bg-blue-700 hover:bg-blue-600 text-white font-semibold"
        >
          {skip.size} Yard Skip
        </Badge>
        {skip.forbidden ? (
          <Badge
            variant="destructive"
            className="absolute top-3 left-3 text-white font-semibold"
          >
            Forbidden
          </Badge>
        ) : (
          <>
            {skip.allows_heavy_waste ? (
              <Badge className="absolute top-3 left-3 bg-green-600 text-white font-semibold">
                Allows Heavy Waste
              </Badge>
            ) : (
              <></>
            )}
          </>
        )}
        {!skip.allowed_on_road && (
          <div className="absolute bottom-3 left-3 right-3">
            <Alert className="border-red-600 bg-red-100 dark:bg-red-100 text-red-700 dark:text-red-400 ">
              <AlertTriangle className="h-4 w-4 text-red-800" />
              <AlertDescription className="text-red-700 dark:text-red-600 text-xs">
                Not Allowed On The Road
              </AlertDescription>
            </Alert>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{skip.size} Yards</h3>
        <p className="text-muted-foreground text-sm mb-3">
          {skip.hire_period_days} day hire period
        </p>
        <p></p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            £{skip.price_before_vat}
          </span>
          <Button
            disabled={skip.forbidden}
            variant={isSelected ? "default" : "outline"}
            size="sm"
            className="group-hover:bg-blue-500 group-hover:text-white transition-colors"
          >
            {isSelected ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" /> Selected
              </>
            ) : (
              <span>Select This Skip</span>
            )}
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const SkipCardSkeleton = () => (
  <Card>
    <CardContent className="p-0">
      <Skeleton className="w-full h-48 rounded-t-lg" />
      <div className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-3" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-9 w-32" />
        </div>
      </div>
    </CardContent>
  </Card>
);
