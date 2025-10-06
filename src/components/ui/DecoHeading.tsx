import { useEffect, useState } from "react";

const roleArray = [
  "React",
  "php",
  "JavaScript",
  "IoT",
  "Wordpress",
  "TypeScript",
];

const DecoHeading = () => {
  const [role, setRole] = useState<string>(roleArray[0]);
  const [animationKey, setAnimationKey] = useState<number>(0);

  function swapRoles() {
    const iterator = animationKey % roleArray.length;
    setRole(roleArray[iterator]);
  }

  useEffect(() => {
    setAnimationKey((prev) => (prev += 1));
  }, [role]);

  return (
    <div className="flex gap-2">
      <span
        onAnimationEnd={swapRoles}
        key={animationKey}
        className={`text-transparent w-48 text-right font-bold text-heading bg-clip-text bg-gradient-to-r from-transparent from-30% via-secondary-700 to-transparent to-80% bg-size-[600%] bg-left dev-type-animation`}
      >
        {role}
      </span>
      <h1 className="text-heading">developer</h1>
    </div>
  );
};

export default DecoHeading;
