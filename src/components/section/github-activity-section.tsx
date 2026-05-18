"use client";

import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import BlurFade from "@/components/magicui/blur-fade";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
} from "@/components/kibo-ui/contribution-graph";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function GitHubActivitySection() {
  const githubUrl = DATA.contact.social.GitHub.url;
  const githubUsername = githubUrl.split("/").filter(Boolean).pop();
  const now = new Date();
  const days = eachDayOfInterval({
    start: startOfYear(now),
    end: endOfYear(now),
  });

  const data = days.map((date) => {
    const c = Math.round(
      Math.random() * 20 - Math.random() * (0.8 * 20)
    );
    const count = Math.max(0, c);
    const level = Math.ceil((count / 20) * 4);

    return {
      date: formatISO(date, { representation: "date" }),
      count,
      level,
    };
  });
  const graphSrc = githubUsername
    ? `https://ghchart.rshah.org/${githubUsername}`
    : "https://ghchart.rshah.org/supaFrik";

  return (
    <section id="github-activity">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={0.18}>
          <div className="flex flex-col gap-y-3 items-start">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold">GitHub Activity</span>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.22}>
          <ContributionGraph data={data}>
            <ContributionGraphCalendar>
              {({ activity, dayIndex, weekIndex }) => (
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                  className={cn(
                    'data-[level="0"]:bg-[#ebedf0] dark:data-[level="0"]:bg-[#161b22]',
                    'data-[level="1"]:bg-[#9be9a8] dark:data-[level="1"]:bg-[#0e4429]',
                    'data-[level="2"]:bg-[#40c463] dark:data-[level="2"]:bg-[#006d32]',
                    'data-[level="3"]:bg-[#30a14e] dark:data-[level="3"]:bg-[#26a641]',
                    'data-[level="4"]:bg-[#216e39] dark:data-[level="4"]:bg-[#39d353]'
                  )}
                />
              )}
            </ContributionGraphCalendar>
            <ContributionGraphFooter />
          </ContributionGraph>
        </BlurFade>
      </div>
    </section>
  );
}
