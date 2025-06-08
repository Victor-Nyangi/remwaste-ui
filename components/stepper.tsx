import {
  MapPin,
  Trash2,
  Package,
  FileCheck,
  Calendar,
  CreditCard,
  Check,
} from "lucide-react";

const steps = [
  { icon: MapPin, label: "Postcode", completed: true },
  { icon: Trash2, label: "Waste Type", completed: true },
  { icon: Package, label: "Select Skip", active: true },
  { icon: FileCheck, label: "Permit Check", completed: false },
  { icon: Calendar, label: "Choose Date", completed: false },
  { icon: CreditCard, label: "Payment", completed: false },
];
/**
 * Static Stepper that informs the user of
 * the current active step
 */
const Stepper = () => (
  <div className="w-full max-w-4xl mx-auto mb-8">
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                step.completed
                  ? "bg-emerald-500 border-emerald-500 text-white"
                  : step.active
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "border-muted-foreground/30 text-muted-foreground"
              }`}
            >
              {step.completed ? (
                <Check className="w-5 h-5" />
              ) : (
                <step.icon className="w-5 h-5" />
              )}
            </div>
            <span
              className={`text-xs mt-2 text-center ${
                step.active
                  ? "text-blue-500 font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-0.5 w-16 mx-4 ${
                step.completed ? "bg-emerald-500" : "bg-muted-foreground/30"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Stepper;
