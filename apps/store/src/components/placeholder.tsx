type PlaceholderProps = {
  width: string,
  height: string,
  text: string
}

export default function Placeholder ({width, height, text} :PlaceholderProps) {
  return(
    <a><img src={`https://via.placeholder.com/${width}x${height}?text=${text}+${width}x${height}`}/></a>
  )
}