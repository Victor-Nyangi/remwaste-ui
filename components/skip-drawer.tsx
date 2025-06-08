"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";
import { SkipOption } from "@/types";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";
import { AlertTriangle, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";

type SkipDrawerProps = {
  selectedSkip: SkipOption;
  isDrawerOpen: boolean;
  openDrawer: (open: boolean) => void;
};

/**
 * The Drawer acts as a confirmation dialog before user navigates to the next step
 */
const Skipdrawer = ({
  selectedSkip,
  isDrawerOpen,
  openDrawer,
}: SkipDrawerProps) => {
  return (
    <>
      <Drawer open={isDrawerOpen} onOpenChange={openDrawer}>
        <DrawerContent className="max-h-[50vh]">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-between">
              <span>Selected Skip</span>
              {selectedSkip && (
                <Badge
                  variant="outline"
                  className="text-blue-600 border-blue-600"
                >
                  {selectedSkip.size} Yards
                </Badge>
              )}
            </DrawerTitle>
          </DrawerHeader>

          {selectedSkip && (
            <div className="px-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    {selectedSkip.size} Yard Skip
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {selectedSkip.hire_period_days} day hire period
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    £{selectedSkip.price_before_vat}
                  </span>
                </div>
              </div>

              {!selectedSkip.allowed_on_road && (
                <Alert className="border-red-600 bg-red-100 dark:bg-red-100 mb-4 text-red-500">
                  <AlertTriangle className="h-4 w-4 text-red-800" />
                  <AlertDescription className="text-gray-800 dark:text-red-600">
                    <strong>Warning:</strong> Not Allowed On The Road
                  </AlertDescription>
                </Alert>
              )}
              {selectedSkip.allows_heavy_waste && (
                <Alert className="border-green-500 bg-green-50 dark:bg-green-950/20 mb-4">
                  <Check className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800 dark:text-green-200">
                    Allows Heavy waste
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}

          <DrawerFooter>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => openDrawer(false)}
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                onClick={() => openDrawer(false)}
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Skipdrawer;
