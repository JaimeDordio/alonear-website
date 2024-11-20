import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-7xl mx-auto px-4 sm:px-6",
        // "auto-rows-[15rem] sm:auto-rows-[18rem] md:auto-rows-[20rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200",
        "p-3 sm:p-4 bg-black border-white/[0.2] border justify-between flex flex-col",
        "space-y-3 sm:space-y-4",
        className
      )}
    >
      <div className="flex-1">{header}</div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="w-fit h-8 sm:h-10 flex items-center justify-center">
          {icon}
        </div>

        <div className="font-sans font-bold text-neutral-200 mb-1 sm:mb-2 mt-1 sm:mt-2 text-sm sm:text-base">
          {title}
        </div>
        <div className="font-sans font-normal text-[11px] sm:text-xs text-neutral-300 line-clamp-2 sm:line-clamp-none">
          {description}
        </div>
      </div>
    </div>
  );
};
