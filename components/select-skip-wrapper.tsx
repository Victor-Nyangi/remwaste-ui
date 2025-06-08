"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SkipCard } from "@/components/skip-card";
import Skipdrawer from "@/components/skip-drawer";
import Stepper from "@/components/stepper";

import { SkipOption } from "@/types";
import Header from "@/components/header";

type Props = {
  skipOptions?: SkipOption[];
};
/**
 * Wrapper component that serves as a wrapper for the skip selection process
 * and holds logic and components that support  User interactions
 */
const SelectSkipWrapper = ({ skipOptions }: Props) => {
  const [selectedSkip, setSelectedSkip] = useState<SkipOption | null>(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedSkip) {
      setDrawerOpen(true);
    }
  }, [selectedSkip]);

  const handleSkipSelect = (skip: SkipOption) => {
    if (skip?.id === selectedSkip?.id) {
      setSelectedSkip(null);
      setDrawerOpen(false);
      return;
    }
    setSelectedSkip(skip);
  };

  const ThemeToggle = () => {
    if (!mounted) return null;

    return (
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 z-50"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    );
  };

  return (
    <main>
      <Header />
      <div className="min-h-screen bg-background transition-colors duration-300">
        <ThemeToggle />

        <div className="container mx-auto px-4 py-8">
          <Stepper />

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Choose Your Skip Size</h1>
            <p className="text-muted-foreground">
              Select the skip size that best suits your needs
            </p>
          </div>

          {!skipOptions?.length ? (
            <>
              <p>No skips availabe</p>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {skipOptions.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  isSelected={selectedSkip?.id === skip.id}
                  onSelectSkip={handleSkipSelect}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-8 text-sm text-muted-foreground max-w-4xl mx-auto">
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification, colours may vary,
            options and/or accessories may be featured at additional cost.
          </div>
        </div>

        {selectedSkip && (
          <Skipdrawer
            selectedSkip={selectedSkip}
            isDrawerOpen={isDrawerOpen}
            openDrawer={setDrawerOpen}
          />
        )}
      </div>
    </main>
  );
};

export default SelectSkipWrapper;
