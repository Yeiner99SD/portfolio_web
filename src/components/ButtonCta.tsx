const ButtonCta = ({
  text = '',
  href = "#",
  className = "",
  isRoundedFull = false,
  icon = null,
  scroll = false,
}) => {
  const baseStyle =
    "bg-yellow-400 hover:bg-[#d5c5a7] text-black cursor-pointer px-4 py-2 font-medium transition duration-200";

  const shape = isRoundedFull ? "rounded-full" : "rounded-md";

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </>
  );

  return scroll ? (
    <a href={href} className={`${baseStyle} ${shape} ${className}`}>
      {content}
    </a>
  ) : (
    <button className={`${baseStyle} ${shape} ${className}`}>{content}</button>
  );
};

export default ButtonCta;