import { Icons } from "@/components/FrontEnd/icons";
import { cn } from "@/lib/utils";

export const testOrbitingItems = [
  <Icons.gitHub key="github" className="h-6 w-6" />,
  <Icons.twitter key="twitter" className="h-6 w-6" />,
  <Icons.linkedIn key="linkedin" className="h-6 w-6" />,

];

interface OrbitingItemsProps {
  /**
   * The radius of the circle in percentage, relative to the container.
   */
  radius: number;

  /**
   * The items to orbit around the center of the parent element.
   */
  items: React.ReactNode[];

  /**
   * Pause the animation when the parent element is hovered.
   */
  pauseOnHover?: boolean;

  /**
   * Class name for the background element.
   */
  backgroundClassName?: string;

  /**
   * Class name for the container element.
   */
  containerClassName?: string;

  /**
   * Additional classes for the item container.
   */
  className?: string;
}

const calculateItemStyle = ({
  index,
  radius,
  totalItems,
}: {
  radius: number;
  index: number;
  totalItems: number;
}) => {
  const angle = (index / totalItems) * 360;
  const radians = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radians);
  const y = radius * Math.sin(radians);
  return {
    left: `${50 + x}%`,
    top: `${50 + y}%`,
    transform: "translate(-50%, -50%)",
  };
};

export default function OrbitingItems({
  radius = 50,
  items = testOrbitingItems,
  pauseOnHover,
  backgroundClassName,
  containerClassName,
  className,
}: OrbitingItemsProps) {
  // The idea is to distribute the items in a circle around the center of the parent element.
  // Then the whole parent element rotates around its center.
  // The items rotate in the opposite direction to the parent element so they appear to be stationary.

  const reverse = cn(
    "animate-[rotate-full_45s] transition-transform ease-linear direction-reverse repeat-infinite",
    {
      "group-hover:[animation-play-state:paused]": pauseOnHover,
    },
  );

  return (
    <div
      className={cn(
        "storybook-fix group flex items-center justify-center py-32",
        containerClassName,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 h-full w-full items-center ",
          backgroundClassName,
        )}
      />
      <div
        className={cn(
          "relative flex h-96 w-96 animate-[rotate-full_45s] items-center justify-center ease-linear repeat-infinite",
          {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
          },
          className,
        )}
      >
        <div className="absolute h-full w-full rounded-full border-2 border-gray-500" />
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="absolute flex h-16 w-16 items-center justify-center rounded-full "
              style={calculateItemStyle({
                index,
                radius,
                totalItems: items.length,
              })}
            >
              <div className={reverse}>{item}</div>
            </div>
          );
        })}

          <div
            className={cn("absolute h-1/2 w-1/2 rounded-full border-2 border-gray-700 flex items-center justify-center", reverse)}
          >
            <p className="text-lg text-white">Technical Skills</p>
          </div>


        <div
          className={cn("absolute h-1/2 w-1/2 rounded-full border-2 border-gray-700", reverse)}
        />
      </div>
    </div>
  );
}
