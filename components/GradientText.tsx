import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

type GradientTextProps<T extends ElementType = "span"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
};

type GradientTextComponentProps<T extends ElementType> = GradientTextProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof GradientTextProps>;

export function GradientText<T extends ElementType = "span">({
  as,
  children,
  className,
  colors = ["#fff4d7", "#f6cd6a", "#ba7c18", "#fff4d7"],
  animationSpeed = 10,
  style,
  ...props
}: GradientTextComponentProps<T>) {
  const Component = as ?? "span";

  const gradientStyle = {
    "--gradient-text-colors": colors.join(", "),
    "--gradient-text-speed": `${animationSpeed}s`,
    ...style,
  } as CSSProperties;

  return (
    <Component
      className={["gradient-text", className].filter(Boolean).join(" ")}
      style={gradientStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
