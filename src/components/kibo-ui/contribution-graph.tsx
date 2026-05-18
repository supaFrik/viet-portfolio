"use client";

import { createContext, useContext, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContributionActivity = {
  date: string;
  count: number;
  level: number;
};

type ContributionGraphContextType = {
  data: ContributionActivity[];
};

const ContributionGraphContext = createContext<ContributionGraphContextType | null>(null);

export function ContributionGraph({
  data,
  children,
}: {
  data: ContributionActivity[];
  children: ReactNode;
}) {
  return (
    <ContributionGraphContext.Provider value={{ data }}>
      <div className="grid gap-6">
        {children}
      </div>
    </ContributionGraphContext.Provider>
  );
}

export function ContributionGraphCalendar({
  children,
}: {
  children: (props: {
    activity: ContributionActivity;
    dayIndex: number;
    weekIndex: number;
  }) => ReactNode;
}) {
  const context = useContext(ContributionGraphContext);

  if (!context) {
    return null;
  }

  const { data } = context;
  const weekCount = Math.ceil(data.length / 7);

  return (
    <div
      className="grid gap-1"
      style={{
        gridTemplateColumns: `repeat(${weekCount}, minmax(0, 1fr))`,
        gridTemplateRows: "repeat(7, minmax(0, 1fr))",
      }}
    >
      {data.map((activity, index) => (
        <div key={activity.date} className="min-w-0">
          {children({
            activity,
            dayIndex: index % 7,
            weekIndex: Math.floor(index / 7),
          })}
        </div>
      ))}
    </div>
  );
}

export function ContributionGraphBlock({
  activity,
  dayIndex,
  weekIndex,
  className,
}: {
  activity: ContributionActivity;
  dayIndex: number;
  weekIndex: number;
  className?: string;
}) {
  return (
    <div
      data-level={activity.level}
      data-day-index={dayIndex}
      data-week-index={weekIndex}
      title={`${activity.date}: ${activity.count} contribution${activity.count === 1 ? "" : "s"}`}
      className={cn(
        "h-3 w-3 rounded-sm transition-colors duration-200",
        className
      )}
    />
  );
}

export function ContributionGraphFooter() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      <span>Less</span>
      <div className="inline-flex items-center gap-1">
        <span className="h-3 w-3 rounded-sm bg-[#ebedf0] dark:bg-[#161b22] border border-border" />
        <span className="h-3 w-3 rounded-sm bg-[#9be9a8] dark:bg-[#0e4429] border border-border" />
        <span className="h-3 w-3 rounded-sm bg-[#40c463] dark:bg-[#006d32] border border-border" />
        <span className="h-3 w-3 rounded-sm bg-[#30a14e] dark:bg-[#26a641] border border-border" />
        <span className="h-3 w-3 rounded-sm bg-[#216e39] dark:bg-[#39d353] border border-border" />
      </div>
      <span>More</span>
    </div>
  );
}
