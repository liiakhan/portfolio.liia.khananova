
function ArrowSquare({color="#00FF11", size=64}) {
  // if no color added this apply
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clip-rule="evenodd" d="M14 14.8999L32.2841 31.0079L47.7845 17.3524L50 19.8686L20.1149 46.1969L48.8922 46.1969L48.8922 49.5499L14 49.5499L14 14.8999ZM17.3521 44.1628L17.3521 22.3211L29.7483 33.242L17.3521 44.1628Z" fill={color}/>
    </svg>
  );
}

export default ArrowSquare;
