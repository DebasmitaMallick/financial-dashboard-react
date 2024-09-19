import { FC } from "react";
import { BsArrowsAngleExpand as ExpandIcon } from "react-icons/bs";
import { CiCirclePlus as PlusIcon } from "react-icons/ci";
import { ChartData } from ".";

interface ActionProps {
  screenHandler: () => void;
  onTimeRangeSelect: (selectedRange: keyof ChartData) => void;
  timeRange: keyof ChartData
}

const timelineRanges = ["1d", "3d", "1w", "1m"] as (keyof ChartData)[];

const ChartActions: FC<ActionProps> = ({
  screenHandler,
  onTimeRangeSelect,
  timeRange
}) => {
  return (
    <div
      id="chart-header"
      className="flex justify-between text-text-grey text-[18px] font-semibold"
    >
      <div id="action-btns" className="flex gap-6">
        <button onClick={screenHandler} className="flex items-center gap-2">
          <ExpandIcon />
          <p>Fullscreen</p>
        </button>
        <div id="compare-btn" className="flex items-center gap-2">
          <PlusIcon size={22} />
          <p>Compare</p>
        </div>
      </div>
      <div id="chart-timeline-ranges" className="flex gap-6">
        {timelineRanges.map((range) => (
          <button key={range} onClick={() => onTimeRangeSelect(range)} className={`w-[49px] h-[33px] rounded-[5px] ${timeRange === range ? "bg-theme-blue text-white" : ""}`}>
            {range}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartActions;
