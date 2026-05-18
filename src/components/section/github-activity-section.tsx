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

function getDeterministicCount(seed: string) {
  let hash = 0;

  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) % 9973;
  }

  return hash % 21;
}

export default function GitHubActivitySection() {
  const githubUrl = DATA.contact.social.GitHub.url;
  const githubUsername = githubUrl.split("/").filter(Boolean).pop();
  const now = new Date();
  const days = eachDayOfInterval({
    start: startOfYear(now),
    end: endOfYear(now),
  });

  const data = days.map((date) => {
    const dateKey = formatISO(date, { representation: "date" });
    const count = getDeterministicCount(dateKey);
    const level = Math.ceil((count / 20) * 4);

    return {
      date: dateKey,
      count,
      level,
    };
  });

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
          <div className="relative max-h-48 overflow-auto rounded-2xl bg-card/80 p-2 shadow-sm supports-[backdrop-filter]:bg-background/70">
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
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
